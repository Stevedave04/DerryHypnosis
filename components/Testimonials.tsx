
import React, { useState } from 'react';
import { TESTIMONIALS } from '../constants';
import { Star } from 'lucide-react';

type Category = 'all' | 'smoking' | 'weight' | 'anxiety' | 'general';

const FILTERS: { label: string; value: Category }[] = [
  { label: 'All', value: 'all' },
  { label: 'Quit Smoking', value: 'smoking' },
  { label: 'Weight Loss', value: 'weight' },
  { label: 'Anxiety', value: 'anxiety' },
  { label: 'General', value: 'general' },
];

const Testimonials: React.FC<{ standalone?: boolean }> = ({ standalone }) => {
  const [active, setActive] = useState<Category>('all');

  const filtered = active === 'all'
    ? TESTIMONIALS
    : TESTIMONIALS.filter(t => t.category === active);

  const Heading = standalone ? 'h1' : 'h2';

  return (
    <section className={`${standalone ? 'pt-40 pb-24' : 'py-24'} bg-white`}>
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <span className="text-gold font-bold tracking-[0.2em] uppercase text-xs mb-4 block">Client Success</span>
          <Heading className="font-heading text-4xl md:text-5xl font-bold text-teal mb-6">Voices of Transformation</Heading>
          <p className="font-body text-lg text-slate-800/60 max-w-2xl mx-auto leading-relaxed">
            Real stories from people in Derry and beyond who have reclaimed control through our clinical hypnotherapy programmes.
          </p>
        </div>

        {/* Category filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12" role="group" aria-label="Filter testimonials by category">
          {FILTERS.map(f => (
            <button
              key={f.value}
              onClick={() => setActive(f.value)}
              aria-pressed={active === f.value}
              className={`px-5 py-2 rounded-full text-xs font-bold uppercase tracking-[0.15em] transition-all border ${
                active === f.value
                  ? 'bg-teal text-white border-teal shadow-sm'
                  : 'bg-white text-slate-800/60 border-cream hover:border-teal/30 hover:text-teal'
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filtered.map((t) => (
            <div
              key={t.author}
              className="p-8 bg-cream-light/50 rounded-xl border border-cream/50 shadow-soft hover:shadow-premium transition-all duration-300 flex flex-col"
            >
              <div className="flex gap-1 mb-6 text-gold">
                {[...Array(t.rating)].map((_, i) => (
                  <Star key={i} size={12} fill="currentColor" />
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

        {filtered.length === 0 && (
          <p className="text-center text-slate-800/40 font-body py-16">No testimonials in this category yet.</p>
        )}
      </div>
    </section>
  );
};

export default Testimonials;
