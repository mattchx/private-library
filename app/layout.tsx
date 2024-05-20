'use client'
import { Inter } from "next/font/google";
import { NavLinks } from './ui/nav-links'
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { usePathname } from 'next/navigation'
import CssBaseline from '@mui/material/CssBaseline';

const inter = Inter({ subsets: ["latin"] });

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname()
  return (
    <html lang="en">
      <body suppressHydrationWarning={true} className={inter.className}>
        <ThemeProvider theme={darkTheme}>
          <CssBaseline />
          {pathname != "/" && <NavLinks />}
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}