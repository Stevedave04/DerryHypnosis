
import React from 'react';
import { Sparkles, ArrowRight } from 'lucide-react';

const MindfulnessTeaser: React.FC = () => {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-teal/5 rounded-full blur-[100px] -translate-y-1/2 -translate-x-1/2"></div>
      
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          
          {/* Illustration Mockup */}
          <div className="w-full lg:w-1/2 relative">
            <div className="relative z-10 animate-float">
              {/* Glassmorphic Mockup Container */}
              <div className="bg-gradient-to-br from-teal/10 to-gold/5 p-1 rounded-[3rem] shadow-premium backdrop-blur-sm border border-white/50">
                <div className="bg-white rounded-[2.8rem] overflow-hidden p-8 md:p-12 text-center aspect-square flex flex-col items-center justify-center relative">
                  
                  {/* Stylized Applet Graphic */}
                  <div className="relative w-48 h-48 md:w-64 md:h-64 mb-8">
                    {/* Pulsing Outer Rings */}
                    <div className="absolute inset-0 rounded-full border-4 border-teal/10 animate-ping opacity-20"></div>
                    <div className="absolute inset-4 rounded-full border-2 border-gold/20 animate-pulse"></div>
                    
                    {/* Central Mockup Sphere */}
                    <div className="absolute inset-10 rounded-full bg-gradient-to-tr from-teal to-teal-light shadow-2xl flex items-center justify-center text-white">
                      <Sparkles size={40} className="animate-spin-slow" />
                    </div>
                    
                    {/* Floating Indicators */}
                    <div className="absolute -top-2 left-1/2 -translate-x-1/2 bg-white shadow-lg px-4 py-1 rounded-full border border-cream text-teal font-bold text-xs uppercase tracking-widest">Inhale</div>
                    <div className="absolute top-1/2 -right-6 -translate-y-1/2 bg-white shadow-lg px-4 py-1 rounded-full border border-cream text-teal font-bold text-xs uppercase tracking-widest rotate-90">Hold</div>
                    <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-white shadow-lg px-4 py-1 rounded-full border border-cream text-teal font-bold text-xs uppercase tracking-widest">Exhale</div>
                    <div className="absolute top-1/2 -left-6 -translate-y-1/2 bg-white shadow-lg px-4 py-1 rounded-full border border-cream text-teal font-bold text-xs uppercase tracking-widest -rotate-90">Hold</div>
                  </div>

                  <h4 className="font-heading text-2xl font-bold text-teal mb-2">Live Session Mockup</h4>
                  <p className="font-body text-slate-800/40 text-sm uppercase tracking-[0.2em]">Designed for Modern Clarity</p>
                </div>
              </div>
              
              {/* Decorative shadow */}
              <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-3/4 h-10 bg-slate-900/5 blur-3xl rounded-full"></div>
            </div>
            
            {/* Background elements */}
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-gold/10 rounded-full blur-3xl"></div>
          </div>

          {/* Content */}
          <div className="w-full lg:w-1/2 text-left">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gold/10 rounded-full text-gold font-bold text-xs uppercase tracking-[0.2em] mb-6">
              <Sparkles size={14} />
              Featured Mindfulness Tool
            </div>
            
            <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-teal mb-8 leading-tight">
              Calm Your Mind in <br />
              <span className="italic font-medium text-teal-light">Just 16 Seconds.</span>
            </h2>
            
            <p className="font-body text-xl text-slate-800/70 mb-10 leading-relaxed">
              Experience the immediate benefits of "Box Breathing," a proven clinical technique used by elite performers to reset the nervous system. Our interactive applet below provides a guided visual experience to help you find your centre.
            </p>
            
            <div className="space-y-6 mb-12">
              {[
                "Regulate your body's stress response instantly",
                "Improve focus and mental clarity before sessions",
                "A perfect companion to your hypnotherapy journey"
              ].map((point, idx) => (
                <div key={idx} className="flex items-center gap-4 text-slate-800 font-body font-medium">
                  <div className="w-6 h-6 rounded-full bg-teal/10 flex items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-teal"></div>
                  </div>
                  {point}
                </div>
              ))}
            </div>

            <button 
              onClick={() => document.getElementById('breathing-applet')?.scrollIntoView({ behavior: 'smooth' })}
              className="group flex items-center gap-3 text-teal font-bold text-lg hover:text-gold transition-colors"
            >
              Try the Interactive Tool
              <div className="w-12 h-12 rounded-full border border-teal/20 flex items-center justify-center group-hover:border-gold group-hover:translate-x-2 transition-all">
                <ArrowRight size={20} />
              </div>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MindfulnessTeaser;
