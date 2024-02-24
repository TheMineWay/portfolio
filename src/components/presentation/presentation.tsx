import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import PresentationIntro from "./intro/presentation-intro";
import PresentationAboutMe from "./about-me/presentation-about-me";
import { useScreen } from "@hooks/screen/use-screen";
import PresentationAboutMeCard from "./about-me/presentation-about-me-card";

export default function Presentation() {
  const { isMobile } = useScreen();

  return (
    <Parallax pages={8}>
      <ParallaxLayer offset={0}>
        <PresentationIntro />
      </ParallaxLayer>
      <ParallaxLayer sticky={{ start: 1, end: 6 }}>
        <PresentationAboutMe />
      </ParallaxLayer>
      <ParallaxLayer
        sticky={{ start: 1, end: isMobile ? 2 : 6 }}
        className="flex items-center h-full"
        horizontal
      >
        <PresentationAboutMeCard baseKey="about-me.cards.learner" />
      </ParallaxLayer>
      <ParallaxLayer
        sticky={{ start: 3, end: isMobile ? 4 : 6 }}
        className="flex items-center h-full"
        horizontal
      >
        <PresentationAboutMeCard baseKey="about-me.cards.sports" />
      </ParallaxLayer>
      <ParallaxLayer
        sticky={{ start: 5, end: 6 }}
        className="flex items-center h-full"
        horizontal
      >
        <PresentationAboutMeCard baseKey="about-me.cards.social" />
      </ParallaxLayer>
      <ParallaxLayer sticky={{ start: 7 }}>
        <PresentationIntro />
      </ParallaxLayer>
    </Parallax>
  );
}
