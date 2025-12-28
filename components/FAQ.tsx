
import React, { useState } from 'react';
import { FAQS } from '../constants';
import { ChevronDown, HelpCircle } from 'lucide-react';

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-16">
          
          {/* Left Column: Heading */}
          <div className="lg:w-1/3">
            <span className="text-gold font-bold tracking-[0.2em] uppercase text-xs mb-4 block">Understanding the Process</span>
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-teal mb-6 leading-tight">
              Frequently Asked <br />
              <span className="italic font-medium text-teal-light">Questions.</span>
            </h2>
            <p className="font-body text-lg text-slate-800/60 leading-relaxed mb-8">
              We want you to feel completely comfortable and informed before starting your journey with us.
            </p>
            <div className="bg-cream-light p-6 rounded-2xl border border-cream">
              <div className="flex items-center gap-3 mb-3 text-teal">
                <HelpCircle size={20} className="text-gold" />
                <h4 className="font-bold text-sm uppercase tracking-wider">Need more help?</h4>
              </div>
              <p className="text-sm text-slate-800/70 mb-4">If your question isn't answered here, feel free to reach out to us directly.</p>
              <a href="mailto:hello@derryhypnosis.co.uk" className="text-teal font-bold text-sm hover:text-gold transition-colors">Contact Tracey McGill</a>
            </div>
          </div>

          {/* Right Column: Accordion */}
          <div className="lg:w-2/3 space-y-4">
            {FAQS.map((faq, index) => (
              <div 
                key={index}
                className={`border rounded-2xl transition-all duration-300 ${
                  openIndex === index 
                    ? 'border-gold bg-cream-light shadow-soft' 
                    : 'border-cream hover:border-gold/30 bg-white'
                }`}
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full text-left p-6 md:p-8 flex items-center justify-between group"
                  aria-expanded={openIndex === index}
                >
                  <span className={`font-heading text-lg md:text-xl font-bold transition-colors ${
                    openIndex === index ? 'text-teal' : 'text-slate-800 group-hover:text-teal'
                  }`}>
                    {faq.question}
                  </span>
                  <div className={`transition-transform duration-300 ${openIndex === index ? 'rotate-180 text-gold' : 'text-slate-800/30'}`}>
                    <ChevronDown size={24} />
                  </div>
                </button>
                
                <div 
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    openIndex === index ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="p-6 md:p-8 pt-0 border-t border-cream/50">
                    <p className="font-body text-slate-800/70 leading-relaxed text-lg">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default FAQ;
