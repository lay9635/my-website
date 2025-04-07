"use client"

import { cn } from "@/lib/utils"
import Link from "next/link"
import { useState, useEffect } from "react"
import { Menu, X, Phone, Mail, Facebook } from "lucide-react"

const navItems = [
  { label: "關於紘騰", href: "/#about" },
  { label: "隔熱紙介紹", href: "/services" },
  { label: "最新消息", href: "/#news" },
  { label: "作品實績", href: "/#gallery" },
  { label: "聯絡我們", href: "/contact" },
]

export function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  // Handle scroll event to change header style
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-white/95 shadow-md py-2"
          : "bg-transparent py-4"
      )}
    >
      <div className="container max-w-7xl mx-auto px-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <div className="relative w-40 h-16">
            <div className="absolute inset-0 bg-contain bg-no-repeat bg-left"
                 style={{ backgroundImage: "url('https://ext.same-assets.com/679142383/1399771136.png')" }}>
            </div>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-ht-black hover:text-ht-red transition-colors font-medium text-base"
            >
              {item.label}
            </Link>
          ))}

          {/* Social/Contact Icons */}
          <div className="flex items-center space-x-4 pl-4 border-l border-gray-300">
            <Link href="https://www.facebook.com/profile.php?id=100063743275863" target="_blank" rel="noopener noreferrer"
                  className="text-ht-black hover:text-ht-red transition-colors">
              <Facebook size={20} />
            </Link>
            <Link href="tel:0229680379" className="text-ht-black hover:text-ht-red transition-colors">
              <Phone size={20} />
            </Link>
            <Link href="mailto:btx909@gmail.com" className="text-ht-black hover:text-ht-red transition-colors">
              <Mail size={20} />
            </Link>
          </div>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-ht-black hover:text-ht-red transition-colors"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <nav className="md:hidden bg-white shadow-lg py-4 px-6 absolute w-full">
          <div className="flex flex-col space-y-4">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-ht-black hover:text-ht-red transition-colors font-medium text-base"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}

            {/* Social/Contact Icons */}
            <div className="flex items-center space-x-4 pt-4 border-t border-gray-300">
              <Link href="https://www.facebook.com/profile.php?id=100063743275863" target="_blank" rel="noopener noreferrer"
                    className="text-ht-black hover:text-ht-red transition-colors">
                <Facebook size={20} />
              </Link>
              <Link href="tel:0229680379" className="text-ht-black hover:text-ht-red transition-colors">
                <Phone size={20} />
              </Link>
              <Link href="mailto:btx909@gmail.com" className="text-ht-black hover:text-ht-red transition-colors">
                <Mail size={20} />
              </Link>
            </div>
          </div>
        </nav>
      )}
    </header>
  )
}
