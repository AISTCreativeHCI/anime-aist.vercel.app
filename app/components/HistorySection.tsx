import historyItemsData from "../../data/history.json";
import type { HistoryItem } from "../../types/history";

const historyItems: HistoryItem[] = historyItemsData;

const HistorySection = () => (
  <section id="history">
    <h2>更新履歴</h2>
    <ul>
      {historyItems.map(({ date, description }) => (
        <li key={`${date}-${description}`}>
          <strong>{date}</strong> {description}
        </li>
      ))}
    </ul>
  </section>
);

export default HistorySection;
