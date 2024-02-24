import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import PresentationIntro from "./intro/presentation-intro";
import PresentationAboutMe from "./about-me/presentation-about-me";
import PresentationAboutMeCard from "./about-me/presentation-about-me-card";

export default function Presentation() {
  return (
    <Parallax pages={5}>
      <ParallaxLayer offset={0}>
        <PresentationIntro />
      </ParallaxLayer>
      <ParallaxLayer sticky={{ start: 1, end: 3 }}>
        <PresentationAboutMe />
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
      <ParallaxLayer offset={4}>
        <PresentationIntro />
      </ParallaxLayer>
    </Parallax>
  );
}
