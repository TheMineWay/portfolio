import { useTranslation } from "react-i18next";
import Title from "./title";
import { Translation } from "@i18n/translation.enum";
import styles from "./presentation-intro.module.pcss";

import meImage from "@assets/me/me.jpg";

export default function PresentationIntro() {
  const { t } = useTranslation([Translation.PRESENTATION]);

  return (
    <div className="flex flex-col lg:flex-row justify-center items-center h-full gap-12 lg:gap-24">
      <Title />
      <img alt={t("intro.image.Alt")} src={meImage} className={styles.me} />
    </div>
  );
}
