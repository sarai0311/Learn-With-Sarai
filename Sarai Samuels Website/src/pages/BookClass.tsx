import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AvailabilityCalendar from "@/components/AvailabilityCalendar";
import StripePaymentForm from "@/components/StripePaymentForm";
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useLanguage } from "@/contexts/LanguageContext";
import { motion } from "framer-motion";
import { CheckCircle, CreditCard, Calendar, User, ArrowLeft, Clock } from "lucide-react";
import { userProfileService, bookingService } from "@/lib/supabase";
import { googleCalendarService, createEventDateTime } from "@/lib/googleCalendar";
import { format } from "date-fns";

interface ServiceOption {
  id: string;
  name: string;
  description: string;
  price: number;
  duration: string;
  icon: string;
}

const BookClass = () => {
  const [step, setStep] = useState(1);
  const [selectedService, setSelectedService] = useState<ServiceOption | null>(null);
  const [selectedSlot, setSelectedSlot] = useState<{date: string, time: string} | null>(null);
  const [customerInfo, setCustomerInfo] = useState({
    name: "",
    email: "",
    timezone: "",
    level: "",
    goals: "",
  });
  const [paymentStatus, setPaymentStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState("");
  const [isCreatingProfile, setIsCreatingProfile] = useState(false);

  const { t } = useLanguage();

  const serviceOptions: ServiceOption[] = [
    {
      id: "trial",
      name: t('services.trial.title'),
      description: t('services.trial.description'),
      price: 10.50,
      duration: "25 minutes",
      icon: "🎁"
    },
    {
      id: "standard",
      name: t('services.standard.title'),
      description: t('services.standard.description'),
      price: 21.00,
      duration: "50 minutes",
      icon: "📚"
    },
    {
      id: "premium",
      name: t('services.premium.title'),
      description: t('services.premium.description'),
      price: 42.00,
      duration: "100 minutes",
      icon: "⭐"
    }
  ];

  const handleServiceSelect = (service: ServiceOption) => {
    setSelectedService(service);
    setStep(2);
  };

  const handleSlotSelect = (date: string, time: string) => {
    setSelectedSlot({ date, time });
  };

  const handleContinueToPayment = () => {
    if (customerInfo.name && customerInfo.email && customerInfo.level && selectedSlot) {
      setStep(3);
    }
  };

  const handlePaymentSuccess = async () => {
    setIsCreatingProfile(true);
    
    try {
      // Save user profile to Supabase
      const userProfile = await userProfileService.createOrUpdateProfile({
        email: customerInfo.email,
        name: customerInfo.name,
        level: customerInfo.level,
        goals: customerInfo.goals,
        timezone: customerInfo.timezone,
      });

      // Create booking record if service is selected
      if (selectedService && selectedSlot) {
        const booking = await bookingService.createBooking({
          user_id: userProfile.id,
          service_type: selectedService.id,
          service_name: selectedService.name,
          price: selectedService.price,
          duration: selectedService.duration,
          booking_date: selectedSlot.date,
          booking_time: selectedSlot.time,
          status: 'confirmed',
        });

        // Create Google Calendar event
        try {
          const serviceDuration = selectedService.id === 'trial' ? 25 : 
                                selectedService.id === 'standard' ? 50 : 100;
          
          const { start, end } = createEventDateTime(
            selectedSlot.date, 
            selectedSlot.time, 
            serviceDuration
          );

          const eventTitle = `Spanish Class - ${selectedService.name}`;
          const eventDescription = `
Spanish lesson with Sarai Acevedo

Student: ${customerInfo.name}
Email: ${customerInfo.email}
Level: ${customerInfo.level}
Goals: ${customerInfo.goals}

Service: ${selectedService.name}
Duration: ${selectedService.duration}
Price: €${selectedService.price}

Booking ID: ${booking.id}
          `.trim();

          await googleCalendarService.createCalendarEvent(
            eventTitle,
            eventDescription,
            start,
            end,
            customerInfo.email,
            customerInfo.name
          );

          console.log('Calendar event created successfully');
        } catch (calendarError) {
          console.error('Error creating calendar event:', calendarError);
          // Don't fail the booking if calendar creation fails
        }
      }

      console.log('User profile and booking saved successfully:', userProfile);
      setPaymentStatus('success');
      setStep(4);
    } catch (error) {
      console.error('Error saving user profile:', error);
      setPaymentStatus('error');
      setErrorMessage('Payment successful but profile creation failed. Please contact support.');
    } finally {
      setIsCreatingProfile(false);
    }
  };

  const handlePaymentError = (error: string) => {
    setPaymentStatus('error');
    setErrorMessage(error);
  };

  const goBack = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  const canContinueToPayment = () => {
    return (
      customerInfo.name && 
      customerInfo.email && 
      customerInfo.level && 
      selectedSlot
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-sarai-background to-sarai-skyblue/20">
      <Navbar />
      
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          {/* Progress Indicator */}
          <div className="flex justify-center mb-8">
            <div className="flex items-center space-x-4">
              {[1, 2, 3, 4].map((stepNum) => (
                <div key={stepNum} className="flex items-center">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${
                    step >= stepNum ? 'bg-sarai-primary text-white' : 'bg-gray-200 text-gray-600'
                  }`}>
                    {step > stepNum ? <CheckCircle className="w-5 h-5" /> : stepNum}
                  </div>
                  {stepNum < 4 && (
                    <div className={`w-8 h-1 mx-2 ${
                      step > stepNum ? 'bg-sarai-primary' : 'bg-gray-200'
                    }`} />
                  )}
                </div>
              ))}
            </div>
          </div>
            
          {/* Step 1: Service Selection */}
          {step === 1 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-2xl font-bold text-center mb-8 text-sarai-text">
                {t('book.step1.title')}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {serviceOptions.map((service) => (
                  <motion.div
                    key={service.id}
                    whileHover={{ y: -5, scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="cursor-pointer"
                    onClick={() => handleServiceSelect(service)}
                  >
                    <Card className="h-full border-2 border-gray-200 hover:border-sarai-primary transition-all duration-300 hover:shadow-lg">
                      <CardHeader className="text-center">
                        <div className="text-4xl mb-2">{service.icon}</div>
                        <CardTitle className="text-xl text-sarai-text">{service.name}</CardTitle>
                        <div className="text-3xl font-bold text-sarai-primary">€{service.price.toFixed(2)}</div>
                        <div className="text-sm text-gray-600">{service.duration}</div>
                      </CardHeader>
                      <CardContent>
                        <p className="text-gray-600 text-center">{service.description}</p>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}

          {/* Step 2: Customer Details & Schedule */}
          {step === 2 && selectedService && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="flex items-center mb-8">
                <Button onClick={goBack} variant="outline" className="mr-4">
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Back
                </Button>
                <h2 className="text-2xl font-bold text-sarai-text flex items-center">
                  <User className="h-6 w-6 mr-2 text-sarai-primary" />
                  {t('book.step2.title')}
                </h2>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <Card>
                  <CardHeader>
                    <CardTitle>{t('book.personal.title')}</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <Label htmlFor="name">{t('book.name')}</Label>
                      <Input
                        id="name"
                        value={customerInfo.name}
                        onChange={(e) => setCustomerInfo({...customerInfo, name: e.target.value})}
                        placeholder="Enter your full name"
                        required
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor="email">{t('book.email')}</Label>
                      <Input
                        id="email"
                        type="email"
                        value={customerInfo.email}
                        onChange={(e) => setCustomerInfo({...customerInfo, email: e.target.value})}
                        placeholder="Enter your email address"
                        required
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor="timezone">{t('book.timezone')}</Label>
                      <Input
                        id="timezone"
                        value={customerInfo.timezone}
                        onChange={(e) => setCustomerInfo({...customerInfo, timezone: e.target.value})}
                        placeholder="e.g., America/New_York"
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor="level">{t('book.level')}</Label>
                      <Select value={customerInfo.level} onValueChange={(value) => setCustomerInfo({...customerInfo, level: value})}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select your Spanish level" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="complete-beginner">{t('book.level.complete')}</SelectItem>
                          <SelectItem value="beginner">{t('book.level.beginner')}</SelectItem>
                          <SelectItem value="intermediate">{t('book.level.intermediate')}</SelectItem>
                          <SelectItem value="advanced">{t('book.level.advanced')}</SelectItem>
                          <SelectItem value="fluent">{t('book.level.fluent')}</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    
                    <div>
                      <Label htmlFor="goals">{t('book.goals')}</Label>
                      <Textarea 
                        id="goals" 
                        value={customerInfo.goals}
                        onChange={(e) => setCustomerInfo({...customerInfo, goals: e.target.value})}
                        placeholder={t('book.goals.placeholder')}
                        rows={3}
                      />
                    </div>

                    <Button 
                      onClick={handleContinueToPayment} 
                      className="w-full"
                      disabled={!canContinueToPayment()}
                    >
                      <CreditCard className="h-4 w-4 mr-2" />
                      {t('book.continue')}
                    </Button>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Booking Summary</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between p-4 bg-sarai-background/20 rounded-lg">
                        <div>
                          <div className="flex items-center mb-2">
                            <span className="text-2xl mr-2">{selectedService.icon}</span>
                            <h3 className="font-bold text-sarai-text">{selectedService.name}</h3>
                          </div>
                          <p className="text-sm text-gray-600">{selectedService.description}</p>
                          <p className="text-sm text-sarai-steel mt-1">{selectedService.duration}</p>
                        </div>
                        <div className="text-right">
                          <div className="text-2xl font-bold text-sarai-primary">€{selectedService.price.toFixed(2)}</div>
                        </div>
                      </div>
                      
                      <AvailabilityCalendar 
                        onSlotSelect={handleSlotSelect}
                        selectedSlot={selectedSlot}
                      />
                      
                      {selectedSlot && (
                        <div className="mt-4 p-3 bg-green-50 border border-green-200 rounded-lg">
                          <div className="flex items-center gap-2 text-sm">
                            <Clock className="w-4 h-4 text-green-600" />
                            <span className="font-medium text-green-800">
                              Selected: {format(new Date(selectedSlot.date), 'EEEE, MMM d, yyyy')} at {selectedSlot.time}
                            </span>
                          </div>
                        </div>
                      )}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </motion.div>
          )}

          {/* Step 3: Payment */}
          {step === 3 && selectedService && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="flex items-center mb-8">
                <Button onClick={goBack} variant="outline" className="mr-4">
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Back
                </Button>
                <h2 className="text-2xl font-bold text-sarai-text flex items-center">
                  <CreditCard className="h-6 w-6 mr-2 text-sarai-primary" />
                  Complete Your Payment
                </h2>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <StripePaymentForm
                  amount={selectedService.price}
                  serviceType={selectedService.name}
                  customerInfo={customerInfo}
                  onSuccess={handlePaymentSuccess}
                  onError={handlePaymentError}
                />

                <Card>
                  <CardHeader>
                    <CardTitle>Order Summary</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between p-4 bg-sarai-background/20 rounded-lg">
                        <div>
                          <div className="flex items-center mb-2">
                            <span className="text-2xl mr-2">{selectedService.icon}</span>
                            <h3 className="font-bold text-sarai-text">{selectedService.name}</h3>
                          </div>
                          <p className="text-sm text-gray-600">{selectedService.description}</p>
                          <p className="text-sm text-sarai-steel mt-1">{selectedService.duration}</p>
                        </div>
                        <div className="text-right">
                          <div className="text-2xl font-bold text-sarai-primary">€{selectedService.price.toFixed(2)}</div>
                        </div>
                      </div>
                      
                      {selectedSlot && (
                        <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
                          <div className="flex items-center gap-2 text-sm">
                            <Clock className="w-4 h-4 text-green-600" />
                            <span className="font-medium text-green-800">
                              Scheduled: {format(new Date(selectedSlot.date), 'EEEE, MMM d, yyyy')} at {selectedSlot.time}
                            </span>
                          </div>
                          <p className="text-xs text-green-600 mt-1">
                            Las Palmas timezone (WEST)
                          </p>
                        </div>
                      )}
                      
                      <div className="border-t pt-4">
                        <div className="flex justify-between items-center">
                          <span className="text-lg font-semibold">Total</span>
                          <span className="text-2xl font-bold text-sarai-primary">€{selectedService.price.toFixed(2)}</span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </motion.div>
          )}

          {/* Step 4: Success */}
          {step === 4 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="text-center">
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle className="w-12 h-12 text-green-600" />
                </div>
                  <h2 className="text-3xl font-bold text-sarai-text mb-4">
                    ¡Booking Confirmed!
                  </h2>
                  
                  <p className="text-lg text-gray-600 mb-8">
                    Your Spanish class has been successfully booked and added to your calendar.
                  </p>
                
                {selectedService && selectedSlot && (
                  <Card className="max-w-md mx-auto mb-8">
                    <CardContent className="p-6">
                      <div className="text-center">
                        <div className="text-4xl mb-4">{selectedService.icon}</div>
                        <h3 className="text-xl font-bold text-sarai-text mb-2">{selectedService.name}</h3>
                        <p className="text-gray-600 mb-4">{selectedService.description}</p>
                        <div className="p-4 bg-sarai-background/20 rounded-lg">
                          <div className="flex items-center justify-center gap-2 text-sm">
                            <Clock className="w-4 h-4 text-sarai-primary" />
                            <span className="font-medium">
                              {format(new Date(selectedSlot.date), 'EEEE, MMM d, yyyy')} at {selectedSlot.time}
                            </span>
                          </div>
                          <p className="text-xs text-gray-500 mt-1">
                            Las Palmas timezone (WEST)
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                )}

                  <Card className="text-left">
                    <CardHeader>
                      <CardTitle>What happens next?</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="flex items-start space-x-3">
                        <div className="w-6 h-6 bg-sarai-primary text-white rounded-full flex items-center justify-center text-sm font-bold mt-1">1</div>
                        <div>
                          <h4 className="font-semibold">Calendar Invite Sent</h4>
                          <p className="text-sm text-gray-600">You'll receive an email with your booking details and calendar invite.</p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <div className="w-6 h-6 bg-sarai-primary text-white rounded-full flex items-center justify-center text-sm font-bold mt-1">2</div>
                        <div>
                          <h4 className="font-semibold">Google Meet Link</h4>
                          <p className="text-sm text-gray-600">A Google Meet link will be automatically generated for your virtual classroom.</p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <div className="w-6 h-6 bg-sarai-primary text-white rounded-full flex items-center justify-center text-sm font-bold mt-1">3</div>
                        <div>
                          <h4 className="font-semibold">Start Learning!</h4>
                          <p className="text-sm text-gray-600">Join your virtual classroom and begin your Spanish learning journey!</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </motion.div>
            )}
          </div>
        </div>
      
      <Footer />
    </div>
  );
};

export default BookClass; 