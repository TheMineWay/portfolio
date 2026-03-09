import type { Locale } from "@/i18n/locale";

export const dynamic = 'force-static';

type Props = { params: Promise<{ locale: Locale }>};

export default async function Page({}: Props) {
    return <></>;
}