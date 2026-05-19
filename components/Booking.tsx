
import React, { useState } from 'react';
import { CONTACT_OPTIONS, SITE_INFO, SERVICES, FORM_ENDPOINT } from '../constants';
import { Phone, MapPin, Video, Calendar, ShieldCheck, Mail, ArrowRight, Star, AlertCircle, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';

type FormState = 'idle' | 'submitting' | 'success' | 'error';

const Booking: React.FC = () => {
  const [formState, setFormState] = useState<FormState>('idle');
  const [values, setValues] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setValues(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormState('submitting');
    try {
      const res = await fetch(FORM_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          ...values,
          _subject: `New enquiry from ${values.name} — Derry Hypnosis`,
        }),
      });
      if (res.ok) {
        setFormState('success');
        setValues({ name: '', email: '', phone: '', service: '', message: '' });
      } else {
        setFormState('error');
      }
    } catch {
      setFormState('error');
    }
  };

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'phone': return <Phone size={20} />;
      case 'map': return <MapPin size={20} />;
      case 'video': return <Video size={20} />;
      default: return <Calendar size={20} />;
    }
  };

  const inputClass =
    'w-full px-4 py-3 rounded-xl border border-cream bg-cream-light focus:outline-none focus:ring-2 focus:ring-teal/30 focus:border-teal font-body text-sm transition-all placeholder:text-slate-400';

  return (
    <section id="contact-form" className="py-24 bg-cream-light min-h-screen pt-40">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <span className="text-gold font-bold tracking-[0.2em] uppercase text-xs mb-4 block animate-reveal">Take the First Step</span>
          <h1 className="font-heading text-4xl md:text-6xl font-bold text-teal mb-6 animate-reveal stagger-1">Connect With Us</h1>
          <p className="font-body text-xl text-slate-800/60 leading-relaxed max-w-2xl mx-auto animate-reveal stagger-2">
            Ready to reclaim control? Send us a message and Tracey will be in touch within 24 hours.
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

          {/* Right: Contact Form */}
          <div className="lg:col-span-2">
            {formState === 'success' ? (
              <div className="bg-white rounded-2xl shadow-soft border border-cream p-16 flex flex-col items-center text-center h-full justify-center">
                <div className="w-20 h-20 rounded-full bg-teal/10 flex items-center justify-center mb-6">
                  <CheckCircle2 size={40} className="text-teal" />
                </div>
                <h3 className="font-heading text-2xl font-bold text-teal mb-3">Message Sent!</h3>
                <p className="font-body text-slate-800/60 max-w-sm leading-relaxed mb-8">
                  Thank you for reaching out. Tracey will be in touch within 24 hours.
                </p>
                <button
                  onClick={() => setFormState('idle')}
                  className="text-gold font-bold text-xs uppercase tracking-[0.2em] hover:text-gold-dark transition-colors"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="bg-white rounded-2xl shadow-soft border border-cream overflow-hidden">
                <div className="p-6 bg-cream-light border-b border-cream flex items-center justify-between">
                  <div>
                    <h3 className="font-heading text-lg font-bold text-teal">Send a Message</h3>
                    <p className="text-[11px] text-slate-800/40 font-body mt-0.5">We reply within 24 hours</p>
                  </div>
                  <div className="flex gap-0.5 text-gold">
                    {[1, 2, 3, 4, 5].map(i => <Star key={i} size={12} fill="currentColor" />)}
                  </div>
                </div>

                <div className="p-8 space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-[10px] font-bold uppercase tracking-[0.2em] text-slate-800/50 mb-2">Full Name *</label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        required
                        autoComplete="name"
                        value={values.name}
                        onChange={handleChange}
                        placeholder="Your name"
                        className={inputClass}
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-[10px] font-bold uppercase tracking-[0.2em] text-slate-800/50 mb-2">Email *</label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        autoComplete="email"
                        value={values.email}
                        onChange={handleChange}
                        placeholder="your@email.com"
                        className={inputClass}
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="phone" className="block text-[10px] font-bold uppercase tracking-[0.2em] text-slate-800/50 mb-2">Phone <span className="normal-case tracking-normal text-slate-800/30">(optional)</span></label>
                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        autoComplete="tel"
                        value={values.phone}
                        onChange={handleChange}
                        placeholder="+44 28..."
                        className={inputClass}
                      />
                    </div>
                    <div>
                      <label htmlFor="service" className="block text-[10px] font-bold uppercase tracking-[0.2em] text-slate-800/50 mb-2">Interested In</label>
                      <select
                        id="service"
                        name="service"
                        value={values.service}
                        onChange={handleChange}
                        className={`${inputClass} appearance-none cursor-pointer`}
                      >
                        <option value="">Select a service...</option>
                        {SERVICES.map(s => (
                          <option key={s.slug} value={s.title}>{s.title}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-[10px] font-bold uppercase tracking-[0.2em] text-slate-800/50 mb-2">Message *</label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      required
                      value={values.message}
                      onChange={handleChange}
                      placeholder="Tell us a little about what you'd like help with..."
                      className={`${inputClass} resize-none`}
                    />
                  </div>

                  {formState === 'error' && (
                    <div className="flex items-start gap-3 text-red-700 bg-red-50 p-4 rounded-xl border border-red-100">
                      <AlertCircle size={18} className="flex-shrink-0 mt-0.5" />
                      <p className="text-sm font-medium">
                        Something went wrong. Please email us directly at{' '}
                        <a href={`mailto:${SITE_INFO.email}`} className="underline">{SITE_INFO.email}</a>
                      </p>
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={formState === 'submitting'}
                    className="w-full bg-teal hover:bg-teal-dark text-white font-bold py-4 px-8 rounded-full transition-all shadow-lg hover:-translate-y-0.5 active:translate-y-0 disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-3"
                  >
                    {formState === 'submitting' ? 'Sending…' : 'Send Message'}
                    {formState !== 'submitting' && <ArrowRight size={18} aria-hidden="true" />}
                  </button>

                  <p className="text-center text-xs text-slate-800/40">
                    Or email directly at{' '}
                    <a href={`mailto:${SITE_INFO.email}`} className="text-teal font-semibold hover:text-gold transition-colors">
                      {SITE_INFO.email}
                    </a>
                  </p>
                </div>
              </form>
            )}
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
              {option.externalUrl ? (
                <a
                  href={option.externalUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-gold font-bold text-xs uppercase tracking-[0.2em] group-hover:gap-4 transition-all"
                >
                  {option.ctaText} <ArrowRight size={14} />
                </a>
              ) : (
                <button
                  onClick={() => document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' })}
                  className="inline-flex items-center gap-2 text-gold font-bold text-xs uppercase tracking-[0.2em] group-hover:gap-4 transition-all"
                >
                  {option.ctaText} <ArrowRight size={14} />
                </button>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Booking;
