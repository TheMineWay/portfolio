import styles from "./code-tag.module.pcss";

type Props = {
  text: string;
  colored?: boolean;
};

export default function CodeTag({ text, colored }: Props) {
  return (
    <span className={`${styles.tag}${colored ? " " + styles.colored : ""}`}>
      {"<" + text + ""}
      <span className="">/</span>
      {">"}
    </span>
  );
}
