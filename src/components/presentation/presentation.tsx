import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import PresentationIntro from "./intro/presentation-intro";
import SectionTitle from "./decoration/section-title";
import PresentationAboutMeCard from "./about-me/presentation-about-me-card";
import { useTranslation } from "react-i18next";
import { Translation } from "@i18n/translation.enum";
import PresentationTechTitle from "./tech/presentation-tech-title";
import PresentationTech from "./tech/presentation-tech";

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
        <SectionTitle title={t("tech.Title")} />
      </ParallaxLayer>

      <ParallaxLayer sticky={{ start: 3, end: 5 }}>
        <PresentationTechTitle
          tech={t("tech.techs.web.Title")}
          description={t("tech.techs.web.Description")}
          image={<span className="material-symbols-outlined">public</span>}
        />
      </ParallaxLayer>
      <ParallaxLayer sticky={{ start: 3, end: 4 }}>
        <PresentationTech
          tech={t("tech.techs.web.techs.reactive.Title")}
          description={t("tech.techs.web.techs.reactive.Description")}
          tags={["React", "Svelte", "Vue"]}
        />
      </ParallaxLayer>
      <ParallaxLayer sticky={{ start: 4.5, end: 5 }}>
        <PresentationTech
          tech={t("tech.techs.web.techs.commons.Title")}
          description={t("tech.techs.web.techs.commons.Description")}
          tags={["JavaScript/TypeScript", "HTML", "CSS/PostCSS"]}
        />
      </ParallaxLayer>

      <ParallaxLayer offset={6}>
        <PresentationIntro />
      </ParallaxLayer>
    </Parallax>
  );
}
