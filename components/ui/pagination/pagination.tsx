import type React from "react";
import clsx from "clsx";
import { ChevronLeft, ChevronRight, MoreHorizontal } from "lucide-react";
import { cva, type VariantProps } from "class-variance-authority";

const paginationLinkVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]",
  {
    variants: {
      variant: {
        ghost: "hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50",
        outline: "border bg-accent/50 text-foreground hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50",
      },
      size: {
        default: "h-9 px-4 py-2 has-[>svg]:px-3",
        icon: "size-9 rounded-md",
      },
    },
    defaultVariants: {
      variant: "ghost",
      size: "icon",
    },
  },
);

export type PaginationProps = React.HTMLAttributes<HTMLElement>;

export const Pagination: React.FC<PaginationProps> = ({ className, ...props }) => (
  <nav
    role="navigation"
    aria-label="pagination"
    className={clsx("mx-auto flex w-full justify-center", className)}
    {...props}
  />
);

export type PaginationContentProps = React.HTMLAttributes<HTMLUListElement>;

export const PaginationContent: React.FC<PaginationContentProps> = ({ className, ...props }) => (
  <ul className={clsx("flex flex-row items-center gap-1", className)} {...props} />
);

export type PaginationItemProps = React.HTMLAttributes<HTMLLIElement>;

export const PaginationItem: React.FC<PaginationItemProps> = (props) => <li {...props} />;

export type PaginationLinkProps = React.AnchorHTMLAttributes<HTMLAnchorElement> &
  VariantProps<typeof paginationLinkVariants> & {
    isActive?: boolean;
  };

export const PaginationLink: React.FC<PaginationLinkProps> = ({
  className,
  isActive,
  variant,
  size,
  children,
  ...props
}) => (
  <a
    aria-current={isActive ? "page" : undefined}
    data-active={isActive}
    className={paginationLinkVariants({
      variant: variant ?? (isActive ? "outline" : "ghost"),
      size,
      className,
    })}
    {...props}
  >{children}</a>
);

export type PaginationPreviousProps = Omit<PaginationLinkProps, "size">;

export const PaginationPrevious: React.FC<PaginationPreviousProps> = ({ className, ...props }) => (
  <PaginationLink
    aria-label="Go to previous page"
    size="default"
    className={clsx("gap-1 px-2.5 sm:pl-2.5", className)}
    {...props}
  >
    <ChevronLeft />
    <span className="hidden sm:block">Previous</span>
  </PaginationLink>
);

export type PaginationNextProps = Omit<PaginationLinkProps, "size">;

export const PaginationNext: React.FC<PaginationNextProps> = ({ className, ...props }) => (
  <PaginationLink
    aria-label="Go to next page"
    size="default"
    className={clsx("gap-1 px-2.5 sm:pr-2.5", className)}
    {...props}
  >
    <span className="hidden sm:block">Next</span>
    <ChevronRight />
  </PaginationLink>
);

export type PaginationEllipsisProps = React.HTMLAttributes<HTMLSpanElement>;

export const PaginationEllipsis: React.FC<PaginationEllipsisProps> = ({ className, ...props }) => (
  <span
    aria-hidden
    className={clsx("flex size-9 items-center justify-center", className)}
    {...props}
  >
    <MoreHorizontal className="size-4" />
    <span className="sr-only">More pages</span>
  </span>
);
