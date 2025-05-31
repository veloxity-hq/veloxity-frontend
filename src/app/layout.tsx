import type { Metadata } from "next";
import { Vollkorn } from "next/font/google";
import "./globals.css";

const vollkorn = Vollkorn({
  variable: "--font-vollkorn",
  subsets: ["latin", "cyrillic"],
});

export const metadata: Metadata = {
  title: "Veloxity",
  description: "Veloxity is a comprehensive project management app designed from the ground up with collaborative features in mind.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${vollkorn.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
