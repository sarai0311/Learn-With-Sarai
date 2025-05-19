
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

// Mock time slots
const WEEKDAYS = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];
const TIME_SLOTS = [
  '09:00 AM', '10:00 AM', '11:00 AM', 
  '12:00 PM', '01:00 PM', '02:00 PM', 
  '03:00 PM', '04:00 PM', '05:00 PM'
];

// Generate random availability
const generateMockAvailability = () => {
  return WEEKDAYS.map(day => ({
    day,
    slots: TIME_SLOTS.map(time => ({
      time,
      available: Math.random() > 0.4, // 60% chance of being available
    }))
  }));
};

const AvailabilityCalendar = () => {
  const [availability] = useState(generateMockAvailability());
  const [selectedSlot, setSelectedSlot] = useState<{day: string, time: string} | null>(null);
  const [timeZone, setTimeZone] = useState('UTC');
  
  // Get user's timezone
  useState(() => {
    try {
      const userTimeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
      setTimeZone(userTimeZone);
    } catch (error) {
      console.error("Could not detect timezone:", error);
    }
  });

  const handleSlotClick = (day: string, time: string) => {
    setSelectedSlot({ day, time });
  };

  return (
    <div className="w-full">
      <div className="mb-6 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <h3 className="text-xl font-semibold text-sarai-text">
          Available Class Times
        </h3>
        <div className="flex items-center">
          <span className="text-gray-600 mr-2">Time Zone:</span>
          <select 
            className="border-gray-300 rounded-md text-sarai-text focus:border-sarai-primary focus:ring focus:ring-sarai-primary/20 focus:ring-opacity-50"
            value={timeZone}
            onChange={(e) => setTimeZone(e.target.value)}
          >
            <option value="UTC">UTC (Coordinated Universal Time)</option>
            <option value="America/New_York">Eastern Time (ET)</option>
            <option value="America/Chicago">Central Time (CT)</option>
            <option value="America/Denver">Mountain Time (MT)</option>
            <option value="America/Los_Angeles">Pacific Time (PT)</option>
            <option value="Europe/London">London (GMT)</option>
            <option value="Europe/Paris">Paris (CET)</option>
            <option value="Asia/Tokyo">Tokyo (JST)</option>
          </select>
        </div>
      </div>

      <Card className="overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full">
            <thead>
              <tr className="bg-gray-50 border-b">
                <th className="py-3 px-6 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Time
                </th>
                {WEEKDAYS.map((day) => (
                  <th key={day} className="py-3 px-6 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    {day}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {TIME_SLOTS.map((time) => (
                <tr key={time} className="hover:bg-gray-50">
                  <td className="py-3 px-6 text-sm font-medium text-gray-900">
                    {time}
                  </td>
                  {WEEKDAYS.map((day) => {
                    const dayData = availability.find(d => d.day === day);
                    const slot = dayData?.slots.find(s => s.time === time);
                    const isAvailable = slot?.available || false;
                    const isSelected = selectedSlot?.day === day && selectedSlot?.time === time;
                    
                    return (
                      <td key={`${day}-${time}`} className="py-3 px-6 text-sm text-gray-500">
                        {isAvailable ? (
                          <Button
                            variant={isSelected ? "default" : "outline"}
                            className={`w-full ${isSelected ? 'bg-sarai-primary hover:bg-sarai-primary/90' : 'border-sarai-primary text-sarai-primary hover:bg-sarai-primary/10'}`}
                            onClick={() => handleSlotClick(day, time)}
                          >
                            {isSelected ? 'Selected' : 'Available'}
                          </Button>
                        ) : (
                          <span className="inline-block w-full text-center text-gray-400 py-2 px-4 rounded-md bg-gray-100">
                            Unavailable
                          </span>
                        )}
                      </td>
                    );
                  })}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>

      {selectedSlot && (
        <div className="mt-6 bg-sarai-accent/10 border border-sarai-accent/20 rounded-md p-4">
          <h4 className="font-semibold text-sarai-text mb-2">
            You Selected:
          </h4>
          <p className="text-gray-700">
            {selectedSlot.day} at {selectedSlot.time} ({timeZone})
          </p>
          <div className="mt-4">
            <Button className="bg-sarai-accent hover:bg-sarai-accent/90">
              Confirm This Time Slot
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default AvailabilityCalendar;
