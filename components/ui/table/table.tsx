import type React from "react";
import clsx from "clsx";

export type TableProps = React.HTMLAttributes<HTMLTableElement>;

export const Table: React.FC<TableProps> = ({ className, ...props }) => (
  <div className="relative w-full overflow-x-auto">
    <table className={clsx("w-full caption-bottom text-sm", className)} {...props} />
  </div>
);

export type TableHeaderProps = React.HTMLAttributes<HTMLTableSectionElement>;

export const TableHeader: React.FC<TableHeaderProps> = ({ className, ...props }) => (
  <thead className={clsx("[&_tr]:border-b", className)} {...props} />
);

export type TableBodyProps = React.HTMLAttributes<HTMLTableSectionElement>;

export const TableBody: React.FC<TableBodyProps> = ({ className, ...props }) => (
  <tbody className={clsx("[&_tr:last-child]:border-0", className)} {...props} />
);

export type TableFooterProps = React.HTMLAttributes<HTMLTableSectionElement>;

export const TableFooter: React.FC<TableFooterProps> = ({ className, ...props }) => (
  <tfoot
    className={clsx("bg-muted/50 border-t font-medium [&>tr]:last:border-b-0", className)}
    {...props}
  />
);

export type TableRowProps = React.HTMLAttributes<HTMLTableRowElement>;

export const TableRow: React.FC<TableRowProps> = ({ className, ...props }) => (
  <tr
    className={clsx(
      "hover:bg-muted/50 data-[state=selected]:bg-muted border-b transition-colors",
      className,
    )}
    {...props}
  />
);

export type TableHeadProps = React.ThHTMLAttributes<HTMLTableCellElement>;

export const TableHead: React.FC<TableHeadProps> = ({ className, ...props }) => (
  <th
    className={clsx(
      "text-foreground h-10 px-2 text-left align-middle font-medium whitespace-nowrap [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]",
      className,
    )}
    {...props}
  />
);

export type TableCellProps = React.TdHTMLAttributes<HTMLTableCellElement>;

export const TableCell: React.FC<TableCellProps> = ({ className, ...props }) => (
  <td
    className={clsx(
      "p-2 align-middle whitespace-nowrap [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]",
      className,
    )}
    {...props}
  />
);

export type TableCaptionProps = React.HTMLAttributes<HTMLElement>;

export const TableCaption: React.FC<TableCaptionProps> = ({ className, ...props }) => (
  <caption
    className={clsx("text-muted-foreground mt-4 text-sm", className)}
    {...props}
  />
);
