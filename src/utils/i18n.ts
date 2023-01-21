import {Resource, ResourceLanguage} from 'i18next';

import initI18n, {AppLanguage} from '../i18n';
import locales from '../../locales';
import {Logger} from '.';

/**
 * Set the app language and initialize i18n
 */
const setAppLanguage = async () => {
  try {
    const preferredLanguage = getPreferredLanguage();
    await initI18n(preferredLanguage);
  } catch (error) {
    Logger.recordError(error);
  }
};

/**
 * Get preferred app language
 * @returns
 */
const getPreferredLanguage = (): AppLanguage => {
  const appLanguage: AppLanguage = 'en';
  return appLanguage;
};

/**
 * Get the available resources for translation
 * @returns
 */
const getAvailableLanguageResources = () => {
  let resources: Resource = {};
  for (const [language, value] of Object.entries(locales)) {
    const {name, strings} = value;
    const {translation} = strings;
    // create a translation resource per language
    const translationResource: ResourceLanguage = {
      name,
      translation,
    };
    // update translation resources
    resources = {
      ...resources,
      [language]: {...translationResource},
    };
  }
  return resources;
};

export default {
  getAvailableLanguageResources,
  getPreferredLanguage,
  setAppLanguage,
};
