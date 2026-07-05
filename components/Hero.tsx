import React, { useState, useEffect, useCallback, useRef } from 'react';
import { ArrowRight, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { trackEvent } from '../lib/analytics';

const SLIDES = [
  {
    image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=75&w=1200&h=800&fm=webp&fit=crop",
    badge: "Clinical Hypnotherapy | Derry/Londonderry",
    headline: "What if the habit you've been fighting",
    highlight: "wasn't a willpower problem?",
    body: "Hypnotherapy works where willpower can't: directly with the subconscious patterns driving your behaviour. Trusted by clients across Derry, Donegal, and online.",
    primary: { label: "Book Your Free Discovery Call", to: "/contact" },
    secondary: { label: "See What's Possible", to: "/services" },
  },
  {
    image: "https://images.unsplash.com/photo-1505144808419-1957a94ca61e?q=75&w=1200&h=800&fm=webp&fit=crop",
    badge: "Anxiety & Stress Relief",
    headline: "Release What No Longer",
    highlight: "Serves You.",
    body: "You stop dreading the things you used to cancel. You walk into the room. You stay. Clinical techniques that calm the nervous system at the level where anxiety actually lives.",
    primary: { label: "Book a Free Call", to: "/contact" },
    secondary: { label: "Anxiety Relief", to: "/services/anxiety-stress" },
  },
  {
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=75&w=1200&h=800&fm=webp&fit=crop",
    badge: "Weight Loss & Smoking Cessation",
    headline: "A Fresh Start",
    highlight: "Begins Here.",
    body: "Lose weight for good, quit smoking in a single session, or finally sleep soundly again. Lasting change starts in the subconscious mind.",
    primary: { label: "Book Your Free Discovery Call", to: "/contact" },
    secondary: { label: "View Our Services", to: "/services" },
  },
  {
    image: "https://images.unsplash.com/photo-1490730141103-6cac27aaab94?q=75&w=1200&h=800&fm=webp&fit=crop",
    badge: "Meet Tracey McGill",
    headline: "The Change You Gave Up On",
    highlight: "Is Still Possible.",
    body: "Clients describe it the same way: one day they notice the craving, the dread, the old script is simply not running anymore. Tracey's clinical methods work where willpower never could.",
    primary: { label: "Book Your Free Discovery Call", to: "/contact" },
    secondary: { label: "Meet Tracey", to: "/about" },
  },
];

const Hero: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [loadedIndices, setLoadedIndices] = useState<Set<number>>(() => new Set([0]));

  useEffect(() => {
    const nextIdx = (currentIndex + 1) % SLIDES.length;
    setLoadedIndices(prev => prev.has(nextIdx) ? prev : new Set([...prev, nextIdx]));
  }, [currentIndex]);
  const indicatorRefs = useRef<(HTMLButtonElement | null)[]>([]);

  const goTo = useCallback((index: number) => {
    setCurrentIndex(index);
  }, []);

  const next = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % SLIDES.length);
  }, []);

  const prev = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + SLIDES.length) % SLIDES.length);
  }, []);

  useEffect(() => {
    if (isPaused) return;
    const id = setInterval(next, 8000);
    return () => clearInterval(id);
  }, [next, isPaused]);

  const handleKeyDown = (e: React.KeyboardEvent, index: number) => {
    if (e.key === 'ArrowRight') {
      e.preventDefault();
      const n = (index + 1) % SLIDES.length;
      indicatorRefs.current[n]?.focus();
      goTo(n);
    } else if (e.key === 'ArrowLeft') {
      e.preventDefault();
      const n = (index - 1 + SLIDES.length) % SLIDES.length;
      indicatorRefs.current[n]?.focus();
      goTo(n);
    }
  };

  const slide = SLIDES[currentIndex];

  return (
    <section
      className="relative min-h-[95vh] flex items-center pt-20 overflow-hidden"
      aria-roledescription="carousel"
      aria-label="Derry Hypnosis Hero"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onFocus={() => setIsPaused(true)}
      onBlur={() => setIsPaused(false)}
    >
      {/* Background images */}
      <div className="absolute inset-0 z-0" aria-live="polite" aria-atomic="true">
        {SLIDES.map((s, i) => (
          <div
            key={i}
            className={`absolute inset-0 transition-opacity duration-[2500ms] ease-in-out ${
              i === currentIndex ? 'opacity-100' : 'opacity-0'
            }`}
            aria-hidden={i !== currentIndex}
          >
            {loadedIndices.has(i) && (
              <img
                src={s.image}
                alt=""
                className="w-full h-full object-cover"
                loading="eager"
                fetchPriority={i === 0 ? 'high' : 'auto'}
                aria-hidden="true"
              />
            )}
          </div>
        ))}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/75 via-slate-900/45 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/30 via-transparent to-transparent" />
      </div>

      {/* Slide content: keyed so animations re-fire on each transition */}
      <div className="container mx-auto px-6 relative z-10">
        <div key={currentIndex} className="max-w-3xl">

          <div className="mb-6 overflow-hidden">
            <span className="inline-block font-body text-gold font-bold tracking-[0.2em] uppercase text-sm animate-slideInRight">
              {slide.badge}
            </span>
          </div>

          <h1 className="font-heading text-5xl md:text-7xl lg:text-8xl text-white font-bold leading-[1.08] mb-8 animate-hero-reveal hero-stagger-1">
            {slide.headline} <br />
            <span className="italic font-medium text-gold-light">{slide.highlight}</span>
          </h1>

          <p className="font-body text-lg md:text-xl text-cream-light/85 mb-12 max-w-xl leading-relaxed animate-hero-reveal hero-stagger-2">
            {slide.body}
          </p>

          <div className="flex flex-wrap gap-4 animate-hero-reveal hero-stagger-3">
            <Link
              to={slide.primary.to}
              onClick={() => trackEvent('cta_click', { location: `hero_slide_${currentIndex + 1}`, label: slide.primary.label })}
              className="bg-gold hover:bg-gold-dark text-white font-bold py-4 px-9 rounded-full transition-all shadow-2xl hover:shadow-gold/40 flex items-center gap-3 transform hover:-translate-y-0.5 active:translate-y-0"
            >
              {slide.primary.label}
              <ArrowRight size={18} aria-hidden="true" />
            </Link>

            <Link
              to={slide.secondary.to}
              className="bg-white/10 backdrop-blur-md border border-white/30 text-white hover:bg-white/20 font-bold py-4 px-9 rounded-full transition-all flex items-center gap-2 group shadow-lg"
            >
              {slide.secondary.label}
              <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </div>

      {/* Slide indicators */}
      <div
        className="absolute bottom-10 left-6 md:left-12 z-20 flex gap-3"
        role="tablist"
        aria-label="Select slide"
      >
        {SLIDES.map((s, i) => (
          <button
            key={i}
            ref={(el) => { indicatorRefs.current[i] = el; }}
            onClick={() => goTo(i)}
            onKeyDown={(e) => handleKeyDown(e, i)}
            role="tab"
            aria-selected={i === currentIndex}
            aria-label={`Slide ${i + 1}: ${s.headline} ${s.highlight}`}
            className={`h-1 transition-all duration-700 rounded-full outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-transparent ${
              i === currentIndex
                ? 'bg-gold w-14 shadow-[0_0_8px_rgba(212,165,116,0.7)]'
                : 'bg-white/30 w-5 hover:bg-white/55'
            }`}
          />
        ))}
      </div>

      {/* Prev / Next arrows, visible on md+ */}
      <button
        onClick={prev}
        aria-label="Previous slide"
        className="hidden md:flex absolute left-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full border border-white/20 bg-white/5 backdrop-blur-sm items-center justify-center text-white/60 hover:text-white hover:border-white/40 transition-all"
      >
        <ChevronRight size={18} className="rotate-180" />
      </button>
      <button
        onClick={next}
        aria-label="Next slide"
        className="hidden md:flex absolute right-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full border border-white/20 bg-white/5 backdrop-blur-sm items-center justify-center text-white/60 hover:text-white hover:border-white/40 transition-all"
      >
        <ChevronRight size={18} />
      </button>
    </section>
  );
};

export default Hero;
