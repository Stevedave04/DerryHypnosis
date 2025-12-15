
import React from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Services from './components/Services';
import ServiceDetail from './components/ServiceDetail';
import About from './components/About';
import Testimonials from './components/Testimonials';
import Booking from './components/Booking';
import Footer from './components/Footer';

// Wrapper to handle scroll to top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const App: React.FC = () => {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen bg-white text-darkGrey font-body flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/services/:slug" element={<ServiceDetail />} />
            <Route path="/about" element={<About />} />
            <Route path="/testimonials" element={<Testimonials />} />
            <Route path="/contact" element={<Booking />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
