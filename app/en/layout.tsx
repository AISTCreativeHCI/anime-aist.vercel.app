import type { Metadata } from "next";
import { ReactNode } from "react";
import { ClientLayout } from "../components/ClientLayout";

const title = "Animāre | anime.pj.aist.go.jp";
const description =
  'Animāre (pronounced ah-nee-MAH-ray) comes from the Latin "to give life," which is also the root of the word "animation." This project sets anime creation as a key application domain to develop foundational techniques for malleable tools and realize an environment where anime creators and tool developers can form reciprocal relationships.';
const url = "https://anime.pj.aist.go.jp/en/";

export const metadata: Metadata = {
  title,
  description,

  icons: `${url}animare_icon_Aa@2x.png`,
  openGraph: {
    type: "website",
    title,
    siteName: title,
    description,
    url: `${url}en/`,
    images: {
      url: `${url}animare.png`,
      width: 1200,
      height: 630,
      alt: title,
    },
  },
};

export default function EnLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return <ClientLayout language="en">{children}</ClientLayout>;
}
