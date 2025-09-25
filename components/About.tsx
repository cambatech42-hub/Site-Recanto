
import React from 'react';
import { useTranslation } from 'react-i18next';
import Button from './ui/Button';

const About: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section id="about" className="py-16 md:py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="w-full h-64 sm:h-80 md:h-full overflow-hidden rounded-lg shadow-xl">
            <img src="https://picsum.photos/seed/pousada-about/800/600" alt="Pousada rural Recanto do Lago em Cambará do Sul - Vista da fachada com chalés na natureza" className="w-full h-full object-cover" />
          </div>
          <div>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary-green mb-4 md:mb-6">
              {t('about.title')}
            </h2>
            <p className="text-base md:text-lg text-gray-700 mb-4 leading-relaxed">
              {t('about.description1')}
            </p>
            <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-6 md:mb-8">
              {t('about.description2')}
            </p>
            <Button href="#accommodations" variant="primary">{t('about.button')}</Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;