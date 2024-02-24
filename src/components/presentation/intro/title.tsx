import { useTranslation } from "react-i18next";
import styles from "./title.module.pcss";
import { Translation } from "@i18n/translation.enum";

export default function Title() {
  const { t } = useTranslation([Translation.PRESENTATION]);

  return (
    <div className={styles.title} role="heading">
      <p className="text-md">{t("intro.title.Name")}</p>
      <h1 className="text-5xl sm:text-7xl">Joel Campos</h1>
    </div>
  );
}
