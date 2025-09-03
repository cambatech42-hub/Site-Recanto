import React, { useState, useEffect, useRef } from 'react';
import { LEISURE_DATA } from '../constants';
import { LeisureActivity } from '../types';
import Button from './ui/Button';

// Modal Component for Leisure Gallery
const LeisureModal: React.FC<{ activity: LeisureActivity; onClose: () => void }> = ({ activity, onClose }) => {
  const [mainImage, setMainImage] = useState(activity.gallery[0] || activity.image);

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
        
        {/* Main Image Pane */}
        <div className="w-full h-64 md:h-auto md:w-3/5 bg-gray-200">
          <img src={mainImage} alt={`Imagem principal de ${activity.name}`} className="w-full h-full object-cover" />
        </div>

        {/* Details and Thumbnails Pane */}
        <div className="w-full md:w-2/5 p-6 flex flex-col overflow-y-auto">
          <h3 className="text-3xl font-serif font-bold text-primary-green mb-3">{activity.name}</h3>
          <p className="text-gray-600 leading-relaxed mb-4">{activity.description}</p>
          <div className="mt-auto pt-4">
              <h4 className="font-bold text-primary-green mb-3">Galeria</h4>
              <div className="grid grid-cols-3 sm:grid-cols-4 gap-2">
                {activity.gallery.map((imgSrc, index) => (
                  <button key={index} onClick={() => setMainImage(imgSrc)} className={`rounded overflow-hidden focus:outline-none focus:ring-2 focus:ring-accent-gold ${mainImage === imgSrc ? 'ring-2 ring-accent-gold' : ''}`}>
                    <img src={imgSrc} alt={`${activity.name} - imagem ${index + 1}`} className="w-full h-full object-cover aspect-square cursor-pointer hover:opacity-80 transition-opacity" />
                  </button>
                ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Card Component for each Leisure Activity
const LeisureCard: React.FC<{ item: LeisureActivity; onClick: () => void }> = ({ item, onClick }) => {
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
          src={item.image} 
          alt={item.name} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
      </div>
      <div className="p-6">
        <h3 className="text-2xl font-serif font-bold text-primary-green mb-2">{item.name}</h3>
        <p className="text-gray-600 mb-4 h-20 overflow-hidden">{item.description}</p>
        <span className="font-semibold text-accent-gold group-hover:underline">
          Ver galeria &rarr;
        </span>
      </div>
    </div>
  );
};

// Main Leisure Section Component
const Leisure: React.FC = () => {
  const [selectedActivity, setSelectedActivity] = useState<LeisureActivity | null>(null);

  const openModal = (activity: LeisureActivity) => {
    setSelectedActivity(activity);
  };

  const closeModal = () => {
    setSelectedActivity(null);
  };

  return (
    <>
      <section id="leisure" className="py-20 bg-background-beige">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-serif font-bold text-primary-green">Lazer e Estrutura</h2>
            <p className="text-lg text-gray-700 mt-4 max-w-2xl mx-auto">
              Diversão e relaxamento para toda a família, sem precisar sair do nosso recanto.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {LEISURE_DATA.map((item, index) => (
              <LeisureCard key={index} item={item} onClick={() => openModal(item)} />
            ))}
          </div>
          <div className="text-center mt-16">
            <h3 className="text-2xl font-serif text-primary-green mb-6">A aventura não para por aqui.</h3>
            <a href="https://wa.me/5554999300535" target="_blank" rel="noopener noreferrer">
                <Button variant="primary">Fale Conosco</Button>
            </a>
            <p className="mt-4 text-gray-600">
                Garanta momentos inesquecíveis. <a href="#contact" className="font-bold text-primary-green hover:underline">Faça sua reserva</a>.
            </p>
          </div>
        </div>
      </section>

      {selectedActivity && <LeisureModal activity={selectedActivity} onClose={closeModal} />}
    </>
  );
};

export default Leisure;