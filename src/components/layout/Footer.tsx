"use client"

import Link from "next/link"
import { Facebook, Phone, Mail, MapPin } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-ht-black text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        {/* Logo and Company Info */}
        <div className="flex flex-col md:flex-row justify-between mb-8">
          <div className="mb-8 md:mb-0">
            <Link href="/" className="inline-block mb-4">
              <div className="relative w-48 h-16">
                <div className="absolute inset-0 bg-contain bg-no-repeat bg-left"
                     style={{ backgroundImage: "url('https://ext.same-assets.com/2613096179/2794772738.png')" }}>
                </div>
              </div>
            </Link>
            <h3 className="text-xl mb-3 text-center md:text-left">紘騰汽車大樓隔熱紙</h3>
          </div>

          {/* Contact Information */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="text-lg mb-4 font-medium">聯絡資訊</h4>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <Phone size={16} className="mr-2" />
                  <span>TEL：<a href="tel:0229680379" className="hover:text-ht-red transition-colors">0229680379</a></span>
                </li>
                <li className="flex items-center">
                  <Phone size={16} className="mr-2" />
                  <span>PHONE：<a href="tel:0972893059" className="hover:text-ht-red transition-colors">0972893059</a></span>
                </li>
                <li className="flex items-center">
                  <Mail size={16} className="mr-2" />
                  <span>EMAIL：<a href="mailto:btx909@gmail.com" className="hover:text-ht-red transition-colors">btx909@gmail.com</a></span>
                </li>
                <li className="flex items-start">
                  <MapPin size={16} className="mr-2 mt-1" />
                  <span>ADD：新北市板橋區中正路325巷7號</span>
                </li>
              </ul>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg mb-4 font-medium">網站連結</h4>
              <ul className="grid grid-cols-2 gap-2">
                <li>
                  <Link href="/" className="hover:text-ht-red transition-colors">首頁</Link>
                </li>
                <li>
                  <Link href="/#about" className="hover:text-ht-red transition-colors">關於紘騰</Link>
                </li>
                <li>
                  <Link href="/services" className="hover:text-ht-red transition-colors">隔熱紙介紹</Link>
                </li>
                <li>
                  <Link href="/#news" className="hover:text-ht-red transition-colors">最新消息</Link>
                </li>
                <li>
                  <Link href="/#gallery" className="hover:text-ht-red transition-colors">作品實績</Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:text-ht-red transition-colors">聯絡我們</Link>
                </li>
              </ul>

              {/* Social Media Links */}
              <div className="flex space-x-4 mt-4">
                <Link href="https://www.facebook.com/profile.php?id=100063743275863"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white hover:text-ht-red transition-colors">
                  <Facebook size={20} />
                </Link>
                <Link href="https://line.me/ti/p/c1qBSLTrwo"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white hover:text-ht-red transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M8 0c4.411 0 8 2.912 8 6.492 0 1.433-.555 2.723-1.715 3.994-1.678 1.932-5.431 4.285-6.285 4.645-.83.35-.734-.197-.696-.413l.003-.018.114-.685c.027-.204.055-.521-.026-.723-.09-.223-.444-.339-.704-.395C2.846 12.39 0 9.701 0 6.492 0 2.912 3.59 0 8 0ZM5.022 7.686H3.497V4.918a.156.156 0 0 0-.155-.156H2.78a.156.156 0 0 0-.156.156v3.486c0 .041.017.08.044.107v.001l.002.002.002.002a.154.154 0 0 0 .108.043h2.242c.086 0 .155-.07.155-.156v-.56a.156.156 0 0 0-.155-.157Zm.791-2.924a.156.156 0 0 0-.156.156v3.486c0 .086.07.155.156.155h.562c.086 0 .155-.07.155-.155V4.918a.156.156 0 0 0-.155-.156h-.562Zm3.863 0a.156.156 0 0 0-.156.156v2.07L7.923 4.832a.17.17 0 0 0-.013-.015v-.001a.139.139 0 0 0-.01-.01l-.003-.003a.092.092 0 0 0-.011-.009h-.001L7.88 4.79l-.003-.002a.029.029 0 0 0-.005-.003l-.008-.005h-.002l-.003-.002-.01-.004-.004-.002a.093.093 0 0 0-.01-.003h-.002l-.003-.001-.009-.002h-.006l-.003-.001h-.004l-.002-.001h-.574a.156.156 0 0 0-.156.155v3.486c0 .086.07.155.156.155h.56c.087 0 .157-.07.157-.155v-2.07l1.6 2.16a.154.154 0 0 0 .039.038l.001.001.01.006.004.002a.066.066 0 0 0 .008.004l.007.003.005.002a.168.168 0 0 0 .01.003h.003a.155.155 0 0 0 .04.006h.56c.087 0 .157-.07.157-.155V4.918a.156.156 0 0 0-.156-.156h-.561Zm3.815.717v-.56a.156.156 0 0 0-.155-.157h-2.242a.155.155 0 0 0-.108.044h-.001l-.001.002-.002.003a.155.155 0 0 0-.044.107v3.486c0 .041.017.08.044.107l.002.003.002.002a.155.155 0 0 0 .108.043h2.242c.086 0 .155-.07.155-.156v-.56a.156.156 0 0 0-.155-.157H11.81v-.589h1.525c.086 0 .155-.07.155-.156v-.56a.156.156 0 0 0-.155-.157H11.81v-.589h1.525c.086 0 .155-.07.155-.156Z"/>
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center pt-6 border-t border-gray-800 mt-8">
          <p className="text-sm text-gray-500">
            Copyright © {new Date().getFullYear()} 紘騰汽車大樓隔熱紙. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
