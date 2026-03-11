import type React from "react";
import { GraduationCap, Calendar, Star } from "lucide-react";
import { getTranslations } from "next-intl/server";
import { TranslationNamespace } from "@/i18n/namespaces";
import { Card, CardContent } from "@/components/ui/card/card";
import { SectionTitle } from "@/components/common/title/section-title";
import { Badge } from "@/components/ui/badge/badge";
import { formatPeriod } from "@/lib/date/format-period";
import { COURSES } from "../constants/courses.constants";

export const Courses: React.FC = async () => {
    const t = await getTranslations(TranslationNamespace.COURSES);

    const coursesWithPeriod = await Promise.all(
        COURSES.map(async (course) => ({
            ...course,
            period: await formatPeriod(course.fromDate, course.toDate),
        }))
    );

    return (
        <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
                <SectionTitle level={2} title={t('Title')} />
                <p className="text-muted-foreground max-w-2xl mx-auto">
                    {t('Subtitle')}
                </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {coursesWithPeriod.map((course) => {
                    const description = t.has(`courses.${course.key}.Description`)
                        ? t(`courses.${course.key}.Description`)
                        : null;

                    return (
                        <Card
                            key={course.key}
                            topAccent
                            hover
                        >
                            <CardContent className="p-5 flex flex-col h-full">
                                <div className="flex items-start gap-3 mb-3">
                                    <div
                                        className="p-2 rounded flex-shrink-0"
                                        style={{
                                            backgroundColor: 'var(--brand-primary)',
                                            color: 'var(--brand-primary-foreground)',
                                        }}
                                    >
                                        <GraduationCap className="h-5 w-5" />
                                    </div>
                                    <div className="flex-1 min-w-0">
                                        <h3 className="mb-0.5 leading-tight">
                                            {t(`courses.${course.key}.Title`)}
                                        </h3>
                                        <p className="text-sm opacity-70">{course.platform}</p>
                                    </div>
                                </div>

                                <Badge variant="outline" size="md" className="w-fit mb-3">
                                    {course.field}
                                </Badge>

                                {description && (
                                    <p className="text-sm text-muted-foreground mb-3 leading-relaxed flex-1">
                                        {description}
                                    </p>
                                )}

                                {course.skills.length > 0 && (
                                    <div className="flex flex-wrap gap-1.5 mb-3">
                                        {course.skills.map((skill) => (
                                            <Badge key={skill} variant="secondary" size="md">
                                                {skill}
                                            </Badge>
                                        ))}
                                    </div>
                                )}

                                <div className="flex items-center justify-between text-xs opacity-70 mt-auto pt-2">
                                    <span className="flex items-center gap-1">
                                        <Calendar className="h-3.5 w-3.5" />
                                        {course.period}
                                    </span>
                                    <div className="flex items-center gap-2">
                                        {course.honorRoll && (
                                            <Badge variant="primary" size="md">
                                                {t('HonorRoll')}
                                            </Badge>
                                        )}
                                        {course.grade && (
                                            <span className="flex items-center gap-1">
                                                <Star className="h-3.5 w-3.5" style={{ color: 'var(--brand-accent)' }} />
                                                {course.grade}
                                            </span>
                                        )}
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    );
                })}
            </div>
        </div>
    );
};
