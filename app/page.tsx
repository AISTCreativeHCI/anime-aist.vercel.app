import { NextPage } from "next";
import memberGroupsData from "../data/member-groups.json";
import HistorySection from "./components/HistorySection";
import MemberGroups from "./components/MemberGroups";
import type { MemberGroup } from "../types/members";

const memberGroups: MemberGroup[] = memberGroupsData;

const IndexPage: NextPage = () => {
  return (
    <>
      <section>
        <header>
          <h1>
            <img
              src="/animare_logotype_en-ja.svg"
              alt="Animāre（アニマーレ）"
            />
          </h1>
        </header>
        <p>
          <strong>Animāre（アニマーレ）</strong>
          はラテン語で「命を吹き込む」を意味し、アニメーションの語源でもあります。アニメ（"ani"-me）づくりを対象に、しなやかなツ
          ール群（"ma"-lleable
          tools）の基盤技術を研究開発し、アニメ制作に関わる多様なクリエータとツール開発者が互いに影響を与え
          合う関係（"re"-ciprocal
          relationship）を築ける環境の実現を目指すプロジェクトです。
        </p>
      </section>
      <div className="image">
        <img src="/animare_signature-stroke_A.svg" alt="---" />
      </div>
      <MemberGroups groups={memberGroups} />
      <div className="image">
        <img src="/animare_signature-stroke_B.svg" alt="---" />
      </div>
      <HistorySection />
      <section>
        <footer>
          <div className="cronos">
            <p>
              本プロジェクトは、
              <a href="https://www.jst.go.jp/kisoken/cronos/">
                JST CRONOS
              </a>{" "}
              2025年度採択課題「高融合性ツール基盤技術によるアニメ共創環境の実現」
              （JPMJCS25K1）の支援を受けたものです。
            </p>
            <img src="/cronos.svg" alt="[JST CRONOS ロゴ]" />
          </div>
          <p className="copyright">
            &copy; 2025 Animāre（アニマーレ） &mdash; AIST, OLM Digital Inc.,
            The University of Tokyo
          </p>
        </footer>
      </section>
    </>
  );
};

export default IndexPage;
