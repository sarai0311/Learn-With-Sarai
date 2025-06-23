
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Calendar } from '@/components/ui/calendar';
import { format, addDays, startOfWeek, isToday, isSameDay } from 'date-fns';
import { es } from 'date-fns/locale';
import { ChevronLeft, ChevronRight, CalendarIcon, Clock } from 'lucide-react';

// Las Palmas de Gran Canaria timezone
const DEFAULT_TIMEZONE = 'Atlantic/Canary';

// Time slots from 1 PM to 10 PM (including reserved slots)
const TIME_SLOTS = [
  '13:00', '14:00', '15:00', '16:00', 
  '17:00', '18:00', '19:00',
  '20:00', '21:00', '22:00'
];

const TIME_LABELS = {
  '13:00': '1:00 PM',
  '14:00': '2:00 PM',
  '15:00': '3:00 PM', 
  '16:00': '4:00 PM',
  '17:00': '5:00 PM',
  '18:00': '6:00 PM',
  '19:00': '7:00 PM',
  '20:00': '8:00 PM',
  '21:00': '9:00 PM',
  '22:00': '10:00 PM'
};

// Permanently reserved slots (appear as unavailable like other booked slots)
const RESERVED_SLOTS = ['13:00', '19:00'];

// Generate random availability for the next 14 days
const generateMockAvailability = () => {
  const availability: Record<string, { time: string; available: boolean }[]> = {};
  
  for (let i = 0; i < 14; i++) {
    const date = addDays(new Date(), i);
    const dateKey = format(date, 'yyyy-MM-dd');
    
    // Skip weekends (Saturday = 6, Sunday = 0)
    if (date.getDay() === 0 || date.getDay() === 6) {
      availability[dateKey] = [];
      continue;
    }
    
    availability[dateKey] = TIME_SLOTS.map(time => ({
      time,
      available: RESERVED_SLOTS.includes(time) ? false : Math.random() > 0.3 // 70% chance of being available for non-reserved slots
    }));
  }
  
  return availability;
};

const AvailabilityCalendar = () => {
  const [availability] = useState(generateMockAvailability());
  const [selectedDate, setSelectedDate] = useState<Date>(new Date());
  const [selectedSlot, setSelectedSlot] = useState<{date: string, time: string} | null>(null);
  const [timeZone, setTimeZone] = useState(DEFAULT_TIMEZONE);
  const [currentWeek, setCurrentWeek] = useState(new Date());
  
  // Get user's timezone
  useEffect(() => {
    try {
      const userTimeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
      setTimeZone(userTimeZone);
    } catch (error) {
      console.error("Could not detect timezone:", error);
    }
  }, []);

  const handleSlotClick = (date: string, time: string) => {
    setSelectedSlot({ date, time });
  };

  const getWeekDays = (startDate: Date) => {
    const week = [];
    const start = startOfWeek(startDate, { weekStartsOn: 1 }); // Monday start
    
    for (let i = 0; i < 7; i++) {
      week.push(addDays(start, i));
    }
    return week;
  };

  const weekDays = getWeekDays(currentWeek);
  const selectedDateKey = format(selectedDate, 'yyyy-MM-dd');
  const availableSlots = availability[selectedDateKey] || [];

  const goToPreviousWeek = () => {
    setCurrentWeek(addDays(currentWeek, -7));
  };

  const goToNextWeek = () => {
    setCurrentWeek(addDays(currentWeek, 7));
  };

  return (
    <div className="w-full space-y-6">
      {/* Header with timezone selector */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <h3 className="text-xl font-semibold text-sarai-text">
          Horarios Disponibles
        </h3>
        <div className="flex items-center gap-2">
          <Clock className="w-4 h-4 text-gray-500" />
          <span className="text-gray-600 text-sm">Zona horaria:</span>
          <select 
            className="border border-gray-300 rounded-md px-3 py-1 text-sm text-sarai-text focus:border-sarai-primary focus:ring focus:ring-sarai-primary/20 focus:ring-opacity-50"
            value={timeZone}
            onChange={(e) => setTimeZone(e.target.value)}
          >
            <option value={DEFAULT_TIMEZONE}>Las Palmas (WEST)</option>
            <option value="UTC">UTC</option>
            <option value="America/New_York">Hora del Este (ET)</option>
            <option value="America/Chicago">Hora Central (CT)</option>
            <option value="America/Denver">Hora de Montaña (MT)</option>
            <option value="America/Los_Angeles">Hora del Pacífico (PT)</option>
            <option value="Europe/London">Londres (GMT)</option>
            <option value="Europe/Paris">París (CET)</option>
            <option value="Asia/Tokyo">Tokio (JST)</option>
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
        {/* Calendar Section */}
        <Card className="xl:col-span-1">
          <CardHeader className="pb-4">
            <CardTitle className="text-lg flex items-center gap-2">
              <CalendarIcon className="w-5 h-5" />
              Selecciona una fecha
            </CardTitle>
          </CardHeader>
          <CardContent className="flex justify-center">
            <div className="w-full max-w-sm">
              <Calendar
                mode="single"
                selected={selectedDate}
                onSelect={(date) => date && setSelectedDate(date)}
                disabled={(date) => {
                  const dayOfWeek = date.getDay();
                  const dateKey = format(date, 'yyyy-MM-dd');
                  // Disable weekends and past dates
                  return dayOfWeek === 0 || dayOfWeek === 6 || date < new Date() || !availability[dateKey];
                }}
                className="w-full"
                locale={es}
              />
            </div>
          </CardContent>
        </Card>

        {/* Available Times Section */}
        <Card className="xl:col-span-2">
          <CardHeader className="pb-4">
            <CardTitle className="text-lg">
              Horarios para {format(selectedDate, "EEEE, d 'de' MMMM", { locale: es })}
            </CardTitle>
          </CardHeader>
          <CardContent>
            {availableSlots.length === 0 ? (
              <div className="text-center py-8 text-gray-500">
                <Clock className="w-8 h-8 mx-auto mb-2 opacity-50" />
                <p>No hay horarios disponibles para este día</p>
                <p className="text-sm">Solo trabajo de lunes a viernes</p>
              </div>
            ) : (
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
                {availableSlots.map((slot) => {
                  const isSelected = selectedSlot?.date === selectedDateKey && selectedSlot?.time === slot.time;
                  const timeLabel = TIME_LABELS[slot.time as keyof typeof TIME_LABELS];
                  
                  return (
                    <Button
                      key={slot.time}
                      variant={isSelected ? "default" : slot.available ? "outline" : "ghost"}
                      className={`h-12 ${
                        isSelected
                          ? 'bg-sarai-primary hover:bg-sarai-primary/90 text-white'
                          : slot.available
                          ? 'border-sarai-primary text-sarai-primary hover:bg-sarai-primary/10'
                          : 'bg-gray-100 text-gray-400 cursor-not-allowed'
                      }`}
                      onClick={() => slot.available && handleSlotClick(selectedDateKey, slot.time)}
                      disabled={!slot.available}
                    >
                      {timeLabel}
                    </Button>
                  );
                })}
              </div>
            )}
          </CardContent>
        </Card>
      </div>

      {/* Weekly Overview */}
      <Card>
        <CardHeader className="pb-4">
          <div className="flex items-center justify-between">
            <CardTitle className="text-lg">Vista Semanal</CardTitle>
            <div className="flex items-center gap-2">
              <Button variant="outline" size="sm" onClick={goToPreviousWeek}>
                <ChevronLeft className="w-4 h-4" />
              </Button>
              <span className="text-sm font-medium px-3">
                {format(weekDays[0], "d MMM", { locale: es })} - {format(weekDays[6], "d MMM yyyy", { locale: es })}
              </span>
              <Button variant="outline" size="sm" onClick={goToNextWeek}>
                <ChevronRight className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-7 gap-2">
            {weekDays.map((day) => {
              const dayKey = format(day, 'yyyy-MM-dd');
              const daySlots = availability[dayKey] || [];
              const isWeekend = day.getDay() === 0 || day.getDay() === 6;
              const availableCount = daySlots.filter(s => s.available).length;
              
              return (
                <div
                  key={dayKey}
                  className={`p-3 rounded-lg border text-center transition-colors ${
                    isSameDay(day, selectedDate)
                      ? 'border-sarai-primary bg-sarai-primary/10'
                      : 'border-gray-200 hover:border-gray-300'
                  } ${isWeekend ? 'opacity-50' : ''}`}
                >
                  <div className="text-xs font-medium text-gray-600 mb-1">
                    {format(day, "EEE", { locale: es })}
                  </div>
                  <div className={`text-lg font-semibold mb-1 ${
                    isToday(day) ? 'text-sarai-primary' : 'text-gray-900'
                  }`}>
                    {format(day, "d")}
                  </div>
                  <div className="text-xs text-gray-500">
                    {isWeekend ? 'Cerrado' : `${availableCount} disponibles`}
                  </div>
                </div>
              );
            })}
          </div>
        </CardContent>
      </Card>

      {/* Selected Slot Confirmation */}
      {selectedSlot && (
        <Card className="border-sarai-accent/20 bg-sarai-accent/10">
          <CardContent className="pt-6">
            <h4 className="font-semibold text-sarai-text mb-2">
              Horario Seleccionado:
            </h4>
            <p className="text-gray-700 mb-4">
              {format(new Date(selectedSlot.date), "EEEE, d 'de' MMMM 'de' yyyy", { locale: es })} 
              {" "}a las {TIME_LABELS[selectedSlot.time as keyof typeof TIME_LABELS]} ({timeZone})
            </p>
            <Button className="bg-sarai-accent hover:bg-sarai-accent/90">
              Confirmar Este Horario
            </Button>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default AvailabilityCalendar;
