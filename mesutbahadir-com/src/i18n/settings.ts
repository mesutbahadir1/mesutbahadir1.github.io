export const fallbackLng = 'en';
export const languages = [fallbackLng, 'tr'];
export const defaultNS = 'common';

export function getOptions(lng = fallbackLng, ns = defaultNS) {
  return {
    supportedLngs: languages,
    fallbackLng,
    lng,
    fallbackNS: defaultNS,
    defaultNS,
    ns,
  };
} 