type Props = {
  title: string;
  desc: string;
  status: "LIVE" | "OPEN" | "PLANNED";
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
        padding: "24px",
        borderRadius: "12px",
        display: "block",
      }}
    >
      <h3>{title}</h3>
      <p>{desc}</p>
      <strong>{status}</strong>
    </a>
  );
}
