import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Calendar } from '@/components/ui/calendar';
import { format, addDays, startOfWeek, isToday, isSameDay } from 'date-fns';
import { es, enUS } from 'date-fns/locale';
import { ChevronLeft, ChevronRight, CalendarIcon, Clock, Loader2 } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { googleCalendarService, TimeSlot, DayAvailability } from '@/lib/googleCalendar';

// Las Palmas de Gran Canaria timezone
const DEFAULT_TIMEZONE = 'Atlantic/Canary';

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

interface AvailabilityCalendarProps {
  onSlotSelect?: (date: string, time: string) => void;
  selectedSlot?: {date: string, time: string} | null;
}

const AvailabilityCalendar: React.FC<AvailabilityCalendarProps> = ({ 
  onSlotSelect, 
  selectedSlot: externalSelectedSlot 
}) => {
  const [availability, setAvailability] = useState<Record<string, DayAvailability>>({});
  const [selectedDate, setSelectedDate] = useState<Date>(new Date());
  const [selectedSlot, setSelectedSlot] = useState<{date: string, time: string} | null>(externalSelectedSlot || null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const { language, t } = useLanguage();

  // Get the correct locale based on current language
  const locale = language === 'es' ? es : enUS;

  // Load availability from Google Calendar
  useEffect(() => {
    const loadAvailability = async () => {
      setIsLoading(true);
      setError(null);
      try {
        const availabilityData = await googleCalendarService.getAvailability(14);
        setAvailability(availabilityData);
      } catch (err) {
        console.error('Error loading availability:', err);
        setError('Failed to load availability. Please try again.');
      } finally {
        setIsLoading(false);
      }
    };

    loadAvailability();
  }, []);

  // Update selected slot if external prop changes
  useEffect(() => {
    if (externalSelectedSlot) {
      setSelectedSlot(externalSelectedSlot);
    }
  }, [externalSelectedSlot]);

  const handleSlotClick = (date: string, time: string) => {
    const newSelection = { date, time };
    setSelectedSlot(newSelection);
    onSlotSelect?.(date, time);
  };

  const selectedDateKey = format(selectedDate, 'yyyy-MM-dd');
  const dayAvailability = availability[selectedDateKey];
  const availableSlots = dayAvailability?.slots || [];

  if (isLoading) {
    return (
      <Card className="w-full">
        <CardHeader className="pb-3">
          <CardTitle className="text-sm flex items-center gap-2 text-gray-800">
            <CalendarIcon className="w-4 h-4" />
            {language === 'es' ? 'Programa tu Clase' : 'Schedule Your Class'}
          </CardTitle>
        </CardHeader>
        <CardContent className="px-3 pb-4">
          <div className="flex items-center justify-center py-8">
            <Loader2 className="w-6 h-6 animate-spin text-sarai-primary" />
            <span className="ml-2 text-gray-600">
              {language === 'es' ? 'Cargando disponibilidad...' : 'Loading availability...'}
            </span>
          </div>
        </CardContent>
      </Card>
    );
  }

  if (error) {
    return (
      <Card className="w-full">
        <CardHeader className="pb-3">
          <CardTitle className="text-sm flex items-center gap-2 text-gray-800">
            <CalendarIcon className="w-4 h-4" />
            {language === 'es' ? 'Programa tu Clase' : 'Schedule Your Class'}
          </CardTitle>
        </CardHeader>
        <CardContent className="px-3 pb-4">
          <div className="text-center py-8">
            <p className="text-red-600 mb-2">{error}</p>
            <Button 
              onClick={() => window.location.reload()} 
              variant="outline" 
              size="sm"
            >
              {language === 'es' ? 'Reintentar' : 'Try Again'}
            </Button>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <div className="w-full">
      {/* Compact Calendar */}
      <Card className="w-full">
        <CardHeader className="pb-3">
          <CardTitle className="text-sm flex items-center gap-2 text-gray-800">
            <CalendarIcon className="w-4 h-4" />
            {language === 'es' ? 'Programa tu Clase' : 'Schedule Your Class'}
          </CardTitle>
        </CardHeader>
        <CardContent className="px-3 pb-4">
          {/* Calendar Grid - Properly Centered */}
          <div className="mb-4 flex justify-center">
            <div className="w-full max-w-sm">
              <Calendar
                mode="single"
                selected={selectedDate}
                onSelect={(date) => date && setSelectedDate(date)}
                disabled={(date) => {
                  const dayOfWeek = date.getDay();
                  const dateKey = format(date, 'yyyy-MM-dd');
                  const dayData = availability[dateKey];
                  
                  // Disable weekends, past dates, and days with no availability
                  return (
                    dayOfWeek === 0 || 
                    dayOfWeek === 6 || 
                    date < new Date() || 
                    !dayData || 
                    dayData.slots.every(slot => !slot.available)
                  );
                }}
                locale={locale}
                className="w-full"
                classNames={{
                  months: "flex flex-col sm:flex-row space-y-4 sm:space-x-4 sm:space-y-0 justify-center",
                  month: "space-y-4 w-full",
                  caption: "flex justify-center pt-1 relative items-center mb-4",
                  caption_label: "text-sm font-medium",
                  nav: "space-x-1 flex items-center",
                  nav_button: "h-7 w-7 bg-transparent p-0 opacity-50 hover:opacity-100 border border-gray-300 rounded-md",
                  nav_button_previous: "absolute left-1",
                  nav_button_next: "absolute right-1",
                  table: "w-full border-collapse space-y-1",
                  head_row: "flex justify-between",
                  head_cell: "text-gray-600 rounded-md w-9 font-normal text-sm flex-1 text-center",
                  row: "flex w-full mt-2 justify-between",
                  cell: "text-center text-sm p-0 relative flex-1 flex justify-center",
                  day: "h-9 w-9 p-0 font-normal hover:bg-gray-100 rounded-md transition-colors",
                  day_range_end: "day-range-end",
                  day_selected: "bg-sarai-primary text-white hover:bg-sarai-primary hover:text-white",
                  day_today: "bg-gray-100 text-gray-900 font-semibold",
                  day_outside: "text-gray-400 opacity-50",
                  day_disabled: "text-gray-300 opacity-50 cursor-not-allowed hover:bg-transparent",
                  day_range_middle: "aria-selected:bg-accent aria-selected:text-accent-foreground",
                  day_hidden: "invisible",
                }}
                weekStartsOn={1}
              />
            </div>
          </div>

          {/* Available Times Section */}
          <div className="border-t pt-4">
            <h4 className="text-sm font-medium text-gray-800 mb-3 text-center">
              {language === 'es' 
                ? `Horarios disponibles para ${format(selectedDate, "d 'de' MMM, yyyy", { locale })}` 
                : `Available times for ${format(selectedDate, "MMM d, yyyy", { locale })}`
              }
            </h4>
            
            {availableSlots.length === 0 || availableSlots.every(slot => !slot.available) ? (
              <div className="text-center py-6 text-gray-500">
                <Clock className="w-6 h-6 mx-auto mb-2 opacity-50" />
                <p className="text-sm">
                  {language === 'es' ? 'No hay horarios disponibles' : 'No times available'}
                </p>
                <p className="text-xs text-gray-400">
                  {language === 'es' ? 'Solo lunes a viernes' : 'Mon-Fri only'}
                </p>
              </div>
            ) : (
              <>
                <div className="grid grid-cols-3 gap-2 mb-3">
                  {availableSlots.slice(0, 6).map((slot) => {
                    const isSelected = selectedSlot?.date === selectedDateKey && selectedSlot?.time === slot.time;
                    const timeLabel = TIME_LABELS[slot.time as keyof typeof TIME_LABELS];
                    
                    return (
                      <Button
                        key={slot.time}
                        variant={isSelected ? "default" : slot.available ? "outline" : "ghost"}
                        size="sm"
                        className={`h-9 text-xs font-medium transition-all duration-200 ${
                          isSelected
                            ? 'bg-sarai-primary hover:bg-sarai-primary/90 text-white border-sarai-primary shadow-sm'
                            : slot.available
                            ? 'border-gray-300 text-gray-700 hover:border-sarai-primary hover:text-sarai-primary hover:bg-sarai-primary/5'
                            : 'bg-gray-50 text-gray-400 cursor-not-allowed border-gray-200'
                        }`}
                        onClick={() => slot.available && handleSlotClick(selectedDateKey, slot.time)}
                        disabled={!slot.available}
                        title={
                          !slot.available && slot.reason === 'busy' 
                            ? (language === 'es' ? 'Ocupado' : 'Busy')
                            : !slot.available && slot.reason === 'weekend'
                            ? (language === 'es' ? 'Fin de semana' : 'Weekend')
                            : undefined
                        }
                      >
                        {timeLabel}
                      </Button>
                    );
                  })}
                </div>
                
                {availableSlots.filter(slot => slot.available).length > 6 && (
                  <div className="text-center">
                    <p className="text-xs text-gray-500">
                      +{availableSlots.filter(slot => slot.available).length - 6} {language === 'es' ? 'horarios más disponibles' : 'more times available'}
                    </p>
                  </div>
                )}
              </>
            )}
          </div>
        </CardContent>
      </Card>

      {/* Selected Slot Confirmation */}
      {selectedSlot && (
        <Card className="mt-3 border-green-200 bg-green-50">
          <CardContent className="p-3">
            <div className="flex items-center gap-2 text-sm">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span className="font-medium text-green-800">
                {language === 'es' ? 'Horario seleccionado' : 'Selected time'}
              </span>
            </div>
            <p className="text-sm text-green-700 mt-1 font-medium">
              {format(new Date(selectedSlot.date), language === 'es' ? "EEEE, d 'de' MMM, yyyy" : "EEEE, MMM d, yyyy", { locale })} {language === 'es' ? 'a las' : 'at'}{" "}
              {TIME_LABELS[selectedSlot.time as keyof typeof TIME_LABELS]}
            </p>
            <p className="text-xs text-green-600 mt-1">
              {language === 'es' ? 'Zona horaria Las Palmas (WEST)' : 'Las Palmas timezone (WEST)'}
            </p>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default AvailabilityCalendar; 