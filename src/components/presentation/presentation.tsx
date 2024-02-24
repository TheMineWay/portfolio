import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import {} from "@react-spring/web";
import PresentationIntro from "./intro/presentation-intro";

export default function Presentation() {
  return (
    <Parallax pages={1}>
      <ParallaxLayer offset={0}>
        <PresentationIntro />
      </ParallaxLayer>
    </Parallax>
  );
}
