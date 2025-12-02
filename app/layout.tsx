import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Bucket Baddie — Viral Halal Wing Buckets",
  description:
    "Halal wings, tenders, and loaded fries in viral neon buckets with built-in sauce & phone holders. Eat, film, repeat.",
  keywords:
    "halal wings, houston food, viral bucket, food truck, halal chicken",
  openGraph: {
    title: "Bucket Baddie — Viral Halal Wing Buckets",
    description: "Halal wings, tenders, and loaded fries in viral neon buckets",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
