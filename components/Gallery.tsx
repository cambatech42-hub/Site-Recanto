
import React, { useState, useEffect } from 'react';

const galleryImages = [
  'https://picsum.photos/seed/gallery1/600/600',
  'https://picsum.photos/seed/gallery2/600/800',
  'https://picsum.photos/seed/gallery3/800/600',
  'https://picsum.photos/seed/gallery4/600/600',
  'https://picsum.photos/seed/gallery5/800/600',
  'https://picsum.photos/seed/gallery6/600/800',
  'https://picsum.photos/seed/gallery7/600/600',
  'https://picsum.photos/seed/gallery8/600/800',
];

// Componente de modal para exibir a imagem ampliada
const ImageModal: React.FC<{ src: string; onClose: () => void }> = ({ src, onClose }) => {
  useEffect(() => {
    // Fecha o modal ao pressionar a tecla 'Escape'
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    // Impede a rolagem do corpo da página quando o modal está aberto
    document.body.style.overflow = 'hidden';

    // Limpa o evento e restaura a rolagem ao desmontar o componente
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'auto';
    };
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-sm"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
    >
      <div
        className="relative max-h-[90vh] max-w-[90vw]"
        onClick={(e) => e.stopPropagation()} // Impede que o clique na imagem feche o modal
      >
        <img src={src} alt="Visualização ampliada" className="object-contain w-auto h-auto max-h-[90vh] max-w-[90vw] rounded-lg shadow-2xl" />
        <button
          onClick={onClose}
          className="absolute -top-2 -right-10 text-white bg-transparent rounded-full p-2 hover:opacity-80 transition-opacity"
          aria-label="Fechar"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
    </div>
  );
};


const Gallery: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const openModal = (src: string) => {
    setSelectedImage(src);
  };

  const closeModal = () => {
    setSelectedImage(null);
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
              <div key={index} className="mb-4 break-inside-avoid" onClick={() => openModal(src)}>
                  <img 
                      src={src} 
                      alt={`Galeria de fotos da pousada ${index + 1}`} 
                      className="w-full h-auto object-cover rounded-lg shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer transform hover:scale-105"
                  />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Renderiza o modal se uma imagem for selecionada */}
      {selectedImage && <ImageModal src={selectedImage} onClose={closeModal} />}
    </>
  );
};

export default Gallery;
