import {Locales} from '../src/i18n';

const locales: Locales = {
  'en': {
    name: 'English',
    get strings() {
      return {
        translation: require('./en/translation.json'),
      };
    },
  },
  // add other languages here
};

export default locales;