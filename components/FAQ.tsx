import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { FAQ_DATA } from '../constants';
import { FAQItem as FAQItemType } from '../types';

const FAQItem: React.FC<{
  item: FAQItemType;
  isOpen: boolean;
  onClick: () => void;
}> = ({ item, isOpen, onClick }) => {
  return (
    <div className="border-b border-gray-200 py-4">
      <button
        onClick={onClick}
        className="w-full text-left flex justify-between items-center focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-green rounded-md p-2"
        aria-expanded={isOpen}
      >
        <span className="text-lg font-semibold text-dark-text">{item.question}</span>
        <span className="transform transition-transform duration-300">
          <svg
            className={`w-6 h-6 text-primary-green transition-transform duration-300 ${isOpen ? 'rotate-180' : 'rotate-0'}`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
          </svg>
        </span>
      </button>
      <div
        className={`
          overflow-hidden transition-all duration-500 ease-in-out
          ${isOpen ? 'max-h-96' : 'max-h-0'}
        `}
      >
        <p className="pt-4 px-2 text-gray-700 leading-relaxed">
          {item.answer}
        </p>
      </div>
    </div>
  );
};

const FAQ: React.FC = () => {
  const { t } = useTranslation();
  const [openIndex, setOpenIndex] = useState<number | null>(0); // Começa com o primeiro item aberto

  const handleItemClick = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 bg-background-beige">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-serif font-bold text-primary-green">{t('faq.title')}</h2>
          <p className="text-lg text-gray-700 mt-4 max-w-2xl mx-auto">
            {t('faq.subtitle')}
          </p>
        </div>
        <div className="max-w-3xl mx-auto bg-white p-6 rounded-lg shadow-lg">
          {FAQ_DATA.map((item, index) => (
            <FAQItem
              key={index}
              item={item}
              isOpen={openIndex === index}
              onClick={() => handleItemClick(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
