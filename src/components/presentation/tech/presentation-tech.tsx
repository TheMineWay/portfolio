import { Badge } from "primereact/badge";

type Props = {
  tech: string;
  description: string;
  tags: string[];
};

export default function PresentationTech({ tech, tags, description }: Props) {
  return (
    <div className="py-24 flex h-full justify-end items-end md:items-center">
      <div className="flex flex-col gap-4 items-center w-full text-justify w-full md:w-6/12">
        <h1 className="text-3xl">{tech}</h1>
        <p className="w-60">{description}</p>
        <div className="flex gap-4">
          {tags.map((t, i) => (
            <Badge value={t} key={i} />
          ))}
        </div>
      </div>
    </div>
  );
}
