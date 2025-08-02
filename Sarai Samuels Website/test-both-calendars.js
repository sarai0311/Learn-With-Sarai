import { google } from 'googleapis';
import dotenv from 'dotenv';

// Load environment variables
dotenv.config({ path: '.env.local' });

console.log('🔍 Testing BOTH calendars for busy times...\n');

const CALENDAR_IDS = process.env.GOOGLE_CALENDAR_IDS
  ? process.env.GOOGLE_CALENDAR_IDS.split(',').map((id) => id.trim()).filter(Boolean)
  : ['sarai.syav@gmail.com'];

console.log('📋 Configured calendars:');
CALENDAR_IDS.forEach((id, index) => {
  console.log(`   ${index + 1}. ${id}`);
});

const testBothCalendars = async () => {
  try {
    console.log('\n📁 Using JSON file: spanish-sarai-calendar-4e3b82d56933.json');
    
    const auth = new google.auth.GoogleAuth({
      keyFile: 'spanish-sarai-calendar-4e3b82d56933.json',
      scopes: ['https://www.googleapis.com/auth/calendar']
    });
    
    const authClient = await auth.getClient();
    const calendar = google.calendar({ version: 'v3', auth: authClient });
    
    console.log('✅ Calendar client created');
    
    // Test freebusy query for ALL calendars
    console.log('\n⏰ Testing freebusy query for ALL calendars...');
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    tomorrow.setHours(0, 0, 0, 0);
    
    const endTomorrow = new Date(tomorrow);
    endTomorrow.setHours(23, 59, 59, 999);
    
    const busyResponse = await calendar.freebusy.query({
      requestBody: {
        timeMin: tomorrow.toISOString(),
        timeMax: endTomorrow.toISOString(),
        timeZone: 'Atlantic/Canary',
        items: CALENDAR_IDS.map((id) => ({ id }))
      }
    });
    
    console.log('✅ Freebusy query successful');
    console.log('\n📊 BUSY TIMES BY CALENDAR:');
    
    // Check each calendar individually
    let totalBusySlots = 0;
    const allBusySlots = [];
    
    for (const calendarId of CALENDAR_IDS) {
      const busy = busyResponse.data.calendars?.[calendarId]?.busy || [];
      console.log(`\n📅 Calendar: ${calendarId}`);
      console.log(`   Busy slots: ${busy.length}`);
      
      if (busy.length > 0) {
        console.log('   🔴 BOOKED TIMES:');
        busy.forEach(slot => {
          const start = new Date(slot.start);
          const end = new Date(slot.end);
          console.log(`      ${start.toLocaleTimeString()} - ${end.toLocaleTimeString()}`);
          allBusySlots.push({ start: slot.start, end: slot.end, calendar: calendarId });
        });
      } else {
        console.log('   ✅ No bookings found');
      }
      
      totalBusySlots += busy.length;
    }
    
    console.log(`\n🔥 TOTAL BUSY SLOTS ACROSS ALL CALENDARS: ${totalBusySlots}`);
    
    if (allBusySlots.length > 0) {
      console.log('\n📋 COMBINED BUSY TIMES FOR TOMORROW:');
      allBusySlots
        .sort((a, b) => new Date(a.start) - new Date(b.start))
        .forEach(slot => {
          const start = new Date(slot.start);
          const end = new Date(slot.end);
          const calShort = slot.calendar.includes('@group.calendar') ? 'Group Calendar' : 'Primary Calendar';
          console.log(`   ${start.toLocaleTimeString()} - ${end.toLocaleTimeString()} (${calShort})`);
        });
    }
    
  } catch (error) {
    console.error('❌ Test failed:', error.message);
    console.error('Full error:', error);
  }
};

testBothCalendars(); 