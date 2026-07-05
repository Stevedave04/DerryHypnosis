
import React from 'react';
import { SITE_INFO, SERVICES, FOOTER_LINKS } from '../constants';
import { FacebookIcon, YoutubeIcon, InstagramIcon, MapPin, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-white pt-20 pb-8 border-t-8 border-gold">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

          {/* Brand Column */}
          <div>
            <h3 className="font-heading text-2xl font-bold mb-6 text-gold">{SITE_INFO.title}</h3>
            <p className="text-gray-400 font-body mb-6">
              Most people who struggle with habits or anxiety have tried the obvious solutions. Derry Hypnosis works with the subconscious mind, where those patterns actually live, so change lasts.
            </p>
            <div className="flex gap-4">
              <a
                href="https://www.facebook.com/profile.php?id=100071225175331"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-gold transition-colors cursor-pointer"
                aria-label="Facebook"
              >
                <FacebookIcon size={20} />
              </a>
              <a
                href="https://www.youtube.com/@DerryHypnosis"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-gold transition-colors cursor-pointer"
                aria-label="YouTube"
              >
                <YoutubeIcon size={20} />
              </a>
              <a
                href="https://www.instagram.com/derryhypnosis/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-gold transition-colors cursor-pointer"
                aria-label="Instagram"
              >
                <InstagramIcon size={20} />
              </a>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-heading text-xl font-bold mb-6">Contact Us</h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3 text-gray-400">
                <MapPin className="text-gold mt-1 flex-shrink-0" size={18} />
                <span className="leading-relaxed">{SITE_INFO.location}</span>
              </div>
              <div className="flex items-center gap-3 text-gray-400">
                <Mail className="text-gold flex-shrink-0" size={18} />
                <a href={`mailto:${SITE_INFO.email}`} className="hover:text-white transition-colors break-all">{SITE_INFO.email}</a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading text-xl font-bold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {FOOTER_LINKS.map(link => (
                <li key={link.url}>
                  <Link to={link.url} className="text-gray-400 hover:text-gold transition-colors font-body">{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-heading text-xl font-bold mb-6">Services</h4>
            <ul className="space-y-3">
              {SERVICES.map(service => (
                <li key={service.slug}>
                  <Link to={`/services/${service.slug}`} className="text-gray-400 hover:text-gold transition-colors font-body">{service.title}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-gray-500">
          <p>© {new Date().getFullYear()} Derry Hypnosis. All rights reserved.</p>
          <div className="flex flex-col sm:flex-row items-center gap-6">
            <div className="flex gap-6">
              <Link to="/stop-smoking" className="hover:text-white transition-colors">Stop Smoking Program</Link>
              <Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
              <Link to="/terms" className="hover:text-white transition-colors">Terms & Conditions</Link>
            </div>
            <a
              href="https://EAPH.ie"
              title="European Association of Professional Hypnotherapists Accredited Member"
              target="_blank"
              rel="noopener noreferrer"
              className="opacity-80 hover:opacity-100 transition-opacity flex-shrink-0"
            >
              <img
                src="https://eaph.ie/wp-content/uploads/2019/06/eaph-website-badge-250x.jpg"
                width={125}
                height={44}
                alt="Accredited Member of the European Association of Professional Hypnotherapists"
                className="rounded"
              />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
