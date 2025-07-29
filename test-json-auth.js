import { google } from 'googleapis';

console.log('🔍 Testing JSON file authentication...\n');

const testAuth = async () => {
  try {
    console.log('📁 Using JSON file: spanish-sarai-calendar-4e3b82d56933.json');
    
    const auth = new google.auth.GoogleAuth({
      keyFile: 'spanish-sarai-calendar-4e3b82d56933.json',
      scopes: ['https://www.googleapis.com/auth/calendar']
    });
    
    console.log('✅ Auth object created');
    
    // Get client
    const authClient = await auth.getClient();
    console.log('✅ Auth client obtained');
    
    // Create calendar client
    const calendar = google.calendar({ version: 'v3', auth: authClient });
    console.log('✅ Calendar client created');
    
    // Test calendar access
    console.log('\n📅 Testing calendar access...');
    
    const calendarList = await calendar.calendarList.list();
    console.log('✅ Calendar list retrieved successfully');
    console.log('📋 Accessible calendars:');
    
    if (calendarList.data.items) {
      calendarList.data.items.forEach((cal, index) => {
        console.log(`   ${index + 1}. ${cal.summary} (${cal.id})`);
      });
    }
    
    // Test freebusy query
    console.log('\n⏰ Testing freebusy query...');
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
        items: [{ id: 'sarai.syav@gmail.com' }]
      }
    });
    
    console.log('✅ Freebusy query successful');
    const busy = busyResponse.data.calendars?.['sarai.syav@gmail.com']?.busy || [];
    console.log(`📊 Busy slots for tomorrow: ${busy.length}`);
    
    if (busy.length > 0) {
      console.log('🔴 BOOKED TIMES FOR TOMORROW:');
      busy.forEach(slot => {
        const start = new Date(slot.start);
        const end = new Date(slot.end);
        console.log(`   ${start.toLocaleTimeString()} - ${end.toLocaleTimeString()}`);
      });
    } else {
      console.log('✅ No bookings found for tomorrow');
    }
    
  } catch (error) {
    console.error('❌ Authentication test failed:', error.message);
    console.error('Full error:', error);
  }
};

testAuth(); 