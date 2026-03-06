import type React from "react";
import { Avatar } from "@/components/commpon/avatar/avatar";
import { getTranslations } from "next-intl/server";
import { TranslationNamespace } from "@/i18n/namespaces";
import pk from "@/package.json";

export const AboutMeHero: React.FC = async () => {
    const t = await getTranslations(TranslationNamespace.ABOUT);

    return <div className="max-w-4xl mx-auto text-center">
        <div className="mb-8 flex justify-center">
            <div className="relative">
                <div className="absolute inset-0 rounded-full blur-2xl opacity-30 bg-primary"></div>
                <Avatar className="relative w-40 h-40 sm:w-48 sm:h-48 rounded-full object-cover border-2 border-background shadow-xl"/>
            </div>
        </div>

        {/* Texts */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl mb-6">{t('about-me-hero.Title')} <span className="text-primary">{pk.author.name}</span></h1>
        <h2 className="text-xl sm:text-2xl md:text-3xl text-muted-foreground mb-8">{t('about-me-hero.Subtitle')}</h2>
        <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto mb-12">{t('about-me-hero.Extra')}</p>
    </div>;
};