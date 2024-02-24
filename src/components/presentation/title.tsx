import { useTranslation } from "react-i18next";
import styles from "./title.module.pcss";
import { Translation } from "@i18n/translation.enum";

export default function Title() {
  const { t } = useTranslation([Translation.PRESENTATION]);

  return (
    <div className={styles.title} role="heading">
      <p>{t("title.Name")}</p>
      <h1>Joel Campos</h1>
    </div>
  );
}
