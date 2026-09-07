import { Button } from "@/components/ui/button/button";
import { Modal } from "@/components/ui/modal/modal";
import { registerModal } from "@/components/ui/modal/register-modal";
import { TranslationNamespace } from "@/i18n/namespaces";
import { LanguagesIcon } from "lucide-react";
import { useTranslations } from "next-intl";

export const LanguageSelector = () => {
    const t = useTranslations(TranslationNamespace.COMMON);

    const { openerProps, control } = registerModal('language-select');

    return <>
        <Button data-testid="locale-switch-trigger" aria-label={t('components.locale-switch.Label')} variant="ghost" size="icon" {...openerProps}>
            <LanguagesIcon/>
        </Button>

        <Modal control={control} title={t('components.locale-switch.Title')}>
            <p>Language</p>
        </Modal>
    </>
}