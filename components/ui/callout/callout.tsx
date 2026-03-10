import type React from "react";
import clsx from "clsx";
import { cva, type VariantProps } from "class-variance-authority";

const calloutVariants = cva(
    "p-4 rounded-lg border-l-4",
    {
        variants: {
            variant: {
                accent: "bg-section border-l-[var(--brand-accent)]",
                primary: "bg-section border-l-primary",
            },
        },
        defaultVariants: {
            variant: "accent",
        },
    },
);

type CustomProps = VariantProps<typeof calloutVariants>;

export type CalloutProps = React.HTMLAttributes<HTMLDivElement> & CustomProps;

export const Callout: React.FC<CalloutProps> = ({ className, variant, ...props }) => (
    <div className={calloutVariants({ variant, className })} {...props} />
);

export type CalloutDescriptionProps = React.HTMLAttributes<HTMLParagraphElement>;

export const CalloutDescription: React.FC<CalloutDescriptionProps> = ({ className, ...props }) => (
    <p className={clsx("text-sm text-muted-foreground italic", className)} {...props} />
);
