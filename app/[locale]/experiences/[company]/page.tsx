import { Company } from "@/features/work-experience/constants/companies.constants";

export const dynamic = 'force-static';

export function generateStaticParams() {
  return Object.values(Company).map((company) => ({
    company,
  }))
}

export default function Page() {
    return <></>;
}