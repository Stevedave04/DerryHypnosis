
import React from 'react';
import { SITE_INFO, SERVICES } from '../constants';
import { Facebook, Instagram, Linkedin, MapPin, Phone, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-darkGrey text-white pt-20 pb-8 border-t-8 border-gold">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Brand Column */}
          <div>
            <h3 className="font-heading text-2xl font-bold mb-6 text-gold">{SITE_INFO.title}</h3>
            <p className="text-gray-400 font-body mb-6">
              Expert hypnotherapy serving Derry/Londonderry. Helping you achieve weight loss, stop smoking, and overcome anxiety.
            </p>
            <div className="flex gap-4">
              <span className="w-10 h-10 rounded-full bg-gray-700 flex items-center justify-center hover:bg-gold transition-colors cursor-pointer">
                <Facebook size={20} />
              </span>
              <span className="w-10 h-10 rounded-full bg-gray-700 flex items-center justify-center hover:bg-gold transition-colors cursor-pointer">
                <Instagram size={20} />
              </span>
              <span className="w-10 h-10 rounded-full bg-gray-700 flex items-center justify-center hover:bg-gold transition-colors cursor-pointer">
                <Linkedin size={20} />
              </span>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-heading text-xl font-bold mb-6">Contact Us</h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3 text-gray-400">
                <MapPin className="text-gold mt-1 flex-shrink-0" size={18} />
                <span>{SITE_INFO.location}</span>
              </div>
              <div className="flex items-center gap-3 text-gray-400">
                <Phone className="text-gold flex-shrink-0" size={18} />
                <a href={`tel:${SITE_INFO.phone.replace(/\s/g, '')}`} className="hover:text-white transition-colors">{SITE_INFO.phone}</a>
              </div>
              <div className="flex items-center gap-3 text-gray-400">
                <Mail className="text-gold flex-shrink-0" size={18} />
                <a href={`mailto:${SITE_INFO.email}`} className="hover:text-white transition-colors">{SITE_INFO.email}</a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading text-xl font-bold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {[
                  { label: 'About Us', url: '/about' },
                  { label: 'Our Services', url: '/services' },
                  { label: 'Success Stories', url: '/testimonials' },
                  { label: 'Book Online', url: '/contact' }
              ].map((link, i) => (
                <li key={i}>
                  <Link to={link.url} className="text-gray-400 hover:text-gold transition-colors font-body">{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-heading text-xl font-bold mb-6">Services</h4>
            <ul className="space-y-3">
              {SERVICES.map((service, i) => (
                <li key={i}>
                  <Link to={`/services/${service.slug}`} className="text-gray-400 hover:text-gold transition-colors font-body">{service.title}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
          <p>© {new Date().getFullYear()} Derry Hypnosis. All rights reserved.</p>
          <div className="flex gap-6">
            <span className="hover:text-white cursor-pointer">Privacy Policy</span>
            <span className="hover:text-white cursor-pointer">Terms & Conditions</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
