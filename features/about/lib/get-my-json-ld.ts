import { TranslationNamespace } from "@/i18n/namespaces";
import { getTranslations } from "next-intl/server";
import { MY_DETAILS } from "../../../constants/my-details";
import { SOCIAL } from "@/constants/social.constants";
import { TOP_TECHNOLOGIES } from "@/constants/technologies.constant";
import { SITE_URL } from "@/constants/site-url";

export const getMyJsonLd = async () => {
    const t = await getTranslations(TranslationNamespace.ABOUT);

    return {
        "@type": "Person",
        "@id": `${SITE_URL}/#person`,
        "name": MY_DETAILS.name,
        "url": SITE_URL,
        "image": MY_DETAILS.avatar.src,
        "jobTitle": MY_DETAILS.jobTitle,
        "description": t('about-me.About-me'),
        "sameAs": [
            SOCIAL.github,
            SOCIAL.linkedin,
        ],
        "knowsAbout": TOP_TECHNOLOGIES,
    } satisfies Record<string, unknown>;
};