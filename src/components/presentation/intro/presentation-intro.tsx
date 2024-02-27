import { useTranslation } from "react-i18next";
import Title from "./title";
import { Translation } from "@i18n/translation.enum";
import { useState } from "react";
import QRCode from "react-qr-code";
import styles from "./presentation-intro.module.pcss";

import meImage from "@assets/me/me.jpg";
import linkedin from "@assets/social/linkedin.png";
import github from "@assets/social/github.png";

export default function PresentationIntro() {
  const { t } = useTranslation([Translation.PRESENTATION]);

  const [isQr, setIsQr] = useState(false);

  return (
    <div className="grid content-between gap-12 h-full px-4">
      <span></span>
      <div className="flex flex-col lg:flex-row justify-center items-center gap-12 lg:gap-24">
        <Title />
        <div className={styles.cover}>
          {isQr ? (
            <QRCode
              onDoubleClick={() => setIsQr(false)}
              value={window.location.href}
            />
          ) : (
            <img
              onDoubleClick={() => setIsQr(true)}
              alt={t("intro.image.Alt")}
              src={meImage}
            />
          )}
        </div>
      </div>
      <div
        className={`px-4 pb-4 justify-self-end flex justify-center gap-4 ${styles.social}`}
      >
        <a
          href="https://github.com/TheMineWay"
          target="_blank"
          aria-description={t("intro.social.github.Aria-description")}
        >
          <img src={github} alt={t("intro.social.github.Alt")} />
        </a>
        <a
          href="https://www.linkedin.com/in/joelcamposoliva/"
          target="_blank"
          aria-description={t("intro.social.linkedin.Aria-description")}
        >
          <img src={linkedin} alt={t("intro.social.linkedin.Alt")} />
        </a>
      </div>
    </div>
  );
}
