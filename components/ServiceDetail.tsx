
import React from 'react';
import { useParams, Navigate, Link } from 'react-router-dom';
import { SERVICES, TESTIMONIALS } from '../constants';
import { CheckCircle2, Quote, Star, ArrowLeft } from 'lucide-react';

const ServiceDetail: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const service = SERVICES.find(s => s.slug === slug);

  if (!service) {
    return <Navigate to="/services" replace />;
  }

  const relatedTestimonials = TESTIMONIALS.filter(t => t.category === service.category);

  return (
    <div className="pt-20 min-h-screen bg-white">
      {/* Hero Section for Service */}
      <section className="bg-teal text-white py-20 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2"></div>
        <div className="container mx-auto px-6 relative z-10">
          <Link to="/services" className="inline-flex items-center text-gold hover:text-white transition-colors mb-6 font-bold">
            <ArrowLeft size={20} className="mr-2" />
            Back to Services
          </Link>
          <h1 className="font-heading text-4xl md:text-6xl font-bold mb-6">{service.title}</h1>
          <p className="font-body text-xl md:text-2xl text-cream/90 max-w-2xl">{service.description}</p>
        </div>
      </section>

      <div className="container mx-auto px-6 py-16">
        <div className="flex flex-col lg:flex-row gap-16">
          
          {/* Main Content */}
          <div className="w-full lg:w-2/3">
            <h2 className="font-heading text-3xl font-bold text-darkGrey mb-6">About This Service</h2>
            <p className="font-body text-lg text-gray-700 leading-relaxed mb-8">
              {service.longDescription}
            </p>

            <h3 className="font-heading text-2xl font-bold text-teal mb-6">What You Can Expect</h3>
            <div className="bg-light-grey p-8 rounded-xl border-l-4 border-gold mb-10">
              <ul className="space-y-4">
                {service.benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="text-success mt-1 flex-shrink-0" size={20} />
                    <span className="font-body text-darkGrey text-lg">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>

            <h3 className="font-heading text-2xl font-bold text-darkGrey mb-6">Pricing</h3>
             <p className="font-body text-lg text-gray-700 mb-8">
               Our sessions are designed to be intensive and transformative. <br />
               <span className="font-bold text-teal text-xl">{service.price}</span>
             </p>

            <Link 
              to="/contact" 
              className="inline-block bg-gold hover:bg-gold-light text-white font-bold py-4 px-8 rounded-full shadow-lg hover:shadow-xl transition-all hover:-translate-y-1"
            >
              Book Your Session Now
            </Link>
          </div>

          {/* Sidebar / Success Stories */}
          <div className="w-full lg:w-1/3">
            <div className="bg-cream rounded-xl p-8 sticky top-28">
              <h3 className="font-heading text-2xl font-bold text-darkGrey mb-6">Success Stories</h3>
              
              {relatedTestimonials.length > 0 ? (
                <div className="space-y-8">
                  {relatedTestimonials.map((t, idx) => (
                    <div key={idx} className="bg-white p-6 rounded-lg shadow-sm">
                       <div className="flex gap-1 mb-2">
                        {[...Array(t.rating)].map((_, i) => (
                          <Star key={i} size={14} className="fill-gold text-gold" />
                        ))}
                      </div>
                      <p className="italic text-gray-600 mb-4 text-sm relative">
                        <Quote size={16} className="absolute -top-2 -left-2 text-gold/20" />
                        "{t.text}"
                      </p>
                      <p className="font-bold text-darkGrey text-sm">- {t.author}, {t.location}</p>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-gray-500 italic">Read general success stories on our testimonials page.</p>
              )}

              <div className="mt-8 pt-8 border-t border-gray-200">
                 <h4 className="font-bold text-darkGrey mb-2">Have questions?</h4>
                 <p className="text-sm text-gray-600 mb-4">Book a free 15-minute discovery call to see if this is right for you.</p>
                 <Link to="/contact" className="text-teal font-bold hover:underline">Contact us &rarr;</Link>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default ServiceDetail;
