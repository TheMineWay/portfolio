import type React from "react";
import { getTranslations } from "next-intl/server";
import { TranslationNamespace } from "@/i18n/namespaces";
import { SectionTitle } from "@/components/common/title/section-title";
import { formatPeriod } from "@/lib/date/format-period";
import { COURSES } from "../constants/courses.constants";
import { CourseCard } from "./course-card";

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
                {coursesWithPeriod.map((course) => (
                    <CourseCard key={course.key} course={course} />
                ))}
            </div>
        </div>
    );
};
