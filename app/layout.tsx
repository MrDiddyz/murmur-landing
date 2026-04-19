import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Murmur — AI Agent Coordination Platform",
  description:
    "Murmur orchestrates intelligent agents across your stack. Topology-aware, state-driven, and built for production.",
  openGraph: {
    title: "Murmur — AI Agent Coordination Platform",
    description:
      "Orchestrate intelligent agents across your stack with Murmur.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
