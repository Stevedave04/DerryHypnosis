
import React from 'react';
import { Award, Heart, ShieldCheck, CheckCircle2, Star, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import { SITE_INFO } from '../constants';

const About: React.FC = () => {
  // Updated portrait to the official one provided by the user.
  const traceyPortrait = "https://derryhypnosis.co.uk/Tracey-portrait.png";

  return (
    <section className="py-24 bg-white overflow-hidden min-h-screen pt-40">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20 mb-32">
          {/* Portrait Column */}
          <div className="w-full lg:w-1/2 relative">
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-gold/10 rounded-full blur-3xl z-0"></div>
            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-teal/10 rounded-full blur-3xl z-0"></div>
            
            <div className="relative z-10">
              <div className="absolute top-4 -left-4 w-full h-full border-2 border-cream rounded-2xl z-0 hidden md:block"></div>
              <div className="relative overflow-hidden rounded-3xl shadow-premium h-[450px] sm:h-[550px] lg:h-[750px] w-full">
                <img 
                  src={traceyPortrait} 
                  alt={`${SITE_INFO.owner} - Clinical Hypnotherapist`} 
                  className="w-full h-full object-cover object-[center_20%]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-teal/80 via-transparent to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-8 lg:p-10 text-white">
                  <h3 className="font-heading text-2xl lg:text-3xl font-bold mb-1">{SITE_INFO.owner}</h3>
                  <p className="font-body text-xs uppercase tracking-[0.3em] text-gold-light font-bold">Clinical Hypnotherapist & Coach</p>
                </div>
              </div>
            </div>
          </div>

          {/* Text Content Column */}
          <div className="w-full lg:w-1/2">
            <span className="text-gold font-bold tracking-[0.2em] uppercase text-xs mb-4 block">The Heart of Derry Hypnosis</span>
            <h2 className="font-heading text-4xl md:text-6xl font-bold text-teal mb-8 leading-tight">
              Compassionate Therapy <br />
              <span className="italic font-medium text-teal-light text-3xl md:text-5xl">Grounded in Science.</span>
            </h2>
            
            <div className="space-y-6 font-body text-lg text-slate-800/80 leading-relaxed mb-10">
              <p>
                Hello, I'm Tracey. My passion for hypnotherapy was born from seeing how rapidly the mind can rewrite its own limitations when given the right guidance. I've dedicated my professional life to helping the people of Derry/Londonderry reclaim their confidence and freedom.
              </p>
              <p>
                I am a fully accredited Clinical Hypnotherapist, but I see myself as more of a catalyst for your change. I combine the latest neuroscientific understanding of the mind with time-tested clinical hypnotherapy techniques to provide a treatment that isn't just relaxing, but deeply transformative.
              </p>
              <p>
                I don't believe in 'one size fits all'. Every session at Derry Hypnosis is custom-tailored to your unique life experience, your specific triggers, and your ultimate vision for your future. Whether you're here to stop smoking, lose weight, or finally silence the voice of anxiety, I am honoured to walk this path with you.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-12">
              <div className="flex items-start gap-4 p-4 rounded-xl border border-cream hover:bg-cream-light transition-colors">
                <Award className="text-gold flex-shrink-0" size={24} />
                <div>
                  <h4 className="font-bold text-teal text-sm uppercase tracking-wide">Accredited</h4>
                  <p className="text-sm text-slate-800/60 font-medium">Certified Clinical Practitioner</p>
                </div>
              </div>
              <div className="flex items-start gap-4 p-4 rounded-xl border border-cream hover:bg-cream-light transition-colors">
                <Heart className="text-gold flex-shrink-0" size={24} />
                <div>
                  <h4 className="font-bold text-teal text-sm uppercase tracking-wide">Compassionate</h4>
                  <p className="text-sm text-slate-800/60 font-medium">Safe, confidential environment</p>
                </div>
              </div>
            </div>

            <Link 
              to="/contact" 
              className="bg-teal hover:bg-teal-dark text-white font-bold py-5 px-12 rounded-full transition-all shadow-xl inline-block transform hover:-translate-y-1"
            >
              Start Your Journey With Me
            </Link>
          </div>
        </div>

        {/* Methodology Section */}
        <div className="bg-cream-light rounded-[3rem] p-12 md:p-24 relative overflow-hidden">
          <div className="absolute top-0 right-0 p-12 opacity-5">
            <Sparkles size={120} />
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h3 className="font-heading text-3xl md:text-5xl font-bold text-teal mb-6">Our Methodology</h3>
              <p className="font-body text-lg text-slate-800/60">We focus on three core pillars to ensure your success is permanent.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              <div className="text-center">
                <div className="w-16 h-16 bg-white rounded-2xl shadow-soft flex items-center justify-center mx-auto mb-6 text-gold">
                  <Star size={32} />
                </div>
                <h4 className="font-heading text-xl font-bold text-teal mb-4">Discovery</h4>
                <p className="font-body text-slate-800/70 text-sm leading-relaxed">
                  We begin by uncovering the deep-rooted subconscious scripts that are currently driving your behaviour.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-white rounded-2xl shadow-soft flex items-center justify-center mx-auto mb-6 text-gold">
                  <ShieldCheck size={32} />
                </div>
                <h4 className="font-heading text-xl font-bold text-teal mb-4">Rewriting</h4>
                <p className="font-body text-slate-800/70 text-sm leading-relaxed">
                  Using advanced clinical techniques, we safely rewrite these scripts to align with your conscious goals.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-white rounded-2xl shadow-soft flex items-center justify-center mx-auto mb-6 text-gold">
                  <CheckCircle2 size={32} />
                </div>
                <h4 className="font-heading text-xl font-bold text-teal mb-4">Maintenance</h4>
                <p className="font-body text-slate-800/70 text-sm leading-relaxed">
                  We provide you with the tools and techniques to maintain your new mindset long after our sessions end.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
