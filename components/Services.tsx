
import React from 'react';
import { SERVICES } from '../constants';
import { Flower, Wind, Waves, Sun, Check, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Services: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'flower': return <Flower size={36} className="text-white" />;
      case 'wind': return <Wind size={36} className="text-white" />;
      case 'waves': return <Waves size={36} className="text-white" />;
      case 'sun': return <Sun size={36} className="text-white" />;
      default: return <Flower size={36} className="text-white" />;
    }
  };

  return (
    <section className="py-24 bg-light-grey min-h-screen pt-32">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="font-heading text-4xl font-bold text-teal mb-4">Specialised Hypnotherapy Services</h2>
          <div className="h-1 w-24 bg-gold mx-auto mb-6"></div>
          <p className="font-body text-xl text-darkGrey/80">
            Personalised treatments designed to help you achieve lasting change through the power of your subconscious mind.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {SERVICES.map((service, index) => (
            <div 
              key={index} 
              className="bg-white rounded-xl shadow-card hover:shadow-hover transition-all duration-300 hover:-translate-y-2 overflow-hidden border-t-4 border-teal flex flex-col h-full group"
            >
              <div className="p-8 flex flex-col h-full">
                <div className="w-20 h-20 bg-teal rounded-full flex items-center justify-center mb-6 shadow-md mx-auto group-hover:scale-110 transition-transform duration-300">
                  {getIcon(service.icon)}
                </div>
                
                <h3 className="font-heading text-2xl font-bold text-darkGrey mb-3 text-center">{service.title}</h3>
                <p className="font-body text-gray-600 mb-6 flex-grow text-center">{service.description}</p>
                
                <div className="space-y-3 mb-8 px-2">
                  {service.benefits.slice(0, 3).map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-2">
                      <Check size={16} className="text-success mt-1 flex-shrink-0" />
                      <span className="text-sm text-gray-500 font-body">{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-auto pt-6 border-t border-gray-100 text-center">
                  <p className="text-gold font-bold font-accent text-sm mb-4">{service.price}</p>
                  <Link 
                    to={`/services/${service.slug}`} 
                    className="inline-flex items-center gap-2 text-teal font-bold hover:text-teal-dark transition-colors group-hover:gap-3"
                  >
                    Learn More <ArrowRight size={16} />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
