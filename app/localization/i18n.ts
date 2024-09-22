import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from './en/en';
import es from './es/es';

export const langResources = {
  // list of languages
  en,
  es,
};
i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    compatibilityJSON: 'v3', //To make it work for Android devices, add this line.
    resources: langResources,
    lng: 'en', // default language to use.
    interpolation: {
      escapeValue: false,
    },
  });
export default i18n;
