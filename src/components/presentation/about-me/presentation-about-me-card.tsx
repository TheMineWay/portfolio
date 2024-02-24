import { Translation } from "@i18n/translation.enum";
import { Card } from "primereact/card";
import { useTranslation } from "react-i18next";

type Props = {
  baseKey: string;
};

export default function PresentationAboutMeCard({ baseKey }: Props) {
  const { t } = useTranslation([Translation.PRESENTATION]);
  return <Card title={t(`${baseKey}.Title`)}></Card>;
}
