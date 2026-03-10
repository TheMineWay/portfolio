import { JsonLd } from "@/components/common/json-ld/json-ld";
import { Card, CardContent } from "@/components/ui/card/card";
import { MY_DETAILS } from "@/constants/my-details";
import { BackHomeLink } from "@/features/work-experience/components/company-page/back-home-link";
import { CompanyExperienceEntry } from "@/features/work-experience/components/company-page/company-experience-entry";
import { CompanyHero } from "@/features/work-experience/components/company-page/company-hero";
import { COMPANIES, Company } from "@/features/work-experience/constants/companies.constants";
import { getWorkExperiencesByCompany } from "@/features/work-experience/constants/work-experience.constants";
import { Locale } from "@/i18n/locale";
import { TranslationNamespace } from "@/i18n/namespaces";
import { Award, Briefcase, Target } from "lucide-react";
import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";

type PageProps = { params: Promise<{ company: Company, locale: Locale }>};

export const dynamic = 'force-static';

export const generateMetadata = async ({ params }: PageProps): Promise<Metadata> => {
    const t = await getTranslations(TranslationNamespace.WORK_EXPERIENCE);
    const { company } = await params;
    const { name, mainRole, keywords } = COMPANIES[company];

    return {
        title: t(`company-page.meta.Title`, { companyName: name, name: MY_DETAILS.name }),
        description: t(`company-page.meta.Description`, { companyName: name, role: mainRole }),
        keywords: [name, ...keywords],
    };
};

export function generateStaticParams() {
    return Object.values(Company).map((company) => ({
        company,
    }));
}

export default async function Page({ params }: Readonly<PageProps>) {
    const { company } = await params;
    const t = await getTranslations(TranslationNamespace.WORK_EXPERIENCE);

    const companyData = COMPANIES[company];
    const experiences = await getWorkExperiencesByCompany(company);
    const sortedExperiences = [...experiences].sort((a, b) => b.fromDate.getTime() - a.fromDate.getTime());

    const responsibilities = Array.from(
        { length: companyData.responsibilitiesCount },
        (_, i) => t(`companies.${company}.responsibilities.${i}`)
    );

    const skills = Array.from(
        { length: companyData.skillsCount },
        (_, i) => t(`companies.${company}.skills.${i}`)
    );

    const jsonLdData = {
        "@context": "https://schema.org",
        "@type": "Organization",
        ...companyData.jsonLd,
    };

    return (
        <>
            <JsonLd data={jsonLdData} />
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <div className="max-w-4xl mx-auto">

                    {/* Back Button */}
                    <BackHomeLink variant="inline" />

                    {/* Hero */}
                    <CompanyHero companyKey={company} company={companyData} experiences={sortedExperiences} />

                    {/* Overview */}
                    <Card className="mb-8">
                        <CardContent className="p-8">
                            <div className="flex items-start gap-3">
                                <div className="p-2 rounded flex-shrink-0 bg-primary text-primary-foreground">
                                    <Briefcase className="h-5 w-5" />
                                </div>
                                <div>
                                    <h2 className="text-2xl mb-3">{t('company-page.sections.Overview')}</h2>
                                    <p className="text-muted-foreground leading-relaxed">
                                        {t(`companies.${company}.Overview`)}
                                    </p>
                                </div>
                            </div>
                        </CardContent>
                    </Card>

                    {/* Key Responsibilities */}
                    <Card className="mb-8">
                        <CardContent className="p-8">
                            <div className="flex items-start gap-3 mb-6">
                                <div className="p-2 rounded flex-shrink-0 bg-primary text-primary-foreground">
                                    <Target className="h-5 w-5" />
                                </div>
                                <h2 className="text-2xl">{t('company-page.sections.Responsibilities')}</h2>
                            </div>
                            <ul className="space-y-3">
                                {responsibilities.map((responsibility) => (
                                    <li key={responsibility} className="flex items-start gap-3">
                                        <div className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0 bg-brand-accent" />
                                        <span className="text-muted-foreground">{responsibility}</span>
                                    </li>
                                ))}
                            </ul>
                        </CardContent>
                    </Card>

                    {/* Experiences */}
                    <div className="mb-8">
                        <div className="flex items-start gap-3 mb-6">
                            <div className="p-2 rounded flex-shrink-0 bg-primary text-primary-foreground">
                                <Briefcase className="h-5 w-5" />
                            </div>
                            <h2 className="text-2xl">
                                {t('company-page.sections.Experiences', { companyName: companyData.name })}
                            </h2>
                        </div>
                        <div className="grid gap-6">
                            {sortedExperiences.map((experience) => (
                                <CompanyExperienceEntry key={experience.key} experience={experience} />
                            ))}
                        </div>
                    </div>

                    {/* Technical Skills */}
                    <Card className="mb-8">
                        <CardContent className="p-8">
                            <div className="flex items-start gap-3 mb-6">
                                <div className="p-2 rounded flex-shrink-0 bg-primary text-primary-foreground">
                                    <Award className="h-5 w-5" />
                                </div>
                                <h2 className="text-2xl">{t(`companies.${company}.skills.Category`)}</h2>
                            </div>
                            <ul className="space-y-3">
                                {skills.map((skill) => (
                                    <li key={skill} className="flex items-start gap-3">
                                        <div className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0 bg-primary" />
                                        <span className="text-muted-foreground">{skill}</span>
                                    </li>
                                ))}
                            </ul>
                        </CardContent>
                    </Card>

                    {/* Back Button Bottom */}
                    <BackHomeLink variant="cta" />
                </div>
            </div>
        </>
    );
}