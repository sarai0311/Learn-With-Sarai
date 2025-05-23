
import { Link } from 'react-router-dom';
import { Image as ImageIcon, BookOpen } from 'lucide-react';

const Hero = () => {
  return (
    <div className="bg-gradient-to-b from-blue-50 via-sarai-background to-white">
      <div className="sarai-container py-16 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <div className="mb-2 inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-sarai-primary/10 text-sarai-primary">
              <ImageIcon size={16} className="mr-1" /> Online Spanish Classes
            </div>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight text-sarai-text mb-6 text-shadow">
              Learn Spanish with <span className="text-sarai-primary relative">
                Professional Guidance
                <span className="absolute bottom-0 left-0 w-full h-1 bg-sarai-primary/30 rounded-full"></span>
              </span>
            </h1>
            <p className="text-lg md:text-xl text-gray-700 mb-8">
              Hi there! I'm Sarai, a certified Spanish teacher from Colombia and I'm here to help you learn Spanish in a way that's fun, effective and personalized just for you.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/book" className="btn-primary shadow-lg hover:shadow-sarai-primary/30 transition-all duration-300 transform hover:-translate-y-1">
                Book a Trial Class
              </Link>
              <Link to="/services" className="btn-outline hover:shadow-sarai-primary/20 transition-all duration-300 transform hover:-translate-y-1">
                Explore Services
              </Link>
            </div>
            
            <div className="mt-10 p-4 bg-white rounded-lg shadow-md border border-gray-100">
              <div className="flex items-center">
                <div className="flex -space-x-2 mr-4">
                  <img 
                    className="h-10 w-10 rounded-full border-2 border-white" 
                    src="https://randomuser.me/api/portraits/women/32.jpg" 
                    alt="Student" 
                  />
                  <img 
                    className="h-10 w-10 rounded-full border-2 border-white" 
                    src="https://randomuser.me/api/portraits/men/23.jpg" 
                    alt="Student" 
                  />
                  <img 
                    className="h-10 w-10 rounded-full border-2 border-white" 
                    src="https://randomuser.me/api/portraits/women/67.jpg" 
                    alt="Student" 
                  />
                </div>
                <div>
                  <p className="text-sm text-gray-600">Join <span className="text-sarai-primary font-semibold">300+</span> satisfied students</p>
                  <div className="flex text-yellow-400 mt-1">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                </div>
              </div>
              <p className="mt-2 text-gray-600 text-sm italic">
                "Reserve your 25-minute trial class for just <span className="font-bold text-sarai-primary">$9.99</span> and take the first step towards Spanish fluency."
              </p>
            </div>
          </div>
          <div className="order-1 lg:order-2 flex justify-center">
            <div className="relative">
              <div className="absolute -top-6 -left-6 w-40 h-40 bg-sarai-secondary/20 rounded-full animate-pulse"></div>
              <div className="absolute -bottom-6 -right-6 w-40 h-40 bg-sarai-primary/20 rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
              <div className="absolute top-1/2 right-1/2 w-20 h-20 bg-sarai-accent/20 rounded-full animate-pulse" style={{animationDelay: '2s'}}></div>
              <div className="relative z-10 bg-white p-3 rounded-lg shadow-xl rotate-3">
                <img 
                  src="/lovable-uploads/6c969fbd-a97c-4494-b87e-6111474ffc83.png" 
                  alt="Spanish Teacher Sarai" 
                  className="w-full h-auto rounded-lg object-cover"
                  style={{ maxWidth: '400px' }}
                />
                <div className="absolute -bottom-4 -right-4 bg-white p-2 rounded-lg shadow-lg">
                  <BookOpen className="h-8 w-8 text-sarai-primary" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
