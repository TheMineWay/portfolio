import Image from "next/image";
import { ExternalLink, BookOpen } from "lucide-react";
import { getTranslations } from "next-intl/server";
import { TranslationNamespace } from "@/i18n/namespaces";
import { Card, CardContent } from "@/components/ui/card/card";
import { Badge } from "@/components/ui/badge/badge";
import { ButtonLink } from "@/components/ui/button/button";
import { Github } from "@/components/icons/github";
import type { Project } from "../constants/projects.constants";

type Props = {
    project: Project;
};

export const ProjectCard: React.FC<Props> = async ({ project }) => {
    const t = await getTranslations(TranslationNamespace.PROJECTS);

    const title = t(`projects.${project.key}.Title`);
    const description = t(`projects.${project.key}.Description`);
    const visibleTags = project.tags.slice(0, 2);
    const hiddenTagsCount = project.tags.length - visibleTags.length;
    const UrlIcon = project.urlMode === 'docs' ? BookOpen : ExternalLink;

    return (
        <Card hover className="overflow-hidden flex flex-col">
            <div className="relative h-48 overflow-hidden flex-none">
                {project.image ? (
                    <Image
                        src={project.image}
                        alt={title}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                ) : (
                    <div className="w-full h-full bg-gradient-to-br from-primary/20 via-primary/10 to-transparent group-hover:from-primary/30 transition-all duration-500" />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                <div className="absolute bottom-3 left-3 right-3">
                    <h4 className="text-white mb-1">{title}</h4>
                </div>
            </div>

            <CardContent className="p-4 flex flex-col flex-1">
                <p className="text-sm text-muted-foreground mb-4 line-clamp-3 flex-1">
                    {description}
                </p>

                <div className="flex flex-wrap gap-1 mb-4">
                    {visibleTags.map((tag) => (
                        <Badge key={tag} size="md">
                            {tag}
                        </Badge>
                    ))}
                    {hiddenTagsCount > 0 && (
                        <Badge variant="outline" size="md">
                            +{hiddenTagsCount}
                        </Badge>
                    )}
                </div>

                <div className="flex gap-2">
                    <ButtonLink
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={title}
                        variant="ghost"
                        size="sm"
                        className="flex-1 h-8"
                    >
                        <Github className="h-3 w-3" fill="currentColor" />
                    </ButtonLink>
                    {project.url && (
                        <ButtonLink
                            href={project.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            variant="primary"
                            size="sm"
                            className="flex-1 h-8"
                        >
                            <UrlIcon className="h-3 w-3" />
                            {t('actions.View')}
                        </ButtonLink>
                    )}
                </div>
            </CardContent>
        </Card>
    );
};
