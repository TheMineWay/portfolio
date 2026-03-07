import { Briefcase, Calendar, MapPin, TrendingUp } from "lucide-react";
import { WorkExperience } from "../constants/work-experience.constants";
import { COMPANIES } from "../constants/companies.constants";
import { formatPeriod } from "@/lib/date/format-period";
import { Card, CardContent } from "@/components/ui/card/card";
import { Badge } from "@/components/ui/badge/badge";
import { getTranslations } from "next-intl/server";
import { TranslationNamespace } from "@/i18n/namespaces";
import Image from "next/image";

type Props = {
    experience: WorkExperience;
};

export const WorkExperienceSummaryCard: React.FC<Props> = async ({ experience: { company, fromDate, toDate, location, role, technologies, achievements, description } }) => {
    const commonT = await getTranslations(TranslationNamespace.COMMON);
    const t = await getTranslations(TranslationNamespace.WORK_EXPERIENCE);

    const isCurrent = toDate === null;
    const { name: companyName, logo } = COMPANIES[company];

    return (

        <Card
            className="overflow-hidden hover:shadow-xl transition-all duration-300 group"
        >
            <div className="relative h-40 overflow-hidden">
                {/* <Image
                    src={exp.image}
                    alt={exp.company}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                /> */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                <div className="absolute bottom-3 left-4 right-4">
                    <div className="flex items-start justify-between">
                        <div className="flex gap-2 md:gap-4 items-center">
                            {/* Logo */}
                            <Image alt={commonT('expressions.Logo-of', { name: companyName })} src={logo.src} width={logo.width} height={logo.height} className="w-12 h-12" />

                            {/* Details */}
                            <div>
                                <h3 className="text-white mb-1">{companyName}</h3>
                                <div className="flex items-center gap-3 text-white/80 text-xs">
                                    <span className="flex items-center gap-1">
                                        <MapPin className="h-3 w-3" />
                                        {location}
                                    </span>
                                    <span className="flex items-center gap-1">
                                        <Calendar className="h-3 w-3" />
                                        {formatPeriod(fromDate, toDate)}
                                    </span>
                                </div>
                            </div>
                        </div>
                        {isCurrent && (
                            <Badge>
                                {commonT('expressions.Current')}
                            </Badge>
                        )}
                    </div>
                </div>
            </div>

            <CardContent className="p-5">
                <div className="flex items-start gap-2 mb-3">
                    <div
                        className="p-1.5 rounded mt-0.5"
                        style={{ backgroundColor: 'var(--brand-primary)', color: 'var(--brand-primary-foreground)' }}
                    >
                        <Briefcase className="h-3.5 w-3.5" />
                    </div>
                    <div className="flex-1">
                        <h4
                            className="mb-1"
                            style={{ color: 'var(--brand-primary)' }}
                        >
                            {role}
                        </h4>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                            {description}
                        </p>
                    </div>
                </div>

                <div className="mb-4">
                    <div className="flex items-center gap-1 mb-2">
                        <TrendingUp className="h-3.5 w-3.5" style={{ color: 'var(--brand-accent)' }} />
                        <span className="text-xs opacity-80">{t('summary.info.Key-achievements')}</span>
                    </div>
                    <ul className="space-y-1.5">
                        {achievements.map((achievement, achievementKey) => (
                            <li key={achievementKey} className="text-xs text-muted-foreground flex items-start">
                                <span
                                    className="inline-block w-1 h-1 rounded-full mt-1.5 mr-2 flex-shrink-0"
                                    style={{ backgroundColor: 'var(--brand-accent)' }}
                                />
                                {achievement}
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="flex flex-wrap gap-1.5">
                    {technologies.map((tech) => (
                        <span
                            key={tech}
                            className="text-xs px-2 py-0.5 rounded border"
                        >
                            {tech}
                        </span>
                    ))}
                </div>
            </CardContent>
        </Card>);
};