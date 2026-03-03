import { Locale } from "@/i18n/locale";
import { MetadataRoute } from "next";

const LOCALES = Object.values(Locale);

export default function sitemap(): MetadataRoute.Sitemap {
    return LOCALES.flatMap(buildLocale);
}

const buildLocale = (locale: Locale): MetadataRoute.Sitemap => {
    const prefix = `/${locale}/`;

    return [
        {
            url: `${prefix}`,
            lastModified: new Date(),
        },
    ];
}