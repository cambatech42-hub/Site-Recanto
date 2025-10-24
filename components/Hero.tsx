import React, { useState } from "react";
import { useTranslation } from "react-i18next";

import Button from "./ui/Button";
import { RESERVATION_URL } from "../constants";

const Hero: React.FC = () => {
  const [videoError, setVideoError] = useState(false);
  const { t } = useTranslation();
  return (
    <div className="relative w-full h-[75vh] sm:h-[80vh] md:h-[90vh] lg:h-[100vh] overflow-hidden">
      {/* Video Background */}
      {!videoError ? (
        <video
          className="absolute inset-0 w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          poster="/aereas/aerea1.jpg"
          onError={() => setVideoError(true)}
        >
          <source src="/geralexterna/videobanner.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      ) : (
        <div
          className="absolute inset-0 w-full h-full bg-cover bg-center"
          style={{ backgroundImage: "url('/aereas/aerea1.jpg')" }}
          aria-label="Hero background fallback"
        />
      )}

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Content */}
      <div className="relative z-10 flex items-center justify-center h-full text-center px-4 sm:px-6 md:px-8">
        <div className="max-w-4xl">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-tight drop-shadow-lg">
            {t('hero.title')}
          </h1>
          <p className="mt-4 sm:mt-6 text-lg sm:text-xl md:text-2xl text-gray-200 drop-shadow-md">
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
      </div>
    </div>
  );
};

export default Hero;