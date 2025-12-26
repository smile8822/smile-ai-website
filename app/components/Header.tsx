"use client";

import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname(); // 예: /ko/business/kaio-trading
  const isEn = pathname.startsWith("/en");
  const currentLocale = isEn ? "en" : "ko";
  const otherLocale = isEn ? "ko" : "en";

  const switchHref = pathname.replace(`/${currentLocale}`, `/${otherLocale}`);

  return (
    <header style={{ padding: "16px 24px", borderBottom: "1px solid #e5e7eb" }}>
      <nav
        style={{
          maxWidth: 1100,
          margin: "0 auto",
          display: "flex",
          gap: 24,
          fontWeight: 800,
          alignItems: "center",
        }}
      >
        <a href={`/${currentLocale}`}>Home</a>
        <a href={`/${currentLocale}/roadmap`}>Roadmap</a>
        <a href={`/${currentLocale}/status`}>Status</a>

        <a href={switchHref} style={{ marginLeft: "auto" }}>
          {currentLocale === "ko" ? "EN" : "KO"}
        </a>
      </nav>
    </header>
  );
}
