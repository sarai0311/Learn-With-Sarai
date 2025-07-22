import { google } from 'googleapis';

// Google Calendar configuration
const SERVICE_ACCOUNT_EMAIL = process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL;
const PRIVATE_KEY = process.env.GOOGLE_PRIVATE_KEY;
const PRIMARY_CALENDAR_ID = process.env.GOOGLE_CALENDAR_ID || 'sarai.syav@gmail.com';

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
    const { 
      title, 
      description, 
      startDateTime, 
      endDateTime, 
      attendeeEmail, 
      attendeeName,
      timezone = 'Atlantic/Canary'
    } = req.body;

    const calendar = await createCalendarClient();
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
      calendarId: PRIMARY_CALENDAR_ID,
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
} 