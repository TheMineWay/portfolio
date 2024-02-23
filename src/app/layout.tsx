import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { PrimeReactProvider } from "primereact/api";
import "primereact/resources/themes/lara-dark-purple/theme.css";
import "./globals.pcss";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Joel Campos",
  description: "Joel Campos portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <PrimeReactProvider>{children}</PrimeReactProvider>
      </body>
    </html>
  );
}
