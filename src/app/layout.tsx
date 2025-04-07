import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "@/app/globals.css";
import ClientBody from "@/app/ClientBody"; // Fixed import for ClientBody
import { cn } from "@/lib/utils";

import { Anton, Noto_Sans_TC } from "next/font/google";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "紘騰汽車大樓隔熱紙 - 台北隔熱紙安裝,隔熱紙專家",
  description: "紘騰汽車大樓隔熱紙擁有 20 年專業隔熱紙施工經驗，提供高品質汽車隔熱紙、大樓隔熱紙、隔熱紙安裝、貼隔熱紙、住家隔熱紙安裝 等服務。",
  icons: {
    icon: "/favicon.ico",
  },
}

// Load Chinese font
const notoSansTC = Noto_Sans_TC({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-noto-sans",
})

// Load Anton font for English titles
const anton = Anton({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-anton",
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="zh-TW" suppressHydrationWarning>
      <body
        className={cn(
          "min-h-screen font-sans antialiased",
          notoSansTC.variable,
          anton.variable
        )}
      >
        <ClientBody>{children}</ClientBody>
      </body>
    </html>
  )
}
