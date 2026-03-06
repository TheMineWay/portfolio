import type React from "react";
import clsx from "clsx";
import { ChevronRight, MoreHorizontal } from "lucide-react";
import Link, { type LinkProps } from "next/link";

export type BreadcrumbProps = React.HTMLAttributes<HTMLElement>;

export const Breadcrumb: React.FC<BreadcrumbProps> = (props) => (
  <nav aria-label="breadcrumb" {...props} />
);

export type BreadcrumbListProps = React.HTMLAttributes<HTMLOListElement>;

export const BreadcrumbList: React.FC<BreadcrumbListProps> = ({ className, ...props }) => (
  <ol
    className={clsx(
      "text-muted-foreground flex flex-wrap items-center gap-1.5 text-sm break-words sm:gap-2.5",
      className,
    )}
    {...props}
  />
);

export type BreadcrumbItemProps = React.HTMLAttributes<HTMLLIElement>;

export const BreadcrumbItem: React.FC<BreadcrumbItemProps> = ({ className, ...props }) => (
  <li className={clsx("inline-flex items-center gap-1.5", className)} {...props} />
);

export type BreadcrumbLinkProps = LinkProps & React.AnchorHTMLAttributes<HTMLAnchorElement>;

export const BreadcrumbLink: React.FC<BreadcrumbLinkProps> = ({ className, children, ...props }) => (
  <Link className={clsx("hover:text-foreground transition-colors", className)} {...props}>{children}</Link>
);

export type BreadcrumbPageProps = React.HTMLAttributes<HTMLSpanElement>;

export const BreadcrumbPage: React.FC<BreadcrumbPageProps> = ({ className, ...props }) => (
  <span
    aria-current="page"
    className={clsx("text-foreground font-normal", className)}
    {...props}
  />
);

export type BreadcrumbSeparatorProps = React.HTMLAttributes<HTMLLIElement>;

export const BreadcrumbSeparator: React.FC<BreadcrumbSeparatorProps> = ({
  children,
  className,
  ...props
}) => (
  <li
    aria-hidden="true"
    className={clsx("[&>svg]:size-3.5", className)}
    {...props}
  >
    {children ?? <ChevronRight />}
  </li>
);

export type BreadcrumbEllipsisProps = React.HTMLAttributes<HTMLSpanElement>;

export const BreadcrumbEllipsis: React.FC<BreadcrumbEllipsisProps> = ({ className, ...props }) => (
  <span
    aria-hidden="true"
    className={clsx("flex size-9 items-center justify-center", className)}
    {...props}
  >
    <MoreHorizontal className="size-4" />
    <span className="sr-only">More</span>
  </span>
);
