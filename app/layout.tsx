import "./globals.css";
import Link from "next/link";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-[#0e1117] text-gray-200">
        {/* HEADER */}
        <header className="fixed top-0 left-0 w-full bg-[#0e1117]/90 backdrop-blur border-b border-gray-800 z-50">
          <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
            <span className="font-bold tracking-wide">
              SMILE AI GROUP
            </span>

            <nav className="flex items-center gap-6 text-sm">
              <Link href="/en/business">Business</Link>
              <Link href="/en/roadmap">Roadmap</Link>
              <Link href="/en/status">Status</Link>

              <div className="flex gap-3 ml-6">
                <a href="/en">EN</a>
                <a href="/ko">KR</a>
                <a href="/id">ID</a>
              </div>
            </nav>
          </div>
        </header>

        {/* CONTENT */}
        <div className="pt-24">{children}</div>
      </body>
    </html>
  );
}
