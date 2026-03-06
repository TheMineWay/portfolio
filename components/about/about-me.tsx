import type React from "react";
import { Badge } from "@/components/ui/badge/badge";
import { getTranslations } from "next-intl/server";
import { TranslationNamespace } from "@/i18n/namespaces";
import { Card, CardContent } from "@/components/ui/card/card";
import { Code2, Puzzle, Zap } from "lucide-react";
import { TOP_TECHNOLOGIES } from "@/constants/technologies.constant";

export const AboutMe: React.FC = async () => {
    const t = await getTranslations(TranslationNamespace.ABOUT);

    const [titleTextHighlight, ...titleTextParts] = t('about-me.Title').split(' ').toReversed();

    return (
        <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
                <h2 className="text-3xl sm:text-4xl md:text-5xl mb-4">
                    {titleTextParts.toReversed().join(' ')} <span className="text-primary capitalize">{titleTextHighlight}</span>
                </h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                    {t('about-me.Subtitle')}
                </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
                <div>
                    <p className="text-lg mb-4">
                        {t('about-me.Paragraph1')}
                    </p>
                    <p className="text-muted-foreground mb-6">
                        {t('about-me.Paragraph2')}
                    </p>
                    <div className="flex flex-wrap gap-2">
                        {TOP_TECHNOLOGIES.map((tech) => (
                            <Badge
                                key={tech}
                                variant="outline"
                                size="lg"
                            >
                                {tech}
                            </Badge>
                        ))}
                    </div>
                </div>

                <div className="grid gap-4">
                    {FEATURES.map(({ key, icon: Icon }) => {
                        const title = t(`about-me.features.${key}.Title`);
                        const description = t(`about-me.features.${key}.Description`);

                        return (
                            <Card key={key}>
                                <CardContent className="p-6">
                                    <div className="flex items-start gap-4">
                                        <div
                                            className="p-3 rounded-lg"
                                            style={{ backgroundColor: 'var(--brand-primary)', color: 'var(--brand-primary-foreground)' }}
                                        >
                                            <Icon className="h-6 w-6" />
                                        </div>
                                        <div>
                                            <h3 className="mb-2">{title}</h3>
                                            <p className="text-sm text-muted-foreground">
                                                {description}
                                            </p>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

/* Content */

type Feature = {
    key: string;
    icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
}

const FEATURES = [
    {
        icon: Code2,
        key: "clean-code"
    },
    {
        icon: Zap,
        key: "performance"
    },
    {
        icon: Puzzle,
        key: "problem-solving"
    },
] satisfies Feature[];