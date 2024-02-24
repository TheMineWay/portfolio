import { useTranslation } from "react-i18next";
import styles from "./title.module.pcss";
import { Translation } from "@i18n/translation.enum";
import CodeTag from "@components/ui/text/code-tag";

export default function Title() {
  const { t } = useTranslation([Translation.PRESENTATION]);

  return (
    <div className={styles.title} role="heading">
      <p className="text-md">{t("intro.title.Name")}</p>
      <div className="flex flex-col gap-2">
        <h1
          className="text-5xl sm:text-7xl"
          aria-description={t("intro.title.Name-aria-description")}
        >
          Joel Campos
        </h1>
        <h2
          className="text-2xl sm:text-4xl"
          aria-description={t("intro.title.Subtitle")}
        >
          <CodeTag text={t("intro.title.Subtitle")} />
        </h2>
      </div>
    </div>
  );
}
