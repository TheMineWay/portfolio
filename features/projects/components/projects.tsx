import type React from "react";
import { getTranslations } from "next-intl/server";
import { TranslationNamespace } from "@/i18n/namespaces";
import { SectionHeader } from "@/components/common/title/section-header";
import { PROJECTS } from "../constants/projects.constants";
import { FeaturedProjectCard } from "./featured-project-card";
import { ProjectCard } from "./project-card";

export const Projects: React.FC = async () => {
    const t = await getTranslations(TranslationNamespace.PROJECTS);

    const featuredProjects = PROJECTS.filter((p) => p.featured);
    const regularProjects = PROJECTS.filter((p) => !p.featured);

    return (
        <div className="max-w-6xl mx-auto relative overflow-hidden">
            <SectionHeader
                index="04"
                slug="projects"
                title={t('Title')}
                subtitle={t('Subtitle')}
            />

            {/* Featured Projects */}
            <div className="space-y-12 mb-12">
                {featuredProjects.map((project, index) => (
                    <FeaturedProjectCard key={project.key} project={project} index={index} />
                ))}
            </div>

            {/* Regular Projects */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {regularProjects.map((project) => (
                    <ProjectCard key={project.key} project={project} />
                ))}
            </div>
        </div>
    );
};
