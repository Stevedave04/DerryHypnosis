
import React from 'react';
import Hero from './Hero';
import MindfulnessTeaser from './MindfulnessTeaser';
import BreathingApplet from './BreathingApplet';
import Services from './Services';
import Testimonials from './Testimonials';
import FAQ from './FAQ';
import Booking from './Booking';
import { getOrganizationSchema, getPersonSchema, getFAQSchema } from '../lib/schema';
import JsonLd from './JsonLd';

const Home: React.FC = () => {
  return (
    <div className="flex flex-col">
      {/* Structured data: rendered inline so it never conflicts with Helmet head management */}
      <JsonLd schema={getOrganizationSchema()} />
      <JsonLd schema={getPersonSchema()} />
      <JsonLd schema={getFAQSchema()} />
      <Hero />
      <MindfulnessTeaser />
      <BreathingApplet />
      <Services preview />
      <Testimonials />
      <FAQ />
      <Booking />
    </div>
  );
};

export default Home;
