import { TranslationNamespace } from "@/i18n/namespaces";
import { formatDate } from "date-fns"
import { getTranslations } from "next-intl/server";

export const formatPeriod = async (fromDate: Date, toDate: Date | null = null): Promise<string> => {
    const t = await getTranslations(TranslationNamespace.COMMON);
    return formatDate(fromDate, 'MMM yyyy') + ' - ' + (toDate ? formatDate(toDate, 'MMM yyyy') : t('expressions.Present'));
}