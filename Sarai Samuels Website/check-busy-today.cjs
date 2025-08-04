#!/usr/bin/env node

const { google } = require('googleapis');
const path = require('path');

(async () => {
  try {
    // Path to service account JSON in repo root
    const keyFile = path.resolve(__dirname, 'spanish-sarai-calendar-4e3b82d56933.json');
    const calendarId = process.env.GOOGLE_CALENDAR_ID || 'sarai.syav@gmail.com';

    const auth = new google.auth.GoogleAuth({
      keyFile,
      scopes: ['https://www.googleapis.com/auth/calendar']
    });

    const authClient = await auth.getClient();
    const calendar = google.calendar({ version: 'v3', auth: authClient });

    const now = new Date();
    const startOfDay = new Date(now);
    startOfDay.setHours(0, 0, 0, 0);
    const endOfDay = new Date(now);
    endOfDay.setHours(23, 59, 59, 999);

    const fbRes = await calendar.freebusy.query({
      requestBody: {
        timeMin: startOfDay.toISOString(),
        timeMax: endOfDay.toISOString(),
        timeZone: 'Atlantic/Canary',
        items: [{ id: calendarId }]
      }
    });

    const busyArr = fbRes?.data?.calendars?.[calendarId]?.busy || [];

    if (busyArr.length === 0) {
      console.log('No busy times today.');
      return;
    }

    console.log('Busy times today:');
    busyArr
      .map(({ start, end }) => {
        return {
          start: new Date(start),
          end: new Date(end)
        };
      })
      .sort((a, b) => a.start - b.start)
      .forEach(({ start, end }) => {
        const opts = { hour: '2-digit', minute: '2-digit', hour12: false, timeZone: 'Atlantic/Canary' };
        console.log(`- ${start.toLocaleTimeString('en-GB', opts)} - ${end.toLocaleTimeString('en-GB', opts)}`);
      });
  } catch (err) {
    console.error('Error fetching busy times:', err.message);
  }
})();
