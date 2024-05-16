import type { Metadata } from "next";
import { Inter } from "next/font/google";

import { NavLinks } from './ui/nav-links'

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Private Library",
  description: "An app to effortlessly organize your books.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NavLinks />
        {children}
      </body>
    </html>
  );
}
