import type React from "react";
import { GraduationCap, Calendar, Star } from "lucide-react";
import { getTranslations } from "next-intl/server";
import { TranslationNamespace } from "@/i18n/namespaces";
import { Card, CardContent } from "@/components/ui/card/card";
import { Badge } from "@/components/ui/badge/badge";
import type { Course } from "../constants/courses.constants";

type CourseCardProps = {
    course: Course & { period: string };
};

export const CourseCard: React.FC<CourseCardProps> = async ({ course }) => {
    const t = await getTranslations(TranslationNamespace.COURSES);

    const description = t.has(`courses.${course.key}.Description`)
        ? t(`courses.${course.key}.Description`)
        : null;

    return (
        <Card topAccent hover>
            <CardContent className="flex flex-col h-full justify-between">
                <div className="flex flex-col">
                    <div className="flex items-center gap-3 mb-3">
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
                </div>

                <div className="flex flex-col">
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
                </div>
            </CardContent>
        </Card>
    );
};
