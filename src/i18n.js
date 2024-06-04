import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from './locales/cv_en.json';
import es from './locales/cv_es.json';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: en
      },
      es: {
        translation: es
      }
    },
    lng: 'en', // idioma inicial
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
