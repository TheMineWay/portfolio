import type React from "react";
import clsx from "clsx";

export type SkeletonProps = React.HTMLAttributes<HTMLDivElement>;

export const Skeleton: React.FC<SkeletonProps> = ({ className, ...props }) => (
  <div
    className={clsx("bg-accent animate-pulse rounded-md", className)}
    {...props}
  />
);
