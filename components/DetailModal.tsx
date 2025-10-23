import React, { useState, useEffect, useCallback } from 'react';
import Button from './ui/Button';
import { WHATSAPP_URL } from '../constants';

interface DetailModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  details?: string;
  gallery?: string[];
}

const DetailModal: React.FC<DetailModalProps> = ({ isOpen, onClose, title, details, gallery = [] }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = useCallback(() => {
    if (gallery.length > 0) {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % gallery.length);
    }
  }, [gallery.length]);

  const prevImage = useCallback(() => {
    if (gallery.length > 0) {
      setCurrentIndex((prevIndex) => (prevIndex - 1 + gallery.length) % gallery.length);
    }
  }, [gallery.length]);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose();
      if (event.key === 'ArrowRight') nextImage();
      if (event.key === 'ArrowLeft') prevImage();
    };
    
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
      // Reset index when modal opens
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
        className="relative bg-white rounded-lg shadow-2xl w-full max-w-4xl h-full max-h-[90vh] overflow-hidden flex flex-col md:flex-row"
        onClick={(e) => e.stopPropagation()}
      >
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
              {/* Main Image Viewer */}
              <div className="flex-grow relative w-full h-full flex items-center justify-center">
                <img src={gallery[currentIndex]} alt={`${title} - Pousada Recanto do Lago Cambará do Sul - foto ${currentIndex + 1}`} className="w-auto h-auto max-w-full max-h-full object-contain" />
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
              
              {/* Thumbnails */}
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
                          className="w-full h-full object-cover"
                        />
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </>
          ) : <div className="flex items-center justify-center h-full text-gray-500">Sem imagens disponíveis</div>}
        </div>
        
        {/* Details */}
        <div className="w-full md:w-2/5 h-1/2 md:h-full p-6 md:p-8 overflow-y-auto">
          <h3 id="modal-title" className="text-3xl font-serif font-bold text-primary-green mb-4">{title}</h3>
          <p className="text-gray-700 leading-relaxed whitespace-pre-line">{details || "Mais detalhes em breve."}</p>
          <div className="mt-6">
            <Button variant="primary" size="lg" href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">Reserve agora</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailModal;