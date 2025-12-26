"use client";

import { FC, ReactNode } from "react";

import { LanguageProvider, useLanguage } from "./LanguageProvider";
import { LanguageToggle } from "./LanguageToggle";
import { ThemeProvider, useTheme } from "./ThemeProvider";
import { ThemeToggle } from "./ThemeToggle";

interface ClientLayoutProps {
  children: ReactNode;
  language?: "ja" | "en";
}

export const ClientLayout: FC<ClientLayoutProps> = ({
  children,
  language = "ja",
}) => {
  const languageFromContext = useLanguage();
  const theme = useTheme();
  return (
    <LanguageProvider initialLanguage={language}>
      <ThemeProvider>
        {!languageFromContext && <LanguageToggle />}
        {!theme && <ThemeToggle />}
        {children}
      </ThemeProvider>
    </LanguageProvider>
  );
};
