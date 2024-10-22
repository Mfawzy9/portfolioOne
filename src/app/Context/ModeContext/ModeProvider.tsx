"use client";
import { setCookie } from "cookies-next";
import { ThemeProvider, useTheme } from "next-themes";
import type { ThemeProviderProps } from "next-themes/dist/types";
import { useEffect } from "react";

function ModeProvider({ children }: ThemeProviderProps) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="dark"
      // enableSystem
      // enableColorScheme
    >
      <AppThemeProviderHelper />
      {children}
    </ThemeProvider>
  );
}

function AppThemeProviderHelper() {
  const { theme } = useTheme();

  useEffect(() => {
    if (theme) {
      setCookie("__theme__", theme, {
        expires: new Date(Date.now() + 1000 * 60 * 60 * 24 * 365),
        path: "/",
        sameSite: "lax",
        secure: true,
      });
    }
  }, [theme]);

  return null;
}

export default ModeProvider;
