type Props = {
  text: string;
};

export default function CodeTag({ text }: Props) {
  return <>{"<" + text + "/>"}</>;
}
