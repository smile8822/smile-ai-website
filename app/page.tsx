import { redirect } from "next/navigation";

export default function RootPage() {
  redirect("/en"); // 기본 언어
}
