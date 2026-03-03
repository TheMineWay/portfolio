import { getRequestConfig } from 'next-intl/server';
import { hasLocale } from 'next-intl';
import { routing } from './routing';
import { TranslationNamespace } from './namespaces';

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
