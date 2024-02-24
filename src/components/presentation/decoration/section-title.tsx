import CodeTag from "@components/ui/text/code-tag";

type Props = {
  title: string;
};

export default function SectionTitle({ title }: Props) {
  return (
    <div className="grid justify-items-center content-start gap-12 h-full px-4">
      <h1 className="text-2xl pt-4 text-center">
        <CodeTag text={title} />
      </h1>
    </div>
  );
}
