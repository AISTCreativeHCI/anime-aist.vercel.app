"use client";

import { FC, ReactNode } from "react";

import { LanguageProvider } from "./LanguageProvider";
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
  const theme = useTheme();
  return (
    <LanguageProvider initialLanguage={language}>
      <ThemeProvider>
        {!theme && <ThemeToggle />}
        {children}
      </ThemeProvider>
    </LanguageProvider>
  );
};
