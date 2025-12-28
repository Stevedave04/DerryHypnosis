import React, { useEffect } from 'react';
import { CONTACT_OPTIONS, SITE_INFO } from '../constants';
import { Phone, MapPin, Video, Calendar, ShieldCheck, Mail } from 'lucide-react';

const Booking: React.FC = () => {
  useEffect(() => {
    // Load Calendly Script
    const script = document.createElement('script');
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      const existingScript = document.querySelector('script[src="https://assets.calendly.com/assets/external/widget.js"]');
      if (existingScript) {
        document.body.removeChild(existingScript);
      }
    };
  }, []);

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'phone': return <Phone size={24} />;
      case 'map': return <MapPin size={24} />;
      case 'video': return <Video size={24} />;
      default: return <Calendar size={24} />;
    }
  };

  return (
    <section className="py-24 bg-cream-light min-h-screen pt-40">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <span className="text-gold font-bold tracking-[0.2em] uppercase text-xs mb-4 block">Take the First Step</span>
          <h1 className="font-heading text-4xl md:text-6xl font-bold text-teal mb-6">Connect With Us</h1>
          <p className="font-body text-xl text-slate-800/60 leading-relaxed max-w-2xl mx-auto">
            Ready to explore how hypnotherapy can change your life? Book a consultation, visit our clinic, or start a session online.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-20">
          {/* Left: Contact Info */}
          <div className="lg:col-span-1 space-y-8">
            <div className="bg-white p-8 rounded-3xl shadow-soft border border-cream">
              <h3 className="font-heading text-2xl font-bold text-teal mb-6">Contact Details</h3>
              <div className="space-y-6">
                <div className="flex gap-4 items-start">
                  <div className="w-10 h-10 rounded-xl bg-gold/10 flex items-center justify-center text-gold flex-shrink-0">
                    <Phone size={20} />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-widest text-slate-800/40 font-bold mb-1">Phone</p>
                    <a href={`tel:${SITE_INFO.phone}`} className="text-teal font-bold hover:text-gold transition-colors">{SITE_INFO.phone}</a>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <div className="w-10 h-10 rounded-xl bg-gold/10 flex items-center justify-center text-gold flex-shrink-0">
                    <Mail size={20} />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-widest text-slate-800/40 font-bold mb-1">Email</p>
                    <a href={`mailto:${SITE_INFO.email}`} className="text-teal font-bold hover:text-gold transition-colors">{SITE_INFO.email}</a>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <div className="w-10 h-10 rounded-xl bg-gold/10 flex items-center justify-center text-gold flex-shrink-0">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-widest text-slate-800/40 font-bold mb-1">Clinic Address</p>
                    <p className="text-teal font-bold">{SITE_INFO.location}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-teal text-white p-8 rounded-3xl shadow-premium relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:scale-110 transition-transform">
                <ShieldCheck size={80} />
              </div>
              <h3 className="font-heading text-2xl font-bold mb-4">Our Promise</h3>
              <p className="font-body text-cream/80 italic leading-relaxed">
                "We guarantee the highest standards of professional clinical hypnotherapy in every session. Your transformation is our only goal."
              </p>
            </div>
          </div>

          {/* Right: Map & Booking */}
          <div className="lg:col-span-2 space-y-8">
            {/* Google Maps Embed */}
            <div className="bg-white p-4 rounded-3xl shadow-soft border border-cream h-[400px] overflow-hidden">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d18384.887259648943!2d-7.336440263690656!3d54.99616223838466!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x485fe187c3f309ef%3A0xc3927237e199859c!2sDerry%2C%20UK!5e0!3m2!1sen!2sie!4v1716301234567!5m2!1sen!2sie" 
                width="100%" 
                height="100%" 
                style={{ border: 0, borderRadius: '1.5rem' }} 
                allowFullScreen={true} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Derry Hypnosis Location"
              ></iframe>
            </div>

            <div className="bg-white rounded-3xl shadow-soft border border-cream overflow-hidden">
              <div className="p-6 bg-cream-light border-b border-cream flex items-center justify-between">
                <h3 className="font-heading text-xl font-bold text-teal">Online Booking</h3>
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-gold/30"></div>
                  <div className="w-3 h-3 rounded-full bg-gold/50"></div>
                  <div className="w-3 h-3 rounded-full bg-gold"></div>
                </div>
              </div>
              {/* Calendly inline widget begin */}
              <div 
                className="calendly-inline-widget" 
                data-url="https://calendly.com/stephen_mc_gill/30min?hide_event_type_details=1&hide_gdpr_banner=1&primary_color=2c5f5d" 
                style={{ minWidth: '320px', height: '600px' }}
              ></div>
              {/* Calendly inline widget end */}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {CONTACT_OPTIONS.map((option, index) => (
            <div key={index} className="bg-white p-8 rounded-2xl shadow-soft border border-cream hover:border-gold/30 transition-all text-center group">
              <div className="w-12 h-12 bg-cream-light rounded-full flex items-center justify-center mx-auto mb-6 text-gold group-hover:bg-gold group-hover:text-white transition-all">
                {getIcon(option.icon)}
              </div>
              <h3 className="font-heading text-xl font-bold text-teal mb-3">{option.title}</h3>
              <p className="font-body text-sm text-slate-800/60 mb-6">{option.description}</p>
              <a 
                href={option.ctaUrl}
                className="inline-block text-gold font-bold hover:text-gold-dark text-sm uppercase tracking-widest"
              >
                {option.ctaText} →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Booking;