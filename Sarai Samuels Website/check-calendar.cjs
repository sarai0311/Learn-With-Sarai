#!/usr/bin/env node

const http = require('http');

const requestData = JSON.stringify({
  days: 2,
  timezone: 'Atlantic/Canary'
});

const options = {
  hostname: 'localhost',
  port: 8080,
  path: '/api/calendar/availability',
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Content-Length': requestData.length
  }
};

const req = http.request(options, (res) => {
  let data = '';
  
  res.on('data', (chunk) => {
    data += chunk;
  });
  
  res.on('end', () => {
    try {
      const response = JSON.parse(data);
      console.log('\n📅 Calendar Availability Check');
      console.log('=' .repeat(50));
      
      if (response.availability) {
        const dates = Object.keys(response.availability).sort();
        
        dates.forEach((date, index) => {
          const dayData = response.availability[date];
          const dateObj = new Date(date);
          const dayName = dateObj.toLocaleDateString('en-US', { weekday: 'long' });
          const formattedDate = dateObj.toLocaleDateString('en-US', { 
            year: 'numeric', 
            month: 'long', 
            day: 'numeric' 
          });
          
          console.log(`\n${index === 0 ? '📅 TODAY' : '📅 TOMORROW'}: ${dayName}, ${formattedDate}`);
          console.log('-'.repeat(40));
          
          const busySlots = dayData.slots.filter(slot => !slot.available && slot.reason === 'busy');
          const availableSlots = dayData.slots.filter(slot => slot.available);
          
          if (busySlots.length > 0) {
            console.log('🔴 BOOKED TIMES:');
            busySlots.forEach(slot => {
              console.log(`   ${slot.time} - BUSY`);
            });
          } else {
            console.log('✅ No bookings found');
          }
          
          if (availableSlots.length > 0) {
            console.log('\n🟢 AVAILABLE TIMES:');
            availableSlots.forEach(slot => {
              console.log(`   ${slot.time} - Available`);
            });
          }
        });
      } else {
        console.log('❌ No availability data found');
        console.log('Response:', JSON.stringify(response, null, 2));
      }
    } catch (error) {
      console.error('❌ Error parsing response:', error.message);
      console.log('Raw response:', data);
    }
  });
});

req.on('error', (error) => {
  console.error('❌ Request failed:', error.message);
  console.log('Make sure the development server is running on http://localhost:8080');
});

req.write(requestData);
req.end(); 