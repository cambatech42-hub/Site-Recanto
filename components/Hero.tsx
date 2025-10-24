import React, { useState } from "react";

const Hero: React.FC = () => {
  const [videoError, setVideoError] = useState(false);
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
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-black/20" />

      {/* Content */}
      <div className="relative z-10 flex items-center justify-center h-full text-center px-4 sm:px-6 md:px-8">
        <div className="max-w-4xl">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-tight drop-shadow-lg">
            Bem-vindo ao Recanto Doce Vida
          </h1>
          <p className="mt-4 sm:mt-6 text-lg sm:text-xl md:text-2xl text-gray-200 drop-shadow-md">
            Refúgio perfeito em meio à natureza, conforto e tranquilidade.
          </p>
          <a
            href="#accommodations"
            className="inline-block mt-6 sm:mt-8 px-6 sm:px-8 py-3 sm:py-4 bg-white/90 text-black font-semibold rounded-lg shadow-lg hover:bg-white transition duration-300"
          >
            Explorar Acomodações
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;