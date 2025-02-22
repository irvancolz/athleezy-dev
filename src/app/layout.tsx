import type { Metadata } from "next";
import "./globals.css";
import { Footer, Topnav } from "@/components/ui";

export const metadata: Metadata = {
  title: "ATHLEEZY",
  description:
    "Play, learn, and belong in a community built by players, for players. It's all about sharing passion, improving skills, and growing together.",
  icons: "/soccer-ball.svg",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {/* <Topnav /> */}
        {children}

        <Footer />
      </body>
    </html>
  );
}
