
import { Link } from 'react-router-dom';
import { Image as ImageIcon, BookOpen, Star, Check } from 'lucide-react';

const Hero = () => {
  return (
    <div className="bg-gradient-to-b from-sarai-ice via-sarai-lightblue to-sarai-background">
      <div className="sarai-container py-16 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <div className="mb-2 inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-sarai-primary/20 text-sarai-accent">
              <ImageIcon size={16} className="mr-1" /> Online Spanish Classes
            </div>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight text-sarai-text mb-6 text-shadow">
              Learn Spanish with <span className="text-sarai-secondary relative">
                Professional Guidance
                <span className="absolute bottom-0 left-0 w-full h-1 bg-sarai-secondary/30 rounded-full"></span>
              </span>
            </h1>
            <p className="text-lg md:text-xl text-sarai-steel mb-8">
              Hi there! I'm Sarai, a certified Spanish teacher from Colombia and I'm here to help you learn Spanish in a way that's fun, effective and personalized just for you.
            </p>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-center">
                <div className="flex justify-center items-center h-6 w-6 rounded-full bg-sarai-secondary/20 mr-3">
                  <Check className="h-4 w-4 text-sarai-secondary" />
                </div>
                <span className="text-sarai-steel">Personalized classes for all levels</span>
              </div>
              <div className="flex items-center">
                <div className="flex justify-center items-center h-6 w-6 rounded-full bg-sarai-secondary/20 mr-3">
                  <Check className="h-4 w-4 text-sarai-secondary" />
                </div>
                <span className="text-sarai-steel">Flexible schedule to fit your needs</span>
              </div>
              <div className="flex items-center">
                <div className="flex justify-center items-center h-6 w-6 rounded-full bg-sarai-secondary/20 mr-3">
                  <Check className="h-4 w-4 text-sarai-secondary" />
                </div>
                <span className="text-sarai-steel">Interactive and enjoyable learning materials</span>
              </div>
            </div>
            
            <div className="flex flex-wrap gap-4">
              <Link to="/book" className="btn-primary shadow-lg hover:shadow-sarai-secondary/30 transition-all duration-300 transform hover:-translate-y-1">
                Book a Trial Class
              </Link>
              <Link to="/services" className="btn-outline hover:shadow-sarai-secondary/20 transition-all duration-300 transform hover:-translate-y-1">
                Explore Services
              </Link>
            </div>
            
            <div className="mt-10 p-4 bg-white rounded-lg shadow-md border border-sarai-primary/20">
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
                  <p className="text-sm text-sarai-steel">Join <span className="text-sarai-secondary font-semibold">300+</span> satisfied students</p>
                  <div className="flex text-yellow-400 mt-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                </div>
              </div>
              <p className="mt-2 text-sarai-steel text-sm italic">
                "Reserve your 25-minute trial class for just <span className="font-bold text-sarai-secondary">$9.99</span> and take the first step towards Spanish fluency."
              </p>
            </div>
          </div>
          <div className="order-1 lg:order-2 flex justify-center">
            <div className="relative">
              <div className="absolute -top-6 -left-6 w-40 h-40 bg-sarai-primary/30 rounded-full animate-pulse"></div>
              <div className="absolute -bottom-6 -right-6 w-40 h-40 bg-sarai-secondary/30 rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
              <div className="absolute top-1/2 right-1/2 w-20 h-20 bg-sarai-accent/30 rounded-full animate-pulse" style={{animationDelay: '2s'}}></div>
              
              <div className="relative z-10">
                <div className="absolute -top-8 -right-8 bg-white p-3 rounded-lg shadow-lg transform rotate-6 wiggle">
                  <div className="bg-sarai-secondary/20 p-2 rounded-lg">
                    <BookOpen className="h-10 w-10 text-sarai-secondary" />
                  </div>
                </div>
                
                <div className="bg-white p-3 rounded-lg shadow-xl rotate-3">
                  <img 
                    src="/lovable-uploads/6c969fbd-a97c-4494-b87e-6111474ffc83.png" 
                    alt="Spanish Teacher Sarai" 
                    className="w-full h-auto rounded-lg object-cover"
                    style={{ maxWidth: '400px' }}
                  />
                  
                  <div className="absolute -bottom-4 -left-4 bg-white p-2 rounded-lg shadow-lg">
                    <div className="flex bg-sarai-secondary/20 p-2 rounded-lg">
                      <span className="font-bold text-sarai-secondary">$9.99</span>
                      <span className="text-xs ml-1 text-sarai-secondary">Trial Class</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Added decorative wave */}
      <div className="w-full overflow-hidden">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-12 text-white">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C59.71,118.11,130.83,141.14,214.86,124.16Z" 
            className="fill-white"></path>
        </svg>
      </div>
    </div>
  );
};

export default Hero;
