import { MY_DETAILS } from '@/constants/my-details';
import { Ethics } from "@/features/ethics/components/ethics";
import { TranslationNamespace } from '@/i18n/namespaces';
import type { Metadata } from "next";
import { getTranslations } from 'next-intl/server';

export const dynamic = 'force-static';

export const generateMetadata = async (): Promise<Metadata> => {
    const t = await getTranslations(TranslationNamespace.ETHICS);
    return {
        title: t('meta.Title', { name: MY_DETAILS.name }),
        description: t('meta.Description'),
    };
};

export default async function Page() {
    return <Ethics />;
}