import { google } from 'googleapis';

export default async function handler(req, res) {
  // Set CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const SERVICE_ACCOUNT_EMAIL = process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL;
  const PRIVATE_KEY = process.env.GOOGLE_PRIVATE_KEY;
  const PRIMARY_CALENDAR_ID = process.env.GOOGLE_CALENDAR_ID || 'sarai.syav@gmail.com';

  let debugInfo = {
    step: 'starting',
    timestamp: new Date().toISOString(),
    envVarsPresent: {
      email: !!SERVICE_ACCOUNT_EMAIL,
      key: !!PRIVATE_KEY,
      calendarId: !!PRIMARY_CALENDAR_ID
    }
  };

  try {
    debugInfo.step = 'creating_credentials';
    
    if (!SERVICE_ACCOUNT_EMAIL || !PRIVATE_KEY) {
      throw new Error('Missing required environment variables');
    }

    const credentials = {
      type: 'service_account',
      client_email: SERVICE_ACCOUNT_EMAIL,
      private_key: PRIVATE_KEY.replace(/\\n/g, '\n'),
    };

    debugInfo.step = 'creating_auth';
    const auth = new google.auth.GoogleAuth({
      credentials,
      scopes: ['https://www.googleapis.com/auth/calendar']
    });
    
    debugInfo.step = 'getting_auth_client';
    const authClient = await auth.getClient();
    
    debugInfo.step = 'creating_calendar_client';
    const calendar = google.calendar({ version: 'v3', auth: authClient });
    
    debugInfo.step = 'testing_calendar_access';
    
    // Try to access the calendar
    const calendarInfo = await calendar.calendars.get({
      calendarId: PRIMARY_CALENDAR_ID
    });
    
    debugInfo.step = 'success';
    debugInfo.calendarInfo = {
      id: calendarInfo.data.id,
      summary: calendarInfo.data.summary,
      timeZone: calendarInfo.data.timeZone
    };

    res.json({ 
      status: 'success', 
      debug: debugInfo
    });

  } catch (error) {
    debugInfo.step = 'error';
    debugInfo.error = {
      message: error.message,
      code: error.code,
      status: error.status,
      details: error.details || 'No details available'
    };

    res.status(500).json({ 
      status: 'error', 
      debug: debugInfo
    });
  }
}