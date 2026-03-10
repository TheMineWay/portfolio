import { ButtonLink } from '@/components/ui/button/button';
import { TranslationNamespace } from '@/i18n/namespaces';
import { ArrowLeft } from 'lucide-react';
import { getTranslations } from 'next-intl/server';

type Props = {
    variant: 'inline' | 'cta';
};

export const BackHomeLink: React.FC<Props> = async ({ variant }) => {
    const t = await getTranslations(TranslationNamespace.WORK_EXPERIENCE);

    if (variant === 'cta') {
        return (
            <div className="text-center mt-12">
                <ButtonLink href="/" variant="primary" size="lg">
                    <ArrowLeft />
                    {t('company-page.actions.Back')}
                </ButtonLink>
            </div>
        );
    }

    return (
        <ButtonLink href="/" variant="link" className="mb-8 pl-0">
            <ArrowLeft />
            {t('company-page.actions.Back')}
        </ButtonLink>
    );
};
