
import React from 'react';
import { HelmetProvider } from 'react-helmet-async';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Footer from './components/Footer';
import FloatingActions from './components/FloatingActions';
import CookieBanner from './components/CookieBanner';
import ErrorBoundary from './components/ErrorBoundary';
import NotFound from './components/NotFound';

const Services           = React.lazy(() => import('./components/Services'));
const ServiceDetail      = React.lazy(() => import('./components/ServiceDetail'));
const About              = React.lazy(() => import('./components/About'));
const Testimonials       = React.lazy(() => import('./components/Testimonials'));
const Booking            = React.lazy(() => import('./components/Booking'));
const UsefulNumbers      = React.lazy(() => import('./components/UsefulNumbers'));
const PrivacyPolicy      = React.lazy(() => import('./components/PrivacyPolicy'));
const TermsAndConditions = React.lazy(() => import('./components/TermsAndConditions'));
const Downloads          = React.lazy(() => import('./components/Downloads/Downloads'));
const StopSmokingLanding = React.lazy(() => import('./components/StopSmokingLanding'));
const BlogList           = React.lazy(() => import('./components/Blog/BlogList'));
const BlogPost           = React.lazy(() => import('./components/Blog/BlogPost'));

// Scroll to top and trigger scroll-reveal animations on every route change
const ScrollToTop = () => {
  const { pathname } = useLocation();

  React.useEffect(() => {
    window.scrollTo(0, 0);

    let observer: IntersectionObserver;

    // Wait one frame so the new page has rendered before querying the DOM
    const raf = requestAnimationFrame(() => {
      const elements = document.querySelectorAll<HTMLElement>('.animate-reveal');

      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('is-visible');
              observer.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
      );

      elements.forEach((el) => observer.observe(el));
    });

    return () => {
      cancelAnimationFrame(raf);
      observer?.disconnect();
    };
  }, [pathname]);

  return null;
};

const App: React.FC = () => {
  return (
    <HelmetProvider>
    <Router>
      <ScrollToTop />
      <div className="min-h-screen bg-white text-slate-800 font-body flex flex-col">
        <Navbar />
        <FloatingActions />
        <CookieBanner />
        <main className="flex-grow">
          <React.Suspense fallback={
            <div className="min-h-screen bg-cream-light pt-40 flex items-center justify-center">
              <div className="w-8 h-8 border-2 border-teal/30 border-t-teal rounded-full animate-spin mx-auto" />
            </div>
          }>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/services" element={<Services />} />
              <Route path="/services/:slug" element={<ServiceDetail />} />
              <Route path="/about" element={<About />} />
              <Route path="/testimonials" element={<Testimonials standalone />} />
              <Route path="/contact" element={<Booking />} />
              <Route path="/useful-numbers" element={<UsefulNumbers />} />
              <Route path="/privacy" element={<PrivacyPolicy />} />
              <Route path="/terms" element={<TermsAndConditions />} />
              <Route path="/blog" element={
                <ErrorBoundary><BlogList /></ErrorBoundary>
              } />
              <Route path="/blog/:slug" element={
                <ErrorBoundary><BlogPost /></ErrorBoundary>
              } />
              <Route path="/downloads" element={<Downloads />} />
              <Route path="/stop-smoking" element={<StopSmokingLanding />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </React.Suspense>
        </main>
        <Footer />
      </div>
    </Router>
    </HelmetProvider>
  );
};

export default App;
