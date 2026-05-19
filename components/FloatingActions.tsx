
import React, { useState, useEffect } from 'react';
import { ChevronUp, MessageCircle } from 'lucide-react';
import { SITE_INFO } from '../constants';

const FloatingActions: React.FC = () => {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowBackToTop(window.scrollY > 400);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const whatsappNumber = SITE_INFO.phone.replace(/\D/g, '');

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col gap-3 items-center">
      {whatsappNumber && (
        <a
          href={`https://wa.me/${whatsappNumber}`}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat on WhatsApp"
          className="w-12 h-12 rounded-full bg-[#25D366] text-white shadow-premium flex items-center justify-center hover:scale-110 active:scale-95 transition-transform"
        >
          <MessageCircle size={22} fill="currentColor" />
        </a>
      )}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        aria-label="Back to top"
        className={`w-12 h-12 rounded-full bg-teal text-white shadow-premium flex items-center justify-center hover:bg-teal-dark hover:-translate-y-1 active:translate-y-0 transition-all duration-300 ${
          showBackToTop ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <ChevronUp size={20} />
      </button>
    </div>
  );
};

export default FloatingActions;
