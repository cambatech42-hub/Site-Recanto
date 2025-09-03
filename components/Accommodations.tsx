import React, { useState, useEffect, useRef } from 'react';
import { ACCOMMODATIONS_DATA } from '../constants';
import { Accommodation } from '../types';
import Button from './ui/Button';

const AmenityIcon: React.FC<{ amenity: string }> = ({ amenity }) => {
    // Simple SVG icons for demonstration
    const icons: { [key: string]: JSX.Element } = {
        'Wi-Fi': <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071a10 10 0 0114.142 0M1.394 8.394a15 15 0 0121.212 0" /></svg>,
        'Lareira': <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>,
        'Hidromassagem': <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>
    };
    return icons[amenity] || <div className="h-5 w-5 mr-2" />;
};

const AccommodationModal: React.FC<{ accommodation: Accommodation; onClose: () => void }> = ({ accommodation, onClose }) => {
  const [mainImage, setMainImage] = useState(accommodation.gallery[0] || accommodation.image);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'auto';
    };
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
    >
      <div
        className="relative bg-white rounded-lg shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-hidden flex flex-col md:flex-row"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-3 right-3 z-10 text-white bg-black/30 rounded-full p-1.5 hover:bg-black/50 transition-colors"
          aria-label="Fechar"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        
        <div className="w-full h-64 md:h-auto md:w-3/5 bg-gray-200">
          <img src={mainImage} alt={`Imagem principal de ${accommodation.name}`} className="w-full h-full object-cover" />
        </div>

        <div className="w-full md:w-2/5 p-6 flex flex-col overflow-y-auto">
          <h3 className="text-3xl font-serif font-bold text-primary-green mb-3">{accommodation.name}</h3>
          <p className="text-gray-600 leading-relaxed mb-4">{accommodation.description}</p>
          
          <div className="mb-4">
            <h4 className="font-bold text-primary-green mb-2">Comodidades</h4>
            <div className="flex flex-wrap text-sm text-gray-700">
                {accommodation.amenities.map(amenity => (
                    <span key={amenity} className="flex items-center mr-4 mb-2">
                        <AmenityIcon amenity={amenity} /> {amenity}
                    </span>
                ))}
            </div>
          </div>

          <div className="mt-auto pt-4">
              <h4 className="font-bold text-primary-green mb-3">Galeria</h4>
              <div className="grid grid-cols-3 sm:grid-cols-4 gap-2">
                {accommodation.gallery.map((imgSrc, index) => (
                  <button key={index} onClick={() => setMainImage(imgSrc)} className={`rounded overflow-hidden focus:outline-none focus:ring-2 focus:ring-accent-gold ${mainImage === imgSrc ? 'ring-2 ring-accent-gold' : ''}`}>
                    <img src={imgSrc} alt={`${accommodation.name} - imagem ${index + 1}`} className="w-full h-full object-cover aspect-square cursor-pointer hover:opacity-80 transition-opacity" />
                  </button>
                ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};


const AccommodationCard: React.FC<{ accommodation: Accommodation; onClick: () => void }> = ({ accommodation, onClick }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      }, { threshold: 0.1 });

    const currentRef = cardRef.current;
    if (currentRef) observer.observe(currentRef);

    return () => {
      if (currentRef) observer.unobserve(currentRef);
    };
  }, []);
  
  return (
    <div 
      ref={cardRef} 
      onClick={onClick}
      className={`
        bg-white rounded-lg shadow-lg overflow-hidden transform group cursor-pointer
        transition-all duration-700 ease-out hover:shadow-2xl hover:-translate-y-2
        ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}
      `}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && onClick()}
    >
      <div className="h-56 overflow-hidden">
        <img 
          src={accommodation.image} 
          alt={accommodation.name} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
      </div>
      <div className="p-6">
        <h3 className="text-2xl font-serif font-bold text-primary-green mb-2">{accommodation.name}</h3>
        <p className="text-gray-600 mb-4 h-16 overflow-hidden">{accommodation.description}</p>
        <span className="font-semibold text-accent-gold group-hover:underline">
          Ver detalhes e galeria &rarr;
        </span>
      </div>
    </div>
  );
};

const Accommodations: React.FC = () => {
  const [selectedAccommodation, setSelectedAccommodation] = useState<Accommodation | null>(null);

  const openModal = (accommodation: Accommodation) => {
    setSelectedAccommodation(accommodation);
  };

  const closeModal = () => {
    setSelectedAccommodation(null);
  };

  return (
    <>
      <section id="accommodations" className="py-20 bg-background-beige">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-serif font-bold text-primary-green">Nossas Acomodações</h2>
            <p className="text-lg text-gray-700 mt-4 max-w-2xl mx-auto">
              Conforto e charme em meio à natureza. Escolha o refúgio perfeito para sua estadia.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {ACCOMMODATIONS_DATA.map((acc, index) => (
              <AccommodationCard key={index} accommodation={acc} onClick={() => openModal(acc)} />
            ))}
          </div>
          <div className="text-center mt-12">
              <a href="#contact">
                  <Button variant="primary">Ver Disponibilidade</Button>
              </a>
              <p className="mt-4 text-gray-600">
                  ou fale conosco diretamente pelo <a href="https://wa.me/5554999300535" target="_blank" rel="noopener noreferrer" className="font-bold text-primary-green hover:underline">WhatsApp</a>.
              </p>
          </div>
        </div>
      </section>

      {selectedAccommodation && <AccommodationModal accommodation={selectedAccommodation} onClose={closeModal} />}
    </>
  );
};

export default Accommodations;