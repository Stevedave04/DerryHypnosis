
import React from 'react';
import { Helmet } from 'react-helmet-async';
import Hero from './Hero';
import MindfulnessTeaser from './MindfulnessTeaser';
import BreathingApplet from './BreathingApplet';
import Services from './Services';
import Testimonials from './Testimonials';
import FAQ from './FAQ';
import Booking from './Booking';
import { getOrganizationSchema, getPersonSchema, getFAQSchema } from '../lib/schema';

const Home: React.FC = () => {
  return (
    <div className="flex flex-col">
      <Helmet>
        {/* LocalBusiness + MedicalBusiness: entity recognition for local AI queries */}
        <script type="application/ld+json">{getOrganizationSchema()}</script>
        {/* Person: E-E-A-T author identity for Tracey McGill */}
        <script type="application/ld+json">{getPersonSchema()}</script>
        {/* FAQPage: direct Q&A extraction for Google AI Overviews */}
        <script type="application/ld+json">{getFAQSchema()}</script>
      </Helmet>
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
