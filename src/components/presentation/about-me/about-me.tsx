import AboutMeQuote from "./about-me-quote";

import beer from "@assets/about-me/beer.png";
import book from "@assets/about-me/book.png";
import code from "@assets/about-me/code.png";
import coffee from "@assets/about-me/coffee-cup.png";
import game from "@assets/about-me/game.png";
import idea from "@assets/about-me/idea.png";
import js from "@assets/about-me/js.png";

export default function AboutMe() {
  const quotes: {
    quote: string;
    icon: {
      src: string;
    };
    offset: {
      x: number;
      right?: boolean;
    };
  }[] = [
    {
      quote: "aw",
      icon: {
        src: beer,
      },
      offset: {
        x: 30,
      },
    },
    {
      quote: "bootcamp",
      icon: {
        src: book,
      },
      offset: {
        x: 35,
        right: true,
      },
    },
    {
      quote: "ht",
      icon: {
        src: code,
      },
      offset: {
        x: 5,
      },
    },
    {
      quote: "jam",
      icon: {
        src: game,
      },
      offset: {
        x: 15,
        right: true,
      },
    },
    {
      quote: "js",
      icon: {
        src: js,
      },
      offset: {
        x: 40,
        right: true,
      },
    },
    {
      quote: "idea",
      icon: {
        src: idea,
      },
      offset: {
        x: 60,
        right: true,
      },
    },
    {
      quote: "coffee",
      icon: {
        src: coffee,
      },
      offset: {
        x: 25,
        right: true,
      },
    },
  ];

  return (
    <div className="w-full h-full relative">
      {quotes.map(({ icon, offset, quote }, i) => (
        <AboutMeQuote
          key={i}
          quote={quote}
          icon={icon}
          offset={offset}
          index={i}
        />
      ))}
    </div>
  );
}
