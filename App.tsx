import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Leisure from './components/Leisure';
import Accommodations from './components/Accommodations';
import Activities from './components/Activities';
import Gallery from './components/Gallery';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';

const App: React.FC = () => {
  return (
    <div className="bg-background-beige text-dark-text font-sans antialiased">
      <Header />
      <main>
        <Hero />
        <About />
        <Leisure />
        <Accommodations />
        <Activities />
        <Gallery />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
};

export default App;
