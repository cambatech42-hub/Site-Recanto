import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { WHATSAPP_URL } from '../constants';
import Button from './ui/Button';

const Breakfast: React.FC = () => {
  const { t } = useTranslation();
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const breakfastImages = [
    '/cafe/cafe1.webp',
    '/cafe/cafe2.webp',
    '/cafe/cafe3.webp',
    '/cafe/cafe4.webp',
    '/cafe/cafe5.webp',
    '/cafe/cafe6.webp',
    '/cafe/cafe7.webp',
    '/cafe/cafe8.webp'
  ];

  const breakfastHighlights = [
    {
      title: t('breakfast.highlights.flexible.title'),
      description: t('breakfast.highlights.flexible.description')
    },
    {
      title: t('breakfast.highlights.homemade.title'),
      description: t('breakfast.highlights.homemade.description')
    },
    {
      title: t('breakfast.highlights.local.title'),
      description: t('breakfast.highlights.local.description')
    },
    {
      title: t('breakfast.highlights.variety.title'),
      description: t('breakfast.highlights.variety.description')
    }
  ];

  return (
    <>
      <section id="breakfast" className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          {/* Header */}
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-primary-green mb-4">
              {t('breakfast.title')}
            </h2>
            <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto mb-6">
              {t('breakfast.subtitle')}
            </p>
            <div className="w-24 h-1 bg-primary-green mx-auto"></div>
          </div>

          {/* Highlights Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mb-12 md:mb-16">
            {breakfastHighlights.map((highlight, index) => (
              <div key={index} className="text-center p-6 bg-background-beige rounded-lg hover:shadow-lg transition-shadow duration-300">
                <h3 className="text-xl font-serif font-bold text-primary-green mb-2">
                  {highlight.title}
                </h3>
                <p className="text-gray-600">
                  {highlight.description}
                </p>
              </div>
            ))}
          </div>


          {/* Photo Gallery */}
          <div className="mb-12 md:mb-16">
            <h3 className="text-2xl md:text-3xl font-serif font-bold text-primary-green mb-8 text-center">
              Galeria do Café da Manhã
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {breakfastImages.map((image, index) => (
                <div 
                  key={index} 
                  className="aspect-square overflow-hidden rounded-lg cursor-pointer hover:opacity-90 transition-opacity duration-300"
                  onClick={() => setSelectedImage(image)}
                >
                  <img 
                    src={image} 
                    alt={`Café da manhã ${index + 1}`}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center">
            <Button
              variant="primary" 
              size="lg"
              href={WHATSAPP_URL} 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center"
            >
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.515"/>
              </svg>
              Fale conosco
            </Button>
          </div>
        </div>
      </section>

      {/* Modal for enlarged images */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-4xl max-h-full">
            <img 
              src={selectedImage} 
              alt="Café da manhã ampliado"
              className="max-w-full max-h-full object-contain rounded-lg"
            />
            <button 
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 text-white bg-black bg-opacity-50 rounded-full p-2 hover:bg-opacity-75 transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Breakfast;