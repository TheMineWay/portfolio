type Props = {
  tech: string;
  description: string;
  image: JSX.Element;
};

export default function PresentationTech({ tech, image, description }: Props) {
  return (
    <div
      className="flex h-full justify-start items-center"
      style={{ width: "50vw" }}
    >
      <div className="flex flex-col gap-4 items-center w-full text-justify">
        <h1 className="text-3xl">{tech}</h1>
        <p className="w-60">{description}</p>
        <div>{image}</div>
      </div>
    </div>
  );
}
