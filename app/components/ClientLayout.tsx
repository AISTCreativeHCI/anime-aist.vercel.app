"use client";

import { ReactNode } from "react";

import { LanguageProvider } from "./LanguageProvider";
import { ThemeProvider } from "./ThemeProvider";
import { ThemeToggle } from "./ThemeToggle";

interface ClientLayoutProps {
  children: ReactNode;
  language?: "ja" | "en";
}

export function ClientLayout({ children, language = "ja" }: ClientLayoutProps) {
  return (
    <LanguageProvider initialLanguage={language}>
      <ThemeProvider>
        <ThemeToggle />
        {children}
      </ThemeProvider>
    </LanguageProvider>
  );
}
