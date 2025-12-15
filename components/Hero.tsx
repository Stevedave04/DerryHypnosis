
import React, { useState, useEffect, useCallback } from 'react';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { SITE_INFO } from '../constants';

const BACKGROUND_IMAGES = [
  "https://images.unsplash.com/photo-1518173946687-a4c8892bbd9f?q=80&w=1920&auto=format&fit=crop", // Nature/Forest
  "https://images.unsplash.com/photo-1515238152791-8216bfdf89a7?q=80&w=1920&auto=format&fit=crop", // Sea/Stones
  "https://images.unsplash.com/photo-1520962922320-2038eebab146?q=80&w=1920&auto=format&fit=crop", // Relaxing Room
  "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1920&auto=format&fit=crop"  // Beach/Calm
];

const Hero: React.FC = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextSlide = useCallback(() => {
    setCurrentImageIndex((prev) => (prev + 1) % BACKGROUND_IMAGES.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentImageIndex((prev) => (prev - 1 + BACKGROUND_IMAGES.length) % BACKGROUND_IMAGES.length);
  }, []);

  const goToSlide = (index: number) => {
    setCurrentImageIndex(index);
  };

  useEffect(() => {
    // Auto-advance slides, resetting timer on manual interaction (dependency on currentImageIndex)
    const interval = setInterval(() => {
      nextSlide();
    }, 6000); 

    return () => clearInterval(interval);
  }, [currentImageIndex, nextSlide]);

  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden group">
      {/* Background Image Slider */}
      <div className="absolute inset-0 z-0">
        {BACKGROUND_IMAGES.map((img, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-[2000ms] ease-in-out ${
              index === currentImageIndex ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <img
              src={img}
              alt={`Calming background ${index + 1}`}
              className="w-full h-full object-cover transform scale-105 animate-[kenburns_25s_ease-in-out_infinite_alternate]"
            />
          </div>
        ))}
        
        {/* Gradient Overlay */}
        <div 
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(135deg, rgba(44, 95, 93, 0.85) 0%, rgba(212, 165, 116, 0.75) 100%)'
          }}
        ></div>
      </div>

      {/* Navigation Controls */}
      <button 
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-white/10 hover:bg-white/20 text-white p-3 rounded-full backdrop-blur-sm transition-all opacity-0 group-hover:opacity-100 hidden md:flex items-center justify-center hover:scale-110"
        aria-label="Previous slide"
      >
        <ChevronLeft size={32} />
      </button>

      <button 
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-white/10 hover:bg-white/20 text-white p-3 rounded-full backdrop-blur-sm transition-all opacity-0 group-hover:opacity-100 hidden md:flex items-center justify-center hover:scale-110"
        aria-label="Next slide"
      >
        <ChevronRight size={32} />
      </button>

      {/* Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-3">
        {BACKGROUND_IMAGES.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`h-2 rounded-full transition-all duration-500 ${
              index === currentImageIndex ? 'bg-gold w-8' : 'bg-white/50 w-2 hover:bg-white'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      <div className="container mx-auto px-6 relative z-10 flex flex-col md:flex-row items-center gap-12">
        <div className="w-full md:w-3/5 text-white pt-10 md:pt-0">
          <h1 className="font-heading text-5xl md:text-7xl font-bold leading-tight mb-6 drop-shadow-md opacity-0 animate-[blurInUp_1s_ease-out_forwards]">
            {SITE_INFO.tagline}
          </h1>
          <p className="font-body text-xl md:text-2xl font-light text-cream/95 mb-8 max-w-2xl opacity-0 animate-[blurInUp_1s_ease-out_0.3s_forwards]">
            Expert hypnotherapy for weight loss, smoking cessation, and personal breakthrough. Serving Derry/Londonderry and surrounding areas.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 opacity-0 animate-[blurInUp_1s_ease-out_0.6s_forwards]">
            <Link
              to="/contact"
              className="bg-gold hover:bg-gold-light text-white font-bold py-4 px-8 rounded-full transition-all shadow-lg hover:shadow-xl hover:-translate-y-1 text-center"
            >
              Book Free 15-Min Consultation
            </Link>
            <Link
              to="/about"
              className="bg-transparent border-2 border-white text-white hover:bg-white/10 font-bold py-4 px-8 rounded-full transition-all text-center flex items-center justify-center gap-2"
            >
              Learn About Hypnotherapy
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
        
        <div className="hidden md:block w-2/5 opacity-0 animate-[fadeInRight_1s_ease-out_0.8s_forwards]">
            {/* Using arbitrary value to combine animations: Fade In first, then continuous Float */}
            <div className="animate-[float_6s_ease-in-out_infinite_1s]">
                <img 
                    src="https://images.unsplash.com/photo-1535957998253-26ae1ef29506?q=80&w=800&auto=format&fit=crop" 
                    alt="Balanced Stones" 
                    className="rounded-xl shadow-2xl border-4 border-white/20 transform rotate-2 hover:rotate-0 transition-transform duration-500 object-cover h-[500px] w-full"
                />
            </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
