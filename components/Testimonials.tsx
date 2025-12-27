
import React from 'react';
import { TESTIMONIALS } from '../constants';
import { Quote, Star } from 'lucide-react';

const Testimonials: React.FC = () => {
  return (
    <section className="py-32 bg-white overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="font-heading text-5xl font-bold text-teal mb-6">Success Stories</h2>
          <div className="w-24 h-1 bg-gold mx-auto rounded-full mb-8"></div>
          <p className="font-body text-xl text-slate-800/60 max-w-2xl mx-auto">
            Our clients' journeys are our greatest inspiration. Hear from those who have reclaimed control of their lives.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {TESTIMONIALS.map((t, index) => (
            <div 
              key={index} 
              className="relative p-10 md:p-14 bg-cream-light rounded-[3xl] border border-cream transition-all duration-300 hover:shadow-premium group"
            >
              <Quote className="absolute top-8 left-8 text-gold/10 w-24 h-24" />
              
              <div className="relative z-10">
                <div className="flex gap-1 mb-8">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} size={16} className="fill-gold text-gold" />
                  ))}
                </div>

                <p className="font-heading text-2xl md:text-3xl text-teal italic leading-snug mb-10 group-hover:text-teal-dark transition-colors">
                  "{t.text}"
                </p>

                <div className="flex items-center justify-between border-t border-gold/10 pt-8">
                  <div>
                    <h4 className="font-body font-bold text-slate-800 text-lg uppercase tracking-wider">{t.author}</h4>
                    <p className="font-body text-gold font-medium">{t.location}</p>
                  </div>
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-soft">
                    <span className="text-teal font-bold text-xl">{t.author[0]}</span>
                  </div>
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
