"use client";

import { FC, useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { useLanguage } from "./LanguageProvider";

export const LanguageToggle: FC = () => {
  const { language } = useLanguage();
  const router = useRouter();
  const pathname = usePathname();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  // Determine target path and language
  const isEnglish = pathname.startsWith("/en");
  const targetPath = isEnglish
    ? pathname.replace(/^\/en/, "") || "/"
    : `/en${pathname === "/" ? "" : pathname}`;

  return (
    <button
      onClick={() => router.push(targetPath)}
      className="language toggle"
      aria-label={
        language === "ja" ? "英語ページに切り替え" : "Switch to Japanese page"
      }
    >
      🌐
    </button>
  );
};
