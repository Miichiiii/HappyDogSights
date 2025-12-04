import de from './i18n/de.json';
import en from './i18n/en.json';

const dictionaries: Record<string, any> = { de, en };

export async function getDictionary(locale: string) {
  return dictionaries[locale] || dictionaries['de'];
}
