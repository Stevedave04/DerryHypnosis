
import React from 'react';
import { CONTACT_OPTIONS } from '../constants';
import { Phone, MapPin, Video, Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';

const Booking: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'phone': return <Phone size={32} />;
      case 'map': return <MapPin size={32} />;
      case 'video': return <Video size={32} />;
      default: return <Calendar size={32} />;
    }
  };

  return (
    <section className="py-24 bg-teal text-white relative overflow-hidden min-h-screen pt-32">
      {/* Decorative Circles */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-white/5 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gold/10 rounded-full translate-x-1/3 translate-y-1/3 blur-3xl"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <h2 className="font-heading text-4xl font-bold mb-6">Start Your Transformation Today</h2>
          <p className="font-body text-lg text-cream/90 mb-8">
            Book your free 15-minute consultation to discuss your goals and learn how hypnotherapy can help you achieve lasting change.
          </p>
          <div className="bg-white/10 p-6 rounded-lg backdrop-blur-sm border border-white/20 inline-block">
             <p className="font-accent font-bold text-gold text-lg mb-2">Service Excellence</p>
             <p className="text-sm md:text-base">I promise that the best service will be given guaranteed every time.</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {CONTACT_OPTIONS.map((option, index) => (
            <div key={index} className="bg-white/10 backdrop-blur-md border border-white/20 p-8 rounded-xl hover:bg-white/20 transition-all text-center group">
              <div className="w-16 h-16 bg-gold rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:scale-110 transition-transform text-white">
                {getIcon(option.icon)}
              </div>
              <h3 className="font-heading text-2xl font-bold mb-3">{option.title}</h3>
              <p className="font-body text-cream/80 mb-8 min-h-[50px]">{option.description}</p>
              {option.ctaUrl.startsWith('/') ? (
                <Link
                  to={option.ctaUrl}
                  className="inline-block w-full bg-white text-teal font-bold py-3 px-6 rounded-lg hover:bg-cream transition-colors shadow-md"
                >
                   {option.ctaText}
                </Link>
              ) : (
                <a 
                  href={option.ctaUrl}
                  className="inline-block w-full bg-white text-teal font-bold py-3 px-6 rounded-lg hover:bg-cream transition-colors shadow-md"
                >
                  {option.ctaText}
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Booking;
