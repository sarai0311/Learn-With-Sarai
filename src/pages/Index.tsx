
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import TestimonialCard from '@/components/TestimonialCard';
import { Button } from '@/components/ui/button';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        <Hero />
        
        {/* Benefits Section */}
        <section className="sarai-section bg-white">
          <div className="sarai-container">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-sarai-text">
                Why Learn Spanish with Me?
              </h2>
              <p className="mt-4 text-gray-600 max-w-3xl mx-auto">
                Discover how my personalized online Spanish lessons can help you reach your goals
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
              {/* Benefit 1 */}
              <div className="bg-white p-6 rounded-lg border border-gray-100 shadow-sm transition-all duration-300 hover:shadow-md">
                <div className="w-14 h-14 bg-sarai-primary/10 rounded-full flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-sarai-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2 text-sarai-text">Personalized Learning</h3>
                <p className="text-gray-600">
                  Classes designed just for you - focused on your goals, learning style, and pace. No generic curriculum, just what you actually need.
                </p>
              </div>
              
              {/* Benefit 2 */}
              <div className="bg-white p-6 rounded-lg border border-gray-100 shadow-sm transition-all duration-300 hover:shadow-md">
                <div className="w-14 h-14 bg-sarai-primary/10 rounded-full flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-sarai-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2 text-sarai-text">Flexible Scheduling</h3>
                <p className="text-gray-600">
                  Book classes when it works for you with our easy booking system that adapts to your time zone, wherever you are.
                </p>
              </div>
              
              {/* Benefit 3 */}
              <div className="bg-white p-6 rounded-lg border border-gray-100 shadow-sm transition-all duration-300 hover:shadow-md">
                <div className="w-14 h-14 bg-sarai-primary/10 rounded-full flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-sarai-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2 text-sarai-text">Certified Professional</h3>
                <p className="text-gray-600">
                  Learn with a certified Spanish teacher with experience teaching students from around the world with proven results.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* How It Works */}
        <section className="sarai-section bg-gray-50">
          <div className="sarai-container">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-sarai-text">
                How It Works
              </h2>
              <p className="mt-4 text-gray-600 max-w-3xl mx-auto">
                Start your Spanish learning journey in three simple steps
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
              {/* Step 1 */}
              <div className="relative">
                <div className="bg-white p-6 rounded-lg border border-gray-100 shadow-sm h-full">
                  <div className="w-10 h-10 bg-sarai-primary rounded-full flex items-center justify-center text-white font-bold mb-4">
                    1
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-sarai-text">Book a Trial Class</h3>
                  <p className="text-gray-600">
                    Schedule a 25-minute trial class to discuss your goals and assess your current level. Just $12.50 to get started.
                  </p>
                </div>
                <div className="hidden md:block absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2">
                  <svg className="w-8 h-8 text-sarai-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </div>
              </div>
              
              {/* Step 2 */}
              <div className="relative">
                <div className="bg-white p-6 rounded-lg border border-gray-100 shadow-sm h-full">
                  <div className="w-10 h-10 bg-sarai-primary rounded-full flex items-center justify-center text-white font-bold mb-4">
                    2
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-sarai-text">Get a Learning Plan</h3>
                  <p className="text-gray-600">
                    Receive a customized learning plan based on what you want to achieve, your preferences, and your schedule.
                  </p>
                </div>
                <div className="hidden md:block absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2">
                  <svg className="w-8 h-8 text-sarai-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </div>
              </div>
              
              {/* Step 3 */}
              <div>
                <div className="bg-white p-6 rounded-lg border border-gray-100 shadow-sm h-full">
                  <div className="w-10 h-10 bg-sarai-primary rounded-full flex items-center justify-center text-white font-bold mb-4">
                    3
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-sarai-text">Start Learning</h3>
                  <p className="text-gray-600">
                    Begin your classes in our virtual classroom with personalized materials and ongoing support between sessions.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="mt-12 text-center">
              <Link to="/book">
                <Button className="bg-sarai-secondary hover:bg-sarai-secondary/90 text-white">
                  Schedule Your Trial Class
                </Button>
              </Link>
            </div>
          </div>
        </section>
        
        {/* Testimonials */}
        <section className="sarai-section bg-white">
          <div className="sarai-container">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-sarai-text">
                What My Students Say
              </h2>
              <p className="mt-4 text-gray-600 max-w-3xl mx-auto">
                Hear from students who are already improving their Spanish
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <TestimonialCard
                name="Jahquahiel"
                country="United States"
                text="Sarai has to be one of the best teachers on this platform, she has kept the same positive energy since day one and I feel like I've already learned so much in one month. 10/10 would recommend!"
                image="https://randomuser.me/api/portraits/men/32.jpg"
                rating={5}
              />
              <TestimonialCard
                name="Neil"
                country="United Kingdom"
                text="I just finished my lesson with Sarai and right from the start I saw she came well prepared for the class and was extremely professional, and a super warm and nice person who is ready to help you with whatever you need to improve your Spanish."
                image="https://randomuser.me/api/portraits/men/44.jpg"
                rating={5}
              />
              <TestimonialCard
                name="Caleb"
                country="United States"
                text="Sarai is kind and incredibly patient. She's a great listener and seems very adaptable. Her specialty is flexibility and conversation. Unlike most teachers on Preply (from my experience), Sarai will adjust to meet your needs."
                image="https://randomuser.me/api/portraits/men/22.jpg"
                rating={5}
              />
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="bg-sarai-primary text-white py-16">
          <div className="sarai-container">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Ready to Start Your Spanish Journey?
              </h2>
              <p className="text-xl mb-8">
                Book your 25-minute trial class for just $12.50 and take the first step towards Spanish fluency.
              </p>
              <Link to="/book">
                <Button className="bg-white text-sarai-primary hover:bg-gray-100 font-semibold py-3 px-8 text-lg">
                  Book Your Trial Class
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
