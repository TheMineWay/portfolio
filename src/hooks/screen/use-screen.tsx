import { useEffect, useState } from "react";

export function useScreen() {
  const [resolution, setResolution] = useState<{ x: number; y: number }>({
    x: window.screen.width,
    y: window.screen.height,
  });

  const isMobile = resolution.x < 640;

  useEffect(() => {
    const onResize = () => {
      const { height: y, width: x } = window.screen;

      if (y !== resolution.y || x !== resolution.x) setResolution({ x, y });
    };

    window.addEventListener("resize", onResize);

    return () => {
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return {
    resolution,
    isMobile,
  };
}
