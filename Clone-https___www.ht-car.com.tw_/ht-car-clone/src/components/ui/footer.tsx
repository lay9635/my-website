'use client';

import Image from 'next/image';
import Link from 'next/link';

export function Footer() {
  return (
    <footer className="bg-black text-white pt-10 pb-4">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between pb-8">
          <div className="mb-8 md:mb-0">
            <Link href="/" className="inline-block">
              <Image
                src="/images/footer-logo.png"
                alt="紘騰汽車大樓隔熱紙"
                width={200}
                height={60}
                className="object-contain"
              />
            </Link>
            <div className="mt-6 space-y-2 text-sm text-gray-300">
              <p className="flex items-center">
                <span className="w-24">TEL：</span>0229680379
              </p>
              <p className="flex items-center">
                <span className="w-24">PHONE：</span>0972893059
              </p>
              <p className="flex items-center">
                <span className="w-24">統編：</span>87495269
              </p>
              <p className="flex items-center">
                <span className="w-24">EMAIL：</span>btx909@gmail.com
              </p>
              <p className="flex items-center">
                <span className="w-24">ADD：</span>新北市板橋區中正路325巷7號
              </p>
            </div>
            <div className="mt-4 flex space-x-3">
              <a
                href="https://www.facebook.com/profile.php?id=100063743275863"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-red-600 transition-colors duration-200"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" className="w-5 h-5 fill-white">
                  <path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z" />
                </svg>
              </a>
              <a
                href="https://line.me/ti/p/c1qBSLTrwo"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-red-600 transition-colors duration-200"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="w-5 h-5 fill-white">
                  <path d="M272.1 204.2v71.1c0 1.8-1.4 3.2-3.2 3.2h-11.4c-1.1 0-2.1-.6-2.6-1.3l-32.6-44v42.2c0 1.8-1.4 3.2-3.2 3.2h-11.4c-1.8 0-3.2-1.4-3.2-3.2v-71.1c0-1.8 1.4-3.2 3.2-3.2H219c1 0 2.1.5 2.6 1.4l32.6 44v-42.2c0-1.8 1.4-3.2 3.2-3.2h11.4c1.8-.1 3.3 1.4 3.3 3.1zm-82-3.2h-11.4c-1.8 0-3.2 1.4-3.2 3.2v71.1c0 1.8 1.4 3.2 3.2 3.2h11.4c1.8 0 3.2-1.4 3.2-3.2v-71.1c0-1.7-1.4-3.2-3.2-3.2zm-27.5 59.6h-31.1v-56.4c0-1.8-1.4-3.2-3.2-3.2h-11.4c-1.8 0-3.2 1.4-3.2 3.2v71.1c0 .9.3 1.6.9 2.2.6.5 1.3.9 2.2.9h45.7c1.8 0 3.2-1.4 3.2-3.2v-11.4c0-1.7-1.4-3.2-3.1-3.2zM332.1 201h-45.7c-1.7 0-3.2 1.4-3.2 3.2v71.1c0 1.7 1.4 3.2 3.2 3.2h45.7c1.8 0 3.2-1.4 3.2-3.2v-11.4c0-1.8-1.4-3.2-3.2-3.2H301v-12h31.1c1.8 0 3.2-1.4 3.2-3.2V234c0-1.8-1.4-3.2-3.2-3.2H301v-12h31.1c1.8 0 3.2-1.4 3.2-3.2v-11.4c-.1-1.7-1.5-3.2-3.2-3.2zM448 113.7V399c-.1 44.8-36.8 81.1-81.7 81H81c-44.8-.1-81.1-36.9-81-81.7V113c.1-44.8 36.9-81.1 81.7-81H367c44.8.1 81.1 36.8 81 81.7zm-61.6 230.5v-61.6H342v-81.7c0-15-12.3-27.3-27.3-27.3H133.3c-15 0-27.3 12.3-27.3 27.3v142.7c0 15 12.3 27.3 27.3 27.3h181.3c15 0 27.3-12.3 27.3-27.3v-60.7H293v25.9c0 3-2.6 5.7-5.7 5.7H159.7c-3.1 0-5.7-2.6-5.7-5.7V176.9c0-3 2.6-5.7 5.7-5.7h127.7c3.1 0 5.7 2.6 5.7 5.7v22.2h93.1c3.1 0 5.7 2.6 5.7 5.7v61.6h30.4c3 0 5.7 2.6 5.7 5.7v61.5c0 3.2-2.6 5.8-5.7 5.8h-30.4z" />
                </svg>
              </a>
              <a
                href="tel:0972893059"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-red-600 transition-colors duration-200"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-5 h-5 fill-white">
                  <path d="M493.4 24.6l-104-24c-11.3-2.6-22.9 3.3-27.5 13.9l-48 112c-4.2 9.8-1.4 21.3 6.9 28l60.6 49.6c-36 76.7-98.9 140.5-177.2 177.2l-49.6-60.6c-6.8-8.3-18.2-11.1-28-6.9l-112 48C3.9 366.5-2 378.1.6 389.4l24 104C27.1 504.2 36.7 512 48 512c256.1 0 464-207.5 464-464 0-11.2-7.7-20.9-18.6-23.4z" />
                </svg>
              </a>
              <a
                href="tel:0229680379"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-red-600 transition-colors duration-200"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-5 h-5 fill-white">
                  <path d="M493.4 24.6l-104-24c-11.3-2.6-22.9 3.3-27.5 13.9l-48 112c-4.2 9.8-1.4 21.3 6.9 28l60.6 49.6c-36 76.7-98.9 140.5-177.2 177.2l-49.6-60.6c-6.8-8.3-18.2-11.1-28-6.9l-112 48C3.9 366.5-2 378.1.6 389.4l24 104C27.1 504.2 36.7 512 48 512c256.1 0 464-207.5 464-464 0-11.2-7.7-20.9-18.6-23.4z" />
                </svg>
              </a>
              <a
                href="mailto:btx909@gmail.com"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-red-600 transition-colors duration-200"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-5 h-5 fill-white">
                  <path d="M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z" />
                </svg>
              </a>
            </div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
            <div>
              <nav className="space-y-3">
                <Link href="/" className="block text-white hover:text-red-500 transition-colors">首頁</Link>
                <Link href="/about" className="block text-white hover:text-red-500 transition-colors">關於紘騰</Link>
                <Link href="/products" className="block text-white hover:text-red-500 transition-colors">隔熱紙介紹</Link>
                <Link href="/news" className="block text-white hover:text-red-500 transition-colors">最新消息</Link>
                <Link href="/works" className="block text-white hover:text-red-500 transition-colors">作品實績</Link>
                <Link href="/contact" className="block text-white hover:text-red-500 transition-colors">聯絡我們</Link>
              </nav>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-6 border-t border-gray-800 text-center text-sm text-gray-500">
          <p>
            Designed by <a href="https://www.ykqk.com.tw" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-red-500">揚京快客</a> Copyright © 2025, 系統人氣: 47000
          </p>
        </div>
      </div>
    </footer>
  );
}
