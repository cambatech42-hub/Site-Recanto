import React from 'react';
import { PhoneIcon } from './icons';

// Renderiza um único item de uma lista de conteúdo, tratando diferentes formatos de dados.
const renderContentItem = (item: any, index: number) => {
  // Caso 1: O item é uma string simples (ex: nas 'Regras da Pousada').
  if (typeof item === 'string') {
    return (
      <div key={index} className="flex items-start mb-3">
        <span className="text-accent-gold mr-3 mt-1">▪</span>
        <p className="text-gray-600 flex-1">{item}</p>
      </div>
    );
  }

  // A partir daqui, assumimos que 'item' é um objeto.
  const { title, text, Icon, contacts, link, social } = item;

  // Case 2: Item de contato de ônibus (possui um array 'contacts').
  // Esta é a condição mais específica e deve vir primeiro.
  if (contacts) {
    return (
      <div key={index} className="mb-4">
        <div className="flex items-center mb-1">
          {Icon && <Icon className="w-5 h-5 mr-2 text-accent-gold" />}
          <h4 className="font-bold text-primary-green">{title}</h4>
        </div>
        <p className="text-gray-600 ml-7 mb-2">{text}</p>
        <div className="ml-7 space-y-1">
          {contacts.map((c: any) => (
            <a key={c.name} href={`tel:${c.phone.replace(/\s/g, '')}`} className="flex items-center text-sm text-gray-600 hover:text-accent-gold">
              <PhoneIcon className="w-4 h-4 mr-2" /> {c.name}: {c.phone}
            </a>
          ))}
        </div>
      </div>
    );
  }
  // Caso 3: Item "Imperdível" ou recomendação (possui link 'social').
  else if (social) {
    return (
      <div key={index} className="mb-4">
        <h4 className="font-bold text-primary-green">{title}</h4>
        <p className="text-gray-600">{text}</p>
        <a href={`https://instagram.com/${social.substring(1)}`} target="_blank" rel="noopener noreferrer" className="text-sm font-semibold text-accent-gold hover:underline">
          {social}
        </a>
      </div>
    );
  }
  // Caso 4: Item de conteúdo genérico (abrange direções, transporte, regras, etc.).
  // Esta é a condição mais geral e deve ser a última na cadeia.
  else if (title && text) {
    const isImportantRule = title === 'IMPORTANTE!';
    const textMargin = Icon ? '1.75rem' : '0';

    return (
      <div key={index} className={isImportantRule ? "mt-4 first:mt-0" : "mb-4"}>
        <div className="flex items-center mb-1">
          {Icon && <Icon className="w-5 h-5 mr-2 text-accent-gold" />}
          <h4 className="font-bold text-primary-green">{title}</h4>
        </div>
        <p className={`text-gray-600 ${isImportantRule ? "whitespace-pre-line" : ""}`} style={{ marginLeft: textMargin }}>{text}</p>
        {link && (
          <a href={link.href} target="_blank" rel="noopener noreferrer" className="text-sm font-semibold text-accent-gold hover:underline" style={{ marginLeft: textMargin }}>
            {link.text}
          </a>
        )}
      </div>
    );
  }

  return null; // Fallback para estruturas de item não esperadas.
};

// Função principal que decide como renderizar o bloco de conteúdo de uma seção.
const renderContent = (content: any) => {
    // Caso A: O conteúdo é um único objeto (ex: seção 'Anfitriões').
    if (typeof content === 'object' && content !== null && !Array.isArray(content)) {
        if (content.image) { // Especificamente para a seção de anfitriões.
            return (
                <>
                    <img src={content.image} alt="Anfitriões" className="w-full h-48 object-cover rounded-md mb-4" />
                    {Array.isArray(content.text) && content.text.map((p: string, i: number) => <p key={i} className="text-gray-600 mb-3">{p}</p>)}
                    <div className="mt-4 flex flex-col space-y-2">
                        {Array.isArray(content.contacts) && content.contacts.map((c: any, i: number) => {
                            const ContactIcon = c.Icon;
                            return (
                                <a key={i} href={c.href} target="_blank" rel="noopener noreferrer" className="flex items-center text-primary-green hover:text-accent-gold transition-colors">
                                    <ContactIcon className="w-5 h-5 mr-3" />
                                    <span className="font-semibold">{c.text}</span>
                                </a>
                            );
                        })}
                    </div>
                </>
            );
        }
    }

    // Caso B: O conteúdo é um array de itens.
    if (Array.isArray(content)) {
        return content.map(renderContentItem);
    }

    return null; // Fallback para tipos de conteúdo não esperados.
}

const GuideSection = ({ section }: { section: any }) => {
    const { title, Icon, content } = section;
    return (
        <div className="bg-white p-5 rounded-lg shadow-md">
            <div className="flex items-center mb-4">
                <Icon className="w-6 h-6 mr-3 text-accent-gold" />
                <h3 className="text-xl font-serif font-bold text-primary-green">{title}</h3>
            </div>
            <div>{renderContent(content)}</div>
        </div>
    );
};

export default GuideSection;