
import React, { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { NAV_ITEMS, SITE_INFO } from '../constants';
import Logo from './Logo';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Check if we are on the home page for transparency logic
  const isHomePage = location.pathname === '/';
  
  // Logic for navbar appearance
  const isTransparent = isHomePage && !isScrolled;
  
  const navClasses = isTransparent
    ? 'bg-transparent py-4' 
    : 'bg-white shadow-md py-2';

  const linkClasses = isTransparent
    ? 'text-cream/90 hover:text-gold'
    : 'text-darkGrey hover:text-teal';

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${navClasses}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        
        {/* Logo */}
        <Link to="/" className="flex items-center group">
          <Logo 
            className="h-20 w-auto transition-transform duration-300 group-hover:scale-105" 
            variant={isTransparent ? 'light' : 'dark'}
          />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.label}
              to={item.url}
              className={`font-body font-medium transition-colors ${linkClasses}`}
            >
              {item.label}
            </Link>
          ))}
          <Link
            to="/contact"
            className="bg-gold hover:bg-gold-light text-white font-bold py-2 px-6 rounded-full transition-all shadow-md hover:shadow-lg flex items-center gap-2"
          >
            <Phone size={16} />
            <span>Book Consultation</span>
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          className={`md:hidden focus:outline-none ${isTransparent ? 'text-white' : 'text-teal'}`}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden absolute top-full left-0 w-full bg-white shadow-xl transition-all duration-300 overflow-hidden ${isMenuOpen ? 'max-h-screen py-6' : 'max-h-0'}`}>
        <div className="flex flex-col space-y-4 px-6">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.label}
              to={item.url}
              onClick={() => setIsMenuOpen(false)}
              className="text-darkGrey font-body text-lg hover:text-teal font-medium"
            >
              {item.label}
            </Link>
          ))}
          <Link
            to="/contact"
            onClick={() => setIsMenuOpen(false)}
            className="bg-teal text-white font-bold py-3 px-6 rounded-lg text-center shadow-md"
          >
            Book Free Consultation
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
