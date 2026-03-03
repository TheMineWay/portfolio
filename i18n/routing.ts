import { defineRouting } from 'next-intl/routing';
import { Locale } from './locale';

const locales = Object.values(Locale) as [Locale, ...Locale[]];

export const routing = defineRouting({
  locales,
  defaultLocale: Locale.EN,
});
