import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Fix My Portugal Trip",
  description:
    "Portugal itinerary repair for North Americans who want a realistic, non-generic trip."
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-sans">{children}</body>
    </html>
  );
}
