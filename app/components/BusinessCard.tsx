type Props = {
  title: string;
  desc: string;
  status: string;
  href: string;
};

export default function BusinessCard({
  title,
  desc,
  status,
  href,
}: Props) {
  return (
    <a
      href={href}
      style={{
        border: "1px solid #e5e7eb",
        borderRadius: 8,
        padding: 16,
        textDecoration: "none",
        color: "inherit",
        display: "block",
      }}
    >
      <h3>{title}</h3>
      <p style={{ marginTop: 8, color: "#6b7280" }}>{desc}</p>
      <p style={{ marginTop: 12, fontWeight: 600 }}>{status}</p>
    </a>
  );
}
