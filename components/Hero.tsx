import React, { useState, useEffect } from 'react';
import Button from './ui/Button';
import { RESERVATION_URL } from '../constants';

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
      className="relative h-screen flex items-center justify-center overflow-hidden"
    >
      <video 
        autoPlay 
        muted 
        loop 
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
        style={{
          transform: `translateY(${offsetY * 0.3}px)`
        }}
      >
        <source src="/geralexterna/RECANTO%20DO%20LAGO%20WIDE%20INTERNET.mp4" type="video/mp4" />
        {/* Fallback para navegadores que não suportam vídeo */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-fixed"
          style={{ 
            backgroundImage: "url('https://picsum.photos/seed/pousada-hero/1920/1080')",
            backgroundPositionY: offsetY * 0.5 + 'px',
          }}
        />
      </video>
      <div className="absolute inset-0 bg-black/50" />
      <div className="relative text-center text-white px-4 md:px-6 z-10 mt-12 md:mt-16">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-serif font-bold mb-4 md:mb-6 drop-shadow-lg leading-tight">
          Bem-vindo ao Recanto do Lago
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl mb-6 md:mb-8 font-sans drop-shadow-md max-w-4xl mx-auto">
          Sua Pousada em Cambará do Sul
        </p>
        <Button variant="primary" href={RESERVATION_URL} target="_blank" rel="noopener noreferrer">Reservar agora</Button>
      </div>
    </section>
  );
};

export default Hero;