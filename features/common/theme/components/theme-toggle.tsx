import { Button } from "@/components/ui/button/button";
import { TranslationNamespace } from "@/i18n/namespaces";
import { Moon, Sun } from "lucide-react";
import { getTranslations } from "next-intl/server";

export const ThemeToggle: React.FC = async () => {
    const t = await getTranslations(TranslationNamespace.COMMON);

    return (
        <Button aria-label={t('components.theme-toggle.Label')} variant='ghost' size='icon'>
            <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0"/>
            <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100"/>
        </Button>
    )
};