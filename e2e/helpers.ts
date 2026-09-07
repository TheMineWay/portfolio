import { test, Page } from '@playwright/test';
import { BASE_URL, COLOR_SCHEMES, PAGES, type ColorScheme } from './constants';
import { Locale } from '@/i18n/locale';
import { LOCALE_COOKIE_KEY } from '@/i18n/constants';

type CaseTestCallback = (args: {
  page: Page;
  colorScheme: ColorScheme;
}) => Promise<void>;

/**
 * Defines a Playwright test for every combination of locale × color scheme.
 * Test names are prefixed with `[locale/scheme]` for easy filtering.
 *
 * @example
 * forEachCase('home page loads', async ({ page, locale }) => {
 *   await gotoLocale(page, '/', locale);
 *   await expect(page).toHaveURL(new RegExp(`/${locale}`));
 * });
 */
export function forEachCase(name: string, fn: CaseTestCallback) {
  test.describe(name, () => {
    for (const colorScheme of COLOR_SCHEMES) {
      test(`[${colorScheme}]`, async ({ page }) => {
        await page.emulateMedia({ colorScheme });
        await fn({ page, colorScheme });
      });
    }
  });
}

type PageTestCallback = (args: { path: string }) => Promise<void>;

export function forEachPage(fn: PageTestCallback) {
  for (const path of PAGES) {
    fn({ path });
  }
}

export const mockLocale = async (locale: Locale, page: Page) => {
  const context = page.context();
  await context.addCookies([
    {
      name: LOCALE_COOKIE_KEY,
      value: locale,
      url: BASE_URL
    }
  ]);
}