import React from 'react';
import { useParams, Navigate, Link } from 'react-router-dom';
import { SERVICES, TESTIMONIALS, SERVICE_IMAGES } from '../constants';
import { CheckCircle2, Quote, Star, ArrowLeft } from 'lucide-react';

const ServiceDetail: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const service = SERVICES.find(s => s.slug === slug);

  if (!service) {
    return <Navigate to="/services" replace />;
  }

  const relatedTestimonials = TESTIMONIALS.filter(t => t.category === service.category);
  const heroImage = SERVICE_IMAGES[service.slug];

  return (
    <div className="pt-20 min-h-screen bg-white">
      {/* Immersive Hero Section with Service Image */}
      <section className="relative h-[60vh] flex items-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img 
            src={heroImage} 
            alt={service.title} 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-slate-900/60 backdrop-blur-[2px]"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10 text-white">
          <Link to="/services" className="inline-flex items-center text-gold hover:text-white transition-colors mb-8 font-bold animate-reveal">
            <ArrowLeft size={20} className="mr-2" />
            Back to Services
          </Link>
          <div className="max-w-3xl">
            <h1 className="font-heading text-5xl md:text-7xl font-bold mb-6 animate-reveal stagger-1">{service.title}</h1>
            <p className="font-body text-xl md:text-2xl text-cream/90 animate-reveal stagger-2 leading-relaxed">{service.description}</p>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-6 py-20">
        <div className="flex flex-col lg:flex-row gap-16">
          
          {/* Main Content */}
          <div className="w-full lg:w-2/3">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-teal mb-8">About This Programme</h2>
            <div className="font-body text-lg text-slate-800/80 leading-relaxed mb-10 space-y-6">
              {service.longDescription.split('\n').map((paragraph, i) => (
                <p key={i}>{paragraph}</p>
              ))}
            </div>

            <h3 className="font-heading text-2xl font-bold text-teal mb-6">Benefits & Transformations</h3>
            <div className="bg-cream-light p-10 rounded-3xl border border-cream mb-12 shadow-soft">
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {service.benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="text-success mt-1 flex-shrink-0" size={22} />
                    <span className="font-body text-slate-800 text-lg leading-snug">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-slate-900 text-white p-10 rounded-3xl flex flex-col md:flex-row justify-between items-center gap-8 shadow-premium">
              <div>
                <h3 className="font-heading text-2xl font-bold mb-2">Ready to take the first step?</h3>
                <p className="font-body text-gray-400">Our specialised sessions are designed to be intensive and life-changing.</p>
                <span className="font-heading text-gold text-3xl mt-4 block">{service.price}</span>
              </div>
              <Link 
                to="/contact" 
                className="bg-gold hover:bg-gold-dark text-white font-bold py-5 px-10 rounded-full shadow-lg transition-all hover:-translate-y-1 text-center whitespace-nowrap"
              >
                Book Your Transformation
              </Link>
            </div>
          </div>

          {/* Sidebar / Success Stories */}
          <div className="w-full lg:w-1/3">
            <div className="bg-white rounded-3xl p-8 sticky top-28 border border-cream shadow-premium">
              <h3 className="font-heading text-2xl font-bold text-teal mb-8">Client Success</h3>
              
              {relatedTestimonials.length > 0 ? (
                <div className="space-y-10">
                  {relatedTestimonials.map((t, idx) => (
                    <div key={idx} className="relative">
                      <Quote size={24} className="text-gold/20 mb-4" />
                      <p className="italic text-slate-800/80 mb-6 text-lg leading-relaxed">
                        "{t.text}"
                      </p>
                      <div className="flex items-center gap-4">
                        <div className="w-10 h-10 rounded-full bg-cream flex items-center justify-center font-bold text-teal">
                          {t.author[0]}
                        </div>
                        <p className="font-bold text-teal text-sm uppercase tracking-wider">{t.author}, {t.location}</p>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-slate-800/40 italic">Read more success stories on our dedicated testimonials page.</p>
              )}

              <div className="mt-12 pt-10 border-t border-cream">
                 <h4 className="font-bold text-teal mb-3 text-lg">Still have questions?</h4>
                 <p className="text-slate-800/60 mb-6 leading-relaxed">Book a free 15-minute discovery call with Tracey to discuss how hypnotherapy can help you achieve your goals.</p>
                 <Link to="/contact" className="text-gold font-bold hover:text-gold-dark inline-flex items-center gap-2 group">
                   Contact us today 
                   <ArrowLeft size={18} className="rotate-180 group-hover:translate-x-1 transition-transform" />
                 </Link>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default ServiceDetail;