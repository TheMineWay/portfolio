import { SITE_URL } from "@/constants/site-url";
import { Company } from "@/features/work-experience/constants/companies.constants";
import { Locale } from "@/i18n/locale";
import type { MetadataRoute } from "next";

const LOCALES = Object.values(Locale);

export default function sitemap(): MetadataRoute.Sitemap {
    return LOCALES.flatMap(buildLocale);
}

const buildLocale = (locale: Locale): MetadataRoute.Sitemap => {
    const prefix = `${SITE_URL}/${locale}`;

    return [
        buildUrl('', { changeFrequency: 'weekly', priority: 1 }),
        buildUrl('ethics', { changeFrequency: 'monthly', priority: 0.5 }),
        ...buildExperiences().map((url) => `${url}`).map((url) => buildUrl(url, { changeFrequency: 'monthly' })),
    ].map((meta) => ({
        ...meta,
        url: `${prefix}${meta.url}`,
    }));
}

const buildExperiences = (): string[] => {
    return Object.values(Company).map((company) => `experiences/${company}`);
};

const buildUrl = (path: string, override: Omit<Partial<MetadataRoute.Sitemap[number]>, 'url' | 'lastModified'>): MetadataRoute.Sitemap[number] => {
    return {
        url: `/${path}`,
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 0.8,
        ...override,
    }
}