import React from 'react';
import { useTranslation } from 'react-i18next';
import { TESTIMONIALS_DATA, RESERVATION_URL } from '../constants';
import { Testimonial } from '../types';
import Button from './ui/Button';

const TestimonialCard: React.FC<{ testimonial: Testimonial }> = ({ testimonial }) => {
  const { t } = useTranslation();
  
  // Get translated testimonial data
  const getTestimonialTranslation = (testimonialId: string, field: string) => {
    return t(`testimonialsData.${testimonialId}.${field}`);
  };

  return (
    <div className="bg-white p-8 rounded-lg shadow-lg flex flex-col items-center text-center">
      <img 
        src={testimonial.avatar} 
        alt={`Foto de ${getTestimonialTranslation(testimonial.id, 'author')}`}
        className="w-24 h-24 rounded-full object-cover mb-6 border-4 border-accent-gold/50 shadow-md"
      />
      <blockquote className="text-gray-600 italic mb-6 relative">
        <span className="absolute -top-4 -left-4 text-6xl text-primary-green/10 font-serif">"</span>
        <p>{getTestimonialTranslation(testimonial.id, 'quote')}</p>
        <span className="absolute -bottom-4 -right-4 text-6xl text-primary-green/10 font-serif">"</span>
      </blockquote>
      <cite className="font-bold text-primary-green not-italic text-lg">{getTestimonialTranslation(testimonial.id, 'author')}</cite>
    </div>
  );
};


const Testimonials: React.FC = () => {
  const { t } = useTranslation();
  
  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-serif font-bold text-primary-green">{t('testimonials.title')}</h2>
          <p className="text-lg text-gray-700 mt-4 max-w-2xl mx-auto">
            {t('testimonials.subtitle')}
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {TESTIMONIALS_DATA.map((testimonial, index) => (
            <TestimonialCard key={index} testimonial={testimonial} />
          ))}
        </div>
        <div className="text-center mt-16">
            <Button variant="primary" size="lg" href={RESERVATION_URL} target="_blank" rel="noopener noreferrer">{t('common.reserveNow')}</Button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;