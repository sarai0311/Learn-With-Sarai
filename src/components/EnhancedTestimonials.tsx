
import React from 'react';
import { Star, Quote } from 'lucide-react';

const EnhancedTestimonials = () => {
  const testimonials = [
    {
      name: "Carlos Rodríguez",
      country: "Estados Unidos",
      rating: 5,
      image: "https://randomuser.me/api/portraits/men/23.jpg",
      text: "Las clases con Sarai han sido increíbles. Su enfoque personalizado y paciencia infinita me han ayudado a ganar confianza al hablar español. ¡Ahora puedo comunicarme mucho mejor durante mis viajes por Latinoamérica!"
    },
    {
      name: "Sophie Williams",
      country: "Reino Unido",
      rating: 5,
      image: "https://randomuser.me/api/portraits/women/67.jpg",
      text: "Sarai es una profesora excepcional que realmente se preocupa por el progreso de sus estudiantes. Sus clases son divertidas, interactivas y siempre adaptadas a mis necesidades específicas. Mi español ha mejorado enormemente."
    },
    {
      name: "Julia Chen",
      country: "Canadá",
      rating: 5,
      image: "https://randomuser.me/api/portraits/women/32.jpg", 
      text: "Después de intentar varios métodos de aprendizaje, las clases con Sarai han sido lo único que realmente me ha ayudado a dominar el español. Su conocimiento cultural y sus explicaciones claras hacen que cada clase sea valiosa."
    }
  ];

  return (
    <div className="py-16 bg-gradient-to-br from-white to-sarai-lightblue">
      <div className="sarai-container">
        <div className="text-center mb-12 relative">
          <Quote className="h-20 w-20 text-sarai-primary/10 absolute -top-10 left-1/2 transform -translate-x-1/2" />
          <h2 className="text-3xl md:text-4xl font-bold text-sarai-text mb-4 decorated-heading">
            Lo Que Dicen Mis Estudiantes
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Historias de éxito de personas que ya están disfrutando de hablar español fluidamente
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="p-1 rounded-xl bg-gradient-to-br from-sarai-primary via-sarai-secondary to-sarai-accent"
            >
              <div className="bg-white p-6 rounded-lg h-full flex flex-col">
                <div className="flex items-center mb-4">
                  <div className="relative">
                    <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-white shadow-md">
                      <img 
                        src={testimonial.image} 
                        alt={testimonial.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="absolute -bottom-2 -right-2 bg-white rounded-full p-1 shadow-sm">
                      <img
                        src={`https://flagcdn.com/${testimonial.country === "Estados Unidos" ? "us" : 
                              testimonial.country === "Reino Unido" ? "gb" : "ca"}.svg`}
                        alt={testimonial.country}
                        className="w-5 h-5 rounded-full"
                      />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="font-semibold text-sarai-text">{testimonial.name}</h3>
                    <p className="text-gray-500 text-sm">{testimonial.country}</p>
                  </div>
                </div>
                
                <div className="flex mb-3">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                  ))}
                </div>
                
                <p className="text-gray-600 italic flex-grow">"{testimonial.text}"</p>
                
                <div className="mt-4 pt-4 border-t border-gray-100 text-sm text-gray-500 flex justify-between items-center">
                  <span>Estudiante verificado</span>
                  <span>3 meses de clases</span>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-10 text-center">
          <a href="#" className="inline-flex items-center text-sarai-primary hover:text-sarai-primary/80 transition-all font-medium">
            <span>Ver más testimonios</span>
            <svg className="w-5 h-5 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
};

export default EnhancedTestimonials;
