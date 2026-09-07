import { expect } from '@playwright/test';
import { forEachCase } from './helpers';

forEachCase('loads correctly', async ({ page }) => {
  await page.goto('/');
  await expect(page).toHaveURL(new RegExp(`/`));
});
