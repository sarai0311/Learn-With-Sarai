
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ServiceCard from "@/components/ServiceCard";
import ScrollAnimation from '@/components/ScrollAnimation';
import { Link } from 'react-router-dom';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { motion } from 'framer-motion';

const Services = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        {/* Header */}
        <section className="bg-sarai-primary text-white py-16">
          <div className="sarai-container">
            <ScrollAnimation direction="up" className="max-w-3xl mx-auto text-center">
              <h1 className="text-3xl md:text-4xl font-bold mb-4">
                Spanish Learning Services
              </h1>
              <p className="text-xl opacity-90">
                Classes designed just for you to help you reach your language goals
              </p>
            </ScrollAnimation>
          </div>
        </section>
        
        {/* Services Tabs */}
        <section className="sarai-section bg-white">
          <div className="sarai-container">
            <ScrollAnimation direction="up" delay={0.2}>
              <Tabs defaultValue="individual" className="w-full">
                <div className="flex justify-center mb-8">
                  <TabsList className="bg-gray-100">
                    <TabsTrigger value="individual" className="px-6 py-3">Individual Classes</TabsTrigger>
                    <TabsTrigger value="packages" className="px-6 py-3">Class Packages</TabsTrigger>
                    <TabsTrigger value="specialized" className="px-6 py-3">Specialized Classes</TabsTrigger>
                  </TabsList>
                </div>
                
                {/* Individual Classes */}
                <TabsContent value="individual">
                  <ScrollAnimation direction="up" delay={0.1} className="text-center mb-8">
                    <h2 className="text-2xl md:text-3xl font-bold text-sarai-text mb-4">
                      One-on-One Spanish Classes
                    </h2>
                    <p className="text-gray-600 max-w-3xl mx-auto">
                      Personalized individual lessons tailored to your specific needs and learning style
                    </p>
                  </ScrollAnimation>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <ScrollAnimation direction="left" delay={0.2}>
                      <motion.div whileHover={{ y: -10 }} transition={{ duration: 0.3 }}>
                        <ServiceCard
                          title="Trial Class"
                          description="Try a 25-minute class to assess your level and discuss your learning goals."
                          icon="🎁"
                          price="$9.99"
                          features={[
                            "Level assessment",
                            "Learning goals discussion",
                            "Personalized learning plan",
                            "Q&A about methodology",
                            "Payment required to book"
                          ]}
                        />
                      </motion.div>
                    </ScrollAnimation>
                    <ScrollAnimation direction="up" delay={0.4}>
                      <motion.div whileHover={{ y: -10 }} transition={{ duration: 0.3 }}>
                        <ServiceCard
                          title="Standard Class"
                          description="Regular one-on-one Spanish lessons focused on your specific learning goals."
                          icon="📚"
                          price="$25.00"
                          features={[
                            "50-minute sessions",
                            "Customized curriculum",
                            "Homework assignments",
                            "Progress tracking",
                            "Flexible scheduling"
                          ]}
                        />
                      </motion.div>
                    </ScrollAnimation>
                    <ScrollAnimation direction="right" delay={0.6}>
                      <motion.div whileHover={{ y: -10 }} transition={{ duration: 0.3 }}>
                        <ServiceCard
                          title="Premium Class"
                          description="Extended sessions for faster progress with additional materials and support."
                          icon="⭐"
                          price="$35.00"
                          features={[
                            "75-minute sessions",
                            "Personalized learning materials",
                            "Interactive exercises",
                            "Email support between classes",
                            "Monthly progress report"
                          ]}
                        />
                      </motion.div>
                    </ScrollAnimation>
                  </div>
                </TabsContent>
                
                {/* Class Packages */}
                <TabsContent value="packages">
                  <ScrollAnimation direction="up" delay={0.1} className="text-center mb-8">
                    <h2 className="text-2xl md:text-3xl font-bold text-sarai-text mb-4">
                      Class Packages
                    </h2>
                    <p className="text-gray-600 max-w-3xl mx-auto">
                      Save money with discounted class packages while committing to consistent learning
                    </p>
                  </ScrollAnimation>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <ScrollAnimation direction="left" delay={0.2}>
                      <motion.div whileHover={{ y: -10 }} transition={{ duration: 0.3 }}>
                        <ServiceCard
                          title="Starter Package"
                          description="Perfect for beginners or those testing the waters with consistent learning."
                          icon="🚀"
                          price="$116.25"
                          features={[
                            "5 standard classes",
                            "$23.25 per class (7% off)",
                            "Valid for 2 months",
                            "Basic study materials included",
                            "Flexible scheduling"
                          ]}
                        />
                      </motion.div>
                    </ScrollAnimation>
                    <ScrollAnimation direction="up" delay={0.4}>
                      <motion.div whileHover={{ y: -10 }} transition={{ duration: 0.3 }}>
                        <ServiceCard
                          title="Committed Learner"
                          description="Our most popular package for steady and consistent progress."
                          icon="🔥"
                          price="$215.00"
                          features={[
                            "10 standard classes",
                            "$21.50 per class (14% off)",
                            "Valid for 3 months",
                            "Complete study materials",
                            "Priority scheduling"
                          ]}
                        />
                      </motion.div>
                    </ScrollAnimation>
                    <ScrollAnimation direction="right" delay={0.6}>
                      <motion.div whileHover={{ y: -10 }} transition={{ duration: 0.3 }}>
                        <ServiceCard
                          title="Immersion Package"
                          description="Intensive learning experience for rapid progress and deep immersion."
                          icon="🌟"
                          price="$360.00"
                          features={[
                            "20 standard classes",
                            "$18.00 per class (28% off)",
                            "Valid for 6 months",
                            "Premium learning materials",
                            "Chat support between sessions"
                          ]}
                        />
                      </motion.div>
                    </ScrollAnimation>
                  </div>
                </TabsContent>
                
                {/* Specialized Classes */}
                <TabsContent value="specialized">
                  <ScrollAnimation direction="up" delay={0.1} className="text-center mb-8">
                    <h2 className="text-2xl md:text-3xl font-bold text-sarai-text mb-4">
                      Specialized Learning Programs
                    </h2>
                    <p className="text-gray-600 max-w-3xl mx-auto">
                      Focused courses designed for specific goals and contexts
                    </p>
                  </ScrollAnimation>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                    <ScrollAnimation direction="left" delay={0.2}>
                      <motion.div whileHover={{ y: -10 }} transition={{ duration: 0.3 }}>
                        <ServiceCard
                          title="Spanish for Travel"
                          description="Quick, practical Spanish skills for travelers heading to Spanish-speaking countries."
                          icon="✈️"
                          price="$28.00"
                          features={[
                            "60-minute sessions",
                            "Survival phrases & vocabulary",
                            "Cultural etiquette guidance",
                            "Travel-specific role play",
                            "Practical pronunciation focus",
                            "Regional dialect awareness"
                          ]}
                        />
                      </motion.div>
                    </ScrollAnimation>
                    <ScrollAnimation direction="right" delay={0.4}>
                      <motion.div whileHover={{ y: -10 }} transition={{ duration: 0.3 }}>
                        <ServiceCard
                          title="Colombian Spanish"
                          description="Learn the unique accent, expressions, and cultural nuances of Colombian Spanish."
                          icon="🇨🇴"
                          price="$28.00"
                          features={[
                            "60-minute sessions",
                            "Colombian accent & pronunciation",
                            "Regional expressions & slang",
                            "Cultural context & customs",
                            "Paisa, Costeño & Bogotano dialects",
                            "Native Colombian instructor"
                          ]}
                        />
                      </motion.div>
                    </ScrollAnimation>
                  </div>
                </TabsContent>
              </Tabs>
            </ScrollAnimation>
          </div>
        </section>
        
        {/* How Classes Work */}
        <section className="sarai-section bg-gray-50">
          <div className="sarai-container">
            <ScrollAnimation direction="up" className="text-center mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-sarai-text mb-4">
                How My Classes Work
              </h2>
              <p className="text-gray-600 max-w-3xl mx-auto">
                A seamless online learning experience designed for your convenience
              </p>
            </ScrollAnimation>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <ScrollAnimation direction="left" delay={0.2} className="order-2 md:order-1">
                <div className="space-y-8">
                  <motion.div 
                    whileHover={{ x: 10 }}
                    transition={{ duration: 0.3 }}
                    className="flex gap-4"
                  >
                    <motion.div 
                      whileHover={{ scale: 1.1, rotate: 360 }}
                      transition={{ duration: 0.5 }}
                      className="flex-shrink-0 w-12 h-12 bg-sarai-primary text-white rounded-full flex items-center justify-center font-bold text-lg"
                    >
                      1
                    </motion.div>
                    <div>
                      <h3 className="text-xl font-bold text-sarai-text mb-2">Book Your Class</h3>
                      <p className="text-gray-600">
                        Choose a time slot that works for you through our easy online booking system, aligned with your time zone.
                      </p>
                    </div>
                  </motion.div>
                  
                  <motion.div 
                    whileHover={{ x: 10 }}
                    transition={{ duration: 0.3 }}
                    className="flex gap-4"
                  >
                    <motion.div 
                      whileHover={{ scale: 1.1, rotate: 360 }}
                      transition={{ duration: 0.5 }}
                      className="flex-shrink-0 w-12 h-12 bg-sarai-primary text-white rounded-full flex items-center justify-center font-bold text-lg"
                    >
                      2
                    </motion.div>
                    <div>
                      <h3 className="text-xl font-bold text-sarai-text mb-2">Complete Your Payment</h3>
                      <p className="text-gray-600">
                        Secure your spot by completing the payment. Your booking is only confirmed after payment is received.
                      </p>
                    </div>
                  </motion.div>
                  
                  <motion.div 
                    whileHover={{ x: 10 }}
                    transition={{ duration: 0.3 }}
                    className="flex gap-4"
                  >
                    <motion.div 
                      whileHover={{ scale: 1.1, rotate: 360 }}
                      transition={{ duration: 0.5 }}
                      className="flex-shrink-0 w-12 h-12 bg-sarai-primary text-white rounded-full flex items-center justify-center font-bold text-lg"
                    >
                      3
                    </motion.div>
                    <div>
                      <h3 className="text-xl font-bold text-sarai-text mb-2">Receive Confirmation</h3>
                      <p className="text-gray-600">
                        Get an email confirmation with your class details and a link to join the virtual classroom.
                      </p>
                    </div>
                  </motion.div>
                  
                  <motion.div 
                    whileHover={{ x: 10 }}
                    transition={{ duration: 0.3 }}
                    className="flex gap-4"
                  >
                    <motion.div 
                      whileHover={{ scale: 1.1, rotate: 360 }}
                      transition={{ duration: 0.5 }}
                      className="flex-shrink-0 w-12 h-12 bg-sarai-primary text-white rounded-full flex items-center justify-center font-bold text-lg"
                    >
                      4
                    </motion.div>
                    <div>
                      <h3 className="text-xl font-bold text-sarai-text mb-2">Enjoy Your Class</h3>
                      <p className="text-gray-600">
                        Join the virtual classroom at your scheduled time and start learning! You'll receive materials and homework after class.
                      </p>
                    </div>
                  </motion.div>
                </div>
              </ScrollAnimation>
              
              <ScrollAnimation direction="right" delay={0.4} className="order-1 md:order-2 flex justify-center">
                <div className="relative">
                  <motion.div 
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    className="absolute -top-6 -left-6 w-40 h-40 bg-sarai-secondary/10 rounded-full"
                  ></motion.div>
                  <motion.div 
                    animate={{ rotate: -360 }}
                    transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                    className="absolute -bottom-6 -right-6 w-40 h-40 bg-sarai-primary/10 rounded-full"
                  ></motion.div>
                  <div className="relative z-10">
                    <motion.img 
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.3 }}
                      src="https://images.unsplash.com/photo-1609749660110-1bca47994248?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80" 
                      alt="Online Spanish Class" 
                      className="rounded-lg shadow-lg w-full h-auto"
                    />
                  </div>
                </div>
              </ScrollAnimation>
            </div>
          </div>
        </section>
        
        {/* FAQ Section */}
        <section className="sarai-section bg-white">
          <div className="sarai-container">
            <ScrollAnimation direction="up" className="text-center mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-sarai-text mb-4">
                Frequently Asked Questions
              </h2>
            </ScrollAnimation>
            
            <div className="max-w-3xl mx-auto divide-y divide-gray-200">
              <ScrollAnimation direction="left" delay={0.1}>
                <motion.div 
                  whileHover={{ x: 10 }}
                  transition={{ duration: 0.3 }}
                  className="py-6"
                >
                  <h3 className="text-lg font-semibold text-sarai-text mb-2">
                    What technology do I need for online classes?
                  </h3>
                  <p className="text-gray-600">
                    You just need a computer or tablet with a stable internet connection, a webcam, and a microphone. We'll use a simple virtual classroom platform that's easy to access.
                  </p>
                </motion.div>
              </ScrollAnimation>
              
              <ScrollAnimation direction="right" delay={0.2}>
                <motion.div 
                  whileHover={{ x: -10 }}
                  transition={{ duration: 0.3 }}
                  className="py-6"
                >
                  <h3 className="text-lg font-semibold text-sarai-text mb-2">
                    Do I need to purchase any textbooks?
                  </h3>
                  <p className="text-gray-600">
                    Nope! All learning materials are included in your class fee. I create custom materials based on what you need and your learning style.
                  </p>
                </motion.div>
              </ScrollAnimation>
              
              <ScrollAnimation direction="left" delay={0.3}>
                <motion.div 
                  whileHover={{ x: 10 }}
                  transition={{ duration: 0.3 }}
                  className="py-6"
                >
                  <h3 className="text-lg font-semibold text-sarai-text mb-2">
                    What if I need to cancel or reschedule a class?
                  </h3>
                  <p className="text-gray-600">
                    Classes can be rescheduled with at least 24 hours' notice at no charge. Cancellations with less than 24 hours' notice may be charged a fee or forfeit the class.
                  </p>
                </motion.div>
              </ScrollAnimation>
              
              <ScrollAnimation direction="right" delay={0.4}>
                <motion.div 
                  whileHover={{ x: -10 }}
                  transition={{ duration: 0.3 }}
                  className="py-6"
                >
                  <h3 className="text-lg font-semibold text-sarai-text mb-2">
                    How do I pay for classes?
                  </h3>
                  <p className="text-gray-600">
                    Payments can be made securely online via credit card, PayPal, or bank transfer. All classes must be paid for in advance to confirm your booking.
                  </p>
                </motion.div>
              </ScrollAnimation>
              
              <ScrollAnimation direction="up" delay={0.5}>
                <motion.div 
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.3 }}
                  className="py-6"
                >
                  <h3 className="text-lg font-semibold text-sarai-text mb-2">
                    How quickly will I learn Spanish?
                  </h3>
                  <p className="text-gray-600">
                    Everyone learns at their own pace, depending on your starting level, goals, and how much you practice between classes. Most students notice real improvement within 2-3 months of consistent weekly lessons.
                  </p>
                </motion.div>
              </ScrollAnimation>
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="bg-sarai-accent text-white py-16">
          <div className="sarai-container">
            <ScrollAnimation direction="up" className="max-w-3xl mx-auto text-center">
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Ready to Start Learning Spanish?
                </h2>
                <p className="text-xl mb-8">
                  Book your trial class today for just $9.99 and take the first step towards fluency.
                </p>
                <Link to="/book">
                  <motion.div 
                    whileHover={{ scale: 1.05, y: -5 }} 
                    whileTap={{ scale: 0.95 }}
                  >
                    <button className="bg-white text-sarai-accent hover:bg-gray-100 font-semibold py-3 px-8 rounded-md transition-all duration-200">
                      Schedule Your Trial Class
                    </button>
                  </motion.div>
                </Link>
              </motion.div>
            </ScrollAnimation>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Services;
