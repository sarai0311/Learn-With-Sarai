
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <div className="bg-gradient-to-b from-sarai-background to-white">
      <div className="sarai-container py-16 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight text-sarai-text mb-4">
              Learn Spanish with <span className="text-sarai-primary">Professional Guidance</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-700 mb-8">
              Hi there! I'm Sarai, a certified Spanish teacher from Colombia and I'm here to help you learn Spanish in a way that's fun, effective and personalized just for you.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/book" className="btn-primary">
                Book a Trial Class
              </Link>
              <Link to="/services" className="btn-outline">
                Explore Services
              </Link>
            </div>
            <div className="mt-8 flex items-center">
              <div className="flex -space-x-2">
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
              <div className="ml-4">
                <span className="text-sarai-primary font-semibold">300+</span>
                <span className="text-gray-600 ml-1">satisfied students worldwide</span>
              </div>
            </div>
          </div>
          <div className="order-1 lg:order-2 flex justify-center">
            <div className="relative">
              <div className="absolute -top-6 -left-6 w-40 h-40 bg-sarai-secondary/10 rounded-full"></div>
              <div className="absolute -bottom-6 -right-6 w-40 h-40 bg-sarai-primary/10 rounded-full"></div>
              <div className="relative z-10 bg-white p-2 rounded-lg shadow-xl">
                <img 
                  src="/lovable-uploads/6c969fbd-a97c-4494-b87e-6111474ffc83.png" 
                  alt="Spanish Teacher Sarai" 
                  className="w-full h-auto rounded object-cover"
                  style={{ maxWidth: '400px' }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
