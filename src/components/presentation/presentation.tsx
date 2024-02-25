import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import PresentationIntro from "./intro/presentation-intro";
import SectionTitle from "./decoration/section-title";
import PresentationAboutMeCard from "./about-me/presentation-about-me-card";
import { useTranslation } from "react-i18next";
import { Translation } from "@i18n/translation.enum";

export default function Presentation() {
  const { t } = useTranslation([Translation.PRESENTATION]);

  return (
    <Parallax pages={7}>
      <ParallaxLayer offset={0}>
        <PresentationIntro />
      </ParallaxLayer>
      <ParallaxLayer sticky={{ start: 1, end: 2.25 }}>
        <SectionTitle title={t("about-me.Title")} />
      </ParallaxLayer>

      <ParallaxLayer offset={1}>
        <PresentationAboutMeCard
          baseKey="about-me.cards.learner"
          emojis={["school"]}
        />
      </ParallaxLayer>
      <ParallaxLayer offset={1.5}>
        <PresentationAboutMeCard
          baseKey="about-me.cards.sports"
          emojis={["sprint"]}
        />
      </ParallaxLayer>
      <ParallaxLayer offset={2}>
        <PresentationAboutMeCard
          baseKey="about-me.cards.social"
          emojis={["sports_bar"]}
        />
      </ParallaxLayer>

      <ParallaxLayer sticky={{ start: 3, end: 5 }}>
        <SectionTitle title={t("i-do.Title")} />
      </ParallaxLayer>

      <ParallaxLayer offset={6}>
        <PresentationIntro />
      </ParallaxLayer>
    </Parallax>
  );
}
