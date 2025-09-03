
import React from 'react';
import { TESTIMONIALS_DATA } from '../constants';
import { Testimonial } from '../types';

const TestimonialCard: React.FC<{ testimonial: Testimonial }> = ({ testimonial }) => {
  return (
    <div className="bg-white p-8 rounded-lg shadow-lg flex flex-col items-center text-center">
      <img 
        src={testimonial.avatar} 
        alt={`Foto de ${testimonial.author}`}
        className="w-24 h-24 rounded-full object-cover mb-6 border-4 border-accent-gold/50 shadow-md"
      />
      <blockquote className="text-gray-600 italic mb-6 relative">
        <span className="absolute -top-4 -left-4 text-6xl text-primary-green/10 font-serif">“</span>
        <p>{testimonial.quote}</p>
        <span className="absolute -bottom-4 -right-4 text-6xl text-primary-green/10 font-serif">”</span>
      </blockquote>
      <cite className="font-bold text-primary-green not-italic text-lg">{testimonial.author}</cite>
    </div>
  );
};


const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-serif font-bold text-primary-green">O que nossos hóspedes dizem</h2>
          <p className="text-lg text-gray-700 mt-4 max-w-2xl mx-auto">
            Experiências que encantam e ficam na memória.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {TESTIMONIALS_DATA.map((testimonial, index) => (
            <TestimonialCard key={index} testimonial={testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
