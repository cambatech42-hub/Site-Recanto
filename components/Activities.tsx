
import React from 'react';
import { ACTIVITIES_DATA } from '../constants';
import { Activity } from '../types';
import Button from './ui/Button';

const ActivityCard: React.FC<{ activity: Activity }> = ({ activity }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden group">
      <div className="relative h-64 overflow-hidden">
        <img src={activity.image} alt={activity.name} className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110" />
        <div className="absolute inset-0 bg-black/30 group-hover:bg-black/50 transition-colors duration-300"></div>
        <h3 className="absolute bottom-4 left-4 text-3xl font-serif font-bold text-white drop-shadow-md">{activity.name}</h3>
      </div>
      <div className="p-6">
        <p className="text-gray-600">{activity.description}</p>
      </div>
    </div>
  );
};

const Activities: React.FC = () => {
  return (
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
            <ActivityCard key={index} activity={activity} />
          ))}
        </div>
        <div className="text-center mt-12">
            <Button variant="secondary">Ver todos os passeios</Button>
        </div>
      </div>
    </section>
  );
};

export default Activities;
