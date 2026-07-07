import type { Metadata } from 'next';
import { Space_Grotesk, JetBrains_Mono } from 'next/font/google';
import { NextIntlClientProvider, hasLocale } from 'next-intl';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';
import pk from '../../package.json';
import { MY_DETAILS } from '@/constants/my-details';
import '../globals.css';
import { Header } from '@/components/common/layout/header';
import { Footer } from '@/components/common/layout/footer';
import { Locale } from '@/i18n/locale';
import { setRequestLocale } from 'next-intl/server';

const spaceGrotesk = Space_Grotesk({
  variable: '--font-space-grotesk',
  weight: ['300', '400', '500', '600', '700'],
  subsets: ['latin'],
});

const jetBrainsMono = JetBrains_Mono({
  variable: '--font-jetbrains-mono',
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: MY_DETAILS.fullName,
  description: pk.description,
};

export function generateStaticParams() {
  return Object.values(Locale).map((locale) => ({
    locale,
  }))
}

type Props = Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>;

export default async function LocaleLayout({
  children,
  params,
}: Props) {
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  setRequestLocale(locale);

  return (
    <html lang={locale}>
      <body className={`${spaceGrotesk.variable} ${jetBrainsMono.variable} antialiased bg-grid`}>
        <NextIntlClientProvider>
          <Header/>
          <main>{children}</main>
          <Footer/>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
