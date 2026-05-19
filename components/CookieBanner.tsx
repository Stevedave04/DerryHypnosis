import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Cookie } from 'lucide-react';

const CONSENT_KEY = 'dh_cookie_consent';

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

const CookieBanner: React.FC = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!localStorage.getItem(CONSENT_KEY)) {
      const t = setTimeout(() => setVisible(true), 800);
      return () => clearTimeout(t);
    }
  }, []);

  if (!visible) return null;

  const grant = () => {
    localStorage.setItem(CONSENT_KEY, 'accepted');
    window.gtag?.('consent', 'update', { analytics_storage: 'granted' });
    setVisible(false);
  };

  const deny = () => {
    localStorage.setItem(CONSENT_KEY, 'declined');
    setVisible(false);
  };

  return (
    <div
      role="dialog"
      aria-label="Cookie consent"
      aria-live="polite"
      className="fixed bottom-0 inset-x-0 z-[60] p-4 md:p-6"
    >
      <div className="max-w-4xl mx-auto bg-slate-900 text-white rounded-2xl shadow-2xl p-5 md:p-7 flex flex-col sm:flex-row items-start sm:items-center gap-5">
        <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gold/20 flex items-center justify-center text-gold">
          <Cookie size={20} />
        </div>

        <div className="flex-1 min-w-0">
          <p className="font-bold text-sm mb-1">We use cookies</p>
          <p className="text-slate-400 text-xs leading-relaxed">
            We use Google Analytics to understand how visitors use our site, and Formspree to handle your enquiries. No advertising or tracking cookies are set without your consent.{' '}
            <Link
              to="/privacy"
              onClick={deny}
              className="underline text-gold hover:text-gold-light transition-colors"
            >
              Privacy Policy
            </Link>
          </p>
        </div>

        <div className="flex gap-3 flex-shrink-0 w-full sm:w-auto">
          <button
            onClick={deny}
            className="flex-1 sm:flex-none px-4 py-2.5 rounded-xl border border-slate-600 text-slate-300 hover:text-white hover:border-slate-400 text-xs font-bold transition-all"
          >
            Essential Only
          </button>
          <button
            onClick={grant}
            className="flex-1 sm:flex-none px-5 py-2.5 rounded-xl bg-teal hover:bg-teal-dark text-white text-xs font-bold transition-all shadow-lg"
          >
            Accept All
          </button>
        </div>
      </div>
    </div>
  );
};

export default CookieBanner;
