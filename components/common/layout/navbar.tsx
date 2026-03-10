import { ButtonLink } from "@/components/ui/button/button";
import { TranslationNamespace } from "@/i18n/namespaces";
import { getTranslations } from "next-intl/server";
import React from "react";

export const Navbar: React.FC = () => {
    return <nav className="hidden md:flex items-center gap-4">
        {LINKS.map((item) => <RenderItem key={item.labelKey} item={item}/>)}
    </nav>
};

type RenderItemProps = {
    item: Item;
}

const RenderItem: React.FC<RenderItemProps> = async ({ item }) => {
    const t = await getTranslations(TranslationNamespace.COMMON);

    return (
        <ButtonLink href={item.type === 'anchor' ? `#${item.link}` : item.link} variant="ghost" size="sm">
            {t(`components.navbar.links.${item.labelKey}.Label`)}
        </ButtonLink>
    );
}

/* Content */

type Item = {
    type: 'link' | 'anchor';
    labelKey: string;
    link: string;
};

const LINKS = [
    {
        type: 'anchor',
        link: 'about',
        labelKey: "about"
    },
    {
        type: 'anchor',
        link: 'work-experience',
        labelKey: "work-experience"
    },
    {
        type: 'anchor',
        link: 'skills',
        labelKey: "skills"
    }
] satisfies Item[];