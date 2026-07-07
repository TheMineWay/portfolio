export type Technology = {
    name: string;
    /** Top-line proficiency — rendered with the accent bullet and stronger weight. */
    primary?: boolean;
};

export type SkillGroup = {
    technologies: Technology[];
};

export const GROUPED_TECHNOLOGIES = {
    "frontend": {
        technologies: [
            { name: "React", primary: true },
            { name: "TypeScript", primary: true },
            { name: "Next.js", primary: true },
            { name: "TailwindCSS", primary: true },
            { name: "HTML5" },
            { name: "CSS3" },
            { name: "Vue" },
            { name: "Svelte" },
            { name: "PostCSS" },
        ]
    },
    "backend": {
        technologies: [
            { name: "Node.js", primary: true },
            { name: "NestJS", primary: true },
            { name: "PostgreSQL", primary: true },
            { name: "REST API", primary: true },
            { name: "MySQL" },
            { name: "OpenAPI" },
            { name: "Express" },
            { name: "ASP.NET" },
            { name: "PHP" },
        ]
    },
    "devops": {
        technologies: [
            { name: "Docker", primary: true },
            { name: "Azure", primary: true },
            { name: "GitHub Actions", primary: true },
            { name: "Git", primary: true },
            { name: "Linux", primary: true },
            { name: "AWS" },
            { name: "Jenkins" },
            { name: "CI/CD" },
            { name: "Kubernetes" },
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
    'Cloudflare',
    'Firebase',
    'Vercel',
    'Supabase',
    'Jira',
    'Confluence',
    'Flutter',
    'Kotlin MP',
    'Unity',
    'Python',
];
