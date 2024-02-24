import styles from "./title.module.pcss";

export default function Title() {
  return (
    <div className={styles.title} role="heading">
      <p>Hi, my name is</p>
      <h1>Joel Campos</h1>
    </div>
  );
}
