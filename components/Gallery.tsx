import React, { useState, useEffect, useCallback } from 'react';
import Button from './ui/Button';
import { RESERVATION_URL } from '../constants';

const galleryImages = [
  // Imagens do café da manhã
  '/cafe/cafe1.jpg',
  '/cafe/cafe2.jpg',
  '/cafe/cafe10.jpg',
  '/cafe/cafe15.jpg',
  '/cafe/cafe20.jpg',
  // Imagens do lago
  '/lago/IMG_8976.JPG',
  '/lago/IMG_8985.JPG',
  '/lago/IMG_8986.JPG',
  '/lago/lago.jpg',
  '/lago/lago1.jpg',
  '/lago/lago30.jpg',
  // Imagens das acomodações
  '/master/master.jpg',
  '/masterluxo/masterluxo1.jpg',
  '/deluxe/deluxe1.jpg',
  '/Prime/prime1.jpg',
  // Imagens aéreas
  '/aereas/aerea1.jpg',
  '/aereas/aerea5.jpg',
  '/aereas/aerea10.jpg',
  // Outras imagens
  '/quadriciclo/IMG_8997.JPG',
];

interface ImageModalProps {
  images: string[];
  initialIndex: number;
  onClose: () => void;
}

const ImageModal: React.FC<ImageModalProps> = ({ images, initialIndex, onClose }) => {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);

  const nextImage = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  }, [images.length]);

  const prevImage = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  }, [images.length]);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose();
      if (event.key === 'ArrowRight') nextImage();
      if (event.key === 'ArrowLeft') prevImage();
    };

    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'auto';
    };
  }, [onClose, nextImage, prevImage]);

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
    >
      <div
        className="relative"
        onClick={(e) => e.stopPropagation()}
      >
        <img
          src={images[currentIndex]}
          alt={`Galeria de momentos ${currentIndex + 1}`}
          className="object-contain w-auto h-auto max-h-[90vh] max-w-[90vw] rounded-lg shadow-2xl"
        />

        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 z-20 text-white bg-black/30 rounded-full p-2 hover:bg-black/60 transition-opacity"
          aria-label="Fechar"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Prev button */}
        <button
          onClick={prevImage}
          aria-label="Imagem anterior"
          className="absolute left-3 top-1/2 -translate-y-1/2 bg-black/30 text-white p-2 rounded-full hover:bg-black/60 transition focus:outline-none focus:ring-2 focus:ring-white"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
        </button>

        {/* Next button */}
        <button
          onClick={nextImage}
          aria-label="Próxima imagem"
          className="absolute right-3 top-1/2 -translate-y-1/2 bg-black/30 text-white p-2 rounded-full hover:bg-black/60 transition focus:outline-none focus:ring-2 focus:ring-white"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
        </button>
      </div>
    </div>
  );
};


const Gallery: React.FC = () => {
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);

  const openModal = (index: number) => {
    setSelectedImageIndex(index);
  };

  const closeModal = () => {
    setSelectedImageIndex(null);
  };

  return (
    <>
      <section id="gallery" className="py-20 bg-background-beige">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-serif font-bold text-primary-green">Galeria de Momentos</h2>
            <p className="text-lg text-gray-700 mt-4 max-w-2xl mx-auto">
              Inspire-se com as paisagens e a beleza do nosso recanto.
            </p>
          </div>
          <div className="columns-2 md:columns-3 lg:columns-4 gap-4">
            {galleryImages.map((src, index) => (
              <div key={index} className="mb-4 break-inside-avoid" onClick={() => openModal(index)}>
                  <img 
                      src={src} 
                      alt={`Galeria de fotos da pousada ${index + 1}`} 
                      className="w-full h-auto object-cover rounded-lg shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer transform hover:scale-105"
                  />
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Button variant="primary" href={RESERVATION_URL} target="_blank" rel="noopener noreferrer">Reserve Agora e Viva Esses Momentos</Button>
          </div>
        </div>
      </section>

      {/* Renderiza o modal se um índice de imagem for selecionado */}
      {selectedImageIndex !== null && (
        <ImageModal
          images={galleryImages}
          initialIndex={selectedImageIndex}
          onClose={closeModal}
        />
      )}
    </>
  );
};

export default Gallery;