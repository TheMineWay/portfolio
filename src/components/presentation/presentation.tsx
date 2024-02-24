import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import {} from "@react-spring/web";
import PresentationIntro from "./intro/presentation-intro";
import PresentationAboutMe from "./about-me/presentation-about-me";

export default function Presentation() {
  return (
    <Parallax pages={2}>
      <ParallaxLayer offset={0}>
        <PresentationIntro />
      </ParallaxLayer>
      <ParallaxLayer sticky={{ start: 1, end: 2 }}>
        <PresentationAboutMe />
      </ParallaxLayer>
    </Parallax>
  );
}
