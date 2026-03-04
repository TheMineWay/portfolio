import test, { expect } from '@playwright/test';
import { gotoLocale, forEachCase } from './helpers';
import { LOCALES } from './constants';

forEachCase('loads correctly', async ({ page, locale }) => {
  await gotoLocale(page, '/', locale);
  await expect(page).toHaveURL(new RegExp(`/${locale}`));
});

test('redirects to localized version', async ({ page }) => {
  await page.goto('/');
  await page.waitForLoadState('networkidle');
  await expect(page).toHaveURL(new RegExp(`/${LOCALES[0]}`));
});
