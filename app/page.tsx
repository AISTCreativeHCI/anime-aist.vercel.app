import { NextPage } from "next";
import memberGroupsData from "../data/member-groups.json";
import HistorySection from "./components/HistorySection";
import MemberGroupsSection from "./components/MemberGroupsSection";
import type { MemberGroup } from "../types/members";
import { Header } from "./components/Header";
import { Divider } from "./components/Divider";
import { Footer } from "./components/Footer";
import Link from "next/link";
import EventSection from "./components/EventSection";

const memberGroups: MemberGroup[] = memberGroupsData;

const IndexPage: NextPage = () => {
  return (
    <>
      <section>
        <Header />
        <p>
          <strong>Animāre（アニマーレ）</strong>
          はラテン語で「命を吹き込む」を意味し、アニメーションの語源でもあります。アニメ（"ani"-me）づくりを対象に、しなやかなツ
          ール群（"ma"-lleable
          tools）の基盤技術を研究開発し、アニメ制作に関わる多様なクリエータとツール開発者が互いに影響を与え
          合う関係（"re"-ciprocal
          relationship）を築ける環境の実現を目指すプロジェクトです。（
          <Link href="/en">English version of the web page is available.</Link>
          ）
        </p>
      </section>
      <Divider signature="A" />
      <EventSection />
      <Divider signature="B" />
      <MemberGroupsSection groups={memberGroups} />
      <Divider signature="C" />
      <HistorySection />
      <section>
        <Footer />
      </section>
    </>
  );
};

export default IndexPage;
