import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import {} from "@react-spring/web";
import PresentationIntro from "./intro/presentation-intro";
import PresentationAboutMe from "./about-me/presentation-about-me";
import { Card } from "primereact/card";
import PresentationAboutMeCard from "./about-me/presentation-about-me-card";

export default function Presentation() {
  return (
    <Parallax pages={4}>
      <ParallaxLayer offset={0}>
        <PresentationIntro />
      </ParallaxLayer>
      <ParallaxLayer sticky={{ start: 1, end: 4 }}>
        <PresentationAboutMe />
      </ParallaxLayer>
      <ParallaxLayer sticky={{ start: 2, end: 4 }}>
        <PresentationAboutMeCard baseKey="about-me.cards.learner" />
      </ParallaxLayer>
      <ParallaxLayer sticky={{ start: 3, end: 4 }}>
        <Card title="test 2"></Card>
      </ParallaxLayer>
    </Parallax>
  );
}
