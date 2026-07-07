import { getTranslations } from "next-intl/server";
import { TranslationNamespace } from "@/i18n/namespaces";
import { GROUPED_TECHNOLOGIES, SECONDARY_SKILLS } from "../constants/skills.constants";

const SECTION_INDEX = '03';

export const MySkills: React.FC = async () => {
    const t = await getTranslations(TranslationNamespace.ABOUT);

    return (
        <div className="w-full bg-section">
            <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12 py-20 md:py-28 relative overflow-hidden">
                {/* Watermark */}
                <span
                    aria-hidden
                    className="hidden md:block absolute top-0 right-0 lg:right-6 text-[13rem] font-bold leading-none text-foreground/5 select-none pointer-events-none"
                >
                    {SECTION_INDEX}
                </span>

                {/* Header */}
                <div className="relative mb-16 md:mb-20">
                    <span className="font-mono text-xs tracking-widest text-muted-foreground block mb-4">
                        {`— ${SECTION_INDEX} / skills`}
                    </span>
                    <h2 className="text-4xl md:text-6xl font-bold leading-[1.05]">
                        <span className="text-foreground">{t('skills.Title-primary')}</span>{' '}
                        <span className="text-brand-accent">{t('skills.Title-accent')}</span>
                    </h2>
                </div>

                {/* Columns */}
                <div className="relative grid md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-border">
                    {Object.entries(GROUPED_TECHNOLOGIES).map(([group, { technologies }]) => (
                        <div key={group} className="py-8 md:py-0 md:px-10 first:md:pl-0 last:md:pr-0">
                            <h3 className="font-mono text-xs uppercase tracking-widest text-muted-foreground mb-6">
                                {t(`skills.groups.${group}.Title`)}
                            </h3>
                            <ul className="space-y-3">
                                {technologies.map((technology) => (
                                    <li key={technology.name} className="flex items-center gap-3">
                                        <span
                                            className={`w-1 h-1 flex-shrink-0 ${technology.primary ? 'bg-brand-accent' : 'bg-muted-foreground'}`}
                                        />
                                        <span className={technology.primary ? 'text-foreground font-medium' : 'text-muted-foreground'}>
                                            {technology.name}
                                        </span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                {/* Additional skills */}
                <div className="relative mt-16 md:mt-20 pt-8 border-t border-border">
                    <p className="font-mono text-xs tracking-wide text-muted-foreground/60 leading-relaxed">
                        <span className="text-muted-foreground/40">{t('skills.secondary-skills.Title')}:{' '}</span>
                        {SECONDARY_SKILLS.join('  ·  ')}
                    </p>
                </div>
            </div>
        </div>
    );
}
