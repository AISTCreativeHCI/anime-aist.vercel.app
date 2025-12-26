"use client";

import { FC } from "react";
import historyItemsData from "../../data/history.json";
import type { HistoryItem } from "../../types/history";
import Link from "next/link";
import { useLanguage } from "./LanguageProvider";

const historyItems: HistoryItem[] = historyItemsData;

const HistorySection: FC = () => {
  const { language } = useLanguage();

  return (
    <section id="history">
      <h2>{language === "ja" ? "更新履歴" : "Updates"}</h2>
      <ul>
        {historyItems.map(({ date, description, link, en }, index) => (
          <li key={`${index}_${date}`}>
            <strong>
              {language === "ja"
                ? date
                : new Date(date).toLocaleDateString("en-US")}
            </strong>{" "}
            {language === "ja" || !en ? description : en.description}
            {link && (
              <>
                {" "}
                [<Link href={link}>{language === "ja" ? "リンク" : "Link"}</Link>]
              </>
            )}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default HistorySection;
