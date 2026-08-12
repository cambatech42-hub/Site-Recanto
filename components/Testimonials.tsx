import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { TESTIMONIALS_DATA, RESERVATION_URL } from '../constants';
import { Testimonial, GoogleReview } from '../types';
import Button from './ui/Button';
import { Star } from 'lucide-react';

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
        <p>{getTestimonialTranslation(testimonial.id, 'quote')}</p>
      </blockquote>
      <cite className="font-bold text-primary-green not-italic text-lg">{getTestimonialTranslation(testimonial.id, 'author')}</cite>
    </div>
  );
};

const StarRow: React.FC<{ rating: number }> = ({ rating }) => {
  const stars = Array.from({ length: 5 }, (_, i) => i < rating);
  return (
    <div className="flex items-center gap-1 mb-3" aria-label={`${rating} de 5 estrelas`}>
      {stars.map((filled, idx) => (
        <Star key={idx} className={`w-5 h-5 ${filled ? 'text-yellow-500' : 'text-gray-300'}`} fill={filled ? 'currentColor' : 'none'} stroke="currentColor" />
      ))}
    </div>
  );
};

const GoogleReviewCard: React.FC<{ review: GoogleReview }> = ({ review }) => {
  const { t } = useTranslation();
  return (
    <div className="bg-white p-8 rounded-lg shadow-lg flex flex-col items-center text-center">
      <img 
        src={review.profile_photo_url || '/outros/logo.PNG'} 
        alt={`Foto de ${review.author_name}`} 
        loading="lazy"
        decoding="async"
        className="w-24 h-24 rounded-full object-cover mb-6 border-4 border-accent-gold/50 shadow-md"
      />
      <StarRow rating={review.rating} />
      <blockquote className="text-gray-600 italic mb-6 relative">
        <p>{review.text}</p>
      </blockquote>
      <cite className="font-bold text-primary-green not-italic text-lg">{review.author_name}</cite>
      {review.relative_time_description && (
        <span className="text-sm text-gray-500 mt-2">{review.relative_time_description}</span>
      )}
    </div>
  );
};


const Testimonials: React.FC = () => {
  const { t } = useTranslation();
  const [googleReviews, setGoogleReviews] = useState<GoogleReview[] | null>(null);
  const [reviewsStatus, setReviewsStatus] = useState<'loading' | 'google' | 'fallback'>('loading');
  const [reviewsNote, setReviewsNote] = useState<string | null>(null);

  useEffect(() => {
    const loadReviews = async () => {
      try {
        const res = await fetch('/api/google-reviews');
        if (!res.ok) throw new Error('Failed to load Google reviews');
        const data = await res.json();
        if (Array.isArray(data) && data.length > 0) {
          const sorted = (data as GoogleReview[]).sort((a, b) => (b.time ?? 0) - (a.time ?? 0));
          const topThree = sorted.slice(0, 3);
          if (topThree.length > 0) {
            setGoogleReviews(topThree);
            setReviewsStatus('google');
            setReviewsNote(null);
          } else {
            setGoogleReviews(null);
            setReviewsStatus('fallback');
            setReviewsNote('Não foi possível carregar as avaliações do Google no momento. Exibindo depoimentos da pousada.');
          }
        }
      } catch (err) {
        setGoogleReviews(null);
        setReviewsStatus('fallback');
        setReviewsNote('Não foi possível carregar as avaliações do Google no momento. Exibindo depoimentos da pousada.');
      }
    };
    loadReviews();
  }, []);
  
  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-serif font-bold text-primary-green">{t('testimonials.title')}</h2>
          <p className="text-lg text-gray-700 mt-4 max-w-2xl mx-auto">
            {t('testimonials.subtitle')}
          </p>
          {reviewsStatus === 'fallback' && reviewsNote && (
            <p className="text-sm text-gray-500 mt-3" role="status" aria-live="polite">
              {reviewsNote}
            </p>
          )}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {googleReviews && googleReviews.length > 0 ? (
            googleReviews.map((review, index) => (
              <GoogleReviewCard key={index} review={review} />
            ))
          ) : (
            TESTIMONIALS_DATA.map((testimonial, index) => (
              <TestimonialCard key={index} testimonial={testimonial} />
            ))
          )}
        </div>
        <div className="text-center mt-16">
            <Button variant="primary" size="lg" href={RESERVATION_URL} target="_blank" rel="noopener noreferrer">{t('common.reserveNow')}</Button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;