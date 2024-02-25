import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import PresentationIntro from "./intro/presentation-intro";
import SectionTitle from "./decoration/section-title";
import { useTranslation } from "react-i18next";
import { Translation } from "@i18n/translation.enum";
import AboutMe from "./about-me/about-me";
import WhatIDo from "./what-i-do/what-i-do";

export default function Presentation() {
  const { t } = useTranslation([Translation.PRESENTATION]);

  return (
    <Parallax pages={4}>
      <ParallaxLayer offset={0}>
        <PresentationIntro />
      </ParallaxLayer>

      <ParallaxLayer offset={1}>
        <SectionTitle title={t("about-me.Title")} />
      </ParallaxLayer>

      <ParallaxLayer offset={1} speed={1.1}>
        <AboutMe />
      </ParallaxLayer>

      <ParallaxLayer offset={2}>
        <WhatIDo />
      </ParallaxLayer>

      <ParallaxLayer offset={3}>
        <PresentationIntro />
      </ParallaxLayer>
    </Parallax>
  );
}
