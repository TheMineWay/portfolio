import { Company } from "@/features/work-experience/constants/companies.constants";

export function generateStaticParams() {
  return Object.values(Company).map((company) => ({
    company,
  }))
}

export default function Page() {
    return <></>;
}