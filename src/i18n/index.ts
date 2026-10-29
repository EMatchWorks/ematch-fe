import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import uk from './locales/uk.json';
import en from './locales/en.json';
import ru from './locales/ru.json';

export const SUPPORTED_LANGUAGES = ['uk', 'en', 'ru'] as const;
export type SupportedLanguage = (typeof SUPPORTED_LANGUAGES)[number];

// Ukrainian is the language the app was originally written in, so it's the
// fallback for any key not yet translated into en/ru rather than a raw key
// name showing up in the UI.
i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      uk: { translation: uk },
      en: { translation: en },
      ru: { translation: ru },
    },
    fallbackLng: 'uk',
    supportedLngs: SUPPORTED_LANGUAGES,
    interpolation: {
      escapeValue: false,
    },
    detection: {
      order: ['localStorage', 'navigator'],
      lookupLocalStorage: 'language',
      caches: ['localStorage'],
    },
  });

export default i18n;
