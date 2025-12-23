export default function HomeEN() {
  return (
    <main
      style={{
        minHeight: "100vh",
        background:
          "radial-gradient(1200px 600px at 20% 10%, rgba(59,130,246,0.15), transparent 60%), radial-gradient(900px 500px at 80% 20%, rgba(34,197,94,0.12), transparent 55%), linear-gradient(180deg, #0b1020 0%, #070a14 100%)",
        color: "#e5e7eb",
      }}
    >
      <div style={{ maxWidth: 980, margin: "0 auto", padding: "56px 20px" }}>
        {/* Top Bar */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: 12,
            marginBottom: 24,
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <div
              style={{
                width: 40,
                height: 40,
                borderRadius: 12,
                background:
                  "linear-gradient(135deg, rgba(59,130,246,0.9), rgba(34,197,94,0.9))",
                boxShadow: "0 10px 30px rgba(0,0,0,0.35)",
              }}
              aria-label="SMILE AI GROUP mark"
            />
            <div>
              <div style={{ fontWeight: 800, letterSpacing: 0.2 }}>
                SMILE AI GROUP
              </div>
              <div style={{ fontSize: 13, opacity: 0.75 }}>
                AI-driven Co-Growth Platform
              </div>
            </div>
          </div>

          <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
            <a href="/en/business" style={navLinkStyle}>
              Business
            </a>
            <a href="/en/roadmap" style={navLinkStyle}>
              Roadmap
            </a>
            <a href="/en/status" style={navLinkStyle}>
              Status
            </a>
          </div>
        </div>

        {/* Hero */}
        <section
          style={{
            border: "1px solid rgba(255,255,255,0.10)",
            background: "rgba(255,255,255,0.04)",
            borderRadius: 18,
            padding: "34px 22px",
            boxShadow: "0 24px 60px rgba(0,0,0,0.35)",
            backdropFilter: "blur(10px)",
          }}
        >
          <div style={{ maxWidth: 760 }}>
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                padding: "8px 12px",
                borderRadius: 999,
                border: "1px solid rgba(255,255,255,0.12)",
                background: "rgba(0,0,0,0.25)",
                fontSize: 13,
                opacity: 0.9,
                marginBottom: 16,
              }}
            >
              <span
                style={{
                  width: 8,
                  height: 8,
                  borderRadius: 999,
                  background: "#22c55e",
                  boxShadow: "0 0 18px rgba(34,197,94,0.75)",
                }}
              />
              Live operations started · Step-by-step public release
            </div>

            <h1 style={{ fontSize: 44, lineHeight: 1.1, margin: "8px 0 12px" }}>
              A transparent platform where AI works,
              <span style={{ color: "#93c5fd" }}> and growth is shared.</span>
            </h1>

            <p style={{ fontSize: 16, lineHeight: 1.6, opacity: 0.85 }}>
              SMILE AI GROUP is building an AI-driven ecosystem designed for
              transparency, automation, and long-term co-growth. We publish
              progress as operations evolve.
            </p>

            <div style={{ display: "flex", gap: 12, flexWrap: "wrap", marginTop: 18 }}>
              <a href="/en/roadmap" style={primaryBtnStyle}>
                View Roadmap
              </a>
              <a href="/en/status" style={secondaryBtnStyle}>
                See Live Status
              </a>
            </div>
          </div>

          {/* Stats Cards */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
              gap: 14,
              marginTop: 26,
            }}
          >
            <MiniCard title="CORE Supply (Fixed)" value="1,000,000" note="No additional issuance" />
            <MiniCard title="Distribution Rule" value="5 : 5" note="Company 50 / Members 50" />
            <MiniCard title="On-chain Direction" value="Web3" note="Decentralized / Transparent" />
          </div>
        </section>

        {/* What to explore */}
        <section style={{ marginTop: 30 }}>
          <h2 style={{ fontSize: 18, margin: "0 0 12px" }}>Explore</h2>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
              gap: 14,
            }}
          >
            <FeatureCard
              title="Business"
              desc="What we are building and how the ecosystem connects."
              href="/en/business"
              badge="Structure"
            />
            <FeatureCard
              title="Roadmap"
              desc="A live record of phases: done, in progress, planned."
              href="/en/roadmap"
              badge="Progress"
            />
            <FeatureCard
              title="Status"
              desc="Operational dashboard showing what is running now."
              href="/en/status"
              badge="Live"
            />
          </div>
        </section>

        {/* Footer */}
        <footer
          style={{
            marginTop: 44,
            paddingTop: 18,
            borderTop: "1px solid rgba(255,255,255,0.10)",
            opacity: 0.75,
            fontSize: 13,
            display: "flex",
            justifyContent: "space-between",
            gap: 12,
            flexWrap: "wrap",
          }}
        >
          <div>© SMILE AI GROUP. All rights reserved.</div>
          <div>CORE Supply: 1,000,000 (Fixed) · Rule: 5:5 · Web3 Direction</div>
        </footer>
      </div>
    </main>
  );
}

function MiniCard({
  title,
  value,
  note,
}: {
  title: string;
  value: string;
  note: string;
}) {
  return (
    <div
      style={{
        border: "1px solid rgba(255,255,255,0.10)",
        borderRadius: 14,
        padding: "14px 14px",
        background: "rgba(0,0,0,0.25)",
      }}
    >
      <div style={{ fontSize: 13, opacity: 0.75 }}>{title}</div>
      <div style={{ fontSize: 22, fontWeight: 800, marginTop: 6 }}>{value}</div>
      <div style={{ fontSize: 13, opacity: 0.75, marginTop: 6 }}>{note}</div>
    </div>
  );
}

function FeatureCard({
  title,
  desc,
  href,
  badge,
}: {
  title: string;
  desc: string;
  href: string;
  badge: string;
}) {
  return (
    <a
      href={href}
      style={{
        textDecoration: "none",
        color: "#e5e7eb",
        border: "1px solid rgba(255,255,255,0.10)",
        borderRadius: 16,
        padding: "16px 16px",
        background: "rgba(255,255,255,0.04)",
        display: "block",
        transition: "transform 120ms ease",
      }}
    >
      <div
        style={{
          display: "inline-flex",
          padding: "6px 10px",
          borderRadius: 999,
          border: "1px solid rgba(255,255,255,0.12)",
          background: "rgba(0,0,0,0.25)",
          fontSize: 12,
          opacity: 0.85,
          marginBottom: 10,
        }}
      >
        {badge}
      </div>
      <div style={{ fontSize: 18, fontWeight: 800 }}>{title}</div>
      <div style={{ marginTop: 8, opacity: 0.8, lineHeight: 1.5 }}>{desc}</div>
      <div style={{ marginTop: 12, fontSize: 13, opacity: 0.9 }}>
        Open → <span style={{ color: "#93c5fd" }}>{href}</span>
      </div>
    </a>
  );
}

const navLinkStyle: React.CSSProperties = {
  textDecoration: "none",
  color: "#e5e7eb",
  fontSize: 13,
  padding: "8px 10px",
  borderRadius: 10,
  border: "1px solid rgba(255,255,255,0.10)",
  background: "rgba(0,0,0,0.20)",
};

const primaryBtnStyle: React.CSSProperties = {
  textDecoration: "none",
  color: "#0b1020",
  fontWeight: 800,
  padding: "10px 14px",
  borderRadius: 12,
  background: "linear-gradient(135deg, #93c5fd, #22c55e)",
  boxShadow: "0 16px 40px rgba(0,0,0,0.35)",
};

const secondaryBtnStyle: React.CSSProperties = {
  textDecoration: "none",
  color: "#e5e7eb",
  fontWeight: 700,
  padding: "10px 14px",
  borderRadius: 12,
  border: "1px solid rgba(255,255,255,0.12)",
  background: "rgba(0,0,0,0.25)",
};
