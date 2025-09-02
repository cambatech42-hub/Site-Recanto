
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Accommodations from './components/Accommodations';
import Activities from './components/Activities';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="bg-background-beige text-dark-text font-sans antialiased">
      <Header />
      <main>
        <Hero />
        <About />
        <Accommodations />
        <Activities />
        <Gallery />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;
