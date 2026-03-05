import type React from "react";
import clsx from "clsx";

export type SeparatorProps = React.HTMLAttributes<HTMLDivElement> & {
  orientation?: "horizontal" | "vertical";
  decorative?: boolean;
};

export const Separator: React.FC<SeparatorProps> = ({
  className,
  orientation = "horizontal",
  decorative = true,
  ...props
}) => (
  <div
    role={decorative ? "none" : "separator"}
    aria-orientation={decorative ? undefined : orientation}
    className={clsx(
      "bg-border shrink-0",
      orientation === "horizontal" ? "h-px w-full" : "h-full w-px",
      className,
    )}
    {...props}
  />
);
