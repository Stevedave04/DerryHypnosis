type GtagFn = (...args: unknown[]) => void;

declare global {
  interface Window {
    gtag?: GtagFn;
  }
}

/**
 * Fire a GA4 event. Safe no-op when gtag is unavailable
 * (consent denied, blocked, or script not yet loaded).
 */
export function trackEvent(name: string, params?: Record<string, string | number>): void {
  if (typeof window === 'undefined' || typeof window.gtag !== 'function') return;
  window.gtag('event', name, params ?? {});
}
