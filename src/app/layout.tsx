import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const octoberlbold = localFont({
  src: "./fonts/OctoberL-Regular.otf",
  variable: "--font-october-l",
  weight: "100 900",
});
const octoberlreg = localFont({
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
        className={`${octoberlbold.variable} ${octoberlreg.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
