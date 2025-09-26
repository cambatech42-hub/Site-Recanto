import React, { useState, useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { LEISURE_ACTIVITIES_DATA, RESERVATION_URL } from '../constants';
import { LeisureActivity } from '../types';
import DetailModal from './DetailModal';
import Button from './ui/Button';

const LeisureCard: React.FC<{ activity: LeisureActivity; onClick: () => void }> = ({ activity, onClick }) => {
  const { t } = useTranslation();
  const cardRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  // Get translated activity data
  const getLeisureTranslation = (leisureId: string, field: string) => {
    return t(`leisureData.${leisureId}.${field}`);
  };

  // Intersection Observer for fade-in animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    const currentRef = cardRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);
  
  return (
    <div 
      ref={cardRef} 
      onClick={onClick}
      className={`
        bg-white rounded-lg shadow-lg overflow-hidden transform group flex flex-col
        transition-all duration-700 ease-out hover:shadow-2xl hover:-translate-y-2 cursor-pointer
        ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}
      `}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && onClick()}
    >
      <div className="h-56 overflow-hidden">
        <img 
          src={activity.image} 
          alt={activity.name} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
      </div>
      <div className="p-6 text-center flex-grow flex flex-col items-center">
        <h3 className="text-2xl font-serif font-bold text-primary-green mb-2">{getLeisureTranslation(activity.id, 'name')}</h3>
        <p className="text-gray-600 flex-grow">{getLeisureTranslation(activity.id, 'description')}</p>
        <div className="mt-auto pt-4">
            <span className="font-semibold text-accent-gold hover:text-yellow-700 transition-colors duration-300 inline-flex items-center group-hover:underline">
                {t('leisure.viewGallery')}
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
            </span>
        </div>
      </div>
    </div>
  );
};

const Leisure: React.FC = () => {
  const { t } = useTranslation();
  const [selectedActivity, setSelectedActivity] = useState<LeisureActivity | null>(null);

  // Get translated leisure data
  const getLeisureTranslation = (leisureId: string, field: string) => {
    return t(`leisureData.${leisureId}.${field}`);
  };

  const openModal = (activity: LeisureActivity) => {
    // Create translated activity for modal
    const translatedActivity = {
      ...activity,
      name: getLeisureTranslation(activity.id, 'name'),
      details: getLeisureTranslation(activity.id, 'details')
    };
    setSelectedActivity(translatedActivity);
  };

  const closeModal = () => {
    setSelectedActivity(null);
  };

  return (
    <>
      <section id="leisure" className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary-green">{t('leisure.title')}</h2>
            <p className="text-base md:text-lg text-gray-700 mt-4 max-w-2xl mx-auto">
              {t('leisure.subtitle')}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {LEISURE_ACTIVITIES_DATA.map((activity, index) => (
              <LeisureCard key={index} activity={activity} onClick={() => openModal(activity)} />
            ))}
          </div>
          <div className="text-center mt-12 md:mt-16">
            <Button variant="primary" size="lg" href={RESERVATION_URL} target="_blank" rel="noopener noreferrer">{t('common.reserveNow')}</Button>
          </div>
        </div>
      </section>
      
      {selectedActivity && (
        <DetailModal
          isOpen={!!selectedActivity}
          onClose={closeModal}
          title={selectedActivity.name}
          details={selectedActivity.details}
          gallery={selectedActivity.gallery}
        />
      )}
    </>
  );
};

export default Leisure;