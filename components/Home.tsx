import React from 'react';
import Hero from './Hero';
import About from './About';
import Breakfast from './Breakfast';
import Accommodations from './Accommodations';
import Leisure from './Leisure';
import Activities from './Activities';
import Gallery from './Gallery';
import Testimonials from './Testimonials';
import FAQ from './FAQ';
import Contact from './Contact';

const Home: React.FC = () => {
  return (
    <main>
      <Hero />
      <About />
      <Breakfast />
      <Accommodations />
      <Leisure />
      <Activities />
      <Gallery />
      <Testimonials />
      <FAQ />
      <Contact />
    </main>
  );
};

export default Home;