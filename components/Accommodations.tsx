import React, { useState, useEffect, useRef } from 'react';
import { ACCOMMODATIONS_DATA } from '../constants';
import { Accommodation } from '../types';

const AmenityIcon: React.FC<{ amenity: string }> = ({ amenity }) => {
    // Simple SVG icons for demonstration
    const icons: { [key: string]: JSX.Element } = {
        'Wi-Fi': <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071a10 10 0 0114.142 0M1.394 8.394a15 15 0 0121.212 0" /></svg>,
        'Lareira': <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>,
        'Hidromassagem': <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>
    };
    return icons[amenity] || <div className="h-5 w-5 mr-2" />;
};


const AccommodationCard: React.FC<{ accommodation: Accommodation }> = ({ accommodation }) => {
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
      className={`
        bg-white rounded-lg shadow-lg overflow-hidden transform group
        transition-all duration-700 ease-out hover:shadow-2xl
        ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}
      `}
    >
      <div className="h-56 overflow-hidden">
        <img 
          src={accommodation.image} 
          alt={accommodation.name} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
      </div>
      <div className="p-6">
        <h3 className="text-2xl font-serif font-bold text-primary-green mb-2">{accommodation.name}</h3>
        <p className="text-gray-600 mb-4">{accommodation.description}</p>
        <div className="flex flex-wrap text-sm text-gray-700">
            {accommodation.amenities.slice(0, 3).map(amenity => (
                <span key={amenity} className="flex items-center mr-4 mb-2">
                    <AmenityIcon amenity={amenity} /> {amenity}
                </span>
            ))}
        </div>
      </div>
    </div>
  );
};

const Accommodations: React.FC = () => {
  return (
    <section id="accommodations" className="py-20 bg-background-beige">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-serif font-bold text-primary-green">Nossas Acomodações</h2>
          <p className="text-lg text-gray-700 mt-4 max-w-2xl mx-auto">
            Conforto e charme em meio à natureza. Escolha o refúgio perfeito para sua estadia.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {ACCOMMODATIONS_DATA.map((acc, index) => (
            <AccommodationCard key={index} accommodation={acc} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Accommodations;