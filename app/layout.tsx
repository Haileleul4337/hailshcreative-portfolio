import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Hailsh Creative | DMV Photography",
  description: "Portrait, graduation, event, and lifestyle photography by Hailsh Creative in Washington, DC, Maryland, and Virginia.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
