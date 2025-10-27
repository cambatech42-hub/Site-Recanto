import React, { useState, useEffect, useRef, JSX } from 'react';
import { useTranslation } from 'react-i18next';
import { ACCOMMODATIONS_DATA, WHATSAPP_URL, RESERVATION_URL } from '../constants';
import { Accommodation } from '../types';
import DetailModal from './DetailModal';
import Button from './ui/Button';

const AmenityIcon: React.FC<{ amenity: string }> = ({ amenity }) => {
    // Simple SVG icons for demonstration
    const icons: { [key: string]: JSX.Element } = {
        'Wi-Fi': <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071a10 10 0 0114.142 0M1.394 8.394a15 15 0 0121.212 0" /></svg>,
        'Ar condicionado': <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" /></svg>,
        'TV': <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>,
        'Frigobar': <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M9 1v6m6-6v6" /></svg>,
        'Chaleira elétrica': <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" /></svg>,
        'Secador de cabelo': <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>,
        'Chuveiro a gás': <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" /></svg>,
        'Hidromassagem': <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>,
        'Mini cozinha': <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" /></svg>
    };
    return icons[amenity] || <div className="h-5 w-5 mr-2" />;
};


const AccommodationCard: React.FC<{ accommodation: Accommodation; onClick: () => void }> = ({ accommodation, onClick }) => {
  const { t } = useTranslation();
  const cardRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  // Intersection Observer for fade-in animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    const currentRef = cardRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);
  
  return (
    <div 
      ref={cardRef}
      className={`
        bg-white rounded-lg shadow-lg overflow-hidden transform group flex flex-col
        transition-all duration-700 ease-out hover:shadow-2xl hover:-translate-y-1
        ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}
      `}
    >
      <div className="h-56 overflow-hidden">
        <img 
          src={accommodation.image} 
          alt={accommodation.name} 
          loading="lazy"
          decoding="async"
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
      </div>
      <div className="p-6 flex-grow flex flex-col">
        <h3 className="text-2xl font-serif font-bold text-primary-green mb-2">{accommodation.name}</h3>
        <p className="text-gray-600 mb-4 flex-grow">{accommodation.description}</p>
        <div className="flex flex-wrap text-sm text-gray-700">
            {accommodation.amenities.slice(0, 3).map(amenity => (
                <span key={amenity} className="flex items-center mr-4 mb-2">
                    <AmenityIcon amenity={amenity} /> {amenity}
                </span>
            ))}
        </div>
        <div className="mt-auto pt-4">
            <Button onClick={onClick} variant="secondary" className="w-full">
                {t('accommodations.learnMore')}
            </Button>
        </div>
      </div>
    </div>
  );
};

const Accommodations: React.FC = () => {
  const { t } = useTranslation();
  const [selectedAccommodation, setSelectedAccommodation] = useState<Accommodation | null>(null);

  const openModal = (accommodation: Accommodation) => {
    setSelectedAccommodation(accommodation);
  };

  const closeModal = () => {
    setSelectedAccommodation(null);
  };

  return (
    <>
      <section id="accommodations" className="py-16 md:py-20 bg-background-beige">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary-green">{t('accommodations.title')}</h2>
            <p className="text-base md:text-lg text-gray-700 mt-4 max-w-2xl mx-auto">
              {t('accommodations.subtitle')}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {ACCOMMODATIONS_DATA.map((acc, index) => (
              <AccommodationCard key={index} accommodation={acc} onClick={() => openModal(acc)} />
            ))}
          </div>
          <div className="text-center mt-12 md:mt-16 flex justify-center items-center flex-wrap gap-4">
            <Button variant="primary" size="lg" href={RESERVATION_URL} target="_blank" rel="noopener noreferrer">{t('accommodations.reserveButton')}</Button>
            <Button variant="secondary" size="lg" href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">{t('accommodations.contactButton')}</Button>
          </div>
        </div>
      </section>

      {selectedAccommodation && (
        <DetailModal
          isOpen={!!selectedAccommodation}
          onClose={closeModal}
          title={selectedAccommodation.name}
          details={selectedAccommodation.details}
          gallery={selectedAccommodation.gallery}
        />
      )}
    </>
  );
};

export default Accommodations;