import { NextPage } from "next";
import memberGroupsData from "../../data/member-groups.json";
import HistorySection from "../components/HistorySection";
import MemberGroupsSection from "../components/MemberGroupsSection";
import type { MemberGroup } from "../../types/members";
import { Header } from "../components/Header";
import { Divider } from "../components/Divider";
import { Footer } from "../components/Footer";
import Link from "next/link";
import EventSection from "../components/EventSection";

const memberGroups: MemberGroup[] = memberGroupsData;

const IndexPage: NextPage = () => {
  return (
    <>
      <section>
        <Header />
        <p>
          <strong>Animāre（アニマーレ）</strong> (pronounced ah-nee-MAH-ray)
          comes from the Latin &quot;to give life,&quot; which is also the root
          of the word &quot;animation.&quot; This project sets anime creation as
          a key application domain to develop foundational techniques for
          malleable tools and realize an environment where anime creators and
          tool developers can form reciprocal relationships. (
          <Link href="/">日本語はこちらです。</Link>)
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
