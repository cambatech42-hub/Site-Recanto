import React from 'react';
import Hero from './Hero';
import About from './About';
import Breakfast from './Breakfast';
import Accommodations from './Accommodations';
import Leisure from './Leisure';
import Activities from './Activities';
import Gallery from './Gallery';
import Blog from './Blog';
import Testimonials from './Testimonials';
import FAQ from './FAQ';
import Contact from './Contact';

const Home: React.FC = () => {
  return (
    <main>
      <Hero />
      <Accommodations />
      <Breakfast />
      <Leisure />
      <Activities />
      <About />
      <Blog />
      <Testimonials />
      <FAQ />
      <Contact />
    </main>
  );
};

export default Home;