import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, Clock, ShieldCheck, ArrowRight, XCircle, BookOpen } from 'lucide-react';
import EbookModal from './EbookModal';

const StopSmokingLanding: React.FC = () => {
  const [ebookOpen, setEbookOpen] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0); // Ensure the page starts at the top
  }, []);

  return (
    <div className="font-body text-slate-800 bg-white">
      <EbookModal isOpen={ebookOpen} onClose={() => setEbookOpen(false)} />
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden bg-slate-900 text-white">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1517436073-3b1b1b1b1b1b?q=80&w=1920&auto=format&fit=crop" // Abstract/calm dark placeholder 
            alt="Calm abstract background"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-slate-900/90 to-slate-900"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10 text-center max-w-4xl">
          <span className="inline-block text-gold font-bold tracking-[0.2em] uppercase text-sm mb-6">
            For Smokers Who Want To Quit
          </span>
          <h1 className="font-heading text-5xl md:text-7xl font-bold leading-tight mb-8">
            Go From Smoker To <span className="text-gold italic">Non-Smoker</span> In One Session With Hypnotherapy
          </h1>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/contact"
              className="inline-flex bg-gold hover:bg-gold-dark text-white font-bold py-5 px-10 rounded-full transition-all shadow-2xl hover:shadow-gold/40 items-center justify-center gap-3 transform hover:-translate-y-1 text-lg w-full sm:w-auto"
            >
              Click Here To Become A Non-Smoker
              <ArrowRight size={20} />
            </Link>
            <button
              onClick={() => setEbookOpen(true)}
              className="inline-flex bg-white/10 hover:bg-white/20 border border-white/30 text-white font-semibold py-5 px-8 rounded-full transition-all items-center justify-center gap-3 text-lg w-full sm:w-auto"
            >
              <BookOpen size={20} />
              Free Quit Smoking Ebook
            </button>
          </div>
        </div>
      </section>

      {/* Does This Sound Like You Section */}
      <section className="py-20 lg:py-28 bg-slate-50">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="text-center mb-16">
            <h2 className="font-heading text-4xl md:text-5xl text-slate-900 font-bold mb-4">
              Does This Sound Like You?
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-12 lg:gap-16">
            <div className="bg-white p-8 md:p-10 rounded-2xl shadow-xl border border-rose-100">
              <h3 className="text-2xl font-bold text-rose-600 mb-6 flex items-center gap-3">
                <XCircle className="text-rose-500" />
                The Old Way
              </h3>
              <ul className="space-y-4">
                {[
                  "You've tried quitting multiple times",
                  "Patches and gum didn't work long term",
                  "Vaping just replaced cigarettes with another habit",
                  "You rely on willpower but the cravings come back",
                  "Stress or alcohol triggers smoking again"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="text-rose-500 mt-1">•</span>
                    <span className="text-slate-700 text-lg">{item}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-8 pt-8 border-t border-slate-100">
                <h4 className="font-bold text-lg text-slate-800 mb-4">Old Plans Included:</h4>
                <ul className="text-slate-600 space-y-2">
                  <li>• Nicotine patches</li>
                  <li>• Cutting down gradually</li>
                  <li>• Quitting cold turkey</li>
                </ul>
              </div>

              <div className="mt-6 bg-rose-50 p-4 rounded-xl text-rose-800">
                <p className="font-medium mb-2">What most smokers don't like:</p>
                <p className="text-sm">• Constant cravings • Feeling irritable and stressed • Relapsing after a few weeks</p>
              </div>
            </div>

            <div className="bg-white p-8 md:p-10 rounded-2xl shadow-xl border border-emerald-100 relative overflow-hidden">
              <div className="absolute top-0 right-0 bg-emerald-500 text-white text-xs font-bold px-4 py-1 rounded-bl-lg">
                THE SOLUTION
              </div>
              <h3 className="text-2xl font-bold text-emerald-600 mb-6 flex items-center gap-3">
                <CheckCircle className="text-emerald-500" />
                The New Way
              </h3>
              <p className="text-slate-700 text-lg mb-6 leading-relaxed">
                With hypnotherapy we work directly with the subconscious mind, where the smoking habit actually lives.
              </p>
              <p className="font-bold text-slate-900 mb-4">Clients typically experience:</p>
              <ul className="space-y-4 mb-8">
                {[
                  "Feeling calm and relaxed about quitting",
                  "Reduced or eliminated cravings",
                  "No willpower battle",
                  "No nicotine replacements",
                  "No long programs"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle className="text-emerald-500 shrink-0 mt-0.5" size={20} />
                    <span className="text-slate-700 text-lg">{item}</span>
                  </li>
                ))}
              </ul>
              
              <div className="bg-emerald-50 p-6 rounded-xl border border-emerald-100">
                <p className="font-bold text-emerald-900 mb-3">The process includes:</p>
                <ul className="space-y-2 text-emerald-800">
                  <li className="flex items-center gap-2"><span>✔</span> Preparation hypnosis MP3</li>
                  <li className="flex items-center gap-2"><span>✔</span> One private stop smoking session</li>
                  <li className="flex items-center gap-2"><span>✔</span> Reinforcement MP3 afterwards</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="mt-16 text-center">
            <p className="text-2xl md:text-3xl font-heading text-slate-800 font-medium mb-10 max-w-3xl mx-auto">
              "Many clients walk out feeling like they simply don’t want cigarettes anymore."
            </p>
            <Link
              to="/contact"
              className="inline-flex bg-gold hover:bg-gold-dark text-white font-bold py-5 px-10 rounded-full transition-all shadow-xl items-center justify-center gap-3 transform hover:-translate-y-1 text-lg"
            >
              Click Here To Become A Non-Smoker
              <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="container mx-auto px-6 max-w-4xl text-center">
          <h2 className="font-heading text-4xl md:text-5xl text-slate-900 font-bold mb-16">
            Here's What Others Are Saying
          </h2>
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <div className="bg-slate-50 p-8 rounded-2xl shadow-sm text-left">
              <div className="flex text-gold mb-4">
                {"★★★★★"}
              </div>
              <p className="text-slate-700 text-lg italic mb-6">
                "I smoked for 20 years and quit after one session. I haven’t wanted a cigarette since."
              </p>
              <p className="font-bold text-slate-900">- Former 20-Year Smoker</p>
            </div>
            <div className="bg-slate-50 p-8 rounded-2xl shadow-sm text-left">
              <div className="flex text-gold mb-4">
                {"★★★★★"}
              </div>
              <p className="text-slate-700 text-lg italic mb-6">
                "I tried patches and vaping before. Hypnotherapy finally worked for me."
              </p>
              <p className="font-bold text-slate-900">- Finally Free</p>
            </div>
          </div>
          <Link
            to="/contact"
            className="inline-flex bg-slate-900 hover:bg-slate-800 text-white font-bold py-4 px-8 rounded-full transition-all shadow-lg items-center justify-center gap-3"
          >
            Click Here To Become A Non-Smoker
          </Link>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-20 lg:py-28 bg-slate-50 border-t border-slate-200">
        <div className="container mx-auto px-6 max-w-3xl">
          <h2 className="font-heading text-4xl md:text-5xl text-slate-900 font-bold mb-16 text-center">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            {[
              {
                q: "Does hypnosis work for everyone?",
                a: "Almost everyone can be hypnotised as long as they want to stop smoking."
              },
              {
                q: "Will I lose control during hypnosis?",
                a: "No. You remain aware and in control the entire time."
              },
              {
                q: "What if I still feel cravings?",
                a: "You’ll receive a reinforcement MP3 to strengthen the results."
              },
              {
                q: "How many sessions are needed?",
                a: "For most clients, just one session."
              }
            ].map((faq, index) => (
              <div key={index} className="bg-white p-6 md:p-8 rounded-xl shadow-sm border border-slate-100">
                <h3 className="text-xl font-bold text-slate-800 mb-3">{faq.q}</h3>
                <p className="text-slate-600 leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
          <div className="mt-16 text-center">
            <Link
              to="/contact"
              className="inline-flex bg-gold hover:bg-gold-dark text-white font-bold py-5 px-10 rounded-full transition-all shadow-xl items-center justify-center gap-3 transform hover:-translate-y-1 text-lg"
            >
              Click Here To Become A Non-Smoker
              <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* About Us & Guarantee */}
      <section className="py-20 lg:py-28 bg-slate-900 text-white">
        <div className="container mx-auto px-6 max-w-4xl text-center">
          <div className="mb-16">
            <h2 className="font-heading text-4xl md:text-5xl font-bold mb-6">
              About Derry Hypnosis
            </h2>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed mb-12">
              Welcome to Derry Hypnosis, where we help smokers become calm, confident non-smokers. Our goal is simple: help people break free from smoking quickly and comfortably.
            </p>
            
            <h3 className="text-2xl font-bold mb-8 text-gold">Why Trust Us?</h3>
            <div className="grid md:grid-cols-3 gap-8 text-left max-w-4xl mx-auto mb-16">
              <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700">
                <ShieldCheck className="text-gold w-10 h-10 mb-4" />
                <h4 className="font-bold text-lg mb-2">Stop Smoking Specialist</h4>
                <p className="text-slate-400">Focused specifically on helping smokers quit.</p>
              </div>
              <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700">
                <CheckCircle className="text-gold w-10 h-10 mb-4" />
                <h4 className="font-bold text-lg mb-2">Proven Process</h4>
                <p className="text-slate-400">Preparation audio, session, and reinforcement system.</p>
              </div>
              <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700">
                <Clock className="text-gold w-10 h-10 mb-4" />
                <h4 className="font-bold text-lg mb-2">Results Focused</h4>
                <p className="text-slate-400">High success rate helping people stay smoke-free.</p>
              </div>
            </div>

            <div className="bg-slate-800 p-8 md:p-12 rounded-2xl border border-gold/30">
              <h3 className="text-2xl font-bold text-white mb-4">Our Mission</h3>
              <p className="text-lg text-slate-300 mb-8 max-w-2xl mx-auto">
                Our mission is to help smokers regain control of their health, money, and freedom by becoming non-smokers.
              </p>
              <div className="inline-block bg-gold/10 border border-gold border-dashed p-6 rounded-xl">
                <h4 className="text-2xl md:text-3xl font-heading font-bold text-gold mb-2">
                  Become a Non-Smoker in 2 Hours or Your Money Back.
                </h4>
              </div>
            </div>
            
            <div className="mt-16">
              <Link
                to="/contact"
                className="inline-flex bg-gold hover:bg-gold-dark text-white font-bold py-5 px-12 rounded-full transition-all shadow-[0_0_20px_rgba(212,165,116,0.3)] hover:shadow-[0_0_30px_rgba(212,165,116,0.5)] items-center justify-center gap-3 transform hover:-translate-y-1 text-xl"
              >
                Book Your Session Now
                <ArrowRight size={24} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default StopSmokingLanding;
