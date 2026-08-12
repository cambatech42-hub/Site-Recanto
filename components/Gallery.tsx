import React, { useState, useEffect, useCallback } from 'react';
import Button from './ui/Button';
import { RESERVATION_URL } from '../constants';

const galleryImages = [
  // Imagens aéreas
  '/aereas/DJI_0046.webp',
  '/aereas/DJI_0048.webp',
  '/aereas/DJI_0050.webp',
  '/aereas/DJI_0052.webp',
  '/aereas/DJI_0053.webp',
  '/aereas/DJI_0055.webp',
  '/aereas/DJI_0060.webp',
  '/aereas/DJI_0062.webp',
  '/aereas/DJI_0063.webp',
  '/aereas/DJI_0064.webp',
  '/aereas/DSC00028.webp',
  '/aereas/DSC00029.webp',
  '/aereas/DSC00031.webp',
  '/aereas/DSC00032.webp',
  // Imagens do café da manhã
  '/cafe/1NIN9064.webp',
  '/cafe/1NIN9066.webp',
  '/cafe/1NIN9068.webp',
  '/cafe/1NIN9070.webp',
  '/cafe/1NIN9072.webp',
  '/cafe/1NIN9074.webp',
  '/cafe/cafe1.webp',
  '/cafe/cafe2.webp',
  '/cafe/cafe3.webp',
  '/cafe/cafe5.webp',
  // Imagens do lago
  '/lago/1NIN6673.webp',
  '/lago/1NIN6699.webp',
  '/lago/1NIN6703.webp',
  '/lago/1NIN6717.webp',
  '/lago/1NIN6722.webp',
  '/lago/1NIN6728.webp',
  '/lago/1NIN6736.webp',
  '/lago/1NIN6744.webp',
  '/lago/1NIN6750.webp',
  '/lago/1NIN6756.webp',
  // Imagens das acomodações
  '/master/1NIN6686.webp',
  '/masterluxo/1NIN9189.webp',
  '/deluxe/1NIN6793.webp',
  '/Prime/1NIN9326.webp',
  '/Standard/1NIN9288.webp',
  // Outras imagens
  '/quadriciclo/IMG_8997.webp',
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
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {galleryImages.map((src, index) => (
              <div key={index} className="aspect-[4/3] overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer" onClick={() => openModal(index)}>
                  <img
                      src={src}
                      alt={`Galeria de fotos da pousada ${index + 1}`}
                      loading="lazy"
                      decoding="async"
                      className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-300"
                  />
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Button variant="primary" size="lg" href={RESERVATION_URL} target="_blank" rel="noopener noreferrer">Reservar Agora e Viva Esses Momentos</Button>
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