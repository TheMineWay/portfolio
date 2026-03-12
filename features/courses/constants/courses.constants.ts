import type { StaticImageData } from 'next/image';

import ironhackLogo from '@/assets/academy/ironhack/logo.png';
import pueLogo from '@/assets/academy/pue/logo.png';
import ccbLogo from '@/assets/academy/ccb/logo.png';

export type Course = {
    key: string;
    platform: string;
    logo: StaticImageData;
    field: string;
    fromDate: Date;
    toDate: Date;
    skills: string[];
    grade?: string;
    honorRoll?: boolean;
};

export const COURSES: Course[] = [
    {
        key: 'pue-lpic1',
        platform: 'PUE',
        logo: pueLogo,
        field: 'Linux',
        fromDate: new Date('2025-02-01'),
        toDate: new Date('2025-03-31'),
        skills: ['Linux'],
    },
    {
        key: 'ironhack-data-science',
        platform: 'Ironhack',
        logo: ironhackLogo,
        field: 'Data',
        fromDate: new Date('2024-03-01'),
        toDate: new Date('2024-08-31'),
        skills: ['Microsoft Power BI', 'TensorFlow'],
    },
    {
        key: 'pue-scrum',
        platform: 'PUE',
        logo: pueLogo,
        field: 'Project Management',
        fromDate: new Date('2023-05-01'),
        toDate: new Date('2023-06-30'),
        skills: ['Scrum'],
    },
    {
        key: 'ironhack-java-backend',
        platform: 'Ironhack',
        logo: ironhackLogo,
        field: 'Software',
        fromDate: new Date('2022-06-01'),
        toDate: new Date('2022-09-30'),
        skills: ['Springboot', 'Testing'],
    },
    {
        key: 'ccb-asix',
        platform: 'Col·legi Cultural Badalona',
        logo: ccbLogo,
        field: 'Networking & Cybersecurity',
        fromDate: new Date('2020-09-01'),
        toDate: new Date('2022-06-30'),
        skills: ["Cisco", "Security", "Databases"],
        grade: '9.35',
        honorRoll: true,
    },
    {
        key: 'ccb-smx',
        platform: 'Col·legi Cultural Badalona',
        logo: ccbLogo,
        field: 'Networking',
        fromDate: new Date('2018-11-01'),
        toDate: new Date('2020-06-30'),
        skills: ["Windows", "Linux", "Cisco"],
        grade: '8.4',
    },
];
