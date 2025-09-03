
import React, { useState, useEffect } from 'react';
import Button from './ui/Button';

const Hero: React.FC = () => {
  const [offsetY, setOffsetY] = useState(0);
  const handleScroll = () => setOffsetY(window.pageYOffset);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section 
      id="home" 
      className="h-screen bg-cover bg-center flex items-center justify-center bg-fixed" 
      style={{ 
        backgroundImage: "url('https://picsum.photos/seed/pousada-hero/1920/1080')",
        backgroundPositionY: offsetY * 0.5 + 'px',
      }}
    >
      <div className="absolute inset-0 bg-black/50" />
      <div className="relative text-center text-white px-4 z-10">
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold mb-4 drop-shadow-lg">
          Bem-vindo ao Recanto do Lago
        </h1>
        <p className="text-xl md:text-2xl mb-8 font-sans drop-shadow-md">
          Sua Pousada em Cambará do Sul
        </p>
        <a href="#about">
            <Button variant="primary">Conheça a Pousada</Button>
        </a>
      </div>
    </section>
  );
};

export default Hero;
