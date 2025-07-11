import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AvailabilityCalendar from "@/components/AvailabilityCalendar";
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const BookClass = () => {
  const [step, setStep] = useState(1);

  const handleContinue = () => {
    setStep(2);
    window.scrollTo(0, 0);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, this would submit the form data
    alert("Great! Your payment is being processed. Once completed, your class will be confirmed and you'll receive an email with all details.");
    setStep(3);
    window.scrollTo(0, 0);
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
                Book a Spanish Class
              </h1>
              <p className="text-xl opacity-90">
                Schedule your personalized lesson at a time that works for you
              </p>
            </div>
          </div>
        </section>
        
        {/* Booking Steps */}
        <section className="sarai-section bg-white">
          <div className="sarai-container">
            {/* Progress Steps */}
            <div className="max-w-4xl mx-auto mb-10">
              <div className="flex items-center justify-center">
                <div className={`flex flex-col items-center ${step >= 1 ? 'text-sarai-primary' : 'text-gray-400'}`}>
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center text-white mb-2 ${step >= 1 ? 'bg-sarai-primary' : 'bg-gray-300'}`}>
                    1
                  </div>
                  <span className="text-sm font-medium">Select Time</span>
                </div>
                <div className={`w-16 h-0.5 mx-1 ${step >= 2 ? 'bg-sarai-primary' : 'bg-gray-300'}`} />
                <div className={`flex flex-col items-center ${step >= 2 ? 'text-sarai-primary' : 'text-gray-400'}`}>
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center text-white mb-2 ${step >= 2 ? 'bg-sarai-primary' : 'bg-gray-300'}`}>
                    2
                  </div>
                  <span className="text-sm font-medium">Your Details</span>
                </div>
                <div className={`w-16 h-0.5 mx-1 ${step >= 3 ? 'bg-sarai-primary' : 'bg-gray-300'}`} />
                <div className={`flex flex-col items-center ${step >= 3 ? 'text-sarai-primary' : 'text-gray-400'}`}>
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center text-white mb-2 ${step >= 3 ? 'bg-sarai-primary' : 'bg-gray-300'}`}>
                    3
                  </div>
                  <span className="text-sm font-medium">Payment & Confirmation</span>
                </div>
              </div>
            </div>
            
            {/* Step 1: Select Time */}
            {step === 1 && (
              <div className="max-w-4xl mx-auto">
                <div className="mb-10">
                  <h2 className="text-2xl font-bold text-sarai-text mb-4">
                    Pick a Time That Works For You
                  </h2>
                  <p className="text-gray-600">
                    Choose a time slot that fits your schedule. I'm available Monday to Friday from 2 PM to 10 PM (Las Palmas, Gran Canaria time zone).
                  </p>
                </div>
                
                <Card>
                  <CardContent className="pt-6">
                    <AvailabilityCalendar />
                  </CardContent>
                </Card>
                
                <div className="mt-8 flex justify-end">
                  <Button onClick={handleContinue} className="bg-sarai-primary hover:bg-sarai-primary/90">
                    Continue to Details
                  </Button>
                </div>
              </div>
            )}
            
            {/* Step 2: Your Details */}
            {step === 2 && (
              <div className="max-w-2xl mx-auto">
                <div className="mb-10">
                  <h2 className="text-2xl font-bold text-sarai-text mb-4">
                    Tell Me About Yourself
                  </h2>
                  <p className="text-gray-600">
                    Share a few details so I can prepare for our class!
                  </p>
                </div>
                
                <Card>
                  <CardContent>
                    <form onSubmit={handleSubmit} className="space-y-6 pt-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <Label htmlFor="firstName">First Name</Label>
                          <Input id="firstName" required />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="lastName">Last Name</Label>
                          <Input id="lastName" required />
                        </div>
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="email">Email Address</Label>
                        <Input id="email" type="email" required />
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="level">Your Spanish Level</Label>
                        <Select defaultValue="beginner">
                          <SelectTrigger>
                            <SelectValue placeholder="Select your level" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="complete-beginner">Complete Beginner</SelectItem>
                            <SelectItem value="beginner">Beginner</SelectItem>
                            <SelectItem value="intermediate">Intermediate</SelectItem>
                            <SelectItem value="advanced">Advanced</SelectItem>
                            <SelectItem value="fluent">Near Fluent</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="goals">What Do You Want to Achieve?</Label>
                        <Textarea 
                          id="goals" 
                          placeholder="Tell me about your goals with Spanish - travel, work, family connections, etc."
                          className="min-h-[100px]"
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="classType">Class Type</Label>
                        <Select defaultValue="trial">
                          <SelectTrigger>
                            <SelectValue placeholder="Select class type" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="trial">Trial Class (25 min - €10.50)</SelectItem>
                            <SelectItem value="standard">Standard Class (50 min - €21.00)</SelectItem>
                            <SelectItem value="premium">Premium Class (75 min - €31.50)</SelectItem>
                            <SelectItem value="business">Business Spanish (50 min - €25.00)</SelectItem>
                            <SelectItem value="exam">DELE/SIELE Exam Prep (50 min - €30.00)</SelectItem>
                            <SelectItem value="travel">Spanish for Travel (Custom)</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      
                      <div className="flex justify-end gap-4">
                        <Button 
                          type="button" 
                          onClick={() => setStep(1)} 
                          variant="outline"
                        >
                          Back
                        </Button>
                        <Button 
                          type="submit" 
                          className="bg-sarai-primary hover:bg-sarai-primary/90"
                        >
                          Continue to Payment
                        </Button>
                      </div>
                    </form>
                  </CardContent>
                </Card>
              </div>
            )}
            
            {/* Step 3: Confirmation */}
            {step === 3 && (
              <div className="max-w-2xl mx-auto text-center">
                <div className="mb-8">
                  <div className="w-20 h-20 bg-sarai-accent/20 rounded-full flex items-center justify-center mx-auto mb-6">
                    <svg className="w-10 h-10 text-sarai-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h2 className="text-3xl font-bold text-sarai-text mb-4">
                    Almost There!
                  </h2>
                  <p className="text-gray-600 max-w-md mx-auto">
                    We're processing your payment. Once completed, your Spanish class will be confirmed and you'll get an email with all the details.
                  </p>
                </div>
                
                <Card>
                  <CardHeader>
                    <CardTitle>Your Booking Details</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4 text-left">
                      <div className="flex justify-between items-center pb-2 border-b border-gray-100">
                        <span className="text-gray-600">Class Type:</span>
                        <span className="font-medium">Trial Class (25 min)</span>
                      </div>
                      <div className="flex justify-between items-center pb-2 border-b border-gray-100">
                        <span className="text-gray-600">Date & Time:</span>
                        <span className="font-medium">Wednesday, May 21, 2025 at 5:00 PM</span>
                      </div>
                      <div className="flex justify-between items-center pb-2 border-b border-gray-100">
                        <span className="text-gray-600">Time Zone:</span>
                        <span className="font-medium">Las Palmas, Gran Canaria</span>
                      </div>
                      <div className="flex justify-between items-center pb-2 border-b border-gray-100">
                        <span className="text-gray-600">Price:</span>
                        <span className="font-medium">€10.50</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                
                <div className="mt-8 space-y-4">
                  <p className="text-gray-600">
                    Questions about your booking?
                  </p>
                  <div className="flex flex-wrap justify-center gap-4">
                    <Button variant="outline">
                      Contact Sarai
                    </Button>
                    <Button className="bg-sarai-secondary hover:bg-sarai-secondary/90">
                      Add to Calendar
                    </Button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default BookClass;
