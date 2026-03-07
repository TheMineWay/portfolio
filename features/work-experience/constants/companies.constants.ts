import type { StaticImageData } from 'next/image';

/* Brands */
/* Primer Impacto */
import primerImpactoLogo from '@/assets/companies/primer-impacto/logo.png';
import primerImpactoBanner from '@/assets/companies/primer-impacto/banner.jpg';

/* Decathlon */
import decathlonLogo from '@/assets/companies/decathlon/logo.png';
import decathlonBanner from '@/assets/companies/decathlon/banner.png';

export enum Company {
    PRIMER_IMPACTO = 'primer-impacto',
    DECATHLON = 'decathlon',
}

export type CompanyMetadata = {
    name: string;
    logo: StaticImageData;
    banner: StaticImageData;
};

export const COMPANIES: Record<Company, CompanyMetadata> = {
    [Company.PRIMER_IMPACTO]: {
        name: 'Primer Impacto',
        logo: primerImpactoLogo,
        banner: primerImpactoBanner,
    },
    [Company.DECATHLON]: {
        name: 'Decathlon',
        logo: decathlonLogo,
        banner: decathlonBanner,
    },
};