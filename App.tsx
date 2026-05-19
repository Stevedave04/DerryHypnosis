
import React from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Services from './components/Services';
import ServiceDetail from './components/ServiceDetail';
import About from './components/About';
import Testimonials from './components/Testimonials';
import Booking from './components/Booking';
import UsefulNumbers from './components/UsefulNumbers';
import PrivacyPolicy from './components/PrivacyPolicy';
import TermsAndConditions from './components/TermsAndConditions';
import StopSmokingLanding from './components/StopSmokingLanding';
import NotFound from './components/NotFound';
import FloatingActions from './components/FloatingActions';
import CookieBanner from './components/CookieBanner';
import Footer from './components/Footer';

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
    <Router>
      <ScrollToTop />
      <div className="min-h-screen bg-white text-slate-800 font-body flex flex-col">
        <Navbar />
        <FloatingActions />
        <CookieBanner />
        <main className="flex-grow">
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
            <Route path="/stop-smoking" element={<StopSmokingLanding />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
