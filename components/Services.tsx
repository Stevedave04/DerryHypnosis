import React from 'react';
import { SERVICES, SERVICE_IMAGES } from '../constants';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Services: React.FC = () => {
  const location = useLocation();
  const isServicesPage = location.pathname === '/services';

  return (
    <section className={`py-32 bg-cream-light ${isServicesPage ? 'pt-48' : ''}`}>
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div className="max-w-2xl">
            <span className="text-gold font-bold tracking-widest uppercase text-sm mb-4 block">Our Expertise</span>
            <h2 className="font-heading text-5xl md:text-6xl font-bold text-teal leading-tight">
              Personalised Therapy for <span className="italic font-medium text-teal-light">Lasting Results.</span>
            </h2>
          </div>
          <p className="font-body text-xl text-slate-800/60 max-w-sm mb-2">
            Combining modern psychology with advanced clinical hypnotherapy to create meaningful changes in your subconscious mind.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {SERVICES.map((service, index) => (
            <Link 
              to={`/services/${service.slug}`}
              key={index} 
              className="group relative bg-white rounded-3xl overflow-hidden shadow-soft hover:shadow-premium transition-all duration-500 hover:-translate-y-2 flex flex-col sm:flex-row h-full"
            >
              <div className="w-full sm:w-2/5 relative h-64 sm:h-auto overflow-hidden">
                <img 
                  src={SERVICE_IMAGES[service.slug]} 
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                  onError={(e) => {
                    // Fallback to a neutral office/clinic environment if the specific image fails to avoid duplication
                    (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1200&auto=format&fit=crop';
                  }}
                />
                <div className="absolute inset-0 bg-teal/10 group-hover:bg-transparent transition-colors duration-500"></div>
              </div>
              
              <div className="p-8 sm:p-10 w-full sm:w-3/5 flex flex-col justify-between">
                <div>
                  <div className="flex justify-between items-start mb-6">
                    <h3 className="font-heading text-3xl font-bold text-teal leading-tight group-hover:text-gold transition-colors duration-300">
                      {service.title}
                    </h3>
                    <ArrowUpRight className="text-teal/20 group-hover:text-gold group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" size={24} />
                  </div>
                  <p className="font-body text-slate-800/70 mb-8 leading-relaxed">
                    {service.description}
                  </p>
                </div>
                
                <div className="flex items-center justify-between pt-6 border-t border-gray-100">
                  <span className="text-gold font-bold font-body">{service.price}</span>
                  <span className="font-body font-bold text-teal flex items-center gap-2 group-hover:gap-3 transition-all">
                    Details
                    <ArrowRight size={18} />
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {!isServicesPage && (
          <div className="mt-24 text-center">
            <Link 
              to="/services" 
              className="inline-flex items-center gap-3 text-teal font-bold text-lg hover:text-gold transition-colors group"
            >
              View All Specialised Treatments
              <div className="w-12 h-12 rounded-full border border-teal/20 flex items-center justify-center group-hover:border-gold transition-colors">
                <ArrowRight size={20} />
              </div>
            </Link>
          </div>
        )}
      </div>
    </section>
  );
};

export default Services;