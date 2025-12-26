"use client";

import { FC, useEffect, useState } from "react";

import { useLanguage } from "./LanguageProvider";
import { useTheme } from "./ThemeProvider";

export const ThemeToggle: FC = () => {
  const { theme, toggleTheme } = useTheme();
  const { language } = useLanguage();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <button
      onClick={toggleTheme}
      className="theme toggle"
      aria-label={
        language === "ja"
          ? `テーマを${theme === "light" ? "ダーク" : "ライト"}モードに切り替え`
          : `Switch to ${theme === "light" ? "dark" : "light"} mode`
      }
    >
      {theme === "light" ? "🌙" : "☀️"}
    </button>
  );
};
