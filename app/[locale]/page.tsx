import { TranslationNamespace } from '@/i18n/namespaces';
import { getTranslations } from 'next-intl/server';

export default async function Page() {
  const t = await getTranslations(TranslationNamespace.HOME);

  return <h1>{t('title')}</h1>;
}