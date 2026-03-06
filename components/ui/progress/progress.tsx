import type React from "react";
import clsx from "clsx";

export type ProgressProps = React.HTMLAttributes<HTMLDivElement> & {
  value?: number;
  max?: number;
};

export const Progress: React.FC<ProgressProps> = ({ className, value, max = 100, ...props }) => {
  const percentage = Math.min(100, Math.max(0, ((value ?? 0) / max) * 100));

  return (
    <div
      className={clsx(
        "bg-primary/20 relative h-2 w-full overflow-hidden rounded-full",
        className,
      )}
      {...props}
    >
      <div
        aria-hidden="true"
        className="bg-primary h-full w-full flex-1 transition-all"
        style={{ transform: `translateX(-${100 - percentage}%)` }}
      />
      <progress
        value={value}
        max={max}
        aria-valuenow={value}
        className="sr-only"
      />
    </div>
  );
};
