import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Accommodations from './components/Accommodations';
import Leisure from './components/Leisure';
import Activities from './components/Activities';
import Gallery from './components/Gallery';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';

const App: React.FC = () => {
  return (
    <div className="bg-background-beige text-dark-text font-sans antialiased">
      <Header />
      <main>
        <Hero />
        <About />
        <Accommodations />
        <Leisure />
        <Activities />
        <Gallery />
        <Testimonials />
        <FAQ />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default App;