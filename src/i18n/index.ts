import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';

import {i18n as i18nUtils} from '../utils';

export type AppLanguage = 'en';

export interface Locales {
  [key: string]: {
    name: string;
    strings: {
      translation: any;
    };
  };
}

export default async function initI18n(lng: string) {
  const resources = i18nUtils.getAvailableLanguageResources();
  return i18n.use(initReactI18next).init({
    compatibilityJSON: 'v3',
    resources,
    lng,
    fallbackLng: {
      default: ['en'],
    },
    interpolation: {
      escapeValue: false,
    },
  });
}
