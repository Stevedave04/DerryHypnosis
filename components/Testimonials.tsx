
import React from 'react';
import { TESTIMONIALS } from '../constants';
import { Quote, Star } from 'lucide-react';

const AVATARS = [
  "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=150&auto=format&fit=crop", // Woman
  "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=150&auto=format&fit=crop", // Man
  "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=150&auto=format&fit=crop", // Woman
  "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=150&auto=format&fit=crop"  // Man
];

const Testimonials: React.FC = () => {
  return (
    <section className="py-24 bg-cream relative min-h-screen pt-32">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-heading text-4xl font-bold text-teal mb-4">Client Success Stories</h2>
          <p className="font-body text-xl text-gray-600">Real results from real people in Derry & beyond.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {TESTIMONIALS.map((t, index) => (
            <div key={index} className="bg-white p-8 rounded-xl shadow-card relative group hover:-translate-y-2 transition-transform duration-300">
              <Quote className="absolute top-6 right-6 text-gold/20 w-12 h-12" />
              
              <div className="flex gap-1 mb-4">
                {[...Array(t.rating)].map((_, i) => (
                  <Star key={i} size={18} className="fill-gold text-gold" />
                ))}
              </div>

              <p className="font-body text-gray-700 text-lg italic mb-6 leading-relaxed relative z-10">
                "{t.text}"
              </p>

              <div className="flex items-center gap-4">
                <img 
                  src={AVATARS[index % AVATARS.length]}
                  alt={t.author} 
                  className="w-12 h-12 rounded-full object-cover border-2 border-gold"
                />
                <div>
                  <h4 className="font-heading font-bold text-darkGrey">{t.author}</h4>
                  <p className="font-accent text-sm text-gray-500">{t.location}</p>
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
