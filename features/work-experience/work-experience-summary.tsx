import type React from "react";
import { getTranslations } from "next-intl/server";
import { TranslationNamespace } from "@/i18n/namespaces";

export const WorkExperienceSummary: React.FC = async () => {
    const t = await getTranslations(TranslationNamespace.WORK_EXPERIENCE);

    const [titleTextHighlight, ...titleTextParts] = t('Title').split(' ').toReversed();

    return <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl mb-4">
                {titleTextParts.toReversed().join(' ')} <span className="text-primary capitalize">{titleTextHighlight}</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
                {t('Subtitle')}
            </p>
        </div>

        {/* Experiences */}
        <div className="grid lg:grid-cols-2 gap-6">

        </div>
    </div>;
};
