
import { Link } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: string;
  price: string;
  features: string[];
  serviceId?: string;
}

const ServiceCard = ({ title, description, icon, price, features, serviceId }: ServiceCardProps) => {
  return (
    <Link to={`/book${serviceId ? `?service=${serviceId}` : ''}`}>
      <Card className="h-full border-2 border-gray-200 hover:border-sarai-primary transition-all duration-300 hover:shadow-lg">
        <CardHeader className="text-center">
          <div className="text-4xl mb-2">{icon}</div>
          <CardTitle className="text-xl text-sarai-text">{title}</CardTitle>
          <div className="text-3xl font-bold text-sarai-primary">{price}</div>
        </CardHeader>
        <CardContent>
          <p className="text-gray-600 text-center mb-6">{description}</p>
          <ul className="space-y-3">
            {features.map((feature, index) => (
              <li key={index} className="flex items-start">
                <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                <span className="text-gray-600">{feature}</span>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </Link>
  );
};

export default ServiceCard;
