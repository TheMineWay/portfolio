import test, { expect } from '@playwright/test';
import { forEachCase } from './helpers';
import { LOCALES } from './constants';

forEachCase('loads correctly', async ({ page }) => {
  await page.goto('/');
  await expect(page).toHaveURL(new RegExp(`/`));
});

test('redirects to localized version', async ({ page }) => {
  await page.goto('/');
  await page.waitForLoadState('networkidle');
  await expect(page).toHaveURL(new RegExp(`/${LOCALES[0]}`));
});
