import React, { useEffect } from 'react';
import { CONTACT_OPTIONS } from '../constants';
import { Phone, MapPin, Video, Calendar, ShieldCheck } from 'lucide-react';

const Booking: React.FC = () => {
  useEffect(() => {
    // Load Calendly Script
    const script = document.createElement('script');
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Cleanup script on unmount
      const existingScript = document.querySelector('script[src="https://assets.calendly.com/assets/external/widget.js"]');
      if (existingScript) {
        document.body.removeChild(existingScript);
      }
    };
  }, []);

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
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-white/5 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gold/10 rounded-full translate-x-1/3 translate-y-1/3 blur-3xl"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <h2 className="font-heading text-4xl md:text-5xl font-bold mb-6">Start Your Transformation Today</h2>
          <p className="font-body text-lg text-cream/90 mb-8">
            Book your free 15-minute consultation to discuss your goals and learn how specialised clinical hypnotherapy can help you achieve lasting change.
          </p>
          
          <div className="inline-flex items-center gap-4 bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-2xl shadow-xl">
             <ShieldCheck className="text-gold" size={32} />
             <div className="text-left">
               <p className="font-body font-bold text-gold text-sm uppercase tracking-widest">Our Promise</p>
               <p className="text-lg md:text-xl font-heading italic">"The best service will be given, guaranteed every time."</p>
             </div>
          </div>
        </div>

        {/* Enhanced Calendly Container */}
        <div className="max-w-4xl mx-auto bg-white rounded-3xl overflow-hidden shadow-premium mb-24 border border-cream">
          <div className="p-4 bg-cream-light border-b border-cream flex items-center justify-between">
            <span className="font-body font-bold text-teal uppercase text-xs tracking-widest">Online Booking System</span>
            <div className="flex gap-2">
              <div className="w-2 h-2 rounded-full bg-red-400"></div>
              <div className="w-2 h-2 rounded-full bg-yellow-400"></div>
              <div className="w-2 h-2 rounded-full bg-green-400"></div>
            </div>
          </div>
          {/* Calendly inline widget begin - using brand teal for primary_color */}
          <div 
            className="calendly-inline-widget" 
            data-url="https://calendly.com/stephen_mc_gill/30min?hide_event_type_details=1&hide_gdpr_banner=1&primary_color=2c5f5d" 
            style={{ minWidth: '320px', height: '700px' }}
          ></div>
          {/* Calendly inline widget end */}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {CONTACT_OPTIONS.map((option, index) => (
            <div key={index} className="bg-white/10 backdrop-blur-md border border-white/20 p-8 rounded-xl hover:bg-white/20 transition-all text-center group">
              <div className="w-16 h-16 bg-gold rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:scale-110 transition-transform text-white">
                {getIcon(option.icon)}
              </div>
              <h3 className="font-heading text-2xl font-bold mb-3">{option.title}</h3>
              <p className="font-body text-cream/80 mb-8 min-h-[50px]">{option.description}</p>
              
              <a 
                href={option.ctaUrl}
                className="inline-block w-full bg-white text-teal font-bold py-3 px-6 rounded-lg hover:bg-cream transition-colors shadow-md"
              >
                {option.ctaText}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Booking;