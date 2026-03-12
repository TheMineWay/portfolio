import type { StaticImageData } from 'next/image';

/* Images */
import nestfluxBanner from "@/assets/projects/nestflux/banner.png";
import balanciaBanner from "@/assets/projects/balancia/banner.png";
import unityEssentialToolkitBanner from "@/assets/projects/unity-essential-toolkit/banner.jpg";
import mangasApiBanner from "@/assets/projects/mangas-api/banner.png";
import covid19CertificateManagerBanner from "@/assets/projects/covid-19-certificate-manager/banner.jpg";

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
        image: nestfluxBanner,
    },
    {
        key: 'balancia',
        tags: ['TypeScript', 'React', 'Finance', 'Privacy'],
        github: 'https://github.com/TheMineWay/balancia',
        url: 'https://themineway.github.io/balancia/',
        urlMode: 'docs',
        featured: true,
        image: balanciaBanner,
    },
    {
        key: 'unity-essential-toolkit',
        tags: ['Unity', 'C#', 'Game Dev', 'Packages'],
        github: 'https://github.com/TheMineWay/Unity-Essential-Toolkit',
        url: 'https://themineway.github.io/Unity-Essential-Toolkit/',
        urlMode: 'docs',
        featured: false,
        image: unityEssentialToolkitBanner,
    },
    {
        key: 'mangas-api',
        tags: ['TypeScript', 'Node.js', 'API', 'Open Source'],
        github: 'https://github.com/TheMineWay/mangas-api',
        featured: false,
        image: mangasApiBanner,
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
        image: covid19CertificateManagerBanner,
    },
];
