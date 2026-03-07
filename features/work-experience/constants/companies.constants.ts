import type { StaticImageData } from 'next/image';

/* Brands */
/* Primer Impacto */
import primerImpactoLogo from '@/assets/companies/primer-impacto/logo.png';

/* Decathlon */
import decathlonLogo from '@/assets/companies/decathlon/logo.png';

export enum Company {
    PRIMER_IMPACTO = 'primer-impacto',
    DECATHLON = 'decathlon',
}

export type CompanyMetadata = {
    name: string;
    logo: StaticImageData;
    banner?: StaticImageData;
};

export const COMPANIES: Record<Company, CompanyMetadata> = {
    [Company.PRIMER_IMPACTO]: {
        name: 'Primer Impacto',
        logo: primerImpactoLogo,
    },
    [Company.DECATHLON]: {
        name: 'Decathlon',
        logo: decathlonLogo,
    },
};