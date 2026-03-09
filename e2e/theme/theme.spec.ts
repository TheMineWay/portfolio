import { forEachPage } from "../helpers";
import { type Page, test, expect } from '@playwright/test';

type Theme = 'light' | 'dark';

const TOGGLE_TEST_ID = "theme-toggle";
const getCurrentTheme = (page: Page) => page.evaluate(() => {
    const root = globalThis.window.document.documentElement;
    return root.classList.contains("dark") ? "dark" : "light";
});

const testSwitchCase = async (page: Page, navigate: () => Promise<unknown>, from: Theme, to: Theme) => {
    await page.emulateMedia({ colorScheme: from });
    await await navigate();
    await page.waitForLoadState('networkidle');

    const toggle = page.getByTestId(TOGGLE_TEST_ID);
    const currentTheme = await getCurrentTheme(page);
    expect(currentTheme).toEqual(from);

    await toggle.click();
    const newTheme = await getCurrentTheme(page);
    expect(newTheme).toEqual(to);
}

forEachPage(async ({ path }) => {
    test.describe(`on route ${path}`, () => {
        const navigate = (page: Page) => page.goto(path);

        test('switches from light to dark', ({ page }) => testSwitchCase(page, () => navigate(page), 'light', 'dark'));
        test('switches from dark to light', ({ page}) => testSwitchCase(page, () => navigate(page), 'dark', 'light'));
    });
});