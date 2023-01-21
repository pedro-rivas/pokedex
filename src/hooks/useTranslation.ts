import {useTranslation as i18nUseTranslation} from 'react-i18next';

export default function useTranslation() {
  const {i18n} = i18nUseTranslation();

  /**
   * Translate a string
   * @param value
   * @returns
   */
  function t(value: string): string {
    return i18n.t(value);
  }

  return {
    t,
  };
}
