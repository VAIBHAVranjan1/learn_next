import type { Metadata } from "next";
import {
  Geist,
  Geist_Mono,
  JetBrains_Mono,
  Press_Start_2P,
  Work_Sans,
} from "next/font/google";
import "./globals.css";

export const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
});

export const press = Press_Start_2P({
  subsets: ["latin"],
  variable: "--font-press-start",
  weight: "400",
});

export const worksans = Work_Sans({
  subsets: ["latin"],
  variable: "--font-work-sans",
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "YC Directory",
  description: "Pitch, Vote and Explore",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${jetbrains.variable} ${press.variable} ${worksans.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
