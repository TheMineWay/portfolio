import { MY_DETAILS } from '@/constants/my-details';
import { Ethics } from "@/features/ethics/components/ethics";
import { Locale } from '@/i18n/locale';
import { TranslationNamespace } from '@/i18n/namespaces';
import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from 'next-intl/server';

export const dynamic = 'force-static';

type PageProps = { params: Promise<{ locale: Locale }> };

export const generateMetadata = async ({ params }: PageProps): Promise<Metadata> => {
    const { locale } = await params;
    const t = await getTranslations({ locale, namespace: TranslationNamespace.ETHICS });
    return {
        title: t('meta.Title', { name: MY_DETAILS.name }),
        description: t('meta.Description'),
    };
};

export default async function Page({ params }: Readonly<PageProps>) {
    const { locale } = await params;
    setRequestLocale(locale);
    return <Ethics />;
}