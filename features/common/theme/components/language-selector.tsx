"use client"

import { Button } from "@/components/ui/button/button";
import { Modal } from "@/components/ui/modal/modal";
import { registerModal } from "@/components/ui/modal/register-modal";
import { Locale } from "@/i18n/locale";
import { TranslationNamespace } from "@/i18n/namespaces";
import { setLocale } from "@/i18n/utils";
import { LanguagesIcon } from "lucide-react";
import { useTranslations } from "next-intl";

type Props = {
    currentLocale: Locale;
}

export const LanguageSelector: React.FC<Props> = ({ currentLocale }) => {
    const t = useTranslations(TranslationNamespace.COMMON);

    const { openButonProps, closeButtonProps, control } = registerModal('language-select');

    const changeLocale = async (locale: Locale) => {
        await setLocale(locale);
    };

    return <>
        <Button data-testid="locale-switch-trigger" aria-label={t('components.locale-switch.Label')} variant="ghost" size="icon" {...openButonProps}>
            <LanguagesIcon/>
        </Button>

        <Modal control={control} title={t('components.locale-switch.Title')}>
            <div className="flex flex-col gap-1">
                {Object.values(Locale).map((locale) => (
                    <Button data-testid={`locale-btn-${locale}`} variant={locale === currentLocale ? 'primary' : 'secondary'} disabled={locale === currentLocale} key={locale} {...closeButtonProps} onClick={() => changeLocale(locale)}>
                        {t(`languages.${locale}.Label`)}
                    </Button>
                ))}
            </div>
        </Modal>
    </>
}