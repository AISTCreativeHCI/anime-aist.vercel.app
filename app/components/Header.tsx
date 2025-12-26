import { FC } from "react";

interface HeaderProps {
  language: "en" | "ja";
}

export const Header: FC<HeaderProps> = ({ language }) => (
  <header>
    <h1>
      <img
        src="/animare_logotype_en-ja.svg"
        alt={`Animāre${language === "ja" ? "（アニマーレ）" : ""}`}
      />
    </h1>
  </header>
);
