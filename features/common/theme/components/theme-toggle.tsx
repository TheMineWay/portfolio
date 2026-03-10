"use client"
import { Button, type ButtonProps } from "@/components/ui/button/button";
import { TranslationNamespace } from "@/i18n/namespaces";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "../hooks/use-theme";
import { useTranslations } from "next-intl";

type Props = ButtonProps;

export const ThemeToggle: React.FC<Props> = (props) => {
    const t = useTranslations(TranslationNamespace.COMMON);

    const { toggle } = useTheme();

    return (
        <Button data-testid="theme-toggle" aria-label={t('components.theme-toggle.Label')} variant='ghost' size='icon' onClick={toggle} {...props}>
            <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0"/>
            <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100"/>
        </Button>
    );
};