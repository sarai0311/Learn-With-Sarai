import dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';
import { google } from 'googleapis';
import { format, addDays, startOfDay, endOfDay } from 'date-fns';
import { zonedTimeToUtc, utcToZonedTime, formatInTimeZone } from 'date-fns-tz';
import Stripe from 'stripe';

// Load environment variables from .env.local
dotenv.config({ path: '.env.local' });

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(express.json());

// Stripe configuration
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

// Google Calendar configuration
const SERVICE_ACCOUNT_EMAIL = process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL;
const PRIVATE_KEY = process.env.GOOGLE_PRIVATE_KEY;
const CALENDAR_ID = process.env.GOOGLE_CALENDAR_ID || 'sarai.syav@gmail.com';

// Time slots configuration (in server timezone - Atlantic/Canary)
const TIME_SLOTS = [
  '13:00', '14:00', '15:00', '16:00', 
  '17:00', '18:00', '19:00',
  '20:00', '21:00', '22:00'
];

// Convert time slot from server timezone to user timezone
const convertTimeSlot = (timeSlot, date, serverTimezone, userTimezone) => {
  try {
    // Create a date object in the server timezone
    const serverDateTime = new Date(`${date}T${timeSlot}:00`);
    
    // Convert from server timezone to UTC, then to user timezone
    const serverZoned = zonedTimeToUtc(serverDateTime, serverTimezone);
    const userZoned = utcToZonedTime(serverZoned, userTimezone);
    
    // Format the time in user timezone
    const userTimeString = formatInTimeZone(userZoned, userTimezone, 'HH:mm');
    const userDateString = formatInTimeZone(userZoned, userTimezone, 'yyyy-MM-dd');
    
    return {
      time: userTimeString,
      date: userDateString,
      originalTime: timeSlot
    };
  } catch (error) {
    console.error('Error converting time slot:', error);
    return {
      time: timeSlot,
      date: date,
      originalTime: timeSlot
    };
  }
};

// Create Google Calendar client
const createCalendarClient = () => {
  try {
    if (!SERVICE_ACCOUNT_EMAIL || !PRIVATE_KEY) {
      console.error('Google Calendar credentials not configured');
      return null;
    }

    const auth = new google.auth.JWT(
      SERVICE_ACCOUNT_EMAIL,
      null,
      PRIVATE_KEY.replace(/\\n/g, '\n'),
      ['https://www.googleapis.com/auth/calendar'],
      null
    );

    return google.calendar({ version: 'v3', auth });
  } catch (error) {
    console.error('Error creating Google Calendar client:', error);
    return null;
  }
};

// Get busy times from Google Calendar
const getBusyTimes = async (startDate, endDate, timezone = 'Atlantic/Canary') => {
  const calendar = createCalendarClient();
  if (!calendar) return [];

  try {
    const response = await calendar.freebusy.query({
      requestBody: {
        timeMin: startDate.toISOString(),
        timeMax: endDate.toISOString(),
        timeZone: timezone,
        items: [{ id: CALENDAR_ID }]
      }
    });

    const busy = response.data.calendars?.[CALENDAR_ID]?.busy || [];
    return busy.map(slot => ({
      start: slot.start || '',
      end: slot.end || ''
    }));
  } catch (error) {
    console.error('Error fetching busy times:', error);
    return [];
  }
};

// Check if a time slot conflicts with busy times
const isSlotBusy = (date, time, busyTimes) => {
  const slotStart = new Date(`${date}T${time}:00`);
  const slotEnd = new Date(slotStart.getTime() + 60 * 60 * 1000); // 1 hour later

  return busyTimes.some(busy => {
    const busyStart = new Date(busy.start);
    const busyEnd = new Date(busy.end);
    
    // Check if there's any overlap
    return slotStart < busyEnd && slotEnd > busyStart;
  });
};

// Create payment intent endpoint
app.post('/api/create-payment-intent', async (req, res) => {
  try {
    const { amount, currency, serviceType, customerInfo } = req.body;

    // Validate the request
    if (!amount || !currency || !serviceType || !customerInfo) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    // Create a payment intent
    const paymentIntent = await stripe.paymentIntents.create({
      amount: Math.round(amount * 100), // Convert to cents and ensure integer
      currency: currency.toLowerCase(),
      metadata: {
        serviceType,
        customerName: customerInfo.name,
        customerEmail: customerInfo.email,
        customerLevel: customerInfo.level,
        customerGoals: customerInfo.goals.substring(0, 500), // Stripe metadata has character limits
      },
      description: `Spanish Class: ${serviceType}`,
      receipt_email: customerInfo.email,
    });

    console.log('Payment intent created:', paymentIntent.id);

    res.status(200).json({
      clientSecret: paymentIntent.client_secret,
      paymentIntentId: paymentIntent.id,
    });
  } catch (error) {
    console.error('Error creating payment intent:', error);
    res.status(500).json({ 
      error: 'Internal server error',
      message: error.message 
    });
  }
});

// Get calendar availability endpoint
app.post('/api/calendar/availability', async (req, res) => {
  try {
    const { days = 14, timezone = 'Atlantic/Canary', userTimezone = 'Atlantic/Canary' } = req.body;
    
    const availability = {};
    const startDate = startOfDay(new Date());
    const endDate = endOfDay(addDays(startDate, days));

    // Get busy times from Google Calendar (always in server timezone)
    const busyTimes = await getBusyTimes(startDate, endDate, timezone);
    
    // Generate availability for each day
    for (let i = 0; i < days; i++) {
      const date = addDays(startDate, i);
      const dateKey = format(date, 'yyyy-MM-dd');
      const dayOfWeek = date.getDay();
      
      // Skip weekends
      if (dayOfWeek === 0 || dayOfWeek === 6) {
        availability[dateKey] = {
          date: dateKey,
          slots: TIME_SLOTS.map(time => {
            const converted = convertTimeSlot(time, dateKey, timezone, userTimezone);
            return {
              time: converted.time,
              originalTime: converted.originalTime,
              available: false,
              reason: 'weekend'
            };
          })
        };
        continue;
      }

      // Check each time slot
      const slots = TIME_SLOTS.map(time => {
        const converted = convertTimeSlot(time, dateKey, timezone, userTimezone);
        const slotDateTime = new Date(`${dateKey}T${time}:00`);
        
        // Skip past times (check against server time)
        if (slotDateTime < new Date()) {
          return { 
            time: converted.time, 
            originalTime: converted.originalTime,
            available: false, 
            reason: 'outside-hours' 
          };
        }
        
        // Check if slot is busy (using server time)
        if (isSlotBusy(dateKey, time, busyTimes)) {
          return { 
            time: converted.time, 
            originalTime: converted.originalTime,
            available: false, 
            reason: 'busy' 
          };
        }
        
        return { 
          time: converted.time, 
          originalTime: converted.originalTime,
          available: true 
        };
      });

      availability[dateKey] = {
        date: dateKey,
        slots
      };
    }

    // If user timezone is different, we need to regroup slots by user's date
    if (userTimezone !== timezone) {
      const regroupedAvailability = {};
      
      // Initialize all possible dates in user timezone
      for (let i = 0; i < days + 2; i++) { // Extra days for timezone shifts
        const userDate = addDays(startDate, i);
        const userDateKey = formatInTimeZone(userDate, userTimezone, 'yyyy-MM-dd');
        regroupedAvailability[userDateKey] = {
          date: userDateKey,
          slots: []
        };
      }
      
      // Regroup slots by user's date
      Object.values(availability).forEach(dayData => {
        dayData.slots.forEach(slot => {
          const serverDateTime = new Date(`${dayData.date}T${slot.originalTime}:00`);
          const userDateTime = utcToZonedTime(zonedTimeToUtc(serverDateTime, timezone), userTimezone);
          const userDateKey = formatInTimeZone(userDateTime, userTimezone, 'yyyy-MM-dd');
          
          if (regroupedAvailability[userDateKey]) {
            regroupedAvailability[userDateKey].slots.push(slot);
          }
        });
      });
      
      // Sort slots by time within each day
      Object.values(regroupedAvailability).forEach(dayData => {
        dayData.slots.sort((a, b) => a.time.localeCompare(b.time));
      });
      
      res.json({ availability: regroupedAvailability });
    } else {
      res.json({ availability });
    }
  } catch (error) {
    console.error('Error fetching availability:', error);
    res.status(500).json({ 
      error: 'Failed to fetch availability',
      message: error.message 
    });
  }
});

// Create calendar event endpoint
app.post('/api/calendar/create-event', async (req, res) => {
  try {
    const { 
      title, 
      description, 
      startDateTime, 
      endDateTime, 
      attendeeEmail, 
      attendeeName,
      timezone = 'Atlantic/Canary'
    } = req.body;

    const calendar = createCalendarClient();
    if (!calendar) {
      return res.status(500).json({ 
        success: false, 
        error: 'Calendar service not available' 
      });
    }

    const event = {
      summary: title,
      description: description,
      start: {
        dateTime: startDateTime,
        timeZone: timezone,
      },
      end: {
        dateTime: endDateTime,
        timeZone: timezone,
      },
      attendees: [
        {
          email: attendeeEmail,
          displayName: attendeeName,
        }
      ],
      reminders: {
        useDefault: false,
        overrides: [
          { method: 'email', minutes: 24 * 60 }, // 24 hours before
          { method: 'popup', minutes: 30 },     // 30 minutes before
        ],
      },
      conferenceData: {
        createRequest: {
          requestId: `meet-${Date.now()}`,
          conferenceSolutionKey: {
            type: 'hangoutsMeet'
          }
        }
      }
    };

    const response = await calendar.events.insert({
      calendarId: CALENDAR_ID,
      conferenceDataVersion: 1,
      sendNotifications: true,
      requestBody: event,
    });

    res.json({ 
      success: true, 
      eventId: response.data.id,
      hangoutLink: response.data.hangoutLink
    });
  } catch (error) {
    console.error('Error creating calendar event:', error);
    res.status(500).json({ 
      success: false, 
      error: error.message 
    });
  }
});

// Health check endpoint
app.get('/health', (req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
}); 