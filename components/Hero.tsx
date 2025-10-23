import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import Button from './ui/Button';
import { RESERVATION_URL } from '../constants';

const Hero: React.FC = () => {
  const [offsetY, setOffsetY] = useState(0);
  const { t } = useTranslation();
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
        <source src="/geralexterna/videobanner.mp4" type="video/mp4" />
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
          {t('hero.title')}
        </h1>
        <p className="text-base sm:text-lg md:text-xl mb-6 md:mb-8 font-sans drop-shadow-md max-w-4xl mx-auto">
          {t('hero.subtitle')}
        </p>
        <Button 
          variant="primary" 
          href={RESERVATION_URL} 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-xl md:text-2xl px-6 md:px-10 py-3 md:py-5 font-bold shadow-2xl hover:shadow-3xl transform hover:scale-110 transition-all duration-300"
        >
          {t('hero.reserveButton')}
        </Button>
      </div>
    </section>
  );
};

export default Hero;