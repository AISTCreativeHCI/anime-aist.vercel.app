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

    <footer>
      <p>
        本プロジェクトは、
        <a href="https://www.jst.go.jp/kisoken/cronos/">JST CRONOS</a>{" "}
        2025年度採択課題「高融合性ツール基盤技術によるアニメ共創環境の実現」
        （JPMJCS25K1）の支援を受けたものです。
      </p>
      <p className="copyright">
        &copy; 2025 Animāre（アニマーレ） &mdash; AIST, OLM Digital Inc., The
        University of Tokyo
      </p>
    </footer>
  </section>
);

export default HistorySection;
