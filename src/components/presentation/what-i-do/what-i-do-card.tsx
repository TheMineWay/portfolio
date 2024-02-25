import styles from "./what-i-do-card.module.pcss";

type Props = {
  title: string;
};

export default function WhatIDoCard({ title }: Props) {
  return <div className={styles.card}>{title}</div>;
}
