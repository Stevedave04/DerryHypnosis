
import React from 'react';
import { CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';

const About: React.FC = () => {
  return (
    <section className="py-24 bg-white overflow-hidden min-h-screen pt-32">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          <div className="w-full lg:w-1/2 relative">
            <div className="absolute top-4 -left-4 w-full h-full border-4 border-gold rounded-xl z-0 hidden md:block"></div>
            <img 
              src="https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=800&auto=format&fit=crop" 
              alt="Tracey McGill" 
              className="relative z-10 rounded-xl shadow-card w-full object-cover h-[500px]"
            />
          </div>

          <div className="w-full lg:w-1/2">
            <h2 className="font-heading text-4xl lg:text-5xl font-bold text-teal mb-6">
              Why Choose Derry Hypnosis?
            </h2>
            <div className="h-1 w-20 bg-gold mb-8"></div>
            
            <p className="font-body text-lg text-gray-700 leading-relaxed mb-6">
              We specialise in evidence-based hypnotherapy techniques that create lasting change. Whether you are looking to lose weight, stop smoking, or overcome anxiety, our goal is to help you achieve the results you desire.
            </p>
            <p className="font-body text-lg text-gray-700 leading-relaxed mb-8">
              Hypnotherapy isn't magic—it's a partnership between you and your subconscious mind. We provide the tools, guidance, and non-judgemental environment you need to break old patterns and build a future you love.
            </p>

            <ul className="space-y-4 mb-10">
              {[
                "Certified Clinical Hypnotherapist",
                "Specialist in Weight Management & Smoking Cessation",
                "Personalised approach tailored to your unique needs",
                "Comfortable, non-judgemental environment in Derry",
                "Proven track record with successful clients"
              ].map((item, index) => (
                <li key={index} className="flex items-center gap-3">
                  <CheckCircle2 className="text-gold flex-shrink-0" />
                  <span className="font-body text-darkGrey">{item}</span>
                </li>
              ))}
            </ul>

            <Link to="/contact" className="inline-block bg-teal hover:bg-teal-dark text-white font-bold py-3 px-8 rounded-lg shadow-md transition-all">
              Book a Session
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
