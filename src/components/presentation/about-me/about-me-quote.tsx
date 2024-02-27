import { useTranslation } from "react-i18next";
import { Translation } from "@i18n/translation.enum";
import { useScreen } from "@hooks/screen/use-screen";
import styles from "./about-me-quote.module.pcss";

type Props = {
  quote: string;
  icon: {
    src: string;
  };
  offset: {
    x: number;
    y?: number;
    right?: boolean;
  };
  index: number;
};

export default function AboutMeQuote({
  quote,
  icon: { src: iconSrc },
  offset: { x: xOffset, y: yOffset, right: isRight },
  index,
}: Props) {
  const { t } = useTranslation([Translation.PRESENTATION]);

  const { isMobile } = useScreen();

  const left = isRight ? undefined : `${xOffset}%`;
  const right = isRight ? `${xOffset}%` : undefined;

  const isEven = index % 2 === 0;

  return (
    <div
      className={styles.cloud}
      style={{
        top: `${(yOffset ?? 0) + index * 7}em`,
        left: isMobile ? (isEven ? undefined : "3em") : left,
        right: isMobile ? (isEven ? "3em" : undefined) : right,
      }}
    >
      <div className={styles.card}>
        <div className={styles.content}>
          <p>{t(`about-me.quotes.${quote}.Text`)}</p>
        </div>
        <img src={iconSrc} alt={t(`about-me.quotes.${quote}.icon.Alt`)} />
      </div>
    </div>
  );
}
