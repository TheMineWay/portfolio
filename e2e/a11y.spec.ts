import { expect } from "@playwright/test";
import { forEachCase, forEachPage } from "./helpers";
import AxeBuilder from '@axe-core/playwright';

forEachPage(async ({ path }) => {
    forEachCase(path, async ({ page }) => {
        await page.goto(path);

        const accessibilityScanResults = await new AxeBuilder({ page }).analyze();

        expect(accessibilityScanResults.violations).toEqual([]);
    });    
});