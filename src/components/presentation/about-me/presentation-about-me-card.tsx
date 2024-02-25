import { Translation } from "@i18n/translation.enum";
import { useTranslation } from "react-i18next";
import styles from "./presentation-about-me-card.module.pcss";

type Props = {
  baseKey: string;
  emojis: string[];
};

export default function PresentationAboutMeCard({ baseKey, emojis }: Props) {
  const { t } = useTranslation([Translation.PRESENTATION]);
  return (
    <div className="flex flex-col gap-8 justify-center items-center h-full px-4">
      <div className="flex flex-col gap-4">
        <h2 className={`text-3xl text-center ${styles.title}`}>
          {t(`${baseKey}.Title`)}
        </h2>
        <p className="text-center">{t(`${baseKey}.Description`)}</p>
      </div>
      {emojis.map((emoji) => (
        <span className="material-symbols-outlined" key={emoji}>
          {emoji}
        </span>
      ))}
    </div>
  );
}
