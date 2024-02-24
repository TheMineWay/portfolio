import CodeTag from "@components/ui/text/code-tag";
import { Translation } from "@i18n/translation.enum";
import { useTranslation } from "react-i18next";

export default function PresentationAboutMe() {
  const { t } = useTranslation([Translation.PRESENTATION]);
  return (
    <div className="grid justify-items-center content-start gap-12 h-full px-4">
      <h1 className="text-2xl pt-4 text-center">
        <CodeTag text={t("about-me.Title")} />
      </h1>
    </div>
  );
}
