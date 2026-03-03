import { getRequestConfig } from 'next-intl/server';
import { hasLocale } from 'next-intl';
import { routing } from './routing';
import { TranslationNamespace } from './namespaces';

/**
 * Per-request i18n configuration for next-intl.
 *
 * Runs on every server request to resolve the active locale and load the
 * corresponding translation messages. The result is stored in async request
 * context, so any Server Component can call `getTranslations()` or
 * `getLocale()` without receiving the locale as a prop.
 *
 * Messages are split by namespace (see `TranslationNamespace`) and loaded from
 * `messages/<locale>/<namespace>.json`. All namespace files are fetched in
 * parallel and merged into a single `{ [namespace]: { ...keys } }` object that
 * next-intl exposes through its helpers.
 */
export default getRequestConfig(async ({ requestLocale }) => {
  const requested = await requestLocale;
  const locale = hasLocale(routing.locales, requested)
    ? requested
    : routing.defaultLocale;

  const namespaces = await Promise.all(
    Object.values(TranslationNamespace).map(async (ns) => {
      const messages = (await import(`../messages/${locale}/${ns}.json`)).default;
      return [ns, messages] as const;
    })
  );

  return {
    locale,
    messages: Object.fromEntries(namespaces),
  };
});
