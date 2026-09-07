import { getRequestConfig } from 'next-intl/server';
import { TranslationNamespace } from './namespaces';
import { cookies } from 'next/headers';

export default getRequestConfig(async () => {
    const store = await cookies();
    const locale = store.get('locale')?.value || 'en';

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