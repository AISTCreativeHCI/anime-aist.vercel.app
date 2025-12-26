import { FC } from "react";
import historyItemsData from "../../data/history.json";
import type { HistoryItem } from "../../types/history";

const historyItems: HistoryItem[] = historyItemsData;

interface HistorySectionProps {
  language?: "en" | "ja";
}

const HistorySection: FC<HistorySectionProps> = ({ language }) => (
  <section id="history">
    <h2>{language === "ja" ? "更新履歴" : "Updates"}</h2>
    <ul>
      {historyItems.map(({ date, description, en }, index) => (
        <li key={`${index}_${date}`}>
          <strong>
            {language === "ja"
              ? date
              : new Date(date).toLocaleDateString("en-US")}
          </strong>{" "}
          {language === "ja" || !en ? description : en.description}
        </li>
      ))}
    </ul>
  </section>
);

export default HistorySection;
