import AboutMeQuote from "./about-me-quote";

import beer from "@assets/beer.png";

export default function AboutMe() {
  const icon = {
    src: beer,
    alt: "Beer",
  };

  return (
    <div className="w-full h-full relative">
      <AboutMeQuote quote="1" icon={icon} offset={{ x: 10, y: -40 }} />
      <AboutMeQuote quote="2" icon={icon} offset={{ x: 35, y: -20 }} />
      <AboutMeQuote quote="3" icon={icon} offset={{ x: 25, y: 0 }} />
      <AboutMeQuote
        quote="4"
        icon={icon}
        offset={{ x: 15, y: -30, right: true }}
      />
      <AboutMeQuote
        quote="5"
        icon={icon}
        offset={{ x: 25, y: -5, right: true }}
      />
      <AboutMeQuote
        quote="6"
        icon={icon}
        offset={{ x: 60, y: 0, right: true }}
      />
      <AboutMeQuote
        quote="7"
        icon={icon}
        offset={{ x: 40, y: 15, right: true }}
      />
    </div>
  );
}
