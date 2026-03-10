import type React from "react";
import { getTranslations } from "next-intl/server";
import { TranslationNamespace } from "@/i18n/namespaces";
import { WorkExperienceSummaryCard } from "./work-experience-summary-card";
import { getWorkExperiencesDetails } from "../constants/work-experience.constants";
import { SectionTitle } from "@/components/common/title/section-title";
import { Link } from "@/i18n/navigation";


export const WorkExperienceSummary: React.FC = async () => {
    const experiences = (await getWorkExperiencesDetails()).toSorted((a, b) => a.fromDate.getTime() - b.fromDate.getTime()).reverse();
    const t = await getTranslations(TranslationNamespace.WORK_EXPERIENCE);

    return <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
            <SectionTitle title={t('Title')} level={2}/>
            <p className="text-muted-foreground max-w-2xl mx-auto">
                {t('Subtitle')}
            </p>
        </div>

        {/* Experiences */}
        <div className="grid lg:grid-cols-2 gap-6 [&>*:last-child:nth-child(odd)]:lg:col-span-2 [&>*:last-child:nth-child(odd)]:lg:max-w-[calc(50%-12px)] [&>*:last-child:nth-child(odd)]:lg:mx-auto [&>*:last-child:nth-child(odd)]:lg:w-full">
            {experiences.map(experience => (
                <Link key={experience.key} href={`/experiences/${experience.company}`}>
                    <WorkExperienceSummaryCard experience={experience}/>
                </Link>
            ))}
        </div>
    </div>;
};
