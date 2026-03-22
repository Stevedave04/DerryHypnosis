import React, { useEffect } from 'react';
import { X, BookOpen } from 'lucide-react';

interface EbookModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const EbookModal: React.FC<EbookModalProps> = ({ isOpen, onClose }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-slate-900/70 backdrop-blur-sm" />

      {/* Modal */}
      <div
        className="relative bg-white rounded-3xl shadow-2xl w-full max-w-md p-8 md:p-10"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-slate-400 hover:text-slate-600 transition-colors"
          aria-label="Close"
        >
          <X size={22} />
        </button>

        {/* Icon */}
        <div className="flex justify-center mb-5">
          <div className="bg-gold/10 rounded-full p-4">
            <BookOpen className="text-gold w-8 h-8" />
          </div>
        </div>

        {/* Heading */}
        <h2 className="font-heading text-2xl md:text-3xl font-bold text-slate-900 text-center mb-2">
          Free Quit Smoking Ebook
        </h2>
        <p className="text-slate-500 text-center text-sm mb-6">
          Enter your email and we'll send it straight to you — no spam, ever.
        </p>

        {/* Form */}
        <form
          method="post"
          action="https://systeme.io/embedded/39207857/subscription"
          className="space-y-4"
        >
          <input
            type="email"
            name="email"
            required
            placeholder="Your email address"
            className="w-full border border-slate-200 rounded-xl px-4 py-3 text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold transition"
          />
          <button
            type="submit"
            className="w-full bg-gold hover:bg-gold-dark text-white font-bold py-3 px-6 rounded-xl transition-all shadow-lg hover:shadow-gold/30 transform hover:-translate-y-0.5"
          >
            Send Me the Free Ebook
          </button>
        </form>

        <p className="text-xs text-slate-400 text-center mt-4">
          By subscribing you agree to receive emails from Derry Hypnosis.
        </p>
      </div>
    </div>
  );
};

export default EbookModal;
