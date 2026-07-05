import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Headphones, Lock, Sparkles, ArrowRight, RefreshCw, Download } from 'lucide-react';
import { Link } from 'react-router-dom';
import { DOWNLOAD_PRODUCTS } from '../../constants';
import DownloadCard from './DownloadCard';

const Downloads: React.FC = () => {
  const available = DOWNLOAD_PRODUCTS.filter(p => p.available);
  const comingSoon = DOWNLOAD_PRODUCTS.filter(p => !p.available);

  return (
    <>
      <Helmet>
        <title>Downloads | Derry Hypnosis</title>
        <meta
          name="description"
          content="Professional hypnotherapy audio sessions and guides by Tracey McGill EAPH. Instant download, listen anywhere, return to download any time."
        />
        <link rel="canonical" href="https://derryhypnosis.co.uk/downloads" />
        <meta property="og:title" content="Downloads | Derry Hypnosis" />
        <meta property="og:description" content="Professional hypnotherapy sessions by Tracey McGill. Instant download, listen anywhere." />
        <meta property="og:url" content="https://derryhypnosis.co.uk/downloads" />
      </Helmet>

      {/* Hero */}
      <section className="bg-teal-dark pt-40 pb-24 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white/5 rounded-full -translate-y-1/2 translate-x-1/3" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-gold/10 rounded-full translate-y-1/2 -translate-x-1/3" />
        </div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 bg-white/10 text-white/80 text-[10px] font-bold uppercase tracking-[0.2em] px-4 py-2 rounded-full mb-8">
              <Sparkles size={11} />
              Instant Download &nbsp;&middot;&nbsp; Professional Grade &nbsp;&middot;&nbsp; 30+ Min Sessions
            </span>
            <h1 className="font-heading text-5xl md:text-7xl font-bold text-white mb-6 leading-[1.05]">
              Change That Continues <br />
              <span className="italic font-medium text-gold text-4xl md:text-6xl">Between Sessions.</span>
            </h1>
            <p className="text-white/70 text-lg md:text-xl leading-relaxed max-w-2xl mb-10">
              Keep reinforcing the shift at home, at your own pace, as many times as you need. Professional hypnotherapy sessions crafted by Tracey McGill.
            </p>

            {/* Trust row */}
            <div className="flex flex-wrap gap-6 text-white/60 text-xs font-semibold uppercase tracking-wider">
              <span className="flex items-center gap-2">
                <Download size={14} className="text-gold" /> Instant delivery
              </span>
              <span className="flex items-center gap-2">
                <RefreshCw size={14} className="text-gold" /> Download any time
              </span>
              <span className="flex items-center gap-2">
                <Headphones size={14} className="text-gold" /> 30+ min sessions
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Available products */}
      <section className="bg-cream-light py-20">
        <div className="container mx-auto px-6">
          <div className="flex items-end justify-between mb-12 flex-wrap gap-4">
            <div>
              <span className="text-gold font-bold text-[10px] uppercase tracking-[0.2em] mb-2 block">
                Ready to Download
              </span>
              <h2 className="font-heading text-4xl font-bold text-teal">Available Now</h2>
            </div>
            <p className="text-slate-400 text-sm max-w-xs text-right leading-relaxed">
              Secure checkout via Payhip. Return to download any time after purchase.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {available.map(product => (
              <DownloadCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Coming soon */}
      {comingSoon.length > 0 && (
        <section className="bg-white py-16">
          <div className="container mx-auto px-6">
            <div className="mb-8">
              <span className="text-gold font-bold text-[10px] uppercase tracking-[0.2em] mb-2 block">
                In the Studio
              </span>
              <h2 className="font-heading text-3xl font-bold text-teal">Coming Soon</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {comingSoon.map(product => (
                <div
                  key={product.id}
                  className="flex items-center gap-4 p-5 rounded-xl border border-cream-dark bg-cream-light/60 opacity-70"
                >
                  <div className="w-10 h-10 rounded-full bg-cream-dark flex items-center justify-center flex-shrink-0">
                    <Lock size={15} className="text-teal/40" />
                  </div>
                  <div>
                    <p className="font-bold text-teal text-sm">{product.title}</p>
                    <p className="text-[11px] text-slate-400 mt-0.5">
                      {product.type === 'audio'
                        ? `Audio · ${product.duration ?? '30+ min'}`
                        : 'PDF Guide'}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Bundle teaser */}
      <section className="bg-cream-light py-16">
        <div className="container mx-auto px-6">
          <div className="bg-teal rounded-3xl p-8 md:p-14 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-80 h-80 bg-white/5 rounded-full -translate-y-1/3 translate-x-1/3 pointer-events-none" />
            <div className="relative z-10 grid md:grid-cols-2 gap-10 items-center">
              <div>
                <span className="inline-flex items-center gap-2 bg-gold/20 text-gold text-[10px] font-bold uppercase tracking-[0.2em] px-3 py-1.5 rounded-full mb-6">
                  <Sparkles size={11} /> Best Value
                </span>
                <h3 className="font-heading text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
                  The Complete Collection
                </h3>
                <p className="text-white/65 leading-relaxed mb-6">
                  All 7 sessions plus 2 bonus tracks. Save over 40% compared to buying individually.
                </p>
                <div className="flex flex-wrap gap-4 items-center">
                  <div className="text-white">
                    <span className="text-white/45 text-sm line-through mr-2">£69.93</span>
                    <span className="font-heading text-4xl font-bold">£42</span>
                  </div>
                  <span className="bg-gold/20 text-gold text-[10px] font-bold px-3 py-1.5 rounded-full uppercase tracking-wider">
                    Launching Soon
                  </span>
                </div>
              </div>

              <div className="bg-white/10 rounded-2xl p-6">
                <p className="text-white/50 text-[10px] font-bold uppercase tracking-[0.2em] mb-4">
                  Also available
                </p>
                <div className="space-y-3">
                  <div className="flex justify-between items-center py-3 border-b border-white/10">
                    <div>
                      <p className="text-white font-semibold text-sm">Calm and Sleep Set</p>
                      <p className="text-white/45 text-xs mt-0.5">3 sessions · 17% off</p>
                    </div>
                    <span className="font-heading text-xl font-bold text-gold">£24.99</span>
                  </div>
                  <div className="flex justify-between items-center py-3">
                    <div>
                      <p className="text-white font-semibold text-sm">Single Sessions</p>
                      <p className="text-white/45 text-xs mt-0.5">Available individually</p>
                    </div>
                    <span className="font-heading text-xl font-bold text-gold">£9.99</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Free sample CTA */}
      <section className="bg-white py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mx-auto text-center">
            <div className="w-16 h-16 bg-cream rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-soft">
              <Headphones className="text-teal" size={30} />
            </div>
            <h3 className="font-heading text-3xl font-bold text-teal mb-4">
              Not Sure Where to Start?
            </h3>
            <p className="text-slate-500 mb-8 leading-relaxed text-lg">
              Book a free 15-minute call with Tracey to find out which session is right for you, or try a complimentary sample track.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-teal hover:bg-teal-dark text-white font-bold py-4 px-10 rounded-full transition-all shadow-lg hover:-translate-y-0.5"
            >
              Book a Free Discovery Call <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Downloads;
