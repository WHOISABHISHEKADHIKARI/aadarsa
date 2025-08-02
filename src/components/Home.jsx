import React from 'react';
import Hero from './Hero';
import About from './About';
import BrandsSection from './BrandsSection';
import Videos from './Videos';
import Contact from './Contact';

const Home = () => {
  return (
    <div>
      <Hero />
      <About />
      <BrandsSection />
      <Videos />
      <Contact />
    </div>
  );
};

export default Home;