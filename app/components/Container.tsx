import { ReactNode } from "react";

export default function Container({ children }: { children: ReactNode }) {
  return (
    <main style={{ maxWidth: "1200px", margin: "0 auto", padding: "40px" }}>
      {children}
    </main>
  );
}
