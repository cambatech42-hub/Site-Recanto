
import React from 'react';

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

const Gallery: React.FC = () => {
  return (
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
            <div key={index} className="mb-4 break-inside-avoid">
                <img 
                    src={src} 
                    alt={`Galeria de fotos da pousada ${index + 1}`} 
                    className="w-full h-auto object-cover rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
                />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
