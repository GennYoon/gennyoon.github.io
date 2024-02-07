"use client";

import React from "react";
import { ThemeProvider as NextThemeProvider } from "next-themes";
import { ThemeProviderProps } from "next-themes/dist/types";

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  const [mounted, setMounted] = React.useState<boolean>(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <></>;
  }

  return <NextThemeProvider {...props}>{children}</NextThemeProvider>;
}
