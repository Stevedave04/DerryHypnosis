
import React from 'react';
import { useParams, Navigate, Link } from 'react-router-dom';
import { SERVICES, TESTIMONIALS, SERVICE_IMAGES } from '../constants';
import { CheckCircle2, Quote, Star, ArrowLeft, ArrowRight, Sparkles, ShieldCheck, Zap } from 'lucide-react';

const ServiceDetail: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const service = SERVICES.find(s => s.slug === slug);

  if (!service) {
    return <Navigate to="/services" replace />;
  }

  // Find testimonials specifically for this category or general ones if none found
  const relatedTestimonials = TESTIMONIALS.filter(t => t.category === service.category);
  const heroImage = SERVICE_IMAGES[service.slug];

  return (
    <div className="min-h-screen bg-white">
      {/* Immersive Hero Section with Service Image */}
      <section className="relative h-[65vh] flex items-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img 
            src={heroImage} 
            alt={service.title} 
            className="w-full h-full object-cover scale-105 animate-float"
            style={{ animationDuration: '20s' }}
          />
          <div className="absolute inset-0 bg-slate-900/70 backdrop-blur-[1px]"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10 text-white mt-20">
          <Link to="/services" className="inline-flex items-center text-gold hover:text-white transition-all mb-8 font-bold uppercase tracking-widest text-xs group">
            <div className="w-8 h-8 rounded-full border border-gold/30 flex items-center justify-center mr-3 group-hover:border-white transition-colors">
              <ArrowLeft size={16} />
            </div>
            Back to Services
          </Link>
          <div className="max-w-4xl">
            <span className="inline-block bg-gold/20 backdrop-blur-md px-4 py-1 rounded-full text-gold-light font-bold text-[10px] uppercase tracking-[0.3em] mb-6 border border-gold/30">
              Clinical Specialisation
            </span>
            <h1 className="font-heading text-5xl md:text-8xl font-bold mb-8 animate-reveal stagger-1 leading-[1.1]">
              {service.title}
            </h1>
            <p className="font-body text-xl md:text-2xl text-cream/90 animate-reveal stagger-2 leading-relaxed max-w-2xl">
              {service.description}
            </p>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-6 py-24">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
          
          {/* Main Content */}
          <div className="w-full lg:w-2/3">
            <div className="mb-16">
              <div className="inline-flex items-center gap-2 text-gold font-bold uppercase tracking-widest text-xs mb-6">
                <Zap size={14} />
                Methodology
              </div>
              <h2 className="font-heading text-4xl font-bold text-teal mb-8">About This Programme</h2>
              <div className="font-body text-lg text-slate-800/80 leading-relaxed mb-10 space-y-6">
                {service.longDescription.split('\n').filter(p => p.trim() !== '').map((paragraph, i) => (
                  <p key={i} className="first-letter:text-4xl first-letter:font-heading first-letter:float-left first-letter:mr-3 first-letter:text-gold first-letter:font-bold">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>

            <div className="mb-16">
              <h3 className="font-heading text-2xl font-bold text-teal mb-8 flex items-center gap-3">
                <Sparkles className="text-gold" size={24} />
                Key Benefits & Transformations
              </h3>
              <div className="bg-cream-light rounded-[2.5rem] border border-cream overflow-hidden shadow-soft">
                <div className="grid grid-cols-1 md:grid-cols-2">
                  {service.benefits.map((benefit, index) => (
                    <div key={index} className="p-8 border-b border-r border-cream last:border-b-0 group hover:bg-white transition-colors">
                      <div className="flex items-start gap-4">
                        <div className="w-8 h-8 rounded-lg bg-success/10 flex items-center justify-center text-success flex-shrink-0 group-hover:scale-110 transition-transform">
                          <CheckCircle2 size={18} />
                        </div>
                        <span className="font-body text-slate-800 font-medium leading-snug">{benefit}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Price & Action Box */}
            <div className="bg-slate-900 text-white rounded-[3rem] p-10 md:p-16 flex flex-col md:flex-row justify-between items-center gap-12 shadow-premium relative overflow-hidden border-b-8 border-gold">
              <div className="absolute top-0 right-0 p-12 opacity-5">
                <ShieldCheck size={160} />
              </div>
              <div className="relative z-10 text-center md:text-left">
                <span className="text-gold font-bold uppercase tracking-[0.3em] text-[10px] mb-4 block">Investment in Yourself</span>
                <h3 className="font-heading text-3xl md:text-4xl font-bold mb-4">Start Your Transformation</h3>
                <p className="font-body text-gray-400 mb-6 max-w-sm">Our specialised sessions are designed to be intensive, empowering, and life-changing.</p>
                <div className="font-heading text-white text-4xl font-bold">{service.price}</div>
              </div>
              <div className="relative z-10">
                <Link 
                  to="/contact" 
                  className="bg-gold hover:bg-gold-dark text-white font-bold py-6 px-12 rounded-full shadow-2xl transition-all hover:-translate-y-1 text-center whitespace-nowrap flex items-center gap-3 text-lg"
                >
                  Book Online Today
                  <ArrowRight size={20} />
                </Link>
                <p className="text-center text-[10px] text-gray-500 mt-4 uppercase tracking-widest">Free 15-Min Discovery Call Available</p>
              </div>
            </div>
          </div>

          {/* Sidebar / Success Stories */}
          <div className="w-full lg:w-1/3">
            <div className="space-y-8 sticky top-32">
              
              <div className="bg-white rounded-[2rem] p-10 border border-cream shadow-premium relative overflow-hidden">
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-gold/5 rounded-full blur-2xl"></div>
                <h3 className="font-heading text-2xl font-bold text-teal mb-10 flex items-center gap-3">
                  <Quote className="text-gold" size={24} />
                  Success Stories
                </h3>
                
                {relatedTestimonials.length > 0 ? (
                  <div className="space-y-12">
                    {relatedTestimonials.map((t, idx) => (
                      <div key={idx} className="relative group">
                        <div className="flex gap-1 mb-4 text-gold/60">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} size={10} fill="currentColor" />
                          ))}
                        </div>
                        <p className="italic text-slate-800/80 mb-6 text-lg leading-relaxed font-body">
                          "{t.text}"
                        </p>
                        <div className="flex items-center gap-4">
                          <div className="w-10 h-10 rounded-full bg-cream-dark flex items-center justify-center font-bold text-teal text-xs border border-cream">
                            {t.author[0]}
                          </div>
                          <div>
                            <p className="font-bold text-teal text-[10px] uppercase tracking-widest">{t.author}</p>
                            <p className="text-[10px] text-gold-dark uppercase tracking-widest font-medium">{t.location}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-8">
                    <p className="text-slate-800/40 italic font-body mb-6">Read more success stories on our dedicated testimonials page.</p>
                    <Link to="/testimonials" className="text-gold font-bold hover:underline text-xs uppercase tracking-widest">View All Reviews</Link>
                  </div>
                )}
              </div>

              {/* Expert Card */}
              <div className="bg-cream p-10 rounded-[2rem] border border-cream-dark">
                 <h4 className="font-heading text-xl font-bold text-teal mb-4">Expert Guidance</h4>
                 <p className="text-slate-800/60 mb-8 leading-relaxed font-body text-sm">
                   Tracey McGill specialises in clinical techniques designed to bypass the critical conscious mind, allowing for rapid and sustainable change.
                 </p>
                 <Link to="/about" className="inline-flex items-center gap-2 text-gold font-bold text-xs uppercase tracking-[0.2em] hover:text-teal transition-colors">
                   Meet Tracey McGill <ArrowRight size={14} />
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
