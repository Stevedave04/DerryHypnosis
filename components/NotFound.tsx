import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight, Home } from 'lucide-react';

const NotFound: React.FC = () => {
  return (
    <section className="min-h-screen bg-cream-light flex items-center justify-center px-6 pt-20">
      <Helmet>
        <title>Page Not Found | Derry Hypnosis</title>
        <meta name="robots" content="noindex" />
      </Helmet>
      <div className="text-center max-w-lg">
        <p className="font-heading text-[10rem] font-bold text-teal/10 leading-none select-none">
          404
        </p>
        <div className="-mt-8 relative z-10">
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-teal mb-4">
            Page Not Found
          </h1>
          <p className="font-body text-lg text-slate-800/60 mb-10 leading-relaxed">
            The page you're looking for doesn't exist or may have moved.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/"
              className="inline-flex items-center justify-center gap-2 bg-teal hover:bg-teal-dark text-white font-bold py-4 px-8 rounded-full transition-all shadow-lg hover:-translate-y-0.5"
            >
              <Home size={18} />
              Back to Home
            </Link>
            <Link
              to="/services"
              className="inline-flex items-center justify-center gap-2 bg-white border-2 border-cream text-teal hover:border-teal font-bold py-4 px-8 rounded-full transition-all hover:-translate-y-0.5"
            >
              View Services
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NotFound;
