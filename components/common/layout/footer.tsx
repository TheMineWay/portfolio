import { Github } from "@/components/icons/github";
import { Linkedin } from "@/components/icons/linkedin";
import { Button } from "@/components/ui/button/button";
import { SOCIAL } from "@/constants/social.constants";
import { TranslationNamespace } from "@/i18n/namespaces";
import { formatDate } from "date-fns";
import { getTranslations } from "next-intl/server";
import Link from "next/link";

const CURRENT_YEAR = formatDate(new Date(), "yyyy");

export const Footer: React.FC = async () => {
    const t = await getTranslations(TranslationNamespace.COMMON);

    return <footer className="py-12 border-t">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
                <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                    <div className="text-center md:text-left">
                        {/* MAIN FOOTER SPACE */}
                    </div>

                    <div className="flex items-center gap-4">
                        {/* SOCIAL LINKS */}
                       {SOCIAL_LINKS.map(({ name, link, icon }) => (
                         <Link href={link} target="_blank" key={name}>
                            <Button variant="ghost" size="icon" aria-label={t("expressions.Link-to", { name })}>
                                {icon}
                            </Button>
                        </Link>
                       ))}
                    </div>
                </div>

                <div className="mt-8 pt-8 border-t text-center text-sm text-muted-foreground">
                    <p>{CURRENT_YEAR}</p>
                </div>
            </div>
        </div>
    </footer>;
};

/* Content */

type SocialLink = {
    name: string;
    link: string;
    icon: React.ReactNode;
}

const SOCIAL_LINKS = [
    {
        name: "GitHub",
        link: SOCIAL.github,
        icon: <Github className="fill-foreground" />
    },
    {
        name: "LinkedIn",
        link: SOCIAL.linkedin,
        icon: <Linkedin className="fill-foreground" />
    }
];