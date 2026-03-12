import type { StaticImageData } from 'next/image';

export type UrlMode = 'live-demo' | 'docs';

export type Project = {
    key: string;
    tags: string[];
    github: string;
    url?: string;
    urlMode?: UrlMode;
    image?: StaticImageData;
    featured: boolean;
};

export const PROJECTS: Project[] = [
    {
        key: 'nestflux',
        tags: ['TypeScript', 'React', 'NestJS', 'Monorepo'],
        github: 'https://github.com/TheMineWay/NestFlux',
        url: 'https://themineway.github.io/NestFlux/',
        urlMode: 'docs',
        featured: true,
    },
    {
        key: 'balancia',
        tags: ['TypeScript', 'React', 'Finance', 'Privacy'],
        github: 'https://github.com/TheMineWay/balancia',
        url: 'https://themineway.github.io/balancia/',
        urlMode: 'docs',
        featured: true,
    },
    {
        key: 'unity-essential-toolkit',
        tags: ['Unity', 'C#', 'Game Dev', 'Packages'],
        github: 'https://github.com/TheMineWay/Unity-Essential-Toolkit',
        url: 'https://themineway.github.io/Unity-Essential-Toolkit/',
        urlMode: 'docs',
        featured: false,
    },
    {
        key: 'mangas-api',
        tags: ['TypeScript', 'Node.js', 'API', 'Open Source'],
        github: 'https://github.com/TheMineWay/mangas-api',
        featured: false,
    },
    {
        key: 'alvbeats',
        tags: ['Web', 'Lyrics', 'Music'],
        github: 'https://github.com/TheMineWay/AlvBeats',
        url: 'https://themineway.github.io/AlvBeats/',
        urlMode: 'live-demo',
        featured: false,
    },
    {
        key: 'covid-19-certificate-manager',
        tags: ['Flutter', 'Dart', 'Mobile', 'Healthcare'],
        github: 'https://github.com/TheMineWay/Covid-19-certificate-manager',
        featured: false,
    },
];
