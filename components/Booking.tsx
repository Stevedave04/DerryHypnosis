
import React, { useEffect } from 'react';
import { CONTACT_OPTIONS, SITE_INFO } from '../constants';
import { Phone, MapPin, Video, Calendar, ShieldCheck, Mail, ArrowRight, Star, Users } from 'lucide-react';
import { Link } from 'react-router-dom';

const Booking: React.FC = () => {
  useEffect(() => {
    // Check if script already exists to avoid duplicate messaging ports
    const existingScript = document.getElementById('calendly-script');
    
    if (!existingScript) {
      const script = document.createElement('script');
      script.id = 'calendly-script';
      script.src = "https://assets.calendly.com/assets/external/widget.js";
      script.async = true;
      script.onload = () => console.debug("Booking widget initialised.");
      document.body.appendChild(script);
    }
  }, []);

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'phone': return <Phone size={20} />;
      case 'map': return <MapPin size={20} />;
      case 'video': return <Video size={20} />;
      default: return <Calendar size={20} />;
    }
  };

  return (
    <section className="py-24 bg-cream-light min-h-screen pt-40">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <span className="text-gold font-bold tracking-[0.2em] uppercase text-xs mb-4 block animate-reveal">Take the First Step</span>
          <h1 className="font-heading text-4xl md:text-6xl font-bold text-teal mb-6 animate-reveal stagger-1">Connect With Us</h1>
          <p className="font-body text-xl text-slate-800/60 leading-relaxed max-w-2xl mx-auto animate-reveal stagger-2">
            Ready to reclaim control? Book a consultation, visit our clinic in Derry, or start your session online.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-20">
          {/* Left: Contact Info */}
          <div className="lg:col-span-1 space-y-6">
            <div className="bg-white p-8 rounded-2xl shadow-soft border border-cream">
              <h3 className="font-heading text-xl font-bold text-teal mb-8">Contact Information</h3>
              <div className="space-y-8">
                <div className="flex gap-4 items-start">
                  <div className="w-10 h-10 rounded-lg bg-gold/5 flex items-center justify-center text-gold flex-shrink-0">
                    <Mail size={18} />
                  </div>
                  <div>
                    <p className="text-[10px] uppercase tracking-[0.2em] text-slate-800/40 font-bold mb-1">Email</p>
                    <a href={`mailto:${SITE_INFO.email}`} className="text-teal font-bold hover:text-gold transition-colors break-all">{SITE_INFO.email}</a>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <div className="w-10 h-10 rounded-lg bg-gold/5 flex items-center justify-center text-gold flex-shrink-0">
                    <MapPin size={18} />
                  </div>
                  <div>
                    <p className="text-[10px] uppercase tracking-[0.2em] text-slate-800/40 font-bold mb-1">Clinic</p>
                    <p className="text-teal font-bold leading-snug">{SITE_INFO.location}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-teal text-white p-8 rounded-2xl shadow-premium relative overflow-hidden">
              <ShieldCheck className="absolute -bottom-4 -right-4 opacity-10" size={120} />
              <h3 className="font-heading text-xl font-bold mb-4">Clinical Standards</h3>
              <p className="font-body text-sm text-cream/70 leading-relaxed mb-6">
                Tracey is a fully accredited practitioner committed to the highest ethical and professional standards in modern clinical hypnotherapy.
              </p>
              <div className="inline-flex items-center gap-2 text-gold font-bold text-xs uppercase tracking-widest">
                Trusted Practitioner
              </div>
            </div>
            
            {/* Added Trust Signal in Sidebar for Mobile/Small Screens */}
            <Link to="/testimonials" className="block bg-white p-6 rounded-2xl border border-gold/20 shadow-soft group hover:bg-gold/5 transition-all">
              <div className="flex items-center gap-4">
                <div className="flex -space-x-2">
                  {[1, 2, 3].map(i => (
                    <div key={i} className="w-8 h-8 rounded-full bg-cream-dark border-2 border-white flex items-center justify-center text-[10px] font-bold text-teal">
                      {String.fromCharCode(64 + i)}
                    </div>
                  ))}
                </div>
                <div>
                  <div className="flex gap-0.5 text-gold mb-1">
                    {[1, 2, 3, 4, 5].map(i => <Star key={i} size={10} fill="currentColor" />)}
                  </div>
                  <p className="text-[10px] font-bold text-teal uppercase tracking-widest group-hover:text-gold transition-colors">Read Success Stories</p>
                </div>
              </div>
            </Link>
          </div>

          {/* Right: Map & Booking */}
          <div className="lg:col-span-2 space-y-8">
            <div className="bg-white p-2 rounded-2xl shadow-soft border border-cream h-[400px] overflow-hidden">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2298.1147570440623!2d-7.3242!3d54.9918!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNTTCsDU5JzMwLjUiTiA3wrAxOScyNy4xIlc!5e0!3m2!1sen!2suk!4v1716301234567!5m2!1sen!2suk" 
                width="100%" 
                height="100%" 
                style={{ border: 0, borderRadius: '1rem' }} 
                allowFullScreen={true} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Derry Hypnosis - Foyle Road Location Map"
              ></iframe>
            </div>

            <div className="bg-white rounded-2xl shadow-soft border border-cream overflow-hidden relative">
              {/* Trust Signal integrated near the booking header */}
              <div className="p-6 bg-cream-light border-b border-cream flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div>
                  <h3 className="font-heading text-lg font-bold text-teal">Select Appointment Type</h3>
                  <div className="flex items-center gap-2 mt-1">
                    <div className="flex text-gold">
                      {[1, 2, 3, 4, 5].map(i => <Star key={i} size={12} fill="currentColor" />)}
                    </div>
                    <Link to="/testimonials" className="text-[10px] font-bold text-teal/40 uppercase tracking-widest hover:text-gold transition-colors">
                      Trusted by 100+ clients
                    </Link>
                  </div>
                </div>
                <div className="flex items-center gap-3 bg-white px-4 py-2 rounded-full border border-cream shadow-sm">
                  <Users size={16} className="text-gold" />
                  <span className="text-[10px] font-bold text-teal uppercase tracking-widest">Derry Clinic</span>
                  <div className="w-1.5 h-1.5 rounded-full bg-success animate-pulse"></div>
                </div>
              </div>
              <div 
                className="calendly-inline-widget" 
                data-url="https://calendly.com/stephen_mc_gill/30min?hide_event_type_details=1&hide_gdpr_banner=1&primary_color=2c5f5d" 
                style={{ minWidth: '320px', height: '600px' }}
              ></div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {CONTACT_OPTIONS.map((option, index) => (
            <div key={index} className="bg-white p-8 rounded-xl shadow-soft border border-cream hover:border-gold/30 transition-all group">
              <div className="w-10 h-10 bg-cream-light rounded-lg flex items-center justify-center mb-6 text-gold group-hover:bg-gold group-hover:text-white transition-all">
                {getIcon(option.icon)}
              </div>
              <h3 className="font-heading text-lg font-bold text-teal mb-2">{option.title}</h3>
              <p className="font-body text-xs text-slate-800/60 mb-6 leading-relaxed">{option.description}</p>
              <a 
                href={option.ctaUrl}
                className="inline-flex items-center gap-2 text-gold font-bold text-xs uppercase tracking-[0.2em] group-hover:gap-4 transition-all"
              >
                {option.ctaText} <ArrowRight size={14} />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Booking;
