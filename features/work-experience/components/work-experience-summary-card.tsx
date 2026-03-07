import { Calendar, MapPin } from "lucide-react";
import { WorkExperience } from "../constants/work-experience.constants";
import { COMPANIES } from "../constants/companies.constants";
import { formatPeriod } from "@/lib/date/format-period";
import { Card } from "@/components/ui/card/card";
import { Badge } from "@/components/ui/badge/badge";
import { getTranslations } from "next-intl/server";
import { TranslationNamespace } from "@/i18n/namespaces";

type Props = {
    experience: WorkExperience;
};

export const WorkExperienceSummaryCard: React.FC<Props> = async ({ experience: { company, fromDate, toDate, location } }) => {
    const commonT = await getTranslations(TranslationNamespace.COMMON);
    
    const isCurrent = toDate === null;
    const { name: companyName } = COMPANIES[company];

    return (

        <Card
            className="overflow-hidden hover:shadow-xl transition-all duration-300 group"
        >
            <div className="relative h-40 overflow-hidden">
                {/* <Image
                    src={exp.image}
                    alt={exp.company}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                /> */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                <div className="absolute bottom-3 left-4 right-4">
                    <div className="flex items-start justify-between">
                        <div>
                            <h3 className="text-white mb-1">{companyName}</h3>
                            <div className="flex items-center gap-3 text-white/80 text-xs">
                                <span className="flex items-center gap-1">
                                    <MapPin className="h-3 w-3" />
                                    {location}
                                </span>
                                <span className="flex items-center gap-1">
                                    <Calendar className="h-3 w-3" />
                                    {formatPeriod(fromDate, toDate)}
                                </span>
                            </div>
                        </div>
                        {isCurrent && (
                            <Badge>
                                {commonT('expressions.Current')}
                            </Badge>
                        )}
                    </div>
                </div>
            </div>
        </Card>);
};