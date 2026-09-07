import { SITE_URL } from "@/constants/site-url";
import { COMPANIES } from "@/features/work-experience/constants/companies.constants";

export const dynamic = "force-static";

export function GET() {
    return new Response(buildLlmsTxt(), {
        headers: { "Content-Type": "text/plain; charset=utf-8" },
    });
}

const buildLlmsTxt = (): string => {
    const experiences = Object.entries(COMPANIES)
        .map(([slug, company]) => `- [${company.name}](${SITE_URL}/experiences/${slug}): ${company.mainRole}`)
        .join("\n");

    return `# Joel Campos — Portfolio

> Senior Full-Stack Developer based in Barcelona, specializing in building accessible, human-centered web applications.

This site is a personal developer portfolio showcasing projects, work experience, skills, courses, and a page on technology ethics. It is available in English and Spanish.

## Pages

- [Home](${SITE_URL}): About me, tech stack, work experience summary, projects, and courses
- [Ethics](${SITE_URL}/ethics): Principles guiding accessibility, privacy, open source, sustainability, and ethical AI

## Work experience

${experiences}
`;
};
