import clsx from "clsx";

type HeadingLevel = 1 | 2;

export type SectionHeaderProps = {
    index?: string;
    slug: string;
    title: string;
    subtitle?: string;
    level?: HeadingLevel;
};

export const SectionHeader: React.FC<SectionHeaderProps> = ({ index, slug, title, subtitle, level = 2 }) => {
    const [titleHighlight, ...titleRest] = title.split(' ').toReversed();
    const Tag = `h${level}` as const;

    return (
        <div className="relative mb-16">
            <span
                aria-hidden
                data-index={index}
                className={clsx("hidden md:block absolute top-0 right-0 text-[13rem] font-bold leading-none text-foreground/5 select-none pointer-events-none", {
                    "before:content-[attr(data-index)]": index,
                })}
            />
            <span className="relative font-mono text-xs tracking-widest text-muted-foreground block mb-4">
                {index && `— ${index} / ${slug}`}
            </span>
            <Tag className="relative text-4xl md:text-5xl font-bold tracking-[-0.03em] mb-4">
                {titleRest.toReversed().join(' ')} <span className="text-brand-accent capitalize">{titleHighlight}</span>
            </Tag>
            <div
                className="relative h-px w-24 mb-6"
                style={{ background: 'linear-gradient(90deg, color-mix(in srgb, var(--brand-accent) 30%, transparent), transparent)' }}
            />
            {subtitle && (
                <p className="relative text-muted-foreground max-w-2xl">{subtitle}</p>
            )}
        </div>
    );
};
