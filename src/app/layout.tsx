import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ember Kitchen | Premium Casual Dining, Melbourne",
  description: "Modern Australian cuisine with wood-fired influence. Premium casual dining experience in Melbourne.",
  keywords: "restaurant, Melbourne, dining, modern Australian, wood-fired",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-full flex flex-col antialiased">{children}</body>
    </html>
  );
}
