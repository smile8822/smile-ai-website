import "./globals.css";
export const metadata = {
  title: "SMILE AI GROUP",
  description: "AI-Driven Operating Company, Operated by KAIO"
};
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (<html lang="en"><body className="text-white">{children}</body></html>);
}
