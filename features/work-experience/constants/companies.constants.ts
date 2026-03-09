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

export type OrganizationJsonLd = {
    "@id": string;
    name: string;
    alternateName: string;
    url: string;
    logo: string;
    email: string;
    telephone: string;
    taxID: string;
    address: {
        '@type': 'PostalAddress';
        streetAddress: string;
        addressLocality: string;
        addressRegion: string;
        postalCode: string;
        addressCountry: string;
    };
    contactPoint: {
        '@type': 'ContactPoint';
        contactType: string;
        telephone: string;
        email: string;
        areaServed: string;
        availableLanguage: string[];
    };
    sameAs: string[];
};

export type CompanyMetadata = {
    name: string;
    logo: StaticImageData;
    banner: StaticImageData;
    mainRole: string;
    jsonLd: OrganizationJsonLd;
};

export const COMPANIES: Record<Company, CompanyMetadata> = {
    [Company.PRIMER_IMPACTO]: {
        name: 'Primer Impacto',
        logo: primerImpactoLogo,
        banner: primerImpactoBanner,
        mainRole: 'Senior Full-Stack DevOps',
        jsonLd: {
            name: 'PRIMER IMPACTO, S.L.',
            alternateName: 'Primer Impacto',
            "@id": "https://primer-impacto.com/#organization",
            url: 'https://primer-impacto.com',
            logo: 'https://primer-impacto.com/wp-content/uploads/2023/09/cropped-ISOTIPO-192x192.png',
            email: 'info@primer-impacto.com',
            telephone: '+34 934607775',
            taxID: 'B63947493',
            address: {
                '@type': 'PostalAddress',
                streetAddress: 'Av. del Maresme, 44-46, 2ª Planta',
                addressLocality: 'Badalona',
                addressRegion: 'Barcelona',
                postalCode: '08918',
                addressCountry: 'ES',
            },
            contactPoint: {
                '@type': 'ContactPoint',
                contactType: 'customer service',
                telephone: '+34 934607775',
                email: 'info@primer-impacto.com',
                areaServed: 'ES',
                availableLanguage: ['ca', 'es', 'en', 'pt'],
            },
            sameAs: [
                'https://www.linkedin.com/company/primer-impacto-s-l/about/',
                'https://www.instagram.com/primerimpacto_retailmk/?hl=es',
                'https://www.youtube.com/channel/UCU6Z5ISaV4Mrktg1OVGEfFQ',
            ],
        },
    },
    [Company.DECATHLON]: {
        name: 'Decathlon',
        logo: decathlonLogo,
        banner: decathlonBanner,
        mainRole: 'Frontend Developer',
        jsonLd: {
            name: 'DECATHLON ESPAÑA, S.A.U.',
            alternateName: 'Decathlon',
            "@id": "https://www.decathlon.es/#organization",
            url: 'https://www.decathlon.es',
            logo: 'https://contents.mediadecathlon.com/s1047283/k$6b1b8a5c8f2f86c3d2a0d50f14b7f4f5/decathlon-logo.jpg',
            email: 'servicio.usuario@decathlon.com',
            telephone: '+34 916233122',
            taxID: 'A-79935607',
            address: {
                '@type': 'PostalAddress',
                streetAddress: 'Calle Salvador de Madariaga, s/n, Parque Comercial Alegra, Dehesa Vieja',
                addressLocality: 'San Sebastián de los Reyes',
                addressRegion: 'Madrid',
                postalCode: '28702',
                addressCountry: 'ES',
            },
            contactPoint: {
                '@type': 'ContactPoint',
                contactType: 'customer service',
                telephone: '+34 916233122',
                email: 'servicio.usuario@decathlon.com',
                areaServed: 'ES',
                availableLanguage: ['es'],
            },
            sameAs: [
                'https://www.instagram.com/decathlonespana/',
                'https://www.facebook.com/DecathlonEspana/',
                'https://www.youtube.com/user/DecathlonEspana',
                'https://www.linkedin.com/company/decathlon-espana/',
            ],
        },
    },
};