import { expect } from '@playwright/test';
import { gotoLocale, forEachCase } from './helpers';

forEachCase('home page loads', async ({ page, locale }) => {
  await gotoLocale(page, '/', locale);
  await expect(page).toHaveURL(new RegExp(`/${locale}`));
});
