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

const bitter = localFont({
  src: "./fonts/Bitter-Regular.otf",
  variable: "--font-bitter",
  weight: "100 900",
});

const bitterBold = localFont({
  src: "./fonts/Bitter-Bold.otf",
  variable: "--font-bitter-bold",
  weight: "100 900",
});

const greatVibes = localFont({
  src: "./fonts/GreatVibes-Regular.ttf",
  variable: "--font-greatVibes",
  weight: "100 900",
});

const dancingScriptBold = localFont({
  src: "./fonts/DancingScript-Bold.otf",
  variable: "--font-dancingBold",
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
        className={`${geistSans.variable} ${geistMono.variable} ${tanker.variable} ${bitter.variable} ${greatVibes.variable} ${bitterBold.variable} ${dancingScriptBold.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
