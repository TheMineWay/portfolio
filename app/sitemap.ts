import { Company } from "@/features/work-experience/constants/companies.constants";
import { Locale } from "@/i18n/locale";
import type { MetadataRoute } from "next";

const LOCALES = Object.values(Locale);

export default function sitemap(): MetadataRoute.Sitemap {
    return LOCALES.flatMap(buildLocale);
}

const buildLocale = (locale: Locale): MetadataRoute.Sitemap => {
    const prefix = `/${locale}/`;

    return [
        `${prefix}`,
        `${prefix}ethics`,
        ...buildExperiences().map((url) => `${prefix}${url}`),
    ].map((url) => ({
        url,
        lastModified: new Date(),
    }));
}

const buildExperiences = (): string[] => {
    return Object.values(Company).map((company) => `experiences/${company}/`);
};