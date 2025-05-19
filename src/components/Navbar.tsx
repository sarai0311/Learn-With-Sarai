
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  
  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <nav className="bg-white shadow-sm">
      <div className="sarai-container">
        <div className="flex justify-between h-20 items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <span className="text-sarai-primary font-montserrat text-2xl font-bold">
              Spanish<span className="text-sarai-secondary">WithSarai</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            <Link 
              to="/" 
              className={`font-medium ${isActive('/') ? 'text-sarai-primary' : 'text-gray-600 hover:text-sarai-primary'}`}
            >
              Home
            </Link>
            <Link 
              to="/about" 
              className={`font-medium ${isActive('/about') ? 'text-sarai-primary' : 'text-gray-600 hover:text-sarai-primary'}`}
            >
              About Me
            </Link>
            <Link 
              to="/services" 
              className={`font-medium ${isActive('/services') ? 'text-sarai-primary' : 'text-gray-600 hover:text-sarai-primary'}`}
            >
              Services
            </Link>
            <Link 
              to="/book" 
              className="btn-primary"
            >
              Book a Class
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              type="button"
              className="p-2 rounded-md text-gray-600 hover:text-sarai-primary"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-4 space-y-1 bg-white">
            <Link
              to="/"
              className={`block px-3 py-2 rounded-md text-base font-medium ${isActive('/') ? 'text-sarai-primary bg-gray-50' : 'text-gray-600 hover:bg-gray-50 hover:text-sarai-primary'}`}
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/about"
              className={`block px-3 py-2 rounded-md text-base font-medium ${isActive('/about') ? 'text-sarai-primary bg-gray-50' : 'text-gray-600 hover:bg-gray-50 hover:text-sarai-primary'}`}
              onClick={() => setIsOpen(false)}
            >
              About Me
            </Link>
            <Link
              to="/services"
              className={`block px-3 py-2 rounded-md text-base font-medium ${isActive('/services') ? 'text-sarai-primary bg-gray-50' : 'text-gray-600 hover:bg-gray-50 hover:text-sarai-primary'}`}
              onClick={() => setIsOpen(false)}
            >
              Services
            </Link>
            <Link
              to="/book"
              className="block px-3 py-2 rounded-md text-base font-medium btn-primary w-full text-center"
              onClick={() => setIsOpen(false)}
            >
              Book a Class
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
