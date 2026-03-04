import { test, Page } from '@playwright/test';
import { url, LOCALES, COLOR_SCHEMES, PAGES, type TestLocale, type ColorScheme } from './constants';


/** Navigate to a locale-prefixed path. */
export async function gotoLocale(page: Page, path: string, locale?: TestLocale) {
  await page.goto(url(path, locale));
}

type CaseTestCallback = (args: {
  page: Page;
  locale: TestLocale;
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
    for (const locale of LOCALES) {
      for (const colorScheme of COLOR_SCHEMES) {
        test(`[${locale}/${colorScheme}]`, async ({ page }) => {
          await page.emulateMedia({ colorScheme });
          await fn({ page, locale, colorScheme });
        });
      }
    }
  });
}

type PageTestCallback = (args: { path: string }) => Promise<void>;

export function forEachPage(fn: PageTestCallback) {
  for (const path of PAGES) {
    fn({ path });
  }
}
