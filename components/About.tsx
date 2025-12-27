import React from 'react';
import { Award, Heart, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { SITE_INFO } from '../constants';

const About: React.FC = () => {
  // Professional portrait placeholder matching clinical persona
  const traceyPortrait = "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=800&auto=format&fit=crop";

  return (
    <section className="py-24 bg-white overflow-hidden min-h-screen pt-32">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          <div className="w-full lg:w-1/2 relative">
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-gold/10 rounded-full blur-3xl z-0"></div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-teal/10 rounded-full blur-3xl z-0"></div>
            
            <div className="relative z-10">
              {/* Decorative Frame */}
              <div className="absolute top-4 -left-4 w-full h-full border-2 border-gold/30 rounded-2xl z-0 hidden md:block"></div>
              
              <div className="relative overflow-hidden rounded-2xl shadow-premium aspect-[3/4] lg:aspect-auto lg:h-[650px]">
                <img 
                  src={traceyPortrait} 
                  alt={`${SITE_INFO.owner} - Clinical Hypnotherapist`} 
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-teal/80 to-transparent p-8 text-white">
                  <p className="font-heading text-2xl font-bold">{SITE_INFO.owner}</p>
                  <p className="font-body text-sm uppercase tracking-widest opacity-90">Dip. Hyp, Advanced Hypnotherapist</p>
                </div>
              </div>
            </div>
            
            <div className="absolute top-1/2 -translate-y-1/2 -right-8 w-24 h-48 bg-gold rounded-full opacity-20 blur-2xl hidden lg:block"></div>
          </div>

          <div className="w-full lg:w-1/2">
            <span className="text-gold font-bold tracking-widest uppercase text-sm mb-4 block">The Heart of Derry Hypnosis</span>
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-teal mb-8 leading-tight">
              Meet {SITE_INFO.owner}, <br />
              <span className="italic font-medium text-teal-light">Your Partner in Transformation.</span>
            </h2>
            
            <div className="space-y-6 font-body text-lg text-slate-800/80 leading-relaxed mb-10">
              <p>
                Hello, I'm Tracey. My journey into hypnotherapy began with a simple but profound realisation: our minds are the architects of our reality. I've spent years helping people in Derry and beyond break through the barriers that held them back.
              </p>
              <p>
                As a fully accredited Clinical Hypnotherapist, I specialise in advanced techniques designed to reach the subconscious mind where real change happens. I don't believe in long, drawn-out processes; I believe in getting to the root of the issue effectively so you can start living your life to the fullest.
              </p>
              <p>
                My approach is warm, non-judgemental, and results-oriented. Whether you're looking to shed weight, quit smoking, or find calm in a stressful world, I am here to guide you every step of the way.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-10">
              <div className="flex items-start gap-3">
                <Award className="text-gold flex-shrink-0" size={24} />
                <div>
                  <h4 className="font-bold text-teal">Accredited Professional</h4>
                  <p className="text-sm text-slate-800/60 font-medium italic">Certified Clinical Hypnotherapist</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Heart className="text-gold flex-shrink-0" size={24} />
                <div>
                  <h4 className="font-bold text-teal">Compassionate Care</h4>
                  <p className="text-sm text-slate-800/60 font-medium italic">A safe space for everyone</p>
                </div>
              </div>
            </div>

            <Link 
              to="/contact" 
              className="bg-teal hover:bg-teal-dark text-white font-bold py-4 px-10 rounded-full transition-all shadow-xl inline-block transform hover:-translate-y-1"
            >
              Book a Consultation
            </Link>
          </div>

        </div>

        {/* Experience & Values */}
        <div className="mt-32 grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="text-center p-10 bg-cream-light rounded-3xl border border-cream">
            <ShieldCheck className="mx-auto text-teal mb-6" size={40} />
            <h3 className="font-heading text-2xl font-bold text-teal mb-4">My Philosophy</h3>
            <p className="font-body text-slate-800/70">
              "I believe that everyone has the internal resources they need to change. My job is to help you access them safely and effectively."
            </p>
          </div>
          <div className="text-center p-10 bg-cream-light rounded-3xl border border-cream">
            <CheckCircle2 className="mx-auto text-teal mb-6" size={40} />
            <h3 className="font-heading text-2xl font-bold text-teal mb-4">The Clinic</h3>
            <p className="font-body text-slate-800/70">
              Based in the heart of Derry, our clinic provides a serene, confidential, and professional environment designed for relaxation and healing.
            </p>
          </div>
          <div className="text-center p-10 bg-cream-light rounded-3xl border border-cream">
            <Award className="mx-auto text-teal mb-6" size={40} />
            <h3 className="font-heading text-2xl font-bold text-teal mb-4">Proven Results</h3>
            <p className="font-body text-slate-800/70">
              We focus on measurable progress. My goal is for you to leave every session feeling more empowered than when you walked in.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
