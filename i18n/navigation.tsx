"use client";

import type React from "react";
import type { UrlObject } from "node:url";
import NextLink from "next/link";
import type { LinkProps } from "next/link";
import { useLocale } from "next-intl";

type Props = Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, keyof LinkProps> &
  LinkProps & { children?: React.ReactNode };

function withLocale(href: string | UrlObject, locale: string): string | UrlObject {
  if (typeof href === "string") {
    if (/^(https?:\/\/|\/\/|#|mailto:|tel:)/.test(href)) return href;
    const path = href.startsWith("/") ? href : `/${href}`;
    return `/${locale}${path}`;
  }
  const pathname = href.pathname ?? "";
  const normalizedPathname = pathname.startsWith("/") ? pathname : `/${pathname}`;
  return { ...href, pathname: `/${locale}${normalizedPathname}` };
}

export const Link: React.FC<Props> = ({ href, ...props }) => {
  const locale = useLocale();
  return <NextLink href={withLocale(href, locale)} {...props} />;
};
