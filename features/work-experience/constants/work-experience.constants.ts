import { getTranslations } from "next-intl/server";
import { Company } from "./companies.constants";
import { TranslationNamespace } from "@/i18n/namespaces";

export type WorkExperience = {
    key: string;
    company: Company;
    role: string;
    description: string;
    fromDate: Date;
    toDate: Date | null;
    location: string;
    achievements: string[];
    technologies: string[];
};

type WorkExperiencesDefinition = Omit<WorkExperience, 'achievements' | 'description'> & {
    achievementsCount: number;
};

export const WORK_EXPERIENCES = [
    {
        key: 'primer-impacto-1',
        company: Company.PRIMER_IMPACTO,
        role: 'FullStack DevOps',
        fromDate: new Date('2021-05-01'),
        toDate: new Date('2023-11-30'),
        location: 'Barcelona',
        achievementsCount: 3,
        technologies: ['Angular', 'TypeScript', 'Node.js', 'PHP', 'MySQL', 'Docker']
    },
    {
        key: 'decathlon',
        company: Company.DECATHLON,
        role: 'Frontend Developer',
        fromDate: new Date('2023-12-01'),
        toDate: new Date('2025-04-09'),
        location: 'Barcelona',
        achievementsCount: 3,
        technologies: ['React', 'Next.js', 'TypeScript', 'Playwright', 'Vitest']
    },
    {
        key: 'primer-impacto-2',
        company: Company.PRIMER_IMPACTO,
        role: 'Senior FullStack DevOps',
        fromDate: new Date('2025-04-10'),
        toDate: null,
        location: 'Barcelona',
        achievementsCount: 3,
        technologies: ['React', 'TypeScript', 'Node.js', 'NestJS', 'PostgreSQL', 'AWS', 'Docker']
    }
] satisfies WorkExperiencesDefinition[];

export const getWorkExperiencesDetails = async (): Promise<WorkExperience[]> => {
    return Promise.all(WORK_EXPERIENCES.map(async (exp) => {
        const t = await getTranslations(TranslationNamespace.WORK_EXPERIENCE);

        const achievements = Array.from({ length: exp.achievementsCount }, (_, i) => t(`experiences.${exp.key}.achievements.${i}`));

        return {
            ...exp,
            description: t(`experiences.${exp.key}.Description`),
            achievements,
        };
    }));
}

export const getWorkExperiencesByCompany = async (company: Company): Promise<WorkExperience[]> => {
    const all = await getWorkExperiencesDetails();
    return all.filter((exp) => exp.company === company);
}