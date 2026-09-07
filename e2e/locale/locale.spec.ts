import test, { expect, Page } from "@playwright/test";
import { BASE_URL } from "../constants";
import { Locale } from "@/i18n/locale";
import { mockLocale } from "../helpers";
import { LOCALE_COOKIE_KEY } from "@/i18n/constants";

const TITLE_PREFIX: Record<Locale, string> = {
    [Locale.EN]: "Hi, I'm",
    [Locale.ES]: "Hola, soy",
}

const changeLocale = async (locale: Locale, page: Page) => {
        const localeChangeTrigger = page.getByTestId('language-selector-trigger');
        await localeChangeTrigger.click();
        await page.waitForTimeout(500);

        const languageBtn = page.getByTestId(`locale-btn-${locale}`);
        await languageBtn.click();
        await page.waitForTimeout(500);
}

const testLocale = async (locale: Locale, page: Page) => {
    const title = page.getByRole('heading', { level: 1 });
    const html = page.locator('html');
    const htmlLang = await html.getAttribute("lang");

    expect(htmlLang).toEqual(locale);
    expect(await title.textContent()).toContain(TITLE_PREFIX[locale]);
}

test('locale can be changed using UI', async ({ page }) => {
    await mockLocale(Locale.EN, page);
    await page.goto(BASE_URL, { waitUntil: 'load' });
    await testLocale(Locale.EN, page);

    await changeLocale(Locale.ES, page);

    await testLocale(Locale.ES, page);
});

test.describe('page can load in any locale', () => {
    for(const locale of Object.values(Locale)) {
        test(locale, async ({page}) => {
            await mockLocale(locale, page);
            await page.goto(BASE_URL);
            await testLocale(locale, page);
        })
    }
});

test.describe('locale is set to English', () => {
    test('when no locale is defined in cookies', async ({ page, context }) => {
        await context.clearCookies();

        const langCookie = (await context.cookies()).find((c) => c.name === LOCALE_COOKIE_KEY);
        expect(langCookie).toBeUndefined();

        await page.goto(BASE_URL, { waitUntil: 'load' });
        await testLocale(Locale.EN, page);
    });
    test('when an invalid locale is present in cookies', async ({ page }) => {
        await mockLocale('invalid' as Locale, page);
        await page.goto(BASE_URL, { waitUntil: 'load' });

        await testLocale(Locale.EN, page);
    });
});