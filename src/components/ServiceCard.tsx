
import { Link } from 'react-router-dom';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: string;
  price: string;
  features: string[];
}

const ServiceCard = ({ title, description, icon, price, features }: ServiceCardProps) => {
  return (
    <div className="bg-white rounded-lg shadow-md border border-gray-100 overflow-hidden transition-all duration-300 hover:shadow-lg h-full flex flex-col">
      <div className="p-6">
        <div className="w-16 h-16 bg-sarai-primary/10 rounded-full flex items-center justify-center mb-4">
          <span className="text-3xl text-sarai-primary">{icon}</span>
        </div>
        <h3 className="text-xl font-bold mb-2 text-sarai-text">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <div className="mb-6">
          <span className="text-2xl font-bold text-sarai-primary">{price}</span>
          {price !== 'Custom' && <span className="text-gray-500"> / class</span>}
        </div>
        
        <ul className="space-y-2 mb-6">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start">
              <svg className="h-5 w-5 text-sarai-accent mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
              </svg>
              <span className="text-gray-600">{feature}</span>
            </li>
          ))}
        </ul>
      </div>
      
      <div className="mt-auto p-6 pt-0">
        <Link 
          to="/book" 
          className="block w-full py-2 px-4 bg-sarai-primary text-white text-center rounded-md hover:bg-sarai-primary/90 transition-colors"
        >
          Book Now
        </Link>
      </div>
    </div>
  );
};

export default ServiceCard;
