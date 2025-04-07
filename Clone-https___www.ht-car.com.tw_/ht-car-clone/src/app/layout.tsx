import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/ui/navbar";
import { Footer } from "@/components/ui/footer";

export const metadata: Metadata = {
  title: "紘騰汽車大樓隔熱紙 - 專業隔熱紙安裝服務",
  description: "紘騰汽車大樓隔熱紙擁有 20 年專業隔熱紙施工經驗，提供高品質汽車隔熱紙、大樓隔熱紙、隔熱紙安裝、貼隔熱紙、住家隔熱紙安裝 等服務。",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="zh-TW">
      <body className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
