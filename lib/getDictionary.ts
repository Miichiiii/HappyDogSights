import de from "@/locales/de.json";
import en from "@/locales/en.json";

const dictionaries: Record<string, any> = { de, en };

export async function getDictionary(locale: string) {
  return dictionaries[locale] || dictionaries["de"];
}
