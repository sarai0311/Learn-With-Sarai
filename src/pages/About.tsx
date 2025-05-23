
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Link } from 'react-router-dom';
import { Linkedin, Youtube } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        {/* Header */}
        <section className="bg-sarai-primary text-white py-16">
          <div className="sarai-container">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-3xl md:text-4xl font-bold mb-4">
                Sobre Sarai Acevedo
              </h1>
              <p className="text-xl opacity-90">
                Profesora de Español Certificada & Entusiasta de los Idiomas
              </p>
            </div>
          </div>
        </section>
        
        {/* Bio Section */}
        <section className="sarai-section bg-white">
          <div className="sarai-container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="relative">
                <div className="absolute -top-6 -left-6 w-40 h-40 bg-sarai-secondary/10 rounded-full"></div>
                <div className="absolute -bottom-6 -right-6 w-40 h-40 bg-sarai-primary/10 rounded-full"></div>
                <div className="relative z-10">
                  <img 
                    src="/lovable-uploads/77b02690-e460-41b6-b931-e9f95ef1acf1.png" 
                    alt="Sarai Acevedo" 
                    className="rounded-lg shadow-lg w-full h-auto"
                  />
                </div>
              </div>
              
              <div>
                <h2 className="text-2xl md:text-3xl font-bold mb-6 text-sarai-text">Mi Historia</h2>
                <div className="space-y-4 text-gray-700">
                  <p>
                    ¡Hola! Soy Sarai Acevedo, una profesora de español apasionada por ayudar a estudiantes de todo el mundo a alcanzar sus objetivos lingüísticos.
                  </p>
                  <p>
                    Como tutora certificada por Preply con experiencia enseñando a estudiantes internacionales en línea, me especializo en ofrecer lecciones personalizadas, comunicativas e inmersivas que desarrollan confianza y fluidez.
                  </p>
                  <p>
                    Soy nativa de Colombia y tengo un nivel avanzado de inglés (C1), lo que me permite apoyar eficazmente a estudiantes principiantes en su viaje de aprendizaje del español.
                  </p>
                  <p>
                    Con un fuerte enfoque en el uso del lenguaje en situaciones reales y el compromiso con mis estudiantes, he sido reconocida como Super Tutora en Preply por la calidad de mi enseñanza.
                  </p>
                </div>
                
                <div className="mt-8">
                  <Link to="/book" className="btn-primary">
                    Reserva una Clase Conmigo
                  </Link>
                </div>
                
                {/* Social Media Links */}
                <div className="mt-6 flex space-x-4">
                  <a 
                    href="https://www.linkedin.com/in/saraiacevedov/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-sarai-primary hover:text-sarai-secondary transition-colors"
                  >
                    <Linkedin size={24} />
                  </a>
                  <a 
                    href="https://preply.com/es/profesor/6212872" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-sarai-primary hover:text-sarai-secondary transition-colors"
                  >
                    <span className="font-bold text-xl">P</span>
                  </a>
                  <a 
                    href="https://www.youtube.com/@saraiacevedov" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-sarai-primary hover:text-sarai-secondary transition-colors"
                  >
                    <Youtube size={24} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Teaching Methodology */}
        <section className="sarai-section bg-gray-50">
          <div className="sarai-container">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-sarai-text">
                Mi Metodología de Enseñanza
              </h2>
              <p className="mt-4 text-gray-600 max-w-3xl mx-auto">
                Un enfoque centrado en el estudiante, enfocado en habilidades prácticas y comunicación significativa
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* Method 1 */}
              <div className="bg-white p-6 rounded-lg border border-gray-100 shadow-sm h-full hover:shadow-md transition-all duration-300">
                <div className="w-14 h-14 bg-sarai-primary/10 rounded-full flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-sarai-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2 text-sarai-text">Enfoque Comunicativo</h3>
                <p className="text-gray-600">
                  Enfoque en habilidades de conversación práctica desde el primer día, con oportunidades estructuradas para practicar escenarios del mundo real.
                </p>
              </div>
              
              {/* Method 2 */}
              <div className="bg-white p-6 rounded-lg border border-gray-100 shadow-sm h-full hover:shadow-md transition-all duration-300">
                <div className="w-14 h-14 bg-sarai-primary/10 rounded-full flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-sarai-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2 text-sarai-text">Curriculum Personalizado</h3>
                <p className="text-gray-600">
                  Materiales adaptados a tus intereses, profesión y estilo de aprendizaje para lograr una máxima participación.
                </p>
              </div>
              
              {/* Method 3 */}
              <div className="bg-white p-6 rounded-lg border border-gray-100 shadow-sm h-full hover:shadow-md transition-all duration-300">
                <div className="w-14 h-14 bg-sarai-primary/10 rounded-full flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-sarai-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2 text-sarai-text">Inmersión Cultural</h3>
                <p className="text-gray-600">
                  Aprende sobre culturas hispanas, tradiciones y diferencias regionales para entender el contexto detrás del idioma.
                </p>
              </div>
              
              {/* Method 4 */}
              <div className="bg-white p-6 rounded-lg border border-gray-100 shadow-sm h-full hover:shadow-md transition-all duration-300">
                <div className="w-14 h-14 bg-sarai-primary/10 rounded-full flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-sarai-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2 text-sarai-text">Evaluación Continua</h3>
                <p className="text-gray-600">
                  Revisiones regulares de progreso y retroalimentación para mantenerte en el camino correcto y mejorar continuamente tus habilidades.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Certifications */}
        <section className="sarai-section bg-white">
          <div className="sarai-container">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-sarai-text">
                Calificaciones & Experiencia
              </h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {/* Qualifications */}
              <div>
                <h3 className="text-xl font-bold text-sarai-primary mb-6 flex items-center">
                  <svg className="w-6 h-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                  </svg>
                  Cualificaciones Académicas
                </h3>
                <ul className="space-y-4">
                  <li className="pl-8 relative">
                    <div className="absolute left-0 top-1.5 w-4 h-4 bg-sarai-primary rounded-full"></div>
                    <h4 className="font-semibold text-sarai-text">Certificado de enseñanza de idiomas de Preply</h4>
                    <p className="text-gray-600">Preply, 2025</p>
                  </li>
                  <li className="pl-8 relative">
                    <div className="absolute left-0 top-1.5 w-4 h-4 bg-sarai-primary rounded-full"></div>
                    <h4 className="font-semibold text-sarai-text">Título Técnico en Contabilidad para Operaciones Comerciales y Financieras</h4>
                    <p className="text-gray-600">SENA, Colombia</p>
                  </li>
                  <li className="pl-8 relative">
                    <div className="absolute left-0 top-1.5 w-4 h-4 bg-sarai-primary rounded-full"></div>
                    <h4 className="font-semibold text-sarai-text">Curso de Inglés (A1 a B2)</h4>
                    <p className="text-gray-600">Escuela Oficial de Idiomas, Las Palmas de Gran Canaria (EOI LPGC), España, 2021-2023</p>
                  </li>
                  <li className="pl-8 relative">
                    <div className="absolute left-0 top-1.5 w-4 h-4 bg-sarai-primary rounded-full"></div>
                    <h4 className="font-semibold text-sarai-text">Curso de Inglés</h4>
                    <p className="text-gray-600">Universidad Industrial de Santander (UIS), Bucaramanga, Colombia, 2018</p>
                  </li>
                </ul>
              </div>
              
              {/* Experience */}
              <div>
                <h3 className="text-xl font-bold text-sarai-primary mb-6 flex items-center">
                  <svg className="w-6 h-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  Experiencia Profesional
                </h3>
                <ul className="space-y-4">
                  <li className="pl-8 relative">
                    <div className="absolute left-0 top-1.5 w-4 h-4 bg-sarai-secondary rounded-full"></div>
                    <h4 className="font-semibold text-sarai-text">Profesora de Español en línea</h4>
                    <p className="text-gray-600">Preply (Remoto), Marzo 2025-Presente</p>
                    <ul className="mt-2 list-disc list-inside text-sm text-gray-600">
                      <li>Impartí más de 176 horas y 179 lecciones individuales a 33 estudiantes internacionales.</li>
                      <li>Personalicé lecciones utilizando métodos comunicativos e inmersivos.</li>
                      <li>Proporcioné correcciones en tiempo real y retroalimentación personalizada.</li>
                      <li>Reconocida como Super Tutora por la excelente calidad de enseñanza.</li>
                    </ul>
                  </li>
                  <li className="pl-8 relative">
                    <div className="absolute left-0 top-1.5 w-4 h-4 bg-sarai-secondary rounded-full"></div>
                    <h4 className="font-semibold text-sarai-text">Práctica Docente en Preescolar</h4>
                    <p className="text-gray-600">Práctica voluntaria trabajando con niños de preescolar, supervisando actividades y enseñando habilidades básicas de colorear.</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        
        {/* Skills Section */}
        <section className="sarai-section bg-gray-50">
          <div className="sarai-container">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-sarai-text">
                Habilidades Profesionales
              </h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Skills Column 1 */}
              <div className="space-y-3">
                <div className="bg-white p-4 rounded-lg shadow-sm flex items-center hover:shadow-md transition-all duration-300">
                  <div className="w-10 h-10 bg-sarai-primary/10 rounded-full flex items-center justify-center mr-4">
                    <svg className="w-5 h-5 text-sarai-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
                    </svg>
                  </div>
                  <span className="font-semibold text-sarai-text">Enseñanza de Español (ELE)</span>
                </div>
                
                <div className="bg-white p-4 rounded-lg shadow-sm flex items-center hover:shadow-md transition-all duration-300">
                  <div className="w-10 h-10 bg-sarai-primary/10 rounded-full flex items-center justify-center mr-4">
                    <svg className="w-5 h-5 text-sarai-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                    </svg>
                  </div>
                  <span className="font-semibold text-sarai-text">Métodos Comunicativos e Inmersivos</span>
                </div>
                
                <div className="bg-white p-4 rounded-lg shadow-sm flex items-center hover:shadow-md transition-all duration-300">
                  <div className="w-10 h-10 bg-sarai-primary/10 rounded-full flex items-center justify-center mr-4">
                    <svg className="w-5 h-5 text-sarai-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <span className="font-semibold text-sarai-text">Planificación de Lecciones y Diseño Curricular</span>
                </div>
              </div>
              
              {/* Skills Column 2 */}
              <div className="space-y-3">
                <div className="bg-white p-4 rounded-lg shadow-sm flex items-center hover:shadow-md transition-all duration-300">
                  <div className="w-10 h-10 bg-sarai-primary/10 rounded-full flex items-center justify-center mr-4">
                    <svg className="w-5 h-5 text-sarai-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <span className="font-semibold text-sarai-text">Plataformas de Enseñanza Online (Preply, Zoom)</span>
                </div>
                
                <div className="bg-white p-4 rounded-lg shadow-sm flex items-center hover:shadow-md transition-all duration-300">
                  <div className="w-10 h-10 bg-sarai-primary/10 rounded-full flex items-center justify-center mr-4">
                    <svg className="w-5 h-5 text-sarai-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <span className="font-semibold text-sarai-text">Comunicación Bilingüe (Español - Inglés)</span>
                </div>
                
                <div className="bg-white p-4 rounded-lg shadow-sm flex items-center hover:shadow-md transition-all duration-300">
                  <div className="w-10 h-10 bg-sarai-primary/10 rounded-full flex items-center justify-center mr-4">
                    <svg className="w-5 h-5 text-sarai-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                    </svg>
                  </div>
                  <span className="font-semibold text-sarai-text">Instrucción Centrada en el Estudiante</span>
                </div>
              </div>
              
              {/* Skills Column 3 */}
              <div className="space-y-3">
                <div className="bg-white p-4 rounded-lg shadow-sm flex items-center hover:shadow-md transition-all duration-300">
                  <div className="w-10 h-10 bg-sarai-primary/10 rounded-full flex items-center justify-center mr-4">
                    <svg className="w-5 h-5 text-sarai-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <span className="font-semibold text-sarai-text">Retroalimentación en Tiempo Real</span>
                </div>
                
                <div className="bg-white p-4 rounded-lg shadow-sm flex items-center hover:shadow-md transition-all duration-300">
                  <div className="w-10 h-10 bg-sarai-primary/10 rounded-full flex items-center justify-center mr-4">
                    <svg className="w-5 h-5 text-sarai-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                    </svg>
                  </div>
                  <span className="font-semibold text-sarai-text">Comunicación Intercultural</span>
                </div>
                
                <div className="bg-white p-4 rounded-lg shadow-sm flex items-center hover:shadow-md transition-all duration-300">
                  <div className="w-10 h-10 bg-sarai-primary/10 rounded-full flex items-center justify-center mr-4">
                    <svg className="w-5 h-5 text-sarai-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 11.5V14m0-2.5v-6a1.5 1.5 0 113 0m-3 6a1.5 1.5 0 00-3 0v2a7.5 7.5 0 0015 0v-5a1.5 1.5 0 00-3 0m-6-3V11m0-5.5v-1a1.5 1.5 0 013 0v1m0 0V11m0-5.5a1.5 1.5 0 013 0v3m0 0V11" />
                    </svg>
                  </div>
                  <span className="font-semibold text-sarai-text">Paciencia y Empatía</span>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="bg-sarai-secondary text-white py-16">
          <div className="sarai-container">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Comienza Tu Viaje en Español Hoy
              </h2>
              <p className="text-xl mb-8">
                Trabajemos juntos para alcanzar tus metas lingüísticas con lecciones personalizadas adaptadas especialmente para ti.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link to="/book" className="bg-white text-sarai-secondary hover:bg-gray-100 font-semibold py-3 px-8 rounded-md transition-all duration-200">
                  Reserva una Prueba Gratis
                </Link>
                <Link to="/services" className="bg-transparent border-2 border-white text-white hover:bg-white/10 font-semibold py-3 px-8 rounded-md transition-all duration-200">
                  Ver Mis Servicios
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default About;
