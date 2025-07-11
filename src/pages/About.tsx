import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollAnimation from '@/components/ScrollAnimation';
import { motion } from 'framer-motion';
import { BookOpen, Globe, Heart, Award, GraduationCap, Users, Star, CheckCircle, Target, Clock, MessageCircle } from 'lucide-react';

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-sarai-ice via-sarai-lightblue to-white py-16 lg:py-24">
          <div className="sarai-container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <ScrollAnimation direction="left">
                <div>
                  <h1 className="text-4xl md:text-5xl font-bold text-sarai-text mb-6">
                    Meet Your <span className="text-sarai-secondary">Spanish Teacher</span>
                  </h1>
                  <p className="text-lg text-sarai-steel mb-6">
                    Hello! I'm Sarai, a certified Spanish teacher from Colombia. My passion is helping students from around the world achieve their Spanish language goals in a personalized, effective, and fun way.
                  </p>
                  <div className="flex flex-wrap gap-4">
                    <div className="flex items-center bg-white px-4 py-2 rounded-lg shadow-sm">
                      <Globe className="h-5 w-5 text-sarai-primary mr-2" />
                      <span className="text-sm font-medium">International Students</span>
                    </div>
                    <div className="flex items-center bg-white px-4 py-2 rounded-lg shadow-sm">
                      <Award className="h-5 w-5 text-sarai-secondary mr-2" />
                      <span className="text-sm font-medium">Outstanding Educator</span>
                    </div>
                  </div>
                </div>
              </ScrollAnimation>
              
              <ScrollAnimation direction="right">
                <div className="relative flex justify-center">
                  <div className="absolute -top-6 -left-6 w-40 h-40 bg-sarai-primary/20 rounded-full animate-pulse"></div>
                  <div className="absolute -bottom-6 -right-6 w-40 h-40 bg-sarai-secondary/20 rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
                  
                  <div className="relative z-10 bg-white p-8 rounded-2xl shadow-xl">
                    <div className="w-80 h-80 bg-gradient-to-br from-sarai-primary via-sarai-secondary to-sarai-accent rounded-xl flex items-center justify-center">
                      <div className="text-center text-white">
                        <GraduationCap className="h-24 w-24 mx-auto mb-4 opacity-90" />
                        <h3 className="text-3xl font-bold mb-2">Teacher Sarai</h3>
                        <p className="text-xl opacity-90">Spanish Specialist</p>
                        <div className="flex justify-center mt-4">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className="w-6 h-6 fill-current text-yellow-300" />
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </ScrollAnimation>
            </div>
          </div>
        </section>
        
        {/* Mi Historia Section */}
        <section className="sarai-section bg-white">
          <div className="sarai-container">
            <ScrollAnimation direction="up" className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-sarai-text mb-4">
                My Story
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Discover how my passion for languages became my mission to help others
              </p>
            </ScrollAnimation>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <ScrollAnimation direction="left">
                <div className="relative">
                  <div className="bg-gradient-to-br from-sarai-primary/10 to-sarai-secondary/10 p-8 rounded-2xl">
                    <div className="w-full h-64 bg-gradient-to-br from-sarai-primary via-sarai-secondary to-sarai-accent rounded-xl flex items-center justify-center mb-6">
                      <div className="text-center text-white">
                        <Heart className="h-16 w-16 mx-auto mb-4 opacity-90" />
                        <p className="text-xl font-semibold">Passion for Teaching</p>
                      </div>
                    </div>
                    <div className="absolute -top-4 -right-4 bg-white p-3 rounded-full shadow-lg">
                      <BookOpen className="h-8 w-8 text-sarai-secondary" />
                    </div>
                  </div>
                </div>
              </ScrollAnimation>
              
              <ScrollAnimation direction="right">
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-12 h-12 bg-sarai-primary/20 rounded-full flex items-center justify-center mr-4">
                      <Globe className="h-6 w-6 text-sarai-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-sarai-text mb-2">International Experience</h3>
                      <p className="text-gray-600">
                        I've had the opportunity to work with students from different cultures and nationalities, 
                        which has allowed me to understand each student's specific needs and adapt my teaching methods.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-12 h-12 bg-sarai-secondary/20 rounded-full flex items-center justify-center mr-4">
                      <Heart className="h-6 w-6 text-sarai-secondary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-sarai-text mb-2">Passion for Teaching</h3>
                      <p className="text-gray-600">
                        My love for languages and education drives me to create meaningful learning experiences 
                        that go beyond traditional grammar.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-12 h-12 bg-sarai-accent/20 rounded-full flex items-center justify-center mr-4">
                      <Award className="h-6 w-6 text-sarai-accent" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-sarai-text mb-2">Commitment to Excellence</h3>
                      <p className="text-gray-600">
                        My recognition as an outstanding educator reflects my constant dedication to 
                        providing the best quality teaching and support to my students.
                      </p>
                    </div>
                  </div>
                </div>
              </ScrollAnimation>
            </div>
          </div>
        </section>

        {/* Mi Enfoque Section */}
        <section className="sarai-section bg-gray-50">
          <div className="sarai-container">
            <ScrollAnimation direction="up" className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-sarai-text mb-4">
                My Teaching Approach
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Discover how I make learning Spanish effective, fun, and personalized
              </p>
            </ScrollAnimation>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <ScrollAnimation direction="left" delay={0.2}>
                <motion.div 
                  whileHover={{ y: -10 }}
                  transition={{ duration: 0.3 }}
                  className="bg-white p-6 rounded-xl shadow-md h-full"
                >
                  <div className="w-16 h-16 bg-sarai-primary/20 rounded-full flex items-center justify-center mb-4">
                    <Target className="h-8 w-8 text-sarai-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-sarai-text mb-3">Personalized</h3>
                  <p className="text-gray-600">
                    Each class is designed specifically for you, adapting to your level, goals, and unique learning style.
                  </p>
                </motion.div>
              </ScrollAnimation>
              
              <ScrollAnimation direction="up" delay={0.4}>
                <motion.div 
                  whileHover={{ y: -10 }}
                  transition={{ duration: 0.3 }}
                  className="bg-white p-6 rounded-xl shadow-md h-full"
                >
                  <div className="w-16 h-16 bg-sarai-secondary/20 rounded-full flex items-center justify-center mb-4">
                    <MessageCircle className="h-8 w-8 text-sarai-secondary" />
                  </div>
                  <h3 className="text-xl font-bold text-sarai-text mb-3">Communicative</h3>
                  <p className="text-gray-600">
                    I prioritize real and practical communication from day one, so you can use Spanish in real situations.
                  </p>
                </motion.div>
              </ScrollAnimation>
              
              <ScrollAnimation direction="right" delay={0.6}>
                <motion.div 
                  whileHover={{ y: -10 }}
                  transition={{ duration: 0.3 }}
                  className="bg-white p-6 rounded-xl shadow-md h-full"
                >
                  <div className="w-16 h-16 bg-sarai-accent/20 rounded-full flex items-center justify-center mb-4">
                    <Heart className="h-8 w-8 text-sarai-accent" />
                  </div>
                  <h3 className="text-xl font-bold text-sarai-text mb-3">Fun</h3>
                  <p className="text-gray-600">
                    I believe learning should be enjoyable. I use games, stories, and interactive activities to make the process memorable.
                  </p>
                </motion.div>
              </ScrollAnimation>
            </div>
          </div>
        </section>

        {/* Por qué elegirme Section */}
        <section className="sarai-section bg-white">
          <div className="sarai-container">
            <ScrollAnimation direction="up" className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-sarai-text mb-4">
                Why Choose My Classes?
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                What sets me apart as your Spanish teacher
              </p>
            </ScrollAnimation>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <ScrollAnimation direction="left">
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-8 h-8 bg-sarai-secondary rounded-full flex items-center justify-center mr-4 mt-1">
                      <CheckCircle className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-sarai-text mb-2">Proven Methodology</h3>
                      <p className="text-gray-600">
                        I use modern and effective pedagogical approaches, adapted to the needs of online learning.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-8 h-8 bg-sarai-secondary rounded-full flex items-center justify-center mr-4 mt-1">
                      <CheckCircle className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-sarai-text mb-2">Total Flexibility</h3>
                      <p className="text-gray-600">
                        Schedules that adapt to your life, regardless of your time zone or busy agenda.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-8 h-8 bg-sarai-secondary rounded-full flex items-center justify-center mr-4 mt-1">
                      <CheckCircle className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-sarai-text mb-2">Continuous Support</h3>
                      <p className="text-gray-600">
                        You receive detailed feedback and additional resources between classes to accelerate your progress.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-8 h-8 bg-sarai-secondary rounded-full flex items-center justify-center mr-4 mt-1">
                      <CheckCircle className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-sarai-text mb-2">Authentic Culture</h3>
                      <p className="text-gray-600">
                        Learn not just the language, but also the rich Spanish-speaking culture in a natural way.
                      </p>
                    </div>
                  </div>
                </div>
              </ScrollAnimation>
              
              <ScrollAnimation direction="right">
                <div className="bg-gradient-to-br from-sarai-primary/10 to-sarai-secondary/10 p-8 rounded-2xl">
                  <div className="w-full h-80 bg-gradient-to-br from-sarai-primary via-sarai-secondary to-sarai-accent rounded-xl flex items-center justify-center">
                    <div className="text-center text-white">
                      <Users className="h-20 w-20 mx-auto mb-4 opacity-90" />
                      <h3 className="text-2xl font-bold mb-2">Global Community</h3>
                      <p className="text-lg opacity-90">Students from around the world</p>
                      <div className="flex justify-center mt-4">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-5 h-5 fill-current text-yellow-300" />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </ScrollAnimation>
            </div>
          </div>
        </section>

        {/* Cualificaciones Section */}
        <section className="sarai-section bg-gray-50">
          <div className="sarai-container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              
              {/* Cualificaciones Académicas */}
              <ScrollAnimation direction="left">
                <div className="bg-white p-8 rounded-xl shadow-md">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-sarai-primary/20 rounded-full flex items-center justify-center mr-4">
                      <GraduationCap className="h-6 w-6 text-sarai-primary" />
                    </div>
                    <h2 className="text-2xl font-bold text-sarai-text">Academic Qualifications</h2>
                  </div>
                  
                  <div className="space-y-6">
                    <div className="border-l-4 border-sarai-secondary pl-4">
                      <h3 className="font-semibold text-sarai-text mb-1">Certificate in Teaching Spanish as a Foreign Language</h3>
                      <p className="text-sm text-gray-600 mb-2">Specialized Institution in Teacher Training, 2025</p>
                    </div>
                    
                    <div className="border-l-4 border-sarai-secondary pl-4">
                      <h3 className="font-semibold text-sarai-text mb-1">Studies in Spanish as a Foreign Language (ELE)</h3>
                      <p className="text-sm text-gray-600 mb-2">Specialized training in teaching methodologies</p>
                    </div>
                    
                    <div className="border-l-4 border-sarai-secondary pl-4">
                      <h3 className="font-semibold text-sarai-text mb-1">Advanced English Studies - C1 Level</h3>
                      <p className="text-sm text-gray-600 mb-2">Specialized university training in advanced English language</p>
                    </div>
                    
                    <div className="border-l-4 border-sarai-secondary pl-4">
                      <h3 className="font-semibold text-sarai-text mb-1">Certification in Applied Linguistics</h3>
                      <p className="text-sm text-gray-600 mb-2">Specialization in language teaching methodologies</p>
                    </div>
                  </div>
                </div>
              </ScrollAnimation>
              
              {/* Experiencia Profesional */}
              <ScrollAnimation direction="right">
                <div className="bg-white p-8 rounded-xl shadow-md">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-sarai-secondary/20 rounded-full flex items-center justify-center mr-4">
                      <Award className="h-6 w-6 text-sarai-secondary" />
                    </div>
                    <h2 className="text-2xl font-bold text-sarai-text">Professional Experience</h2>
                  </div>
                  
                  <ul className="space-y-4">
                    <li className="pl-8 relative">
                      <div className="absolute left-0 top-1.5 w-4 h-4 bg-sarai-secondary rounded-full"></div>
                      <h4 className="font-semibold text-sarai-text">Online Spanish Teacher</h4>
                      <p className="text-gray-600">Virtual Teaching Specialist, 2025-Present</p>
                      <ul className="mt-2 list-disc list-inside text-sm text-gray-600">
                        <li>Development and implementation of personalized teaching methodologies for international students.</li>
                        <li>Creation of adaptive study programs using communicative and immersive approaches.</li>
                        <li>Specialization in real-time linguistic correction and individualized pedagogical feedback.</li>
                        <li>Recognized as an outstanding educator for excellence in teaching quality and learning outcomes.</li>
                      </ul>
                    </li>
                    <li className="pl-8 relative">
                      <div className="absolute left-0 top-1.5 w-4 h-4 bg-sarai-secondary rounded-full"></div>
                      <h4 className="font-semibold text-sarai-text">Bilingual Preschool Education</h4>
                      <p className="text-gray-600">Experience in early bilingual education, developing innovative educational activities that facilitate natural and playful learning of Spanish and English from an early age, fostering comprehensive cognitive and linguistic development.</p>
                    </li>
                  </ul>
                </div>
              </ScrollAnimation>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-sarai-primary text-white py-16">
          <div className="sarai-container">
            <ScrollAnimation direction="up" className="text-center max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Ready to Start Your Spanish Adventure?
              </h2>
              <p className="text-xl mb-8">
                Book your 25-minute trial class for just €10.50 and take the first step towards Spanish fluency.
              </p>
              <motion.a 
                href="/book"
                whileHover={{ scale: 1.05, y: -5 }} 
                whileTap={{ scale: 0.95 }}
                className="inline-block bg-white text-sarai-primary hover:bg-gray-100 font-semibold py-3 px-8 text-lg rounded-lg shadow-lg transition-all duration-300"
              >
                Book Your Trial Class
              </motion.a>
            </ScrollAnimation>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default About;
