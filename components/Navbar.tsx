
import React, { useState, useEffect } from 'react';
import { Menu, X, Mail, Calendar, ChevronDown } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { NAV_ITEMS } from '../constants';
import Logo from './Logo';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [mobileExpandedItem, setMobileExpandedItem] = useState<string | null>(null);
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
              <div key={item.label} className="relative group">
                <Link
                  to={item.url}
                  className={`font-body text-sm font-semibold tracking-wider uppercase transition-all duration-300 flex items-center gap-1 py-2 ${
                    isTransparent ? 'text-white/90 hover:text-white' : 'text-slate-800 hover:text-teal'
                  }`}
                >
                  {item.label}
                  {item.children && <ChevronDown size={14} className="group-hover:rotate-180 transition-transform duration-300" />}
                  <span className={`absolute -bottom-1 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full ${
                    isTransparent ? 'bg-white' : 'bg-teal'
                  }`}></span>
                </Link>

                {item.children && (
                  <div className="absolute top-full left-0 w-56 pt-2 opacity-0 translate-y-2 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto transition-all duration-300">
                    <div className="bg-white rounded-xl shadow-premium border border-cream overflow-hidden">
                      {item.children.map((child) => (
                        <Link
                          key={child.label}
                          to={child.url}
                          className="block px-6 py-4 text-sm font-semibold text-slate-800 hover:bg-cream-light hover:text-teal transition-colors border-b border-cream last:border-0"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
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
              <Mail size={16} />
              <span>Get in Touch</span>
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
        <div className="flex flex-col h-full justify-center items-center space-y-6 text-center px-6">
          {NAV_ITEMS.map((item, i) => (
            <div key={item.label} className="w-full">
              {item.children ? (
                <div className="flex flex-col items-center">
                  <button
                    onClick={() => setMobileExpandedItem(mobileExpandedItem === item.label ? null : item.label)}
                    className="text-white font-heading text-3xl hover:text-gold transition-all duration-300 flex items-center gap-2"
                  >
                    {item.label}
                    <ChevronDown size={24} className={`transition-transform duration-300 ${mobileExpandedItem === item.label ? 'rotate-180' : ''}`} />
                  </button>
                  <div className={`overflow-hidden transition-all duration-500 w-full ${mobileExpandedItem === item.label ? 'max-h-64 mt-4' : 'max-h-0'}`}>
                    {item.children.map((child) => (
                      <Link
                        key={child.label}
                        to={child.url}
                        onClick={() => setIsMenuOpen(false)}
                        className="block py-3 text-white/60 font-body text-xl hover:text-gold"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                </div>
              ) : (
                <Link
                  to={item.url}
                  onClick={() => setIsMenuOpen(false)}
                  className={`text-white font-heading text-4xl hover:text-gold transition-all duration-300 block transform ${
                    isMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                  }`}
                  style={{ transitionDelay: `${i * 100}ms` }}
                >
                  {item.label}
                </Link>
              )}
            </div>
          ))}
          <Link
            to="/contact"
            onClick={() => setIsMenuOpen(false)}
            className="bg-gold text-white font-bold py-4 px-12 rounded-full text-xl shadow-xl transform transition-all hover:scale-105 active:scale-95 mt-8"
          >
            Start Your Journey
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
