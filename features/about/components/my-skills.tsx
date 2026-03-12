 import { Card, CardContent } from "@/components/ui/card/card";
import { getTranslations } from "next-intl/server";
import { TranslationNamespace } from "@/i18n/namespaces";
import { SectionTitle } from "@/components/common/title/section-title";
import { Cloud, Code2, Container, Database, GitBranch, Globe, Layout, Palette, Server, Wrench, Zap } from "lucide-react";
import { Badge } from "@/components/ui/badge/badge";

export const MySkills: React.FC = async () => {
    const t = await getTranslations(TranslationNamespace.ABOUT);

    return <div>
        <div className="text-center mb-16">
            <SectionTitle level={2} title={t('skills.Title')} />
            <p className="text-muted-foreground max-w-2xl mx-auto">
              {t('skills.Subtitle')}
            </p>
        </div>

        {/* Main skills */}
        <div className="grid md:grid-cols-2 gap-6">
            {Object.entries(GROUPED_TECHNOLOGIES).map(([group, { icon: CategoryIcon, technologies }]) => (
                <Card key={group} hover>
                    <CardContent className="p-6">
                        {/* Title */}
                        <div className="flex items-center gap-3 mb-6">
                            <div
                                className="p-3 rounded-lg group-hover:scale-110 transition-transform"
                                style={{
                                    backgroundColor: `var(--brand-primary)`,
                                    color: `var(--brand-primary-foreground)`
                                }}
                            >
                                <CategoryIcon className="h-6 w-6" />
                            </div>
                            <h3>{t(`skills.groups.${group}.Title`)}</h3>
                        </div>

                        {/* Technologies */}
                        <div className="grid grid-cols-2 gap-3">
                            {technologies.map((technology) => {
                                const SkillIcon = technology.icon;
                                return (
                                    <div
                                        key={technology.name}
                                        className="flex items-center gap-2 p-3 rounded-lg border hover:border-foreground/20 transition-all duration-200 hover:shadow-sm"
                                    >
                                        <SkillIcon
                                            className="h-4 w-4 flex-shrink-0"
                                            style={{ color: `var(--brand-primary)` }}
                                        />
                                        <span className="text-sm">{technology.name}</span>
                                    </div>
                                );
                            })}
                        </div>
                    </CardContent>
                </Card>
            ))}
        </div>

        {/* Additional Skills */}
          <div className="mt-12 text-center">
            <h3 className="text-xl mb-6 opacity-80">{t('skills.secondary-skills.Title')}</h3>
            <div className="flex flex-wrap justify-center gap-3">
              {[
                'Vitest',
                'Jest',
                'Flutter',
                'Kotlin MP',
                'Unity',
                'Python',
                'Playwright'
              ].map((skill) => (
                <Badge
                    variant="outline"
                    size="xxl"
                    key={skill}
                >
                  {skill}
                </Badge>
              ))}
            </div>
          </div>
    </div>;
}

/* Content */

type Technology = {
    name: string;
    icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
}

const GROUPED_TECHNOLOGIES = {
    "frontend": {
        icon: Layout,
        technologies: [
            { name: "React", icon: Code2 },
            { name: "NextJS", icon: Zap },
            { name: "TailwindCSS", icon: Palette },
            { name: "PostCSS", icon: Globe },
            { name: "Vue", icon: Code2 },
            { name: "Svelte", icon: Code2 },
        ]
    },
    "backend": {
        icon: Server,
        technologies: [
            { name: "NestJS", icon: Server },
            { name: "Express", icon: Server },
            { name: "PostgreSQL", icon: Database },
            { name: "MySQL", icon: Database },
            { name: "ASP.NET", icon: Code2 },
            { name: "PHP", icon: Code2 },
        ]
    },
    "cloud": {
        icon: Cloud,
        technologies: [
            { name: "Azure", icon: Cloud },
            { name: "Firebase", icon: Cloud },
            { name: "Cloudflare", icon: Cloud },
            { name: "Vercel", icon: Cloud },
            { name: "AWS", icon: Cloud },
            { name: "Supabase", icon: Cloud },
        ]
    },
    "tools-and-devops": {
        icon: Wrench,
        technologies: [
            { name: "Github", icon: GitBranch },
            { name: "Jenkins", icon: Server },
            { name: "Docker", icon: Container },
            { name: "Kubernetes", icon: Container },
            { name: "Git", icon: GitBranch },
            { name: "Node", icon: Server },
        ]
    },
} satisfies Record<string, {
    icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
    technologies: Technology[]
}>;