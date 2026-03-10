type HeadingLevel = 1 | 2 | 3 | 4 | 5 | 6;

export const SectionTitle: React.FC<{ title: string; level?: HeadingLevel }> = ({ title, level = 1 }) => {
    const [titleTextHighlight, ...titleTextParts] = title.split(' ').toReversed();
    const Tag = `h${level}` as const;

    return (
        <Tag className="text-3xl sm:text-4xl md:text-5xl mb-4">
            {titleTextParts.toReversed().join(' ')} <span className="text-primary capitalize">{titleTextHighlight}</span>
        </Tag>
    );
};