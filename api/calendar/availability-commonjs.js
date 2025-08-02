const { google } = require('googleapis');

// Environment variables
const SERVICE_ACCOUNT_EMAIL = process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL;
const PRIVATE_KEY = process.env.GOOGLE_PRIVATE_KEY;
const PRIMARY_CALENDAR_ID = process.env.GOOGLE_CALENDAR_ID || 'sarai.syav@gmail.com';

// Simple time slots
const TIME_SLOTS = ['13:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00', '20:00', '21:00', '22:00'];

// Create Google Calendar client
const createCalendarClient = async () => {
  try {
    if (!SERVICE_ACCOUNT_EMAIL || !PRIVATE_KEY) {
      console.error('Google Calendar credentials not configured');
      return null;
    }

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

module.exports = async function handler(req, res) {
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
    console.log('🚀 Starting CommonJS availability check');
    
    // Get basic calendar info to test connection
    const calendar = await createCalendarClient();
    if (!calendar) {
      return res.status(500).json({ error: 'Failed to create calendar client' });
    }

    console.log('✅ Calendar client created successfully');
    
    // Test basic calendar access
    const calendarInfo = await calendar.calendars.get({ calendarId: PRIMARY_CALENDAR_ID });
    console.log('📅 Calendar info:', calendarInfo.data?.summary);
    
    // Try to fetch events for next 7 days
    const now = new Date();
    const futureDate = new Date(now.getTime() + 7 * 24 * 60 * 60 * 1000);
    
    console.log('🔍 Fetching events from', now.toISOString(), 'to', futureDate.toISOString());
    
    const events = await calendar.events.list({
      calendarId: PRIMARY_CALENDAR_ID,
      timeMin: now.toISOString(),
      timeMax: futureDate.toISOString(),
      singleEvents: true,
      orderBy: 'startTime'
    });
    
    console.log('📋 Found', events.data.items?.length || 0, 'events');
    
    // Return response with actual calendar data
    const availability = {
      status: 'success',
      calendarInfo: {
        id: PRIMARY_CALENDAR_ID,
        summary: calendarInfo.data?.summary || 'Unknown',
        timezone: calendarInfo.data?.timeZone || 'Atlantic/Canary'
      },
      eventsFound: events.data.items?.length || 0,
      events: events.data.items?.map(event => ({
        id: event.id,
        summary: event.summary,
        start: event.start?.dateTime || event.start?.date,
        end: event.end?.dateTime || event.end?.date
      })) || [],
      timeSlots: TIME_SLOTS,
      message: 'CommonJS availability check successful'
    };
    
    res.json(availability);
    
  } catch (error) {
    console.error('❌ Error in CommonJS availability:', error);
    res.status(500).json({ 
      error: 'Internal server error',
      message: error.message,
      stack: process.env.NODE_ENV === 'development' ? error.stack : undefined
    });
  }
};