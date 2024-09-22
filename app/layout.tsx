import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

const tanker = localFont({
  src: "./fonts/Tanker-Regular.otf",
  variable: "--font-tanker",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Wedding Event Templates",
  description: "customizable templates for your next big event",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${tanker.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
