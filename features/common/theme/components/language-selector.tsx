"use client"

import { Button } from "@/components/ui/button/button";
import { TranslationNamespace } from "@/i18n/namespaces";
import { useDisclosure } from "@/lib/disclosure/use-disclosure";
import { LanguagesIcon } from "lucide-react";
import { useTranslations } from "next-intl";

export const LanguageSelector = () => {
    const t = useTranslations(TranslationNamespace.COMMON);

    const { isOpen, open } = useDisclosure();

    return <Button data-testid="locale-switch-trigger" aria-label={t('components.locale-switch.Label')} variant="ghost" size="icon" onClick={open}>
        <LanguagesIcon/>
    </Button>
}