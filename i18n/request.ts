import { getRequestConfig } from 'next-intl/server';
import { TranslationNamespace } from './namespaces';
import { getLocale } from './utils';

export default getRequestConfig(async () => {
    const locale = await getLocale();

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