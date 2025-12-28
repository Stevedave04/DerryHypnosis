import React from 'react';
import { SERVICES, SERVICE_IMAGES } from '../constants';
import { ArrowRight } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Services: React.FC = () => {
  const location = useLocation();
  const isServicesPage = location.pathname === '/services';

  // Filter to show limited services on home page, all on services page
  const displayServices = isServicesPage ? SERVICES : SERVICES.slice(0, 6);

  return (
    <section className={`py-24 bg-cream-light ${isServicesPage ? 'pt-40' : ''}`}>
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mb-16">
          <span className="text-gold font-bold tracking-[0.2em] uppercase text-xs mb-4 block">Our Expertise</span>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-teal leading-tight mb-6">
            Clinical Hypnotherapy for <br />
            <span className="italic font-medium text-teal-light text-3xl md:text-4xl">Positive, Lasting Change.</span>
          </h2>
          <p className="font-body text-lg text-slate-800/60 leading-relaxed">
            Personalised treatment plans designed to help you overcome subconscious barriers and unlock your true potential.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {displayServices.map((service, index) => (
            <Link 
              to={`/services/${service.slug}`}
              key={index} 
              className="group bg-white rounded-xl overflow-hidden shadow-soft hover:shadow-premium transition-all duration-300 hover:-translate-y-1 flex flex-col h-full border border-cream/30"
            >
              <div className="relative h-56 overflow-hidden bg-cream">
                <img 
                  src={SERVICE_IMAGES[service.slug]} 
                  alt={service.title}
                  className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105"
                  loading="lazy"
                  onError={(e) => {
                    // Unique fallback strategy using a nature/calm image if specific one fails
                    (e.target as HTMLImageElement).src = `https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?q=80&w=800&auto=format&fit=crop`;
                  }}
                />
                <div className="absolute inset-0 bg-teal/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
              
              <div className="p-6 md:p-8 flex flex-col flex-grow">
                <h3 className="font-heading text-xl md:text-2xl font-bold text-teal mb-3">
                  {service.title}
                </h3>
                <p className="font-body text-slate-800/60 mb-6 leading-relaxed text-sm flex-grow">
                  {service.description}
                </p>
                
                <div className="flex items-center gap-2 text-gold font-bold text-xs uppercase tracking-widest group-hover:gap-4 transition-all">
                  Discover More
                  <ArrowRight size={14} />
                </div>
              </div>
            </Link>
          ))}
        </div>

        {!isServicesPage && (
          <div className="mt-20 text-center">
            <Link 
              to="/services" 
              className="inline-flex items-center gap-4 bg-teal text-white font-bold py-4 px-10 rounded-full hover:bg-teal-dark transition-all shadow-lg hover:-translate-y-1"
            >
              Explore All Treatments
              <ArrowRight size={20} />
            </Link>
          </div>
        )}
      </div>
    </section>
  );
};

export default Services;
