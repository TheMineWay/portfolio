import { useTranslation } from "react-i18next";
import { Translation } from "@i18n/translation.enum";
import styles from "./about-me-quote.module.pcss";

import beer from "@assets/beer.png";

type Props = {
  quote: string;
};

export default function AboutMeQuote({ quote }: Props) {
  const { t } = useTranslation([Translation.PRESENTATION]);

  return (
    <div className={styles.cloud} style={{ top: "5em", left: "5em" }}>
      <div className={styles.card}>
        <div className={styles.content}>
          <p>{t(`about-me.quotes.${quote}.Text`)}</p>
        </div>
        <img src={beer} alt="Beer" />
      </div>
    </div>
  );
}
