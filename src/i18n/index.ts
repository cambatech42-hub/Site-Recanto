import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';


// Import translation files
import ptBR from './locales/pt-BR.json';


const resources = {
  'pt-BR': {
    translation: ptBR
  },
  
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'pt-BR',
    debug: false,
    
    interpolation: {
      escapeValue: false,
    },
    lng: 'pt-BR'
  });

export default i18n;