"use client";

import { FC } from "react";
import { useLanguage } from "./LanguageProvider";

export const Header: FC = () => {
  const { language } = useLanguage();

  return (
    <header>
      <h1>
        <img
          src="/animare_logotype_en-ja.svg"
          alt={`Animāre${language === "ja" ? "（アニマーレ）" : ""}`}
        />
      </h1>
    </header>
  );
};
