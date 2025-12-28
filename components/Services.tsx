import React from 'react';
import { SERVICES, SERVICE_IMAGES } from '../constants';
import { ArrowRight } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Services: React.FC = () => {
  const location = useLocation();
  const isServicesPage = location.pathname === '/services';

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
            We offer a range of specialized treatments designed to help you overcome life's obstacles and unlock your subconscious potential.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service, index) => (
            <Link 
              to={`/services/${service.slug}`}
              key={index} 
              className="group bg-white rounded-2xl overflow-hidden shadow-soft hover:shadow-premium transition-all duration-500 hover:-translate-y-1 flex flex-col h-full border border-cream/50"
            >
              <div className="relative h-56 overflow-hidden">
                <img 
                  src={SERVICE_IMAGES[service.slug]} 
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = `https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=800&auto=format&fit=crop`;
                  }}
                />
                <div className="absolute inset-0 bg-teal/5 group-hover:bg-transparent transition-colors duration-500"></div>
              </div>
              
              <div className="p-8 flex flex-col flex-grow">
                <h3 className="font-heading text-2xl font-bold text-teal mb-3 group-hover:text-gold transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="font-body text-slate-800/60 mb-8 leading-relaxed text-sm flex-grow">
                  {service.description}
                </p>
                
                <div className="flex items-center justify-between pt-6 border-t border-cream">
                  <span className="text-gold font-bold font-body text-sm uppercase tracking-wider">Learn More</span>
                  <div className="w-8 h-8 rounded-full bg-cream-light flex items-center justify-center text-teal group-hover:bg-teal group-hover:text-white transition-all">
                    <ArrowRight size={16} />
                  </div>
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