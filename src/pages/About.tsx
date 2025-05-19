
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Link } from 'react-router-dom';

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
                About Sarai Acevedo
              </h1>
              <p className="text-xl opacity-90">
                Experienced Spanish Teacher & Language Enthusiast
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
                    src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=688&q=80" 
                    alt="Sarai Acevedo" 
                    className="rounded-lg shadow-lg w-full h-auto"
                  />
                </div>
              </div>
              
              <div>
                <h2 className="text-2xl md:text-3xl font-bold mb-6 text-sarai-text">My Story</h2>
                <div className="space-y-4 text-gray-700">
                  <p>
                    Hello! I'm Sarai Acevedo, a certified Spanish language teacher passionate about helping students from all walks of life achieve their language goals.
                  </p>
                  <p>
                    With over 8 years of teaching experience both online and in classroom settings, I've had the privilege of guiding more than 300 students from 25+ countries on their Spanish learning journey.
                  </p>
                  <p>
                    I hold a Master's degree in Language Education and certifications in both DELE and SIELE examination preparation. My approach combines structured methodology with conversational practice, always adapted to each student's unique learning style.
                  </p>
                  <p>
                    As a native speaker from Spain with experience living in Latin America, I bring authentic cultural context to my lessons, helping students understand not just the language, but the rich cultural nuances that come with it.
                  </p>
                </div>
                
                <div className="mt-8">
                  <Link to="/book" className="btn-primary">
                    Book a Class With Me
                  </Link>
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
                My Teaching Methodology
              </h2>
              <p className="mt-4 text-gray-600 max-w-3xl mx-auto">
                A student-centered approach focused on practical skills and meaningful communication
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* Method 1 */}
              <div className="bg-white p-6 rounded-lg border border-gray-100 shadow-sm h-full">
                <div className="w-14 h-14 bg-sarai-primary/10 rounded-full flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-sarai-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2 text-sarai-text">Communicative Approach</h3>
                <p className="text-gray-600">
                  Focus on practical conversation skills from day one, with structured opportunities to practice real-world scenarios.
                </p>
              </div>
              
              {/* Method 2 */}
              <div className="bg-white p-6 rounded-lg border border-gray-100 shadow-sm h-full">
                <div className="w-14 h-14 bg-sarai-primary/10 rounded-full flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-sarai-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2 text-sarai-text">Personalized Curriculum</h3>
                <p className="text-gray-600">
                  Custom materials tailored to your interests, profession, and learning style for maximum engagement.
                </p>
              </div>
              
              {/* Method 3 */}
              <div className="bg-white p-6 rounded-lg border border-gray-100 shadow-sm h-full">
                <div className="w-14 h-14 bg-sarai-primary/10 rounded-full flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-sarai-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2 text-sarai-text">Cultural Immersion</h3>
                <p className="text-gray-600">
                  Learn about Hispanic cultures, traditions, and regional differences to understand the context behind the language.
                </p>
              </div>
              
              {/* Method 4 */}
              <div className="bg-white p-6 rounded-lg border border-gray-100 shadow-sm h-full">
                <div className="w-14 h-14 bg-sarai-primary/10 rounded-full flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-sarai-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2 text-sarai-text">Ongoing Assessment</h3>
                <p className="text-gray-600">
                  Regular progress checks and feedback to keep you on track and continuously improve your skills.
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
                Qualifications & Experience
              </h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {/* Qualifications */}
              <div>
                <h3 className="text-xl font-bold text-sarai-primary mb-6 flex items-center">
                  <svg className="w-6 h-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                  </svg>
                  Academic Qualifications
                </h3>
                <ul className="space-y-4">
                  <li className="pl-8 relative">
                    <div className="absolute left-0 top-1.5 w-4 h-4 bg-sarai-primary rounded-full"></div>
                    <h4 className="font-semibold text-sarai-text">Master's in Language Education</h4>
                    <p className="text-gray-600">Universidad de Barcelona, 2018</p>
                  </li>
                  <li className="pl-8 relative">
                    <div className="absolute left-0 top-1.5 w-4 h-4 bg-sarai-primary rounded-full"></div>
                    <h4 className="font-semibold text-sarai-text">Bachelor's in Hispanic Studies</h4>
                    <p className="text-gray-600">Universidad Complutense de Madrid, 2015</p>
                  </li>
                  <li className="pl-8 relative">
                    <div className="absolute left-0 top-1.5 w-4 h-4 bg-sarai-primary rounded-full"></div>
                    <h4 className="font-semibold text-sarai-text">DELE Examiner Certification</h4>
                    <p className="text-gray-600">Instituto Cervantes, 2019</p>
                  </li>
                  <li className="pl-8 relative">
                    <div className="absolute left-0 top-1.5 w-4 h-4 bg-sarai-primary rounded-full"></div>
                    <h4 className="font-semibold text-sarai-text">Certificate in Online Language Teaching</h4>
                    <p className="text-gray-600">International House, 2020</p>
                  </li>
                </ul>
              </div>
              
              {/* Experience */}
              <div>
                <h3 className="text-xl font-bold text-sarai-primary mb-6 flex items-center">
                  <svg className="w-6 h-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  Professional Experience
                </h3>
                <ul className="space-y-4">
                  <li className="pl-8 relative">
                    <div className="absolute left-0 top-1.5 w-4 h-4 bg-sarai-secondary rounded-full"></div>
                    <h4 className="font-semibold text-sarai-text">Online Spanish Teacher</h4>
                    <p className="text-gray-600">Preply & Independent Teaching, 2020-Present</p>
                  </li>
                  <li className="pl-8 relative">
                    <div className="absolute left-0 top-1.5 w-4 h-4 bg-sarai-secondary rounded-full"></div>
                    <h4 className="font-semibold text-sarai-text">Spanish Language Instructor</h4>
                    <p className="text-gray-600">International Language Academy, 2018-2020</p>
                  </li>
                  <li className="pl-8 relative">
                    <div className="absolute left-0 top-1.5 w-4 h-4 bg-sarai-secondary rounded-full"></div>
                    <h4 className="font-semibold text-sarai-text">Curriculum Developer</h4>
                    <p className="text-gray-600">Educational Publishing House, 2017-2019</p>
                  </li>
                  <li className="pl-8 relative">
                    <div className="absolute left-0 top-1.5 w-4 h-4 bg-sarai-secondary rounded-full"></div>
                    <h4 className="font-semibold text-sarai-text">Study Abroad Program Coordinator</h4>
                    <p className="text-gray-600">Universidad de Salamanca, 2015-2017</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="bg-sarai-secondary text-white py-16">
          <div className="sarai-container">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Start Your Spanish Journey Today
              </h2>
              <p className="text-xl mb-8">
                Let's work together to achieve your language goals with personalized lessons tailored just for you.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link to="/book" className="bg-white text-sarai-secondary hover:bg-gray-100 font-semibold py-3 px-8 rounded-md transition-all duration-200">
                  Book a Free Trial
                </Link>
                <Link to="/services" className="bg-transparent border-2 border-white text-white hover:bg-white/10 font-semibold py-3 px-8 rounded-md transition-all duration-200">
                  View My Services
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
