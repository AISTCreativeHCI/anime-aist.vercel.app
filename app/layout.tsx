import type { Metadata } from "next";
import { Geist, Noto_Sans_JP } from "next/font/google";
import { ReactNode } from "react";
import Script from "next/script";
import "./globals.css";
import { ClientLayout } from "./components/ClientLayout";

const geist = Geist({
  variable: "--font-geist",
  subsets: ["latin"],
});

// Noto Sans JP exposes only the "latin" subset flag in next/font; the full
// Japanese glyph set is still delivered by the underlying font.
const notoSansJp = Noto_Sans_JP({
  variable: "--font-noto-sans-jp",
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
    <html lang="ja" suppressHydrationWarning>
      <body className={`${geist.variable} ${notoSansJp.variable} antialiased`}>
        <Script
          id="theme-script"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var theme = localStorage.getItem('theme');
                  if (theme === 'light' || theme === 'dark') {
                    document.documentElement.setAttribute('data-theme', theme);
                  } else {
                    var prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
                    document.documentElement.setAttribute('data-theme', prefersDark ? 'dark' : 'light');
                  }
                } catch (e) {}
              })();
            `,
          }}
        />
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
