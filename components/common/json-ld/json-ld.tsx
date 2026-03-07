type Props = {
    data: object;
}

export const JsonLd: React.FC<Props> = ({ data }) => {
    return <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replaceAll('<', String.raw`\u003c`) }}
    />
}