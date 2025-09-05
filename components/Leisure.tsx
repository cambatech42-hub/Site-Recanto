import React, { useState, useEffect, useRef } from 'react';
import { LEISURE_ACTIVITIES_DATA, RESERVATION_URL } from '../constants';
import { LeisureActivity } from '../types';
import DetailModal from './DetailModal';
import Button from './ui/Button';

const LeisureCard: React.FC<{ activity: LeisureActivity; onClick: () => void }> = ({ activity, onClick }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

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
        <div className="bg-accent-gold/10 text-accent-gold p-3 rounded-full -mt-12 mb-4 shadow-md">
          {activity.icon}
        </div>
        <h3 className="text-2xl font-serif font-bold text-primary-green mb-2">{activity.name}</h3>
        <p className="text-gray-600 flex-grow">{activity.description}</p>
        <div className="mt-auto pt-4">
            <span className="font-semibold text-accent-gold hover:text-yellow-700 transition-colors duration-300 inline-flex items-center group-hover:underline">
                Ver galeria
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
            </span>
        </div>
      </div>
    </div>
  );
};

const Leisure: React.FC = () => {
  const [selectedActivity, setSelectedActivity] = useState<LeisureActivity | null>(null);

  const openModal = (activity: LeisureActivity) => {
    setSelectedActivity(activity);
  };

  const closeModal = () => {
    setSelectedActivity(null);
  };

  return (
    <>
      <section id="leisure" className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary-green">Lazer e Estrutura</h2>
            <p className="text-base md:text-lg text-gray-700 mt-4 max-w-2xl mx-auto">
              Atividades para todas as idades, sem precisar sair da Pousada.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {LEISURE_ACTIVITIES_DATA.map((activity, index) => (
              <LeisureCard key={index} activity={activity} onClick={() => openModal(activity)} />
            ))}
          </div>
          <div className="text-center mt-12 md:mt-16">
            <Button variant="primary" href={RESERVATION_URL} target="_blank" rel="noopener noreferrer">Reservar Agora</Button>
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