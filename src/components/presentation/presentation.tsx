import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import PresentationIntro from "./intro/presentation-intro";
import SectionTitle from "./decoration/section-title";
import PresentationAboutMeCard from "./about-me/presentation-about-me-card";
import { useTranslation } from "react-i18next";
import { Translation } from "@i18n/translation.enum";
import PresentationTech from "./tech/presentation-tech";

export default function Presentation() {
  const { t } = useTranslation([Translation.PRESENTATION]);

  return (
    <Parallax pages={8}>
      <ParallaxLayer offset={0}>
        <PresentationIntro />
      </ParallaxLayer>
      <ParallaxLayer sticky={{ start: 1, end: 3 }}>
        <SectionTitle title={t("about-me.Title")} />
      </ParallaxLayer>

      <ParallaxLayer offset={1}>
        <PresentationAboutMeCard
          baseKey="about-me.cards.learner"
          emojis={["school"]}
        />
      </ParallaxLayer>
      <ParallaxLayer offset={2}>
        <PresentationAboutMeCard
          baseKey="about-me.cards.sports"
          emojis={["sprint"]}
        />
      </ParallaxLayer>
      <ParallaxLayer offset={3}>
        <PresentationAboutMeCard
          baseKey="about-me.cards.social"
          emojis={["sports_bar"]}
        />
      </ParallaxLayer>

      <ParallaxLayer sticky={{ start: 4, end: 6 }}>
        <SectionTitle title={t("tech.Title")} />
      </ParallaxLayer>

      <ParallaxLayer sticky={{ start: 4, end: 6 }}>
        <PresentationTech
          tech={t("tech.techs.web.Title")}
          description={t("tech.techs.web.Description")}
          image={<span className="material-symbols-outlined">public</span>}
        />
      </ParallaxLayer>
      <ParallaxLayer sticky={{ start: 4, end: 5 }}>
        <div className="flex justify-end items-center h-full">
          <p>REACT</p>
        </div>
      </ParallaxLayer>
      <ParallaxLayer sticky={{ start: 5, end: 6 }}>
        <div className="flex justify-end items-center h-full">
          <p>VUE</p>
        </div>
      </ParallaxLayer>

      <ParallaxLayer offset={7}>
        <PresentationIntro />
      </ParallaxLayer>
    </Parallax>
  );
}
