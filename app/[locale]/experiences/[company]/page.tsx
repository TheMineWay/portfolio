import { JsonLd } from "@/components/common/json-ld/json-ld";
import { COMPANIES, Company } from "@/features/work-experience/constants/companies.constants";

export const dynamic = 'force-static';

export function generateStaticParams() {
  return Object.values(Company).map((company) => ({
    company,
  }))
}

type Props = {
    params: Promise<{ company: Company }>;
};

export default async function Page({ params }: Props) {
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