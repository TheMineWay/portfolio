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
    index: number;
};

export const FeaturedProjectCard: React.FC<Props> = async ({ project, index }) => {
    const t = await getTranslations(TranslationNamespace.PROJECTS);

    const title = t(`projects.${project.key}.Title`);
    const description = t(`projects.${project.key}.Description`);
    const isReversed = index % 2 === 1;
    const UrlIcon = project.urlMode === 'docs' ? BookOpen : ExternalLink;
    const urlLabel = project.urlMode === 'docs' ? t('actions.Docs') : t('actions.Live-demo');

    return (
        <Card hover className="overflow-hidden">
            <div className={`grid lg:grid-cols-2 gap-0 ${isReversed ? 'lg:grid-flow-dense' : ''}`}>
                {/* Image */}
                <div className={`relative h-64 lg:h-auto overflow-hidden ${isReversed ? 'lg:col-start-2' : ''}`}>
                    {project.image ? (
                        <Image
                            src={project.image}
                            alt={title}
                            fill
                            className="object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                    ) : (
                        <div className="w-full h-full min-h-64 bg-gradient-to-br from-primary/20 via-primary/10 to-transparent group-hover:from-primary/30 transition-all duration-500" />
                    )}
                    <div className="absolute inset-0 bg-gradient-to-br from-black/20 to-transparent" />
                    <div className="absolute top-4 right-4">
                        <Badge size="lg">{t('Featured')}</Badge>
                    </div>
                </div>

                {/* Content */}
                <CardContent className="p-8 lg:p-12 flex flex-col justify-center">
                    <h3 className="text-2xl mb-4">{title}</h3>
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                        {description}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-6">
                        {project.tags.map((tag) => (
                            <Badge key={tag} variant="secondary" size="lg">
                                {tag}
                            </Badge>
                        ))}
                    </div>

                    <div className="flex gap-3">
                        <ButtonLink
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            variant="outline"
                            className="flex-1"
                        >
                            <Github className="h-4 w-4" fill="currentColor" />
                            {t('actions.View-code')}
                        </ButtonLink>
                        {project.url && (
                            <ButtonLink
                                href={project.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                variant="primary"
                                className="flex-1"
                            >
                                <UrlIcon className="h-4 w-4" />
                                {urlLabel}
                            </ButtonLink>
                        )}
                    </div>
                </CardContent>
            </div>
        </Card>
    );
};
