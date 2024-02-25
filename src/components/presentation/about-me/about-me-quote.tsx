import { useTranslation } from "react-i18next";
import { Translation } from "@i18n/translation.enum";
import styles from "./about-me-quote.module.pcss";

type Props = {
  quote: string;
  icon: {
    src: string;
    alt: string;
  };
  offset: {
    x: number;
    y: number;
    right?: boolean;
  };
};

export default function AboutMeQuote({
  quote,
  icon: { src: iconSrc, alt: iconAlt },
  offset: { x: xOffset, y: yOffset, right },
}: Props) {
  const { t } = useTranslation([Translation.PRESENTATION]);

  return (
    <div
      className={styles.cloud}
      style={{
        top: `${yOffset}em`,
        left: right ? undefined : `${xOffset}em`,
        right: right ? `${xOffset}em` : undefined,
      }}
    >
      <div className={styles.card}>
        <div className={styles.content}>
          <p>{t(`about-me.quotes.${quote}.Text`)}</p>
        </div>
        <img src={iconSrc} alt={iconAlt} />
      </div>
    </div>
  );
}
