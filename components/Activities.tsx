import React, { useState, useEffect, useRef } from 'react';
import { ACTIVITIES_DATA, WHATSAPP_URL, RESERVATION_URL } from '../constants';
import { Activity } from '../types';
import Button from './ui/Button';
import DetailModal from './DetailModal';

const ActivityCard: React.FC<{ activity: Activity; onClick: () => void }> = ({ activity, onClick }) => {
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
        bg-white rounded-lg shadow-lg overflow-hidden group flex flex-col
        transform transition-all duration-700 ease-out hover:shadow-2xl hover:-translate-y-1 cursor-pointer
        ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}
      `}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && onClick()}
    >
      <div className="relative h-64 overflow-hidden">
        <img 
            src={activity.image} 
            alt={activity.name} 
            className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110" 
        />
        <div className="absolute inset-0 bg-black/30 group-hover:bg-black/50 transition-colors duration-300"></div>
        <h3 className="absolute bottom-4 left-4 text-3xl font-serif font-bold text-white drop-shadow-md">{activity.name}</h3>
      </div>
      <div className="p-6 flex flex-col flex-grow">
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

const Activities: React.FC = () => {
  const [selectedActivity, setSelectedActivity] = useState<Activity | null>(null);

  const openModal = (activity: Activity) => {
    setSelectedActivity(activity);
  };

  const closeModal = () => {
    setSelectedActivity(null);
  };

  return (
    <>
      <section id="activities" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-serif font-bold text-primary-green">Explore Cambará do Sul</h2>
            <p className="text-lg text-gray-700 mt-4 max-w-2xl mx-auto">
              Aventuras inesquecíveis esperam por você na terra dos cânions.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {ACTIVITIES_DATA.map((activity, index) => (
              <ActivityCard key={index} activity={activity} onClick={() => openModal(activity)} />
            ))}
          </div>
          <div className="text-center mt-16 flex justify-center items-center flex-wrap gap-4">
            <Button variant="primary" href={RESERVATION_URL} target="_blank" rel="noopener noreferrer">Quero Fazer Minha Reserva</Button>
            <Button variant="secondary" href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">Fale Conosco</Button>
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

export default Activities;