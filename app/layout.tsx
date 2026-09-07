import type { Metadata } from 'next';
import { Space_Grotesk, JetBrains_Mono } from 'next/font/google';
import { NextIntlClientProvider } from 'next-intl';
import pk from '../package.json';
import { MY_DETAILS } from '@/constants/my-details';
import './globals.css';
import { Header } from '@/components/common/layout/header';
import { Footer } from '@/components/common/layout/footer';
import { getLocale, setRequestLocale } from 'next-intl/server';

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

type Props = Readonly<{
  children: React.ReactNode;
}>;

export default async function LocaleLayout({
  children,
}: Props) {
  const locale = await getLocale();
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
