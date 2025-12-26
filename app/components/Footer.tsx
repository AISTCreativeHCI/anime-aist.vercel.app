import { FC } from "react";

interface FooterProps {
  language?: "en" | "ja";
}

export const Footer: FC<FooterProps> = ({ language }) => (
  <footer>
    <div className="cronos">
      {language === "ja" ? (
        <p>
          本プロジェクトは、
          <a href="https://www.jst.go.jp/kisoken/cronos/">JST CRONOS</a>{" "}
          2025年度採択課題「高融合性ツール基盤技術によるアニメ共創環境の実現」
          （JPMJCS25K1）の支援を受けたものです。
        </p>
      ) : (
        <p>
          This project is supported by JST CRONOS (JPMJCS25K1), Foundational
          Techniques for Malleable Tools for a Reciprocal Anime Co-creation
          Environment.
        </p>
      )}
      <img
        src="/cronos.svg"
        alt={language === "ja" ? "[JST CRONOS ロゴ]" : "[JST CRONOS logo]"}
        className="light"
      />
      <img
        src="/cronos-monochrome.svg"
        alt={language === "ja" ? "[JST CRONOS ロゴ]" : "[JST CRONOS logo]"}
        className="dark"
      />
    </div>
    <p className="copyright">
      &copy; 2025 Animāre{language === "ja" && "（アニマーレ）"} &mdash; AIST,
      OLM Digital Inc., The University of Tokyo
    </p>
  </footer>
);
