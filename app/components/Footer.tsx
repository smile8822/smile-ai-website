export default function Footer() {
  return (
    <footer
      style={{
        marginTop: 120,
        padding: "40px 24px",
        borderTop: "1px solid #e5e7eb",
        textAlign: "center",
        color: "#6b7280",
        fontSize: 14,
      }}
    >
      © {new Date().getFullYear()} SMILE AI GROUP
    </footer>
  );
}
