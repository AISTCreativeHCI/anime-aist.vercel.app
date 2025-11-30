import type { Metadata } from "next";
import { Geist } from "next/font/google";
import { ReactNode } from "react";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const title = "Animāre（アニマーレ） | anime.pj.aist.go.jp";
const description =
  "Animāre（アニマーレ）はアニメ（“ani”-me）づくりを対象に、しなやかなツール群（“ma”-lleable tools）の基盤技術を研究開発し、アニメ制作に関わる多様なクリエータとツール開発者が互いに影響を与え合う関係（“re”-ciprocal relationship）を築ける環境の実現を目指すプロジェクトです。";
const url = "https://anime.pj.aist.go.jp/";

export const metadata: Metadata = {
  title,
  description,

  icons: `${url}animare_icon_Aa@2x.png`,
  openGraph: {
    type: "website",
    title,
    siteName: title,
    description,
    url,
    images: {
      url: `${url}animare.png`,
      width: 1200,
      height: 630,
      alt: title,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className={`${geistSans.variable} antialiased`}>{children}</body>
    </html>
  );
}
