import { Card, CardContent } from "@/components/ui/card/card";
import { getTranslations } from "next-intl/server";
import { TranslationNamespace } from "@/i18n/namespaces";
import { SectionTitle } from "@/components/common/title/section-title";
import { Badge } from "@/components/ui/badge/badge";
import { GROUPED_TECHNOLOGIES, SECONDARY_SKILLS } from "../constants/skills.constants";

export const MySkills: React.FC = async () => {
    const t = await getTranslations(TranslationNamespace.ABOUT);

    return <div>
        <div className="text-center mb-16">
            <SectionTitle level={2} title={t('skills.Title')} />
            <p className="text-muted-foreground max-w-2xl mx-auto">
              {t('skills.Subtitle')}
            </p>
        </div>

        {/* Main skills */}
        <div className="grid md:grid-cols-2 gap-6">
            {Object.entries(GROUPED_TECHNOLOGIES).map(([group, { icon: CategoryIcon, technologies }]) => (
                <Card key={group} hover>
                    <CardContent className="p-6">
                        {/* Title */}
                        <div className="flex items-center gap-3 mb-6">
                            <div
                                className="p-3 rounded-lg group-hover:scale-110 transition-transform"
                                style={{
                                    backgroundColor: `var(--brand-primary)`,
                                    color: `var(--brand-primary-foreground)`
                                }}
                            >
                                <CategoryIcon className="h-6 w-6" />
                            </div>
                            <h3>{t(`skills.groups.${group}.Title`)}</h3>
                        </div>

                        {/* Technologies */}
                        <div className="grid grid-cols-2 gap-3">
                            {technologies.map((technology) => {
                                const SkillIcon = technology.icon;
                                return (
                                    <div
                                        key={technology.name}
                                        className="flex items-center gap-2 p-3 rounded-lg border hover:border-foreground/20 transition-all duration-200 hover:shadow-sm"
                                    >
                                        <SkillIcon
                                            className="h-4 w-4 flex-shrink-0"
                                            style={{ color: `var(--brand-primary)` }}
                                        />
                                        <span className="text-sm">{technology.name}</span>
                                    </div>
                                );
                            })}
                        </div>
                    </CardContent>
                </Card>
            ))}
        </div>

        {/* Additional Skills */}
          <div className="mt-12 text-center">
            <h3 className="text-xl mb-6 opacity-80">{t('skills.secondary-skills.Title')}</h3>
            <div className="flex flex-wrap justify-center gap-3">
              {SECONDARY_SKILLS.map((skill) => (
                <Badge
                    variant="outline"
                    size="xxl"
                    key={skill}
                >
                  {skill}
                </Badge>
              ))}
            </div>
          </div>
    </div>;
}