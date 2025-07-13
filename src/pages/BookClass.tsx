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
import { CheckCircle, CreditCard, Calendar, User, ArrowLeft } from "lucide-react";

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
  const [customerInfo, setCustomerInfo] = useState({
    name: "",
    email: "",
    timezone: "",
    level: "",
    goals: "",
  });
  const [paymentStatus, setPaymentStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState("");

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
      price: 31.50,
      duration: "75 minutes",
      icon: "⭐"
    }
  ];

  const handleServiceSelect = (service: ServiceOption) => {
    setSelectedService(service);
    setStep(2);
  };

  const handleContinueToPayment = () => {
    if (customerInfo.name && customerInfo.email && customerInfo.level) {
      setStep(3);
    }
  };

  const handlePaymentSuccess = () => {
    setPaymentStatus('success');
    setStep(4);
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

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        {/* Header */}
        <section className="bg-sarai-primary text-white py-16">
          <div className="sarai-container">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-3xl md:text-4xl font-bold mb-4">
                {t('book.title')}
              </h1>
              <p className="text-xl opacity-90">
                {t('book.subtitle')}
              </p>
            </div>
          </div>
        </section>

        {/* Progress Indicator */}
        <section className="bg-gray-50 py-8">
          <div className="sarai-container max-w-4xl mx-auto">
            <div className="flex items-center justify-center space-x-8">
              {[1, 2, 3, 4].map((stepNumber) => (
                <div key={stepNumber} className="flex items-center">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold ${
                    step >= stepNumber 
                      ? 'bg-sarai-primary text-white' 
                      : 'bg-gray-300 text-gray-600'
                  }`}>
                    {step > stepNumber ? (
                      <CheckCircle className="h-6 w-6" />
                    ) : (
                      stepNumber
                    )}
                  </div>
                  {stepNumber < 4 && (
                    <div className={`w-16 h-1 mx-2 ${
                      step > stepNumber ? 'bg-sarai-primary' : 'bg-gray-300'
                    }`} />
                  )}
                </div>
              ))}
            </div>
            <div className="flex justify-center mt-4 space-x-16 text-sm">
              <span className={step >= 1 ? 'text-sarai-primary font-medium' : 'text-gray-500'}>
                Choose Class
              </span>
              <span className={step >= 2 ? 'text-sarai-primary font-medium' : 'text-gray-500'}>
                Your Details
              </span>
              <span className={step >= 3 ? 'text-sarai-primary font-medium' : 'text-gray-500'}>
                Payment
              </span>
              <span className={step >= 4 ? 'text-sarai-primary font-medium' : 'text-gray-500'}>
                Confirmed
              </span>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="sarai-section bg-white">
          <div className="sarai-container max-w-4xl mx-auto">
            
            {/* Step 1: Choose Service */}
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

            {/* Step 2: Customer Details */}
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
                  <h2 className="text-2xl font-bold text-sarai-text">
                    {t('book.step2.title')}
                  </h2>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center">
                        <User className="h-5 w-5 mr-2 text-sarai-primary" />
                        {t('book.personal.title')}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="name">{t('book.name')}</Label>
                        <Input
                          id="name"
                          value={customerInfo.name}
                          onChange={(e) => setCustomerInfo({...customerInfo, name: e.target.value})}
                          placeholder="Your full name"
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="email">{t('book.email')}</Label>
                        <Input
                          id="email"
                          type="email"
                          value={customerInfo.email}
                          onChange={(e) => setCustomerInfo({...customerInfo, email: e.target.value})}
                          placeholder="your.email@example.com"
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="timezone">{t('book.timezone')}</Label>
                        <Select value={customerInfo.timezone} onValueChange={(value) => setCustomerInfo({...customerInfo, timezone: value})}>
                          <SelectTrigger>
                            <SelectValue placeholder="Select your timezone" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="UTC-12:00">(UTC-12:00) International Date Line West</SelectItem>
                            <SelectItem value="UTC-11:00">(UTC-11:00) Coordinated Universal Time-11</SelectItem>
                            <SelectItem value="UTC-10:00">(UTC-10:00) Hawaii</SelectItem>
                            <SelectItem value="UTC-09:00">(UTC-09:00) Alaska</SelectItem>
                            <SelectItem value="UTC-08:00">(UTC-08:00) Pacific Time (US & Canada)</SelectItem>
                            <SelectItem value="UTC-07:00">(UTC-07:00) Mountain Time (US & Canada)</SelectItem>
                            <SelectItem value="UTC-06:00">(UTC-06:00) Central Time (US & Canada)</SelectItem>
                            <SelectItem value="UTC-05:00">(UTC-05:00) Eastern Time (US & Canada)</SelectItem>
                            <SelectItem value="UTC-04:00">(UTC-04:00) Atlantic Time (Canada)</SelectItem>
                            <SelectItem value="UTC-03:00">(UTC-03:00) Argentina, Brazil</SelectItem>
                            <SelectItem value="UTC-02:00">(UTC-02:00) Mid-Atlantic</SelectItem>
                            <SelectItem value="UTC-01:00">(UTC-01:00) Azores</SelectItem>
                            <SelectItem value="UTC+00:00">(UTC+00:00) London, Dublin, Edinburgh</SelectItem>
                            <SelectItem value="UTC+01:00">(UTC+01:00) Madrid, Paris, Berlin</SelectItem>
                            <SelectItem value="UTC+02:00">(UTC+02:00) Cairo, Helsinki, Athens</SelectItem>
                            <SelectItem value="UTC+03:00">(UTC+03:00) Moscow, Baghdad, Kuwait</SelectItem>
                            <SelectItem value="UTC+04:00">(UTC+04:00) Abu Dhabi, Muscat</SelectItem>
                            <SelectItem value="UTC+05:00">(UTC+05:00) Islamabad, Karachi</SelectItem>
                            <SelectItem value="UTC+05:30">(UTC+05:30) Mumbai, New Delhi</SelectItem>
                            <SelectItem value="UTC+06:00">(UTC+06:00) Almaty, Dhaka</SelectItem>
                            <SelectItem value="UTC+07:00">(UTC+07:00) Bangkok, Hanoi, Jakarta</SelectItem>
                            <SelectItem value="UTC+08:00">(UTC+08:00) Beijing, Singapore, Perth</SelectItem>
                            <SelectItem value="UTC+09:00">(UTC+09:00) Tokyo, Seoul, Osaka</SelectItem>
                            <SelectItem value="UTC+10:00">(UTC+10:00) Canberra, Melbourne, Sydney</SelectItem>
                            <SelectItem value="UTC+11:00">(UTC+11:00) Magadan, Solomon Is.</SelectItem>
                            <SelectItem value="UTC+12:00">(UTC+12:00) Auckland, Fiji</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="level">{t('book.level')}</Label>
                        <Select value={customerInfo.level} onValueChange={(value) => setCustomerInfo({...customerInfo, level: value})}>
                          <SelectTrigger>
                            <SelectValue placeholder="Select your level" />
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
                      
                      <div className="space-y-2">
                        <Label htmlFor="goals">{t('book.goals')}</Label>
                        <Textarea 
                          id="goals" 
                          value={customerInfo.goals}
                          onChange={(e) => setCustomerInfo({...customerInfo, goals: e.target.value})}
                          placeholder={t('book.goals.placeholder')}
                          className="min-h-[100px]"
                        />
                      </div>

                      <Button 
                        onClick={handleContinueToPayment} 
                        className="w-full bg-sarai-primary hover:bg-sarai-primary/90"
                        disabled={!customerInfo.name || !customerInfo.email || !customerInfo.level}
                      >
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
                        
                        <AvailabilityCalendar />
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
                    <CardContent className="space-y-4">
                      <div className="border-b border-gray-200 pb-4">
                        <div className="flex items-center justify-between">
                          <div>
                            <h3 className="font-bold text-sarai-text">{selectedService.name}</h3>
                            <p className="text-sm text-gray-600">{selectedService.duration}</p>
                          </div>
                          <div className="text-xl font-bold text-sarai-primary">
                            €{selectedService.price.toFixed(2)}
                          </div>
                        </div>
                      </div>
                      
                      <div className="space-y-2">
                        <h4 className="font-semibold text-sarai-text">Customer Details:</h4>
                        <p className="text-sm"><strong>Name:</strong> {customerInfo.name}</p>
                        <p className="text-sm"><strong>Email:</strong> {customerInfo.email}</p>
                        <p className="text-sm"><strong>Level:</strong> {customerInfo.level}</p>
                        <p className="text-sm"><strong>Goals:</strong> {customerInfo.goals}</p>
                      </div>

                      {paymentStatus === 'error' && (
                        <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
                          <p className="text-red-700 text-sm">{errorMessage}</p>
                        </div>
                      )}
                    </CardContent>
                  </Card>
                </div>
              </motion.div>
            )}

            {/* Step 4: Confirmation */}
            {step === 4 && paymentStatus === 'success' && selectedService && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-center"
              >
                <div className="max-w-2xl mx-auto">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6"
                  >
                    <CheckCircle className="h-12 w-12 text-green-600" />
                  </motion.div>
                  
                  <h2 className="text-3xl font-bold text-sarai-text mb-4">
                    ¡Booking Confirmed!
                  </h2>
                  
                  <p className="text-lg text-gray-600 mb-8">
                    Thank you for booking your {selectedService.name}! You'll receive a confirmation email shortly with all the details and next steps.
                  </p>

                  <Card className="text-left">
                    <CardHeader>
                      <CardTitle>What happens next?</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="flex items-start space-x-3">
                        <div className="w-6 h-6 bg-sarai-primary text-white rounded-full flex items-center justify-center text-sm font-bold mt-1">1</div>
                        <div>
                          <h4 className="font-semibold">Confirmation Email</h4>
                          <p className="text-sm text-gray-600">You'll receive an email with your booking details and calendar invite.</p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <div className="w-6 h-6 bg-sarai-primary text-white rounded-full flex items-center justify-center text-sm font-bold mt-1">2</div>
                        <div>
                          <h4 className="font-semibold">Schedule Your Class</h4>
                          <p className="text-sm text-gray-600">I'll contact you within 24 hours to schedule your class at a convenient time.</p>
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

                  <div className="mt-8">
                    <Button 
                      onClick={() => window.location.href = '/'}
                      className="bg-sarai-primary hover:bg-sarai-primary/90"
                    >
                      Return to Home
                    </Button>
                  </div>
                </div>
              </motion.div>
            )}
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default BookClass;
