import { JsonLd } from "@/components/common/json-ld/json-ld";
import { MY_DETAILS } from "@/constants/my-details";
import { COMPANIES, Company } from "@/features/work-experience/constants/companies.constants";
import { Locale } from "@/i18n/locale";
import { TranslationNamespace } from "@/i18n/namespaces";
import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";

type PageProps = { params: Promise<{ company: Company, locale: Locale }>};

export const dynamic = 'force-static';

export const generateMetadata = async ({ params }: PageProps): Promise<Metadata> => {
    const t = await getTranslations(TranslationNamespace.WORK_EXPERIENCE);
    const { company } = await params;
    const { name, mainRole } = COMPANIES[company];
    
    return {
        title: t(`company-page.meta.Title`, { companyName: name, name: MY_DETAILS.fullName }),
        description: t(`company-page.meta.Description`, { companyName: name, role: mainRole }),
    };
};

export function generateStaticParams() {
  return Object.values(Company).map((company) => ({
    company,
  }));
}

export default async function Page({ params }: Readonly<PageProps>) {
    const { company } = await params;

    const jsonLdData = {
        "@context": "https://schema.org",
        "@type": "Organization",
        ...COMPANIES[company].jsonLd,
    };

    return <>
        <JsonLd data={jsonLdData}/>
    </>;
}