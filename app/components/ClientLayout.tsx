"use client";

import { ReactNode } from "react";

import { LanguageProvider } from "./LanguageProvider";
import { ThemeProvider } from "./ThemeProvider";
import { ThemeToggle } from "./ThemeToggle";

export function ClientLayout({ children }: { children: ReactNode }) {
  return (
    <LanguageProvider>
      <ThemeProvider>
        <ThemeToggle />
        {children}
      </ThemeProvider>
    </LanguageProvider>
  );
}
