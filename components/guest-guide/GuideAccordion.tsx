import React, { useState } from 'react';
import { MapPinIcon, InstagramIcon } from './icons';

interface AccordionItemProps {
  title: string;
  content: any; // Can be array of items or string
  isOpen: boolean;
  onClick: () => void;
}

const AccordionItem: React.FC<AccordionItemProps> = ({ title, content, isOpen, onClick }) => {
  return (
    <div className="border-t border-gray-200 first:border-t-0">
      <button
        onClick={onClick}
        className="w-full text-left flex justify-between items-center py-4 px-1 focus:outline-none"
        aria-expanded={isOpen}
      >
        <span className="font-semibold text-dark-text">{title}</span>
        <svg className={`w-5 h-5 text-primary-green transform transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      <div className={`overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? 'max-h-full' : 'max-h-0'}`}>
        <div className="pb-4 px-1">
          {typeof content === 'string' ? (
             <p className="text-gray-600">{content}</p>
          ) : Array.isArray(content) ? (
            <div className="space-y-4">
              {content.map((item: any, index: number) => (
                <div key={index}>
                  {item.name && <h5 className="font-bold text-primary-green">{item.name}</h5>}
                  <p className="text-gray-600 text-sm mb-1">{item.description || item.text}</p>
                  {item.address && (
                    <a href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(item.address)}`} target="_blank" rel="noopener noreferrer" className="flex items-center text-xs text-gray-500 hover:text-accent-gold">
                      <MapPinIcon className="w-3 h-3 mr-1" /> {item.address}
                    </a>
                  )}
                  {item.social && (
                    <a href={`https://www.instagram.com/${item.social.substring(1)}`} target="_blank" rel="noopener noreferrer" className="flex items-center text-xs text-gray-500 hover:text-accent-gold">
                       <InstagramIcon className="w-3 h-3 mr-1" /> {item.social}
                    </a>
                  )}
                </div>
              ))}
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
};

interface GuideAccordionProps {
  title: string;
  Icon: React.FC<React.SVGProps<SVGSVGElement>>;
  sections: { title: string; items?: any[]; text?: string }[];
}


const GuideAccordion: React.FC<GuideAccordionProps> = ({ title, Icon, sections }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleItemClick = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  
  return (
    <div className="bg-white p-5 rounded-lg shadow-md">
      <div className="flex items-center mb-2">
        <Icon className="w-6 h-6 mr-3 text-accent-gold" />
        <h3 className="text-xl font-serif font-bold text-primary-green">{title}</h3>
      </div>
      <div>
        {sections.map((section, index) => (
          <AccordionItem
            key={index}
            title={section.title}
            content={section.items || section.text}
            isOpen={openIndex === index}
            onClick={() => handleItemClick(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default GuideAccordion;