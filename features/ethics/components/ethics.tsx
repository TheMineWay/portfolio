import type React from "react";
import type { LucideIcon } from "lucide-react";
import { getTranslations } from "next-intl/server";
import { ArrowLeft, Users, Shield, Code, Heart, Leaf, Lock, Eye, Globe, Lightbulb } from "lucide-react";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card/card";
import { Callout, CalloutDescription } from "@/components/ui/callout/callout";
import { SectionTitle } from "@/components/common/title/section-title";
import { buttonVariants } from "@/components/ui/button/button";
import { TranslationNamespace } from "@/i18n/namespaces";
import { BackHomeLink } from "@/features/work-experience/components/company-page/back-home-link";

export const Ethics: React.FC = async () => {
    const t = await getTranslations(TranslationNamespace.ETHICS);
    const commonT = await getTranslations(TranslationNamespace.COMMON);

    return (
        <div className="pt-24 pb-20">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-4xl mx-auto">
                    {/* Header */}
                    <div className="text-center mb-16">
                        <SectionTitle level={1} title={t('hero.Title')} />
                        <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                            {t('hero.Subtitle')}
                        </p>
                    </div>

                    {/* Quote */}
                    <Card className="mb-16 bg-section">
                        <CardContent className="p-8">
                            <blockquote className="text-center">
                                <p className="text-xl md:text-2xl italic mb-4 text-primary">
                                    {t('quote.Text')}
                                </p>
                                <p className="text-muted-foreground">
                                    {t('quote.Description')}
                                </p>
                            </blockquote>
                        </CardContent>
                    </Card>

                    {/* Principles */}
                    <div className="space-y-12">
                        {ETHICS_PRINCIPLES.map(({ key, icon: Icon, valueKeys }) => (
                            <Card key={key} className="overflow-hidden">
                                <CardContent className="p-8">
                                    <div className="flex items-start gap-4 mb-6">
                                        <div className="p-3 rounded-lg flex-shrink-0 bg-primary text-primary-foreground">
                                            <Icon className="h-6 w-6" />
                                        </div>
                                        <div className="flex-1">
                                            <h2 className="text-2xl md:text-3xl mb-2">
                                                {t(`principles.${key}.Title`)}
                                            </h2>
                                            <p className="text-sm text-muted-foreground">
                                                {t(`principles.${key}.Subtitle`)}
                                            </p>
                                        </div>
                                    </div>

                                    <p className="text-muted-foreground leading-relaxed mb-6">
                                        {t(`principles.${key}.Description`)}
                                    </p>

                                    <div className="mb-6">
                                        <h3 className="text-sm mb-3 opacity-80">{t('practice.Title')}</h3>
                                        <ul className="space-y-2">
                                            {valueKeys.map(valueKey => (
                                                <li key={valueKey} className="flex items-start gap-3">
                                                    <div className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0 bg-primary" />
                                                    <span className="text-sm text-muted-foreground">
                                                        {t(`principles.${key}.values.${valueKey}`)}
                                                    </span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    <Callout>
                                        <CalloutDescription>
                                            <strong>{t('why-it-matters')}</strong>
                                            {t(`principles.${key}.Impact`)}
                                        </CalloutDescription>
                                    </Callout>
                                </CardContent>
                            </Card>
                        ))}
                    </div>

                    {/* Back to Portfolio Button */}
                    <div className="mt-12 text-center">
                        <Link href="/" className={buttonVariants({ size: 'lg' })}>
                            <ArrowLeft className="h-4 w-4" />
                            {commonT('expressions.Back-home')}
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

/* Content */

type EthicsPrinciple = {
    key: string;
    icon: LucideIcon;
    valueKeys: string[];
};

const VALUES_5 = ['0', '1', '2', '3', '4'];
const VALUES_6 = ['0', '1', '2', '3', '4', '5'];

const ETHICS_PRINCIPLES: EthicsPrinciple[] = [
    { key: 'accessibility', icon: Users, valueKeys: VALUES_5 },
    { key: 'privacy', icon: Shield, valueKeys: VALUES_6 },
    { key: 'open-source', icon: Code, valueKeys: VALUES_6 },
    { key: 'sustainability', icon: Leaf, valueKeys: VALUES_6 },
    { key: 'ethical-ai', icon: Heart, valueKeys: VALUES_6 },
    { key: 'security', icon: Lock, valueKeys: VALUES_6 },
    { key: 'transparency', icon: Eye, valueKeys: VALUES_6 },
    { key: 'inclusive-tech', icon: Globe, valueKeys: VALUES_6 },
    { key: 'continuous-learning', icon: Lightbulb, valueKeys: VALUES_6 },
];