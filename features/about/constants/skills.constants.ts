import { BookOpen, Cloud, Code2, Container, Database, FileCode2, FileJson, GanttChart, GitBranch, Globe, Layout, Palette, RefreshCw, Server, Webhook, Wrench, Zap } from "lucide-react";

export type Technology = {
    name: string;
    icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
};

export type SkillGroup = {
    icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
    technologies: Technology[];
};

export const GROUPED_TECHNOLOGIES = {
    "frontend": {
        icon: Layout,
        technologies: [
            { name: "HTML5", icon: FileCode2 },
            { name: "CSS3", icon: Palette },
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
            { name: "REST API", icon: Webhook },
            { name: "Swagger / OpenAPI", icon: FileJson },
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
            { name: "CI/CD", icon: RefreshCw },
            { name: "Docker", icon: Container },
            { name: "Kubernetes", icon: Container },
            { name: "Git", icon: GitBranch },
            { name: "Node", icon: Server },
            { name: "Jira", icon: GanttChart },
            { name: "Confluence", icon: BookOpen },
        ]
    },
} satisfies Record<string, SkillGroup>;

export const SECONDARY_SKILLS = [
    'Vitest',
    'Jest',
    'Playwright',
    'IndexedDB',
    'SEO',
    'Google Analytics',
    'Flutter',
    'Kotlin MP',
    'Unity',
    'Python',
];
