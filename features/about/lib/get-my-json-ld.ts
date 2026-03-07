import { TranslationNamespace } from "@/i18n/namespaces";
import { getTranslations } from "next-intl/server";
import { MY_DETAILS } from "../../../constants/my-details";
import { SOCIAL } from "@/constants/social.constants";
import { TOP_TECHNOLOGIES } from "@/constants/technologies.constant";

export const getMyJsonLd = async () => {
    const t = await getTranslations(TranslationNamespace.ABOUT);

    // TODO: implement current domain
    const PERSONAL_DOMAIN = "";

    return {
        "@type": "Person",
        "@id": `${PERSONAL_DOMAIN}/#person`,
        "name": MY_DETAILS.name,
        "url": PERSONAL_DOMAIN,
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