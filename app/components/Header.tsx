"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();

  const isKR = pathname.startsWith("/kr");
  const targetLocale = isKR ? "en" : "kr";

  const nextPath = pathname.replace(/^\/(kr|en)/, `/${targetLocale}`);

  return (
    <header className="w-full py-4 border-b border-slate-200">
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        <div className="font-semibold text-sm">
          SMILE AI GROUP
        </div>

        <Link
          href={nextPath}
          className="text-sm text-slate-600 hover:text-slate-900"
        >
          {isKR ? "EN" : "KR"}
        </Link>
      </div>
    </header>
  );
}
