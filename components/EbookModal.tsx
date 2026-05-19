import React, { useEffect, useRef, useState } from 'react';
import { X, BookOpen, CheckCircle2 } from 'lucide-react';

interface EbookModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const EbookModal: React.FC<EbookModalProps> = ({ isOpen, onClose }) => {
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const iframeRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  // Reset state when modal is reopened
  useEffect(() => {
    if (isOpen) { setSubmitted(false); setIsSubmitting(false); }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby="ebook-modal-title"
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

        {submitted ? (
          /* Success state */
          <div className="text-center py-4">
            <div className="flex justify-center mb-5">
              <div className="bg-teal/10 rounded-full p-4">
                <CheckCircle2 className="text-teal w-8 h-8" />
              </div>
            </div>
            <h2 className="font-heading text-2xl font-bold text-slate-900 mb-3">
              Ebook on its way!
            </h2>
            <p className="text-slate-500 text-sm mb-6 leading-relaxed">
              Check your inbox — we've sent your free guide to quitting smoking with hypnotherapy.
            </p>
            <button
              onClick={onClose}
              className="w-full bg-teal hover:bg-teal-dark text-white font-bold py-3 px-6 rounded-xl transition-all"
            >
              Done
            </button>
          </div>
        ) : (
          /* Form state */
          <>
            <div className="flex justify-center mb-5">
              <div className="bg-gold/10 rounded-full p-4">
                <BookOpen className="text-gold w-8 h-8" />
              </div>
            </div>

            <h2 id="ebook-modal-title" className="font-heading text-2xl md:text-3xl font-bold text-slate-900 text-center mb-2">
              Free Quit Smoking Ebook
            </h2>
            <p className="text-slate-500 text-center text-sm mb-6">
              Enter your details and we'll send it straight to you — no spam, ever.
            </p>

            {/* Hidden iframe absorbs the native POST — onLoad fires when the
                response arrives, which is more reliable than a fixed timeout */}
            <iframe
              ref={iframeRef}
              name="ebook-frame"
              className="hidden"
              aria-hidden="true"
              title="form target"
              onLoad={() => { if (isSubmitting) setSubmitted(true); }}
            />

            <form
              method="post"
              action="https://systeme.io/embedded/39207857/subscription"
              target="ebook-frame"
              onSubmit={() => setIsSubmitting(true)}
              className="space-y-4"
            >
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label htmlFor="ebook-first-name" className="block text-[10px] font-bold uppercase tracking-[0.2em] text-slate-500 mb-1.5">First name</label>
                  <input
                    id="ebook-first-name"
                    type="text"
                    name="first_name"
                    placeholder="Jane"
                    autoComplete="given-name"
                    className="w-full border border-slate-200 rounded-xl px-4 py-3 text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold transition"
                  />
                </div>
                <div>
                  <label htmlFor="ebook-last-name" className="block text-[10px] font-bold uppercase tracking-[0.2em] text-slate-500 mb-1.5">Last name</label>
                  <input
                    id="ebook-last-name"
                    type="text"
                    name="last_name"
                    placeholder="Smith"
                    autoComplete="family-name"
                    className="w-full border border-slate-200 rounded-xl px-4 py-3 text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold transition"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="ebook-email" className="block text-[10px] font-bold uppercase tracking-[0.2em] text-slate-500 mb-1.5">Email *</label>
                <input
                  id="ebook-email"
                  type="email"
                  name="email"
                  required
                  placeholder="your@email.com"
                  autoComplete="email"
                  className="w-full border border-slate-200 rounded-xl px-4 py-3 text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold transition"
                />
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gold hover:bg-gold-dark text-white font-bold py-3 px-6 rounded-xl transition-all shadow-lg hover:shadow-gold/30 transform hover:-translate-y-0.5 disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Sending…' : 'Send Me the Free Ebook'}
              </button>
            </form>

            <p className="text-xs text-slate-400 text-center mt-4">
              By subscribing you agree to receive emails from Derry Hypnosis.
            </p>
          </>
        )}
      </div>
    </div>
  );
};

export default EbookModal;
