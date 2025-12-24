"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();
  const isKr = pathname.startsWith("/kr");

  const switchLocalePath = isKr
    ? pathname.replace("/kr", "/en")
    : pathname.replace("/en", "/kr");

  return (
    <header style={{ padding: "20px", borderBottom: "1px solid #eee" }}>
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        {/* LOGO */}
        <div>
          <strong>SMILE AI GROUP</strong>
          <div style={{ fontSize: "12px", opacity: 0.6 }}>Operated by KAIO</div>
        </div>

        {/* LANGUAGE SWITCH */}
        <nav>
          <Link href={switchLocalePath}>{isKr ? "EN" : "KR"}</Link>
        </nav>
      </div>
    </header>
  );
}
