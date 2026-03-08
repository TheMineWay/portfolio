import { Card } from "@/components/ui/card/card";
import { getTranslations } from "next-intl/server";
import { TranslationNamespace } from "@/i18n/namespaces";
import { SectionTitle } from "@/components/common/title/section-title";

export const MySkills: React.FC = async () => {
    const t = await getTranslations(TranslationNamespace.ABOUT);

    return <div>
        <SectionTitle title={t('skills.Title')} />
        {Object.entries(GROUPED_TECHNOLOGIES).map(([group, technologies]) => (
            <Card key={group}></Card>
        ))}
    </div>;
}

const GROUPED_TECHNOLOGIES = {
    "frontend": ["React", "NextJS", "TailwindCSS", "PostCSS", "Vue", "Svelte"],
    "backend": ["NestJS", "Express", "PostgreSQL", "MySQL", "ASP.NET", ""],
    "cloud": ["Azure", "Firebase", "Cloudflare", "Vercel", "AWS", "Supabase"],
    "tools-and-devops": ["Github", "Jenkins", "Docker", "Kubernetes", "CI/CD", " Vite"],
} satisfies Record<string, string[]>;