import type React from "react";
import clsx from "clsx";

export type CardProps = React.HTMLAttributes<HTMLDivElement>;

export const Card: React.FC<CardProps> = ({ className, ...props }) => (
  <div
    className={clsx("bg-card text-card-foreground flex flex-col gap-6 rounded-xl border", className)}
    {...props}
  />
);

export type CardHeaderProps = React.HTMLAttributes<HTMLDivElement>;

export const CardHeader: React.FC<CardHeaderProps> = ({ className, ...props }) => (
  <div
    className={clsx(
      "@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-1.5 px-6 pt-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6",
      className,
    )}
    {...props}
  />
);

export type CardTitleProps = React.HTMLAttributes<HTMLHeadingElement>;

export const CardTitle: React.FC<CardTitleProps> = ({ className, children, ...props }) => (
  <h3 className={clsx("leading-none", className)} {...props}>{children}</h3>
);

export type CardDescriptionProps = React.HTMLAttributes<HTMLParagraphElement>;

export const CardDescription: React.FC<CardDescriptionProps> = ({ className, ...props }) => (
  <p className={clsx("text-muted-foreground", className)} {...props} />
);

export type CardActionProps = React.HTMLAttributes<HTMLDivElement>;

export const CardAction: React.FC<CardActionProps> = ({ className, ...props }) => (
  <div
    className={clsx("col-start-2 row-span-2 row-start-1 self-start justify-self-end", className)}
    {...props}
  />
);

export type CardContentProps = React.HTMLAttributes<HTMLDivElement>;

export const CardContent: React.FC<CardContentProps> = ({ className, ...props }) => (
  <div className={clsx("px-6 [&:last-child]:pb-6", className)} {...props} />
);

export type CardFooterProps = React.HTMLAttributes<HTMLDivElement>;

export const CardFooter: React.FC<CardFooterProps> = ({ className, ...props }) => (
  <div
    className={clsx("flex items-center px-6 pb-6 [.border-t]:pt-6", className)}
    {...props}
  />
);
