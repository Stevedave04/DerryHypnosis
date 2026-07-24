import React, { useEffect, useRef } from 'react';
import { CALENDLY_URL } from '../constants';
import { trackEvent } from '../lib/analytics';

interface CalendlyWindow extends Window {
  Calendly?: {
    initInlineWidget: (options: { url: string; parentElement: HTMLElement }) => void;
  };
}

const WIDGET_JS = 'https://assets.calendly.com/assets/external/widget.js';
const WIDGET_CSS = 'https://assets.calendly.com/assets/external/widget.css';

// Brand-matched embed params (Calendly reads these from the URL).
const EMBED_URL = `${CALENDLY_URL}?hide_gdpr_banner=1&primary_color=2c5f5d&text_color=1a3d3c`;

// Load Calendly's widget script and stylesheet once, on demand. Resolves when
// window.Calendly is ready. Kept out of index.html so the homepage stays light.
function loadCalendly(): Promise<void> {
  return new Promise((resolve) => {
    const w = window as CalendlyWindow;
    if (w.Calendly) return resolve();

    if (!document.querySelector(`link[href="${WIDGET_CSS}"]`)) {
      const link = document.createElement('link');
      link.rel = 'stylesheet';
      link.href = WIDGET_CSS;
      document.head.appendChild(link);
    }

    const existing = document.getElementById('calendly-widget-js') as HTMLScriptElement | null;
    if (existing) {
      existing.addEventListener('load', () => resolve(), { once: true });
      if (w.Calendly) resolve();
      return;
    }

    const script = document.createElement('script');
    script.id = 'calendly-widget-js';
    script.src = WIDGET_JS;
    script.async = true;
    script.addEventListener('load', () => resolve(), { once: true });
    document.body.appendChild(script);
  });
}

const CalendlyInline: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let cancelled = false;

    loadCalendly().then(() => {
      const w = window as CalendlyWindow;
      if (cancelled || !containerRef.current || !w.Calendly) return;
      // Clear any prior iframe (SPA re-mount) before initialising.
      containerRef.current.innerHTML = '';
      w.Calendly.initInlineWidget({ url: EMBED_URL, parentElement: containerRef.current });
    });

    // Fire a conversion event when a booking completes inside the iframe.
    const onMessage = (e: MessageEvent) => {
      if (
        e.origin === 'https://calendly.com' &&
        typeof e.data === 'object' &&
        e.data?.event === 'calendly.event_scheduled'
      ) {
        trackEvent('generate_lead', { method: 'calendly' });
      }
    };
    window.addEventListener('message', onMessage);

    return () => {
      cancelled = true;
      window.removeEventListener('message', onMessage);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="w-full min-w-[320px] h-[1000px] md:h-[720px] rounded-2xl overflow-hidden border border-cream bg-white shadow-soft"
      aria-label="Book a free discovery call with Tracey"
    />
  );
};

export default CalendlyInline;
