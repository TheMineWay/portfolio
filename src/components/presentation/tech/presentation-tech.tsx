type Props = {
  tech: string;
  image: {
    src: string;
    alt: string;
  };
};

export default function PresentationTech({ tech, image }: Props) {
  return (
    <div
      className="flex h-full justify-start items-center"
      style={{ width: "50vw" }}
    >
      <div className="flex flex-col items-center w-full">
        <h1 className="text-3xl">{tech}</h1>
        <img src={image.src} alt={image.alt} loading="lazy" />
      </div>
    </div>
  );
}
