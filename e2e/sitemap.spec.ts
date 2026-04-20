import test, { expect } from '@playwright/test';

test('sitemap contains valid URLs', async ({ page }) => {
    await page.goto('/sitemap.xml');

    const urls = await page.evaluate(() => {
        const parser = new DOMParser();
        const xmlString = document.documentElement.outerHTML;
        const doc =  parser.parseFromString(xmlString, 'application/xml');
        return Array.from(doc.querySelectorAll('url > loc')).map((loc) => loc.textContent);
    });

    // Navigate to each
    for (const url of urls) {
        const response = await page.goto(url);
        expect(response).not.toBeNull();
        expect(response!.status()).toBeLessThan(400);
    }
});