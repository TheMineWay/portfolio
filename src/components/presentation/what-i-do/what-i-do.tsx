import SectionTitle from "../decoration/section-title";
import { useTranslation } from "react-i18next";
import { Translation } from "@i18n/translation.enum";
import WhatIDoCard from "./what-i-do-card";

export default function WhatIDo() {
  const { t } = useTranslation([Translation.PRESENTATION]);

  return (
    <div className="grid grid-rows-3 h-full items-start">
      <div>
        <SectionTitle title={t("i-do.Title")} />
      </div>
      <div className="flex justify-center h-full">
        <WhatIDoCard title="Hola :)" />
      </div>
    </div>
  );
}
