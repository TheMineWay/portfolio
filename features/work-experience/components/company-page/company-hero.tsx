import Image from 'next/image';
import { Calendar, MapPin } from 'lucide-react';
import { getTranslations } from 'next-intl/server';
import { Badge } from '@/components/ui/badge/badge';
import { TranslationNamespace } from '@/i18n/namespaces';
import { Company, CompanyMetadata } from '../../constants/companies.constants';
import { WorkExperience } from '../../constants/work-experience.constants';
import { formatPeriod } from '@/lib/date/format-period';

type Props = {
    companyKey: Company;
    company: CompanyMetadata;
    experiences: WorkExperience[];
};

export const CompanyHero: React.FC<Props> = async ({ companyKey, company, experiences }) => {
    const t = await getTranslations(TranslationNamespace.WORK_EXPERIENCE);
    const commonT = await getTranslations(TranslationNamespace.COMMON);

    const sorted = [...experiences].sort((a, b) => b.fromDate.getTime() - a.fromDate.getTime());
    const latest = sorted[0];
    const earliest = sorted.at(-1) ?? latest;
    const isCurrent = latest.toDate === null;
    const period = await formatPeriod(earliest.fromDate, latest.toDate);

    const { name, logo, banner } = company;

    return (
        <div className="relative h-80 rounded-xl overflow-hidden mb-8">
            <Image
                src={banner.src}
                height={banner.height}
                width={banner.width}
                alt={t(`companies.${companyKey}.Banner-alt`)}
                className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />

            <div className="absolute bottom-0 left-0 right-0 p-8">
                <div className="max-w-4xl">
                    {isCurrent && (
                        <div className="mb-3">
                            <Badge variant="primary" size="lg">
                                {t('company-page.hero.Current-position')}
                            </Badge>
                        </div>
                    )}
                    <div className="flex items-center gap-4 mb-3">
                        <Image
                            alt={commonT('expressions.Logo-of', { name })}
                            src={logo.src}
                            width={logo.width}
                            height={logo.height}
                            className="w-14 h-14 rounded"
                        />
                        <h1 className="text-4xl md:text-5xl text-white">{name}</h1>
                    </div>
                    <h2 className="text-2xl text-white/90 mb-4">{company.mainRole}</h2>
                    <div className="flex flex-wrap gap-4 text-white/80 text-sm">
                        <span className="flex items-center gap-2">
                            <Calendar className="h-4 w-4" />
                            {period}
                        </span>
                        <span className="flex items-center gap-2">
                            <MapPin className="h-4 w-4" />
                            {latest.location}
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
};
