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
                    Conoce a tu <span className="text-sarai-secondary">Profesora de Español</span>
                  </h1>
                  <p className="text-lg text-sarai-steel mb-6">
                    ¡Hola! Soy Sarai, profesora certificada de español de Colombia. Mi pasión es ayudar a estudiantes de todo el mundo a alcanzar sus metas en el idioma español de manera personalizada, efectiva y divertida.
                  </p>
                  <div className="flex flex-wrap gap-4">
                    <div className="flex items-center bg-white px-4 py-2 rounded-lg shadow-sm">
                      <Globe className="h-5 w-5 text-sarai-primary mr-2" />
                      <span className="text-sm font-medium">Estudiantes Internacionales</span>
                    </div>
                    <div className="flex items-center bg-white px-4 py-2 rounded-lg shadow-sm">
                      <Award className="h-5 w-5 text-sarai-secondary mr-2" />
                      <span className="text-sm font-medium">Educadora Destacada</span>
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
                        <h3 className="text-3xl font-bold mb-2">Profesora Sarai</h3>
                        <p className="text-xl opacity-90">Especialista en Español</p>
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
                Mi Historia
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Descubre cómo mi pasión por los idiomas se convirtió en mi misión de ayudar a otros
              </p>
            </ScrollAnimation>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <ScrollAnimation direction="left">
                <div className="relative">
                  <div className="bg-gradient-to-br from-sarai-primary/10 to-sarai-secondary/10 p-8 rounded-2xl">
                    <div className="w-full h-64 bg-gradient-to-br from-sarai-primary via-sarai-secondary to-sarai-accent rounded-xl flex items-center justify-center mb-6">
                      <div className="text-center text-white">
                        <Heart className="h-16 w-16 mx-auto mb-4 opacity-90" />
                        <p className="text-xl font-semibold">Pasión por Enseñar</p>
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
                      <h3 className="text-xl font-bold text-sarai-text mb-2">Experiencia Internacional</h3>
                      <p className="text-gray-600">
                        He tenido la oportunidad de trabajar con estudiantes de diferentes culturas y nacionalidades, 
                        lo que me ha permitido entender las necesidades específicas de cada alumno y adaptar mis métodos de enseñanza.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-12 h-12 bg-sarai-secondary/20 rounded-full flex items-center justify-center mr-4">
                      <Heart className="h-6 w-6 text-sarai-secondary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-sarai-text mb-2">Pasión por la Enseñanza</h3>
                      <p className="text-gray-600">
                        Mi amor por los idiomas y la educación me impulsa a crear experiencias de aprendizaje 
                        significativas que van más allá de la gramática tradicional.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-12 h-12 bg-sarai-accent/20 rounded-full flex items-center justify-center mr-4">
                      <Award className="h-6 w-6 text-sarai-accent" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-sarai-text mb-2">Compromiso con la Excelencia</h3>
                      <p className="text-gray-600">
                        Mi reconocimiento como educadora destacada refleja mi dedicación constante a 
                        proporcionar la mejor calidad de enseñanza y apoyo a mis estudiantes.
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
                Mi Enfoque de Enseñanza
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Descubre cómo hago que aprender español sea efectivo, divertido y personalizado
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
                  <h3 className="text-xl font-bold text-sarai-text mb-3">Personalizado</h3>
                  <p className="text-gray-600">
                    Cada clase está diseñada específicamente para ti, adaptándose a tu nivel, objetivos y estilo de aprendizaje único.
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
                  <h3 className="text-xl font-bold text-sarai-text mb-3">Comunicativo</h3>
                  <p className="text-gray-600">
                    Priorizo la comunicación real y práctica desde el primer día, para que uses el español en situaciones reales.
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
                  <h3 className="text-xl font-bold text-sarai-text mb-3">Divertido</h3>
                  <p className="text-gray-600">
                    Creo que aprender debe ser enjoyable. Uso juegos, historias y actividades interactivas para hacer el proceso memorable.
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
                ¿Por qué elegir mis clases?
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Lo que me diferencia como tu profesora de español
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
                      <h3 className="text-lg font-semibold text-sarai-text mb-2">Metodología Probada</h3>
                      <p className="text-gray-600">
                        Utilizo enfoques pedagógicos modernos y efectivos, adaptados a las necesidades del aprendizaje online.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-8 h-8 bg-sarai-secondary rounded-full flex items-center justify-center mr-4 mt-1">
                      <CheckCircle className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-sarai-text mb-2">Flexibilidad Total</h3>
                      <p className="text-gray-600">
                        Horarios que se adaptan a tu vida, sin importar tu zona horaria o agenda ocupada.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-8 h-8 bg-sarai-secondary rounded-full flex items-center justify-center mr-4 mt-1">
                      <CheckCircle className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-sarai-text mb-2">Apoyo Continuo</h3>
                      <p className="text-gray-600">
                        Recibes retroalimentación detallada y recursos adicionales entre clases para acelerar tu progreso.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-8 h-8 bg-sarai-secondary rounded-full flex items-center justify-center mr-4 mt-1">
                      <CheckCircle className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-sarai-text mb-2">Cultura Auténtica</h3>
                      <p className="text-gray-600">
                        Aprende no solo el idioma, sino también la rica cultura hispanoamericana de manera natural.
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
                      <h3 className="text-2xl font-bold mb-2">Comunidad Global</h3>
                      <p className="text-lg opacity-90">Estudiantes de todo el mundo</p>
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
                    <h2 className="text-2xl font-bold text-sarai-text">Cualificaciones Académicas</h2>
                  </div>
                  
                  <div className="space-y-6">
                    <div className="border-l-4 border-sarai-secondary pl-4">
                      <h3 className="font-semibold text-sarai-text mb-1">Certificado de Enseñanza de Español como Lengua Extranjera</h3>
                      <p className="text-sm text-gray-600 mb-2">Institución Especializada en Formación Docente, 2025</p>
                    </div>
                    
                    <div className="border-l-4 border-sarai-secondary pl-4">
                      <h3 className="font-semibold text-sarai-text mb-1">Estudios en Español como Lengua Extranjera (ELE)</h3>
                      <p className="text-sm text-gray-600 mb-2">Formación especializada en metodologías de enseñanza</p>
                    </div>
                    
                    <div className="border-l-4 border-sarai-secondary pl-4">
                      <h3 className="font-semibold text-sarai-text mb-1">Título Técnico en Contabilidad para Operaciones Comerciales y Financieras</h3>
                      <p className="text-sm text-gray-600 mb-2">SENA, Colombia</p>
                    </div>
                    
                    <div className="border-l-4 border-sarai-secondary pl-4">
                      <h3 className="font-semibold text-sarai-text mb-1">Curso de Inglés (A1 a C1)</h3>
                      <p className="text-sm text-gray-600 mb-2">Escuela Oficial de Idiomas, Las Palmas de Gran Canaria (EOI LPGC), España, 2021-2023</p>
                    </div>
                    
                    <div className="border-l-4 border-sarai-secondary pl-4">
                      <h3 className="font-semibold text-sarai-text mb-1">Curso de Inglés</h3>
                      <p className="text-sm text-gray-600 mb-2">Universidad Industrial de Santander (UIS), Bucaramanga, Colombia, 2018</p>
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
                    <h2 className="text-2xl font-bold text-sarai-text">Experiencia Profesional</h2>
                  </div>
                  
                  <ul className="space-y-4">
                    <li className="pl-8 relative">
                      <div className="absolute left-0 top-1.5 w-4 h-4 bg-sarai-secondary rounded-full"></div>
                      <h4 className="font-semibold text-sarai-text">Profesora de Español Online</h4>
                      <p className="text-gray-600">Especialista en Enseñanza Virtual, 2025-Presente</p>
                      <ul className="mt-2 list-disc list-inside text-sm text-gray-600">
                        <li>Desarrollo e implementación de metodologías de enseñanza personalizadas para estudiantes internacionales.</li>
                        <li>Creación de programas de estudio adaptativos utilizando enfoques comunicativos e inmersivos.</li>
                        <li>Especialización en corrección lingüística en tiempo real y retroalimentación pedagógica individualizada.</li>
                        <li>Reconocida como educadora destacada por la excelencia en la calidad de enseñanza y resultados de aprendizaje.</li>
                      </ul>
                    </li>
                    <li className="pl-8 relative">
                      <div className="absolute left-0 top-1.5 w-4 h-4 bg-sarai-secondary rounded-full"></div>
                      <h4 className="font-semibold text-sarai-text">Educación Bilingüe en Preescolar</h4>
                      <p className="text-gray-600">Experiencia en educación temprana bilingüe, desarrollando actividades educativas innovadoras que facilitan el aprendizaje natural y lúdico de español e inglés desde temprana edad, fomentando el desarrollo cognitivo y lingüístico integral.</p>
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
                ¿Listo para comenzar tu aventura en español?
              </h2>
              <p className="text-xl mb-8">
                Reserva tu clase de prueba de 25 minutos por solo $9.99 y da el primer paso hacia la fluidez en español.
              </p>
              <motion.a 
                href="/book"
                whileHover={{ scale: 1.05, y: -5 }} 
                whileTap={{ scale: 0.95 }}
                className="inline-block bg-white text-sarai-primary hover:bg-gray-100 font-semibold py-3 px-8 text-lg rounded-lg shadow-lg transition-all duration-300"
              >
                Reserva tu Clase de Prueba
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
