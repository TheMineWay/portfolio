import type React from "react";
import clsx from "clsx";
import { cva, type VariantProps } from "class-variance-authority";
import Link from "next/link";

const actionIconVariants = cva("rounded-full border hover:border-foreground transition-colors", {
    variants: {
        size: {
            default: "p-3 [&>svg]:w-5 [&>svg]:h-5",
            sm: "p-2 [&>svg]:w-4 [&>svg]:h-4",
            lg: "p-4 [&>svg]:w-6 [&>svg]:h-6",
            md: "p-3 [&>svg]:w-5 [&>svg]:h-5",
        },
    },
    defaultVariants: {
      size: "default",
    },
});

type CustomProps = VariantProps<typeof actionIconVariants>;

export type ActionIconProps = React.ButtonHTMLAttributes<HTMLButtonElement> & CustomProps & {
    "aria-label": string;
};

export const ActionIcon: React.FC<ActionIconProps> = ({ children, className: classNameProp, size, ...props }) => {
    const className = clsx(actionIconVariants({ size }), classNameProp);

    return <button {...props} className={className}>{children}</button>
};
export type ActionIconLinkProps = React.ComponentProps<typeof Link> & VariantProps<typeof actionIconVariants> & {
    "aria-label": string;
};

export const ActionIconLink: React.FC<ActionIconLinkProps> = ({ children, className: classNameProp, size, ...props }) => {
    const className = clsx(actionIconVariants({ size }), classNameProp);

    return <Link {...props} className={className}>{children}</Link>;
};