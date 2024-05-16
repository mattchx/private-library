"use client"
import { ThemeProvider, createTheme } from "@mui/material/styles";
 
const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <ThemeProvider theme={darkTheme}>
        {children}
      </ThemeProvider>
    </>
  );
}
