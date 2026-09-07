import { MetadataRoute } from "next";
import { getLocale } from "@/i18n/utils";
import { getTranslations } from "next-intl/server";
import { TranslationNamespace } from "@/i18n/namespaces";

export default async function manifest(): Promise<MetadataRoute.Manifest> {
    const locale = await getLocale();
    const t = await getTranslations(TranslationNamespace.COMMON);

    return {
        name: t('manifest.Name'),
        short_name: t('manifest.Short-name'),
        description: t('manifest.Description'),
        start_url: '/',
        display: 'standalone',
        background_color: '#ffffff',
        theme_color: '#000000',
        lang: locale
    };
};