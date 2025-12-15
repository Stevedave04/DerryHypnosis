import React from 'react';
import Hero from './Hero';
import Services from './Services';
import Testimonials from './Testimonials';
import Booking from './Booking';

const Home: React.FC = () => {
  return (
    <div className="flex flex-col">
      <Hero />
      {/* We render Services here to give the homepage substance, 
          but users can also navigate to the dedicated /services page */}
      <Services />
      <Testimonials />
      <Booking />
    </div>
  );
};

export default Home;