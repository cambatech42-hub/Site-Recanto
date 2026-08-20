import React, { useState, useEffect, useCallback, JSX } from 'react';
import { PHONE_NUMBER } from '../constants';

interface DetailModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  details?: string;
  gallery?: string[];
  amenities?: string[];
  capacity?: string;
}

const amenityIcons: { [key: string]: JSX.Element } = {
  'Wi-Fi': <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071a10 10 0 0114.142 0M1.394 8.394a15 15 0 0121.212 0" /></svg>,
  'Ar condicionado': <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" /></svg>,
  'TV': <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>,
  'Frigobar': <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M9 1v6m6-6v6" /></svg>,
  'Chaleira elétrica': <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18 8h1a4 4 0 010 8h-1M2 8h16v9a4 4 0 01-4 4H6a4 4 0 01-4-4V8zM6 1v3M10 1v3M14 1v3" /></svg>,
  'Secador de cabelo': <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>,
  'Chuveiro a gás': <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" /></svg>,
  'Hidromassagem': <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>,
  'Mini cozinha': <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" /></svg>,
};

const DetailModal: React.FC<DetailModalProps> = ({
  isOpen,
  onClose,
  title,
  details,
  gallery = [],
  amenities = [],
  capacity,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const whatsappMessage = encodeURIComponent(
    `Olá! Tenho interesse no ${title}. Poderia me passar mais informações para reservar?`
  );
  const whatsappUrl = `https://wa.me/${PHONE_NUMBER}?text=${whatsappMessage}`;

  const nextImage = useCallback(() => {
    if (gallery.length > 0) {
      setCurrentIndex((prev) => (prev + 1) % gallery.length);
    }
  }, [gallery.length]);

  const prevImage = useCallback(() => {
    if (gallery.length > 0) {
      setCurrentIndex((prev) => (prev - 1 + gallery.length) % gallery.length);
    }
  }, [gallery.length]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') nextImage();
      if (e.key === 'ArrowLeft') prevImage();
    };

    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
      setCurrentIndex(0);
    }

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'auto';
    };
  }, [isOpen, onClose, nextImage, prevImage]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 animate-fade-in"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div
        className="relative bg-white rounded-lg shadow-2xl w-full max-w-5xl h-full max-h-[90vh] overflow-hidden flex flex-col md:flex-row"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 z-20 text-white md:text-gray-500 bg-black/30 md:bg-transparent rounded-full p-2 hover:opacity-80 transition-opacity"
          aria-label="Fechar"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Image Gallery */}
        <div className="w-full md:w-3/5 h-1/2 md:h-full bg-gray-900 flex flex-col flex-shrink-0">
          {gallery.length > 0 ? (
            <>
              <div className="flex-grow relative w-full min-h-0 overflow-hidden flex items-center justify-center">
                <img
                  src={gallery[currentIndex]}
                  alt={`${title} - Pousada Recanto do Lago Cambará do Sul - foto ${currentIndex + 1}`}
                  decoding="async"
                  className="w-auto h-auto max-w-full max-h-full object-contain"
                />
                {gallery.length > 1 && (
                  <>
                    <button onClick={prevImage} aria-label="Imagem anterior" className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/40 text-white p-2 rounded-full hover:bg-black/60 transition">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
                    </button>
                    <button onClick={nextImage} aria-label="Próxima imagem" className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/40 text-white p-2 rounded-full hover:bg-black/60 transition">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                    </button>
                    <div className="absolute bottom-2 left-1/2 -translate-x-1/2 bg-black/40 text-white text-xs px-2 py-1 rounded-full">
                      {currentIndex + 1} / {gallery.length}
                    </div>
                  </>
                )}
              </div>

              {gallery.length > 1 && (
                <div className="flex-shrink-0 bg-black/50 p-2">
                  <div className="flex justify-center space-x-2 overflow-x-auto">
                    {gallery.map((imgSrc, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentIndex(index)}
                        className={`
                          w-16 h-16 rounded-md overflow-hidden flex-shrink-0
                          focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-black focus:ring-accent-gold
                          transition-all duration-200
                          ${currentIndex === index ? 'ring-2 ring-accent-gold scale-105' : 'opacity-60 hover:opacity-100'}
                        `}
                        aria-label={`Ver imagem ${index + 1}`}
                      >
                        <img
                          src={imgSrc}
                          alt={`Thumbnail ${index + 1}`}
                          loading="lazy"
                          decoding="async"
                          className="w-full h-full object-cover"
                        />
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </>
          ) : (
            <div className="flex items-center justify-center h-full text-gray-500">Sem imagens disponíveis</div>
          )}
        </div>

        {/* Details panel */}
        <div className="w-full md:w-2/5 h-1/2 md:h-full flex flex-col">
          {/* Scrollable content */}
          <div className="flex-1 overflow-y-auto p-6 md:p-8">
            <h3 id="modal-title" className="text-2xl md:text-3xl font-serif font-bold text-primary-green mb-3">
              {title}
            </h3>

            {/* Capacity badge */}
            {capacity && (
              <div className="inline-flex items-center gap-1.5 bg-primary-green/10 text-primary-green text-sm font-semibold px-3 py-1 rounded-full mb-5">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                {capacity}
              </div>
            )}

            {/* Amenities */}
            {amenities.length > 0 && (
              <div className="mb-5">
                <p className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-3">Comodidades</p>
                <div className="grid grid-cols-2 gap-x-4 gap-y-2.5">
                  {amenities.map((amenity) => (
                    <div key={amenity} className="flex items-center gap-2 text-sm text-gray-700">
                      <span className="text-primary-green">
                        {amenityIcons[amenity] ?? <div className="h-5 w-5 flex-shrink-0" />}
                      </span>
                      <span>{amenity}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            <div className="border-t border-gray-100 my-4" />

            {/* Details text */}
            <p className="text-gray-700 leading-relaxed whitespace-pre-line text-sm">
              {details || 'Mais detalhes em breve.'}
            </p>
          </div>

          {/* Sticky CTA */}
          <div className="flex-shrink-0 p-4 md:p-6 border-t border-gray-100 bg-white">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full bg-[#25D366] hover:bg-[#1da851] text-white font-bold py-3.5 px-6 rounded-md shadow-md transition-all duration-300 hover:scale-105"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 448 512" fill="currentColor">
                <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"/>
              </svg>
              Reservar pelo WhatsApp
            </a>
            <p className="text-center text-xs text-gray-400 mt-3">
              Prefere escolher as datas sozinho?{' '}
              <a
                href="https://hotels.cloudbeds.com/pt-br/reservas/HgoiJE"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-green underline hover:text-green-800"
              >
                Simular preços e disponibilidade
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailModal;
