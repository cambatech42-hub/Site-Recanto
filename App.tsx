import React, { useState, useEffect } from 'react';
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
import GuestGuide from './components/guest-guide/GuestGuide';

const App: React.FC = () => {
  const [path, setPath] = useState(window.location.pathname);

  // This function will be passed to Header to handle client-side navigation
  const navigate = (newPath: string) => {
    window.history.pushState({}, '', newPath);
    setPath(newPath);
  };

  useEffect(() => {
    const handleLocationChange = () => {
      setPath(window.location.pathname);
    };

    // Listen only for browser back/forward buttons
    window.addEventListener('popstate', handleLocationChange);

    return () => {
      window.removeEventListener('popstate', handleLocationChange);
    };
  }, []);


  if (path === '/guia') {
    return <GuestGuide />;
  }
  
  return (
    <div className="bg-background-beige text-dark-text font-sans antialiased">
      <Header navigate={navigate} />
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