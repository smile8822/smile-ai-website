import fs from "fs";
import path from "path";

export async function getMessages(locale: string) {
  // favicon, robots, sitemap 등 방어
  if (!/^[a-z]{2}$/.test(locale)) {
    return {};
  }

  const messagesPath = path.join(
    process.cwd(),
    "app",
    "messages",
    `${locale}.json`
  );

  if (!fs.existsSync(messagesPath)) {
    throw new Error(`Missing messages file: ${locale}.json`);
  }

  const file = fs.readFileSync(messagesPath, "utf-8");
  return JSON.parse(file);
}
