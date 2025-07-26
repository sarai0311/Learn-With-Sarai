import { google } from 'googleapis';
import { format, addDays, startOfDay, endOfDay } from 'date-fns';
import { toZonedTime, fromZonedTime, formatInTimeZone, zonedTimeToUtc } from 'date-fns-tz';

// Google Calendar configuration
const SERVICE_ACCOUNT_EMAIL = process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL;
const PRIVATE_KEY = process.env.GOOGLE_PRIVATE_KEY;
// Primary calendar ID remains for event creation but availability can read many.
const PRIMARY_CALENDAR_ID = process.env.GOOGLE_CALENDAR_ID || 'sarai.syav@gmail.com';
// Optional comma-separated list of additional calendars to consider busy.
const CALENDAR_IDS = process.env.GOOGLE_CALENDAR_IDS
  ? process.env.GOOGLE_CALENDAR_IDS.split(',').map((id) => id.trim()).filter(Boolean)
  : [PRIMARY_CALENDAR_ID];

console.log('📅 Configured calendars:', CALENDAR_IDS);

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
    const utcTime = fromZonedTime(serverDateTime, serverTimezone);
    const userZonedTime = toZonedTime(utcTime, userTimezone);
    
    // Format the time in user timezone
    const userTimeString = formatInTimeZone(userZonedTime, userTimezone, 'HH:mm');
    const userDateString = formatInTimeZone(userZonedTime, userTimezone, 'yyyy-MM-dd');
    
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

// Create Google Calendar client using the working method
const createCalendarClient = async () => {
  try {
    if (!SERVICE_ACCOUNT_EMAIL || !PRIVATE_KEY) {
      console.error('Google Calendar credentials not configured');
      return null;
    }

    // Create credentials object from environment variables
    const credentials = {
      type: 'service_account',
      client_email: SERVICE_ACCOUNT_EMAIL,
      private_key: PRIVATE_KEY.replace(/\\n/g, '\n'),
    };

    const auth = new google.auth.GoogleAuth({
      credentials,
      scopes: ['https://www.googleapis.com/auth/calendar']
    });
    
    const authClient = await auth.getClient();
    return google.calendar({ version: 'v3', auth: authClient });
  } catch (error) {
    console.error('Error creating Google Calendar client:', error);
    return null;
  }
};

// Fetch busy times from Google Calendar(s)
const fetchBusyTimes = async (startDate, endDate, timezone = 'Atlantic/Canary') => {
  const calendar = await createCalendarClient();
  if (!calendar) return [];

  try {
    console.log('🔍 Fetching busy times for calendars:', CALENDAR_IDS);
    const response = await calendar.freebusy.query({
      requestBody: {
        timeMin: startDate.toISOString(),
        timeMax: endDate.toISOString(),
        timeZone: timezone,
        items: CALENDAR_IDS.map((id) => ({ id }))
      }
    });

    // Flatten busy arrays from all calendars
    const allBusy = [];
    for (const id of CALENDAR_IDS) {
      const calBusy = response.data.calendars?.[id]?.busy || [];
      console.log(`📋 Calendar ${id}: ${calBusy.length} busy slots`, calBusy);
      allBusy.push(...calBusy);
    }
    console.log('🔥 Total busy times:', allBusy.length);
    return allBusy.map(slot => ({ start: slot.start || '', end: slot.end || '' }));
  } catch (error) {
    console.error('Error fetching busy times:', error.message);
    // Don't fail completely - return empty array so calendar still shows available slots
    return [];
  }
};

// Check if a time slot conflicts with busy times
const isSlotBusy = (date, time, busyTimes, timezone = 'Atlantic/Canary') => {
  // Convert slot time in server timezone to UTC so it can be compared with the
  // UTC timestamps that Google Calendar returns.
  const slotStart = zonedTimeToUtc(`${date}T${time}:00`, timezone);
  const slotEnd   = new Date(slotStart.getTime() + 60 * 60 * 1000); // 1 hour later

  return busyTimes.some(busy => {
    const busyStart = new Date(busy.start);
    const busyEnd = new Date(busy.end);
    
    // Check if there's any overlap
    return slotStart < busyEnd && slotEnd > busyStart;
  });
};

export default async function handler(req, res) {
  // Set CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { days = 14, timezone = 'Atlantic/Canary', userTimezone = 'Atlantic/Canary' } = req.body;
    
    const availability = {};
    const startDate = startOfDay(new Date());
    const endDate = endOfDay(addDays(startDate, days));

    // Get busy times from Google Calendar (always in server timezone)
    const busyTimes = await fetchBusyTimes(startDate, endDate, timezone);
    
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
        if (isSlotBusy(dateKey, time, busyTimes, timezone)) {
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
          const utcTime = fromZonedTime(serverDateTime, timezone);
          const userDateTime = toZonedTime(utcTime, userTimezone);
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
} 