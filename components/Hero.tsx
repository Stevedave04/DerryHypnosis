import React, { useState, useEffect, useCallback, useRef } from 'react';
import { ArrowRight, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const BACKGROUND_IMAGES = [
  "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=1920&auto=format&fit=crop", // Serene Forest
  "https://images.unsplash.com/photo-1505144808419-1957a94ca61e?q=80&w=1920&auto=format&fit=crop", // Waterfall/Nature
  "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1920&auto=format&fit=crop", // Beach
  "https://images.unsplash.com/photo-1490730141103-6cac27aaab94?q=80&w=1920&auto=format&fit=crop"  // Golden Sunset
];

const Hero: React.FC = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const indicatorRefs = useRef<(HTMLButtonElement | null)[]>([]);

  const nextSlide = useCallback(() => {
    setCurrentImageIndex((prev) => (prev + 1) % BACKGROUND_IMAGES.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentImageIndex((prev) => (prev - 1 + BACKGROUND_IMAGES.length) % BACKGROUND_IMAGES.length);
  }, []);

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(nextSlide, 8000);
    return () => clearInterval(interval);
  }, [nextSlide, isPaused]);

  const handleKeyDown = (e: React.KeyboardEvent, index: number) => {
    if (e.key === 'ArrowRight') {
      e.preventDefault();
      const nextIndex = (index + 1) % BACKGROUND_IMAGES.length;
      indicatorRefs.current[nextIndex]?.focus();
      setCurrentImageIndex(nextIndex);
    } else if (e.key === 'ArrowLeft') {
      e.preventDefault();
      const prevIndex = (index - 1 + BACKGROUND_IMAGES.length) % BACKGROUND_IMAGES.length;
      indicatorRefs.current[prevIndex]?.focus();
      setCurrentImageIndex(prevIndex);
    }
  };

  return (
    <section 
      className="relative min-h-[95vh] flex items-center pt-20 overflow-hidden"
      aria-roledescription="carousel"
      aria-label="Derry Hypnosis Hero Section"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onFocus={() => setIsPaused(true)}
      onBlur={() => setIsPaused(false)}
    >
      {/* Background slider with zoom effect */}
      <div className="absolute inset-0 z-0" aria-live="polite">
        {BACKGROUND_IMAGES.map((img, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-[3000ms] ease-in-out ${
              index === currentImageIndex ? 'opacity-100 scale-100' : 'opacity-0 scale-110'
            }`}
            aria-hidden={index !== currentImageIndex}
          >
            <img
              src={img}
              alt="" // Decorative background images use empty alt
              className="w-full h-full object-cover"
              loading={index === 0 ? "eager" : "lazy"}
              aria-hidden="true"
            />
          </div>
        ))}
        {/* Subtle Darkening Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/70 via-slate-900/40 to-transparent"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div key={currentImageIndex} className="max-w-4xl">
          <div className="mb-6 overflow-hidden">
            <span className="inline-block font-body text-gold font-bold tracking-[0.2em] uppercase text-sm animate-slideInRight">
              Professional Clinical Hypnotherapy
            </span>
          </div>
          
          <h1 className="font-heading text-6xl md:text-8xl text-white font-bold leading-[1.1] mb-8 animate-reveal stagger-1">
            Unlock the Power of <br />
            <span className="text-white italic font-medium">Your Mind.</span>
          </h1>

          <p className="font-body text-xl md:text-2xl text-cream-light/90 mb-12 max-w-2xl leading-relaxed animate-reveal stagger-2">
            Break free from old habits and limiting beliefs. Specialised hypnotherapy for Weight Loss, Smoking Cessation, and Anxiety in Derry.
          </p>

          <div className="flex flex-wrap gap-6 animate-reveal stagger-3">
            <Link
              to="/contact"
              className="bg-gold hover:bg-gold-dark text-white font-bold py-5 px-10 rounded-full transition-all shadow-2xl hover:shadow-gold/40 flex items-center gap-3 transform hover:-translate-y-1 active:translate-y-0"
              aria-label="Start your journey with a consultation"
            >
              Start Your Journey
              <ArrowRight size={20} aria-hidden="true" />
            </Link>
            
            <Link
              to="/services"
              className="bg-white/10 backdrop-blur-md border border-white/30 text-white hover:bg-white/20 font-bold py-5 px-10 rounded-full transition-all flex items-center gap-2 group shadow-xl"
              aria-label="Explore our specialised hypnotherapy services"
            >
              Explore Services
              <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </div>

      {/* Modern Slide Indicators with Accessibility */}
      <div 
        className="absolute bottom-12 left-6 md:left-12 z-20 flex gap-4"
        role="tablist"
        aria-label="Select slide"
      >
        {BACKGROUND_IMAGES.map((_, index) => (
          <button
            key={index}
            ref={(el) => { indicatorRefs.current[index] = el; }}
            onClick={() => setCurrentImageIndex(index)}
            onKeyDown={(e) => handleKeyDown(e, index)}
            role="tab"
            aria-selected={index === currentImageIndex}
            aria-label={`Go to slide ${index + 1}`}
            className={`h-1.5 transition-all duration-700 rounded-full outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 ${
              index === currentImageIndex ? 'bg-gold w-16 shadow-[0_0_10px_rgba(212,165,116,0.8)]' : 'bg-white/30 w-6 hover:bg-white/50'
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default Hero;