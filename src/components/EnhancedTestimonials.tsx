import React from 'react';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';
import ScrollAnimation from './ScrollAnimation';

const EnhancedTestimonials = () => {
  const testimonials = [
    {
      name: "Jahquahiel",
      country: "Estados Unidos",
      flag: "us",
      rating: 5,
      image: "https://randomuser.me/api/portraits/men/32.jpg",
      text: "Sarai has to be one of the best teachers I've found online, she has kept the same positive energy since day one and I feel like I've already learned so much in one month. 10/10 would recommend!",
      months: "1 mes de clases"
    },
    {
      name: "Neil",
      country: "Reino Unido", 
      flag: "gb",
      rating: 5,
      image: "https://randomuser.me/api/portraits/men/44.jpg",
      text: "I just finished my lesson with Sarai and right from the start I saw she came well prepared for the class and was extremely professional, and a super warm and nice person who is ready to help you with whatever you need to improve your Spanish.",
      months: "2 meses de clases"
    },
    {
      name: "Caleb",
      country: "Estados Unidos",
      flag: "us", 
      rating: 5,
      image: "https://randomuser.me/api/portraits/men/22.jpg",
      text: "Sarai is kind and incredibly patient. She's a great listener and seems very adaptable. Her specialty is flexibility and conversation. Unlike most online teachers I've tried, Sarai will adjust to meet your needs.",
      months: "3 meses de clases"
    },
    {
      name: "Sophie Williams",
      country: "Reino Unido",
      flag: "gb",
      rating: 5,
      image: "https://randomuser.me/api/portraits/women/67.jpg",
      text: "Las clases con Sarai han sido increíbles. Su enfoque personalizado y paciencia infinita me han ayudado a ganar confianza al hablar español. ¡Ahora puedo comunicarme mucho mejor durante mis viajes!",
      months: "4 meses de clases"
    },
    {
      name: "Julia Chen",
      country: "Canadá",
      flag: "ca",
      rating: 5,
      image: "https://randomuser.me/api/portraits/women/32.jpg",
      text: "Después de intentar varios métodos de aprendizaje online, las clases con Sarai han sido lo único que realmente me ha ayudado a dominar el español. Su conocimiento cultural y sus explicaciones claras hacen que cada clase sea valiosa.",
      months: "6 meses de clases"
    },
    {
      name: "Marcus Johnson",
      country: "Estados Unidos",
      flag: "us",
      rating: 5,
      image: "https://randomuser.me/api/portraits/men/15.jpg",
      text: "Sarai es una profesora excepcional que realmente se preocupa por el progreso de sus estudiantes. Sus clases son divertidas, interactivas y siempre adaptadas a mis necesidades específicas.",
      months: "5 meses de clases"
    }
  ];

  const [currentIndex, setCurrentIndex] = React.useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const getVisibleTestimonials = () => {
    const visible = [];
    for (let i = 0; i < 3; i++) {
      const index = (currentIndex + i) % testimonials.length;
      visible.push(testimonials[index]);
    }
    return visible;
  };

  return (
    <div className="py-20 bg-gradient-to-br from-sarai-background via-white to-sarai-lightblue overflow-hidden">
      <div className="sarai-container">
        <ScrollAnimation direction="up" className="text-center mb-16 relative">
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            whileInView={{ scale: 1, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="absolute -top-10 left-1/2 transform -translate-x-1/2"
          >
            <Quote className="h-24 w-24 text-sarai-primary/15" />
          </motion.div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-sarai-text mb-6 decorated-heading">
            What My Students Say
          </h2>
          <p className="text-xl text-sarai-steel max-w-3xl mx-auto leading-relaxed">
            Real stories from people who are already enjoying speaking Spanish fluently
          </p>
          
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "100px" }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mx-auto mt-6 h-1 bg-gradient-to-r from-sarai-primary to-sarai-secondary rounded-full"
          />
        </ScrollAnimation>

        <div className="relative">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {getVisibleTestimonials().map((testimonial, index) => (
              <ScrollAnimation
                key={`${testimonial.name}-${currentIndex}-${index}`}
                direction="up"
                delay={index * 0.2}
                className="h-full"
              >
                <motion.div
                  initial={{ scale: 0.9, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ 
                    y: -10, 
                    transition: { duration: 0.3 } 
                  }}
                  className="relative group"
                >
                  {/* Gradient Border */}
                  <div className="p-1 rounded-2xl bg-gradient-to-br from-sarai-primary via-sarai-secondary to-sarai-accent group-hover:shadow-2xl transition-all duration-300">
                    <div className="bg-white p-8 rounded-xl h-full flex flex-col relative overflow-hidden">
                      {/* Decorative elements */}
                      <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-sarai-primary/10 to-transparent rounded-full -translate-y-10 translate-x-10"></div>
                      <div className="absolute bottom-0 left-0 w-16 h-16 bg-gradient-to-tr from-sarai-secondary/10 to-transparent rounded-full translate-y-8 -translate-x-8"></div>
                      
                      {/* Header with avatar and info */}
                      <div className="flex items-center mb-6 relative z-10">
                        <div className="relative">
                          <motion.div
                            whileHover={{ scale: 1.1 }}
                            transition={{ duration: 0.2 }}
                            className="w-20 h-20 rounded-full overflow-hidden border-4 border-white shadow-lg relative"
                          >
                            <img 
                              src={testimonial.image} 
                              alt={testimonial.name}
                              className="w-full h-full object-cover"
                            />
                          </motion.div>
                          <div className="absolute -bottom-2 -right-2 bg-white rounded-full p-1.5 shadow-md">
                            <img
                              src={`https://flagcdn.com/${testimonial.flag}.svg`}
                              alt={testimonial.country}
                              className="w-6 h-6 rounded-full"
                            />
                          </div>
                        </div>
                        <div className="ml-5">
                          <h3 className="font-bold text-sarai-text text-lg">{testimonial.name}</h3>
                          <p className="text-sarai-steel text-sm">{testimonial.country}</p>
                          <div className="flex mt-2">
                            {[...Array(testimonial.rating)].map((_, i) => (
                              <motion.div
                                key={i}
                                initial={{ scale: 0, rotate: 180 }}
                                whileInView={{ scale: 1, rotate: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.3, delay: 0.5 + (i * 0.1) }}
                              >
                                <Star className="w-5 h-5 text-yellow-400 fill-current" />
                              </motion.div>
                            ))}
                          </div>
                        </div>
                      </div>
                      
                      {/* Testimonial text */}
                      <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="flex-grow relative z-10"
                      >
                        <Quote className="w-8 h-8 text-sarai-primary/30 mb-3" />
                        <p className="text-sarai-steel italic leading-relaxed text-base">
                          "{testimonial.text}"
                        </p>
                      </motion.div>
                      
                      {/* Footer */}
                      <div className="mt-6 pt-6 border-t border-sarai-primary/10 text-sm text-sarai-steel/70 flex justify-between items-center relative z-10">
                        <div className="flex items-center">
                          <div className="w-2 h-2 bg-green-400 rounded-full mr-2"></div>
                          <span>Verified Student</span>
                        </div>
                        <span className="font-medium">{testimonial.months}</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </ScrollAnimation>
            ))}
          </div>

          <ScrollAnimation direction="up" delay={0.8} className="flex justify-center items-center space-x-6">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={prevTestimonial}
              className="p-3 rounded-full bg-white shadow-lg border border-sarai-primary/20 text-sarai-primary hover:bg-sarai-primary hover:text-white transition-all duration-300"
            >
              <ChevronLeft className="w-6 h-6" />
            </motion.button>
            
            <div className="flex space-x-2">
              {testimonials.map((_, index) => (
                <motion.button
                  key={index}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.8 }}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentIndex ? 'bg-sarai-primary' : 'bg-sarai-primary/30'
                  }`}
                />
              ))}
            </div>
            
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={nextTestimonial}
              className="p-3 rounded-full bg-white shadow-lg border border-sarai-primary/20 text-sarai-primary hover:bg-sarai-primary hover:text-white transition-all duration-300"
            >
              <ChevronRight className="w-6 h-6" />
            </motion.button>
          </ScrollAnimation>
        </div>
        
        {/* Call to Action */}
        <ScrollAnimation direction="up" delay={1.0} className="mt-16 text-center">
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            <a 
              href="#" 
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-sarai-primary to-sarai-secondary text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <span className="mr-3">View All Reviews</span>
              <motion.svg 
                className="w-5 h-5" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
                whileHover={{ x: 5 }}
                transition={{ duration: 0.2 }}
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
              </motion.svg>
            </a>
          </motion.div>
        </ScrollAnimation>
      </div>
    </div>
  );
};

export default EnhancedTestimonials;
