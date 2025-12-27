import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, Calendar } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { NAV_ITEMS } from '../constants';
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

  const isHomePage = location.pathname === '/';
  const isTransparent = isHomePage && !isScrolled;
  
  return (
    <nav className={`fixed w-full z-50 transition-all duration-500 ${
      isScrolled ? 'bg-white/90 backdrop-blur-md shadow-soft py-3' : 'bg-transparent py-6'
    }`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        
        <Link to="/" className="flex items-center group relative z-10">
          <Logo 
            className="h-16 md:h-20 w-auto transition-all duration-500 group-hover:scale-105" 
            variant={isTransparent ? 'light' : 'dark'}
          />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center space-x-10">
          <div className="flex items-center space-x-8">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.label}
                to={item.url}
                className={`font-body text-sm font-semibold tracking-wider uppercase transition-all duration-300 relative group ${
                  isTransparent ? 'text-white/90 hover:text-white' : 'text-slate-800 hover:text-teal'
                }`}
              >
                {item.label}
                <span className={`absolute -bottom-1 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full ${
                  isTransparent ? 'bg-white' : 'bg-teal'
                }`}></span>
              </Link>
            ))}
          </div>
          
          <div className="flex items-center gap-4">
            <Link
              to="/contact"
              className={`hidden xl:flex font-body font-bold py-3 px-6 rounded-full transition-all duration-300 border-2 items-center gap-2 transform hover:-translate-y-0.5 active:translate-y-0 ${
                isTransparent 
                  ? 'border-white/30 text-white hover:bg-white/10' 
                  : 'border-teal/20 text-teal hover:border-teal hover:bg-teal/5'
              }`}
            >
              <Calendar size={16} />
              <span>Book Online</span>
            </Link>
            <Link
              to="/contact"
              className={`font-body font-bold py-3 px-8 rounded-full transition-all duration-300 shadow-lg flex items-center gap-2 transform hover:-translate-y-0.5 active:translate-y-0 ${
                isTransparent 
                  ? 'bg-white text-teal hover:bg-cream-light' 
                  : 'bg-teal text-white hover:bg-teal-dark'
              }`}
            >
              <Phone size={16} />
              <span>Book Consultation</span>
            </Link>
          </div>
        </div>

        {/* Mobile Toggle */}
        <button
          className={`lg:hidden relative z-10 p-2 rounded-lg transition-colors ${
            isTransparent ? 'text-white hover:bg-white/10' : 'text-teal hover:bg-teal/5'
          }`}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`lg:hidden fixed inset-0 bg-slate-900/95 backdrop-blur-xl transition-all duration-500 ${
        isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
      }`}>
        <div className="flex flex-col h-full justify-center items-center space-y-8 text-center">
          {NAV_ITEMS.map((item, i) => (
            <Link
              key={item.label}
              to={item.url}
              onClick={() => setIsMenuOpen(false)}
              className={`text-white font-heading text-4xl hover:text-gold transition-all duration-300 transform ${
                isMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              }`}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              {item.label}
            </Link>
          ))}
          <Link
            to="/contact"
            onClick={() => setIsMenuOpen(false)}
            className="bg-gold text-white font-bold py-4 px-12 rounded-full text-xl shadow-xl transform transition-all hover:scale-105 active:scale-95"
          >
            Start Your Journey
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;