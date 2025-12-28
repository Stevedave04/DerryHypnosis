
import React from 'react';
import { TESTIMONIALS } from '../constants';
import { Quote, Star } from 'lucide-react';

const Testimonials: React.FC = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-gold font-bold tracking-[0.2em] uppercase text-xs mb-4 block">Client Success</span>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-teal mb-6">Voices of Transformation</h2>
          <p className="font-body text-lg text-slate-800/60 max-w-2xl mx-auto leading-relaxed">
            Real stories from people in Derry and beyond who have reclaimed control through our clinical hypnotherapy programmes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {TESTIMONIALS.map((t, index) => (
            <div 
              key={index} 
              className="p-8 bg-cream-light/50 rounded-xl border border-cream/50 shadow-soft hover:shadow-premium transition-all duration-300 flex flex-col"
            >
              <div className="flex gap-1 mb-6 text-gold">
                {[...Array(t.rating)].map((_, i) => (
                  <Star key={i} size={12} className="fill-gold" />
                ))}
              </div>

              <div className="mb-8 flex-grow">
                <p className="font-body text-slate-800 leading-relaxed text-lg">
                  "{t.text}"
                </p>
              </div>

              <div className="flex items-center gap-3 pt-6 border-t border-cream">
                <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-sm text-teal font-bold border border-cream text-sm">
                  {t.author[0]}
                </div>
                <div>
                  <h4 className="font-body font-bold text-teal text-xs uppercase tracking-widest">{t.author}</h4>
                  <p className="text-[10px] text-gold font-medium uppercase tracking-[0.2em]">{t.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
