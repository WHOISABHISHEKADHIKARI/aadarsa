import React from 'react';
import SEO from './SEO';
import Hero from './Hero';
import About from './About';
import BrandsSection from './BrandsSection';
import Videos from './Videos';
import Contact from './Contact';

const Home = () => {
  return (
    <div>
      <SEO 
        title="Adarsha Bro - Content Creator & Digital Marketing Expert"
        description="Aadrasa Upreti (Adarsha Bro) - Content Creator specializing in Food and Digital Marketing. Watch engaging videos and get expert digital marketing consultation."
        keywords="Adarsha Bro, Aadrasa Upreti, Content Creator, Food Content, Digital Marketing, Nepal, YouTube, Social Media"
        url="https://www.adarshabro.com"
      />
      <Hero />
      <About />
      <BrandsSection />
      <Videos />
      <Contact />
    </div>
  );
};

export default Home;