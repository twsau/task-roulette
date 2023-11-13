import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Hydrate } from "./Hydrate";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "task-roulette",
  description:
    "Leveraging uncertain rewards to hack your brain's reward system.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html className="dark" lang="en">
      <body className={inter.className}>
        {children}
        <Hydrate />
      </body>
    </html>
  );
}
