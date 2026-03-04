import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Captus — Predictive Risk Intelligence",
  description:
    "Predictive risk intelligence platform for construction owners that identifies financial and operational risk before it materializes.",
  openGraph: {
    title: "Captus — Predictive Risk Intelligence",
    description: "Predictive risk intelligence platform for construction owners that identifies financial and operational risk before it materializes.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className="antialiased font-sans">{children}</body>
    </html>
  );
}
