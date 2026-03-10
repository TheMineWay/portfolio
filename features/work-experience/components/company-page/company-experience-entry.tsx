import { Briefcase, Calendar, MapPin, TrendingUp } from 'lucide-react';
import { getTranslations } from 'next-intl/server';
import { Card, CardContent } from '@/components/ui/card/card';
import { TranslationNamespace } from '@/i18n/namespaces';
import { WorkExperience } from '../../constants/work-experience.constants';
import { formatPeriod } from '@/lib/date/format-period';

type Props = { experience: WorkExperience };

export const CompanyExperienceEntry: React.FC<Props> = async ({ experience }) => {
    const t = await getTranslations(TranslationNamespace.WORK_EXPERIENCE);
    const period = await formatPeriod(experience.fromDate, experience.toDate);

    return (
        <Card>
            <CardContent className="p-6">
                <div className="flex items-start gap-3 mb-4">
                    <div
                        className="p-2 rounded mt-0.5 flex-shrink-0 bg-primary text-primary-foreground"
                    >
                        <Briefcase className="h-4 w-4" />
                    </div>
                    <div>
                        <h3 className="text-xl mb-1 text-primary">
                            {experience.role}
                        </h3>
                        <div className="flex flex-wrap gap-3 text-sm text-muted-foreground">
                            <span className="flex items-center gap-1.5">
                                <Calendar className="h-3.5 w-3.5" />
                                {period}
                            </span>
                            <span className="flex items-center gap-1.5">
                                <MapPin className="h-3.5 w-3.5" />
                                {experience.location}
                            </span>
                        </div>
                    </div>
                </div>

                <p className="text-muted-foreground mb-5 leading-relaxed">
                    {experience.description}
                </p>

                <div className="mb-5">
                    <div className="flex items-center gap-2 mb-3">
                        <TrendingUp className="h-4 w-4 text-brand-accent" />
                        <span className="text-sm font-medium">{t('summary.info.Key-achievements')}</span>
                    </div>
                    <ul className="space-y-2">
                        {experience.achievements.map((achievement) => (
                            <li key={achievement} className="flex items-start gap-2.5 text-sm text-muted-foreground">
                                <span className="inline-block w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0 bg-brand-accent" />
                                {achievement}
                            </li>
                        ))}
                    </ul>
                </div>

                {experience.technologies.length > 0 && (
                    <div className="flex flex-wrap gap-2">
                        {experience.technologies.map((tech) => (
                            <span key={tech} className="text-xs px-3 py-1 rounded border">
                                {tech}
                            </span>
                        ))}
                    </div>
                )}
            </CardContent>
        </Card>
    );
};
