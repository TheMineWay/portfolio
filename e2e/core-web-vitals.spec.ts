import { expect, Page } from "@playwright/test";
import { forEachCase, forEachPage } from "./helpers";

type Vitals = {
    lcp: number | null;
    cls: number;
    inp: number | null;
};

declare global {
    interface Window {
        __vitals: Vitals;
    }
}

/** Injects PerformanceObserver collectors before the page loads. Must be called before page.goto(). */
const injectVitalsCollector = async (page: Page) => {
    await page.addInitScript(() => {
        globalThis.window.__vitals = { lcp: null, cls: 0, inp: null };

        // LCP — fires on largest contentful paint; buffered: true captures entries already recorded
        new PerformanceObserver((list) => {
            const entries = list.getEntries();
            const last = entries.at(-1) as PerformanceEntry & { startTime: number };
            globalThis.window.__vitals.lcp = last.startTime;
        }).observe({ type: 'largest-contentful-paint', buffered: true });

        // CLS — accumulates layout shift scores, ignoring shifts after user input
        new PerformanceObserver((list) => {
            for (const entry of list.getEntries() as (PerformanceEntry & { hadRecentInput: boolean; value: number })[]) {
                if (!entry.hadRecentInput) globalThis.window.__vitals.cls += entry.value;
            }
        }).observe({ type: 'layout-shift', buffered: true });

        // INP — requires a user interaction; captured via event timing
        new PerformanceObserver((list) => {
            for (const entry of list.getEntries() as (PerformanceEntry & { processingStart: number; processingEnd: number; startTime: number })[]) {
                const duration = entry.processingEnd - entry.startTime;
                if (globalThis.window.__vitals.inp === null || duration > globalThis.window.__vitals.inp) {
                    globalThis.window.__vitals.inp = duration;
                }
            }
        }).observe({ type: 'event', buffered: true, durationThreshold: 0 } as PerformanceObserverInit);
    });
};

const collectVitals = async (page: Page): Promise<Vitals> => {
    // Wait for layout shifts to settle BEFORE clicking.
    // hadRecentInput suppresses CLS for 500ms after a pointer event,
    // so the click must come after any expected shifts.
    await page.waitForTimeout(500);

    // Synthetic click so INP has an interaction to measure
    await page.mouse.click(1, 1);

    // Allow INP observer to flush
    await page.waitForTimeout(200);

    return page.evaluate(() => globalThis.window.__vitals);
};

forEachPage(async ({ path }) => {
    forEachCase(path, async ({ page }) => {
        await injectVitalsCollector(page);
        await page.goto(path);

        const vitals = await collectVitals(page);

        expect(vitals.lcp, 'LCP should be under 2500ms').not.toBeNull();
        expect(vitals.lcp).toBeLessThan(2500);

        expect(vitals.cls, 'CLS should be under 0.1').toBeLessThan(0.1);

        if (vitals.inp !== null) {
            expect(vitals.inp, 'INP should be under 200ms').toBeLessThan(200);
        }
    });
});