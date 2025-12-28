import React from 'react';
import Hero from './Hero';
import MindfulnessTeaser from './MindfulnessTeaser';
import BreathingApplet from './BreathingApplet';
import Services from './Services';
import Testimonials from './Testimonials';
import Booking from './Booking';

const Home: React.FC = () => {
  return (
    <div className="flex flex-col">
      <Hero />
      <MindfulnessTeaser />
      <BreathingApplet />
      <Services />
      <Testimonials />
      <Booking />
    </div>
  );
};

export default Home;