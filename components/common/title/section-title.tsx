export const SectionTitle: React.FC<{ title: string }> = ({ title }) => {
    const [titleTextHighlight, ...titleTextParts] = title.split(' ').toReversed();

    return (
        <h2 className="text-3xl sm:text-4xl md:text-5xl mb-4">
            {titleTextParts.toReversed().join(' ')} <span className="text-primary capitalize">{titleTextHighlight}</span>
        </h2>
    );
};