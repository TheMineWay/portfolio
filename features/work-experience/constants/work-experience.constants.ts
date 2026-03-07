import { Company } from "./companies.constants";

export type WorkExperience = {
    key: string;
    company: Company;
    role: string;
    fromDate: Date;
    toDate: Date | null;
    location: string;
};

export const WORK_EXPERIENCES = [
    {
        key: 'primer-impacto-1',
        company: Company.PRIMER_IMPACTO,
        role: 'FullStack DevOps',
        fromDate: new Date('2021-05-01'),
        toDate: new Date('2023-11-30'),
        location: 'Barcelona',
    },
    {
        key: 'decathlon',
        company: Company.DECATHLON,
        role: 'Frontend Developer',
        fromDate: new Date('2023-12-01'),
        toDate: new Date('2025-04-09'),
        location: 'Barcelona',
    },
    {
        key: 'primer-impacto-2',
        company: Company.PRIMER_IMPACTO,
        role: 'Senior FullStack DevOps',
        fromDate: new Date('2025-04-10'),
        toDate: null,
        location: 'Barcelona',
    }
] satisfies WorkExperience[];