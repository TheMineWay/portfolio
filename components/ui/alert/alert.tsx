import type React from "react";
import clsx from "clsx";
import { cva, type VariantProps } from "class-variance-authority";

const alertVariants = cva(
  "relative w-full rounded-lg border px-4 py-3 text-sm grid has-[>svg]:grid-cols-[calc(var(--spacing)*4)_1fr] grid-cols-[0_1fr] has-[>svg]:gap-x-3 gap-y-0.5 items-start [&>svg]:size-4 [&>svg]:translate-y-0.5 [&>svg]:text-current",
  {
    variants: {
      variant: {
        primary: "bg-card text-card-foreground",
        destructive:
          "text-destructive bg-card [&>svg]:text-current *:data-[slot=alert-description]:text-destructive/90",
      },
    },
    defaultVariants: {
      variant: "primary",
    },
  },
);

type CustomProps = VariantProps<typeof alertVariants>;

export type AlertProps = React.HTMLAttributes<HTMLDivElement> & CustomProps;

export const Alert: React.FC<AlertProps> = ({ className, variant, ...props }) => (
  <div
    role="alert"
    className={alertVariants({ variant, className })}
    {...props}
  />
);

export type AlertTitleProps = React.HTMLAttributes<HTMLDivElement>;

export const AlertTitle: React.FC<AlertTitleProps> = ({ className, ...props }) => (
  <div
    className={clsx("col-start-2 line-clamp-1 min-h-4 font-medium tracking-tight", className)}
    {...props}
  />
);

export type AlertDescriptionProps = React.HTMLAttributes<HTMLDivElement>;

export const AlertDescription: React.FC<AlertDescriptionProps> = ({ className, ...props }) => (
  <div
    className={clsx(
      "text-muted-foreground col-start-2 grid justify-items-start gap-1 text-sm [&_p]:leading-relaxed",
      className,
    )}
    {...props}
  />
);
