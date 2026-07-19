
import React, { Suspense } from 'react';
import { Helmet } from 'react-helmet-async';
import Hero from './Hero';
import BreathingApplet from './BreathingApplet';
import Services from './Services';
import Testimonials from './Testimonials';
import FAQ from './FAQ';
import Booking from './Booking';
import { getOrganizationSchema, getPersonSchema, getFAQSchema } from '../lib/schema';
import JsonLd from './JsonLd';

// Lazy so the blog bundle (post content, markdown pipeline) never lands in the home chunk
const LatestPosts = React.lazy(() => import('./Blog/LatestPosts'));

const Home: React.FC = () => {
  return (
    <div className="flex flex-col">
      <Helmet>
        <title>Derry Hypnosis | Clinical Hypnotherapy in Derry/Londonderry</title>
        <meta name="description" content="Clinical hypnotherapy in Derry/Londonderry with Tracey McGill. Specialising in weight loss, quit smoking, anxiety relief, sleep, and more. Book a free 15-minute discovery call today." />
      </Helmet>
      {/* Structured data: rendered inline so it never conflicts with Helmet head management */}
      <JsonLd schema={getOrganizationSchema()} />
      <JsonLd schema={getPersonSchema()} />
      <JsonLd schema={getFAQSchema()} />
      <Hero />
      <BreathingApplet />
      <Services preview />

      {/* 3-step plan — lifts the fog, reduces fear of the unknown */}
      <section className="py-24 bg-cream-light">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center mb-16 animate-reveal">
            <span className="text-gold font-bold tracking-[0.2em] uppercase text-xs mb-4 block">How It Works</span>
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-teal mb-4">Three steps to lasting change</h2>
            <p className="font-body text-lg text-slate-800/60 leading-relaxed">No long programmes. No complicated commitments. Here is exactly what happens when you reach out.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              { step: '01', heading: 'Book a free discovery call', body: 'A relaxed 15-minute conversation with Tracey. No pressure, no sales pitch, just an honest discussion about what you want to change and whether hypnotherapy is the right fit.' },
              { step: '02', heading: 'Receive a personalised plan', body: 'Tracey designs your sessions around your specific situation, triggers, and goals. Nothing generic. Every approach is built for you.' },
              { step: '03', heading: 'Leave each session with a real shift', body: 'Clients consistently describe a tangible change after each session: not just relaxation, but a different relationship with the thing they came to change.' },
            ].map(({ step, heading, body }) => (
              <div key={step} className="relative bg-white rounded-2xl p-8 shadow-soft border border-cream animate-reveal">
                <span className="font-heading text-5xl font-bold text-teal/10 absolute top-6 right-8 select-none">{step}</span>
                <div className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center mb-5">
                  <span className="font-heading text-sm font-bold text-gold">{step}</span>
                </div>
                <h3 className="font-heading text-xl font-bold text-teal mb-3">{heading}</h3>
                <p className="font-body text-sm text-slate-800/60 leading-relaxed">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Testimonials />
      <FAQ />

      <Suspense fallback={null}>
        <LatestPosts />
      </Suspense>

      {/* Failure line — one sentence before the final CTA */}
      <p className="text-center font-body text-sm text-slate-800/50 italic pb-2 px-6">
        Old patterns don't resolve on their own. The longer you wait, the more they reinforce themselves.
      </p>

      <Booking />
    </div>
  );
};

export default Home;
