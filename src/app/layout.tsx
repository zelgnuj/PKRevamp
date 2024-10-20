import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/OctoberL-Regular.otf",
  variable: "--font-october-l",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/OctoberL-Regular.otf",
  variable: "--font-october-l",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Paykit Reavamp",
  description: "by Lam Nguyen",
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
