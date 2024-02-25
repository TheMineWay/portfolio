type Props = {
  tech: string;
  description: string;
  image: JSX.Element;
};

export default function PresentationTechTitle({
  tech,
  image,
  description,
}: Props) {
  return (
    <div className="py-24 flex h-full justify-start items-start md:items-center w-full md:w-6/12">
      <div className="flex flex-col gap-4 items-center w-full text-justify">
        <h1 className="text-3xl">{tech}</h1>
        <p className="w-60">{description}</p>
        <div>{image}</div>
      </div>
    </div>
  );
}
