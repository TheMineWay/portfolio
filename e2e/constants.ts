/** Base URL for all tests. Reads from env so CI can override it. */
export const BASE_URL = process.env.PLAYWRIGHT_BASE_URL ?? 'http://localhost:3000';

/** Supported locales — keep in sync with i18n/locale.ts */
export const LOCALES = ['en', 'es'] as const;
export type TestLocale = (typeof LOCALES)[number];

export const DEFAULT_LOCALE: TestLocale = 'en';

/** Existing companies */
export const COMPANIES = ['primer-impacto', 'decathlon'] as const;
export type Company = (typeof COMPANIES)[number];

/** Color scheme variants. Extend this when scheme-specific logic is needed. */
export const COLOR_SCHEMES = ['light', 'dark'] as const;
export type ColorScheme = (typeof COLOR_SCHEMES)[number];

/** Build a full URL for a given locale and path. */
export const url = (path: string, locale: TestLocale = DEFAULT_LOCALE) =>
  `${BASE_URL}/${locale}${path}`;

/** All page routes to test. Add new routes here as pages are created. */
const EXPERIENCES_PAGES = COMPANIES.map((company) => `/experiences/${company}`);
const OTHER_PAGES = ['/ethics'];

export const PAGES = ['/', ...EXPERIENCES_PAGES, ...OTHER_PAGES] as const;
export type TestPage = (typeof PAGES)[number];
