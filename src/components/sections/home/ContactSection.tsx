import Link from "next/link"
import { Facebook, Phone, Mail, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"

export function ContactSection() {
  return (
    <section id="contact" className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="section-title mb-4">
            <span className="text-ht-red">CONTACT</span>
          </h2>
        </div>

        <div className="flex flex-col lg:flex-row gap-10">
          {/* Contact Info */}
          <div className="w-full lg:w-1/3">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-6">聯絡資訊</h3>
              <ul className="space-y-4">
                <li className="flex items-center">
                  <Phone size={18} className="text-ht-red mr-3" />
                  <span>電話: <a href="tel:0229680379" className="hover:text-ht-red transition-colors">0229680379</a></span>
                </li>
                <li className="flex items-center">
                  <Phone size={18} className="text-ht-red mr-3" />
                  <span>手機: <a href="tel:0972893059" className="hover:text-ht-red transition-colors">0972893059</a></span>
                </li>
                <li className="flex items-center">
                  <Mail size={18} className="text-ht-red mr-3" />
                  <span>信箱: <a href="mailto:btx909@gmail.com" className="hover:text-ht-red transition-colors">btx909@gmail.com</a></span>
                </li>
                <li className="flex items-start">
                  <MapPin size={18} className="text-ht-red mr-3 mt-1" />
                  <span>地址: 新北市板橋區中正路325巷7號</span>
                </li>
              </ul>

              {/* Social Media Links */}
              <div className="flex gap-4 mt-8">
                <Link href="https://www.facebook.com/profile.php?id=100063743275863"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-ht-red text-white p-2 rounded-full hover:bg-ht-black transition-colors">
                  <Facebook size={20} />
                </Link>
                <Link href="https://line.me/ti/p/c1qBSLTrwo"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-ht-red text-white p-2 rounded-full hover:bg-ht-black transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M8 0c4.411 0 8 2.912 8 6.492 0 1.433-.555 2.723-1.715 3.994-1.678 1.932-5.431 4.285-6.285 4.645-.83.35-.734-.197-.696-.413l.003-.018.114-.685c.027-.204.055-.521-.026-.723-.09-.223-.444-.339-.704-.395C2.846 12.39 0 9.701 0 6.492 0 2.912 3.59 0 8 0ZM5.022 7.686H3.497V4.918a.156.156 0 0 0-.155-.156H2.78a.156.156 0 0 0-.156.156v3.486c0 .041.017.08.044.107v.001l.002.002.002.002a.154.154 0 0 0 .108.043h2.242c.086 0 .155-.07.155-.156v-.56a.156.156 0 0 0-.155-.157Zm.791-2.924a.156.156 0 0 0-.156.156v3.486c0 .086.07.155.156.155h.562c.086 0 .155-.07.155-.155V4.918a.156.156 0 0 0-.155-.156h-.562Zm3.863 0a.156.156 0 0 0-.156.156v2.07L7.923 4.832a.17.17 0 0 0-.013-.015v-.001a.139.139 0 0 0-.01-.01l-.003-.003a.092.092 0 0 0-.011-.009h-.001L7.88 4.79l-.003-.002a.029.029 0 0 0-.005-.003l-.008-.005h-.002l-.003-.002-.01-.004-.004-.002a.093.093 0 0 0-.01-.003h-.002l-.003-.001-.009-.002h-.006l-.003-.001h-.004l-.002-.001h-.574a.156.156 0 0 0-.156.155v3.486c0 .086.07.155.156.155h.56c.087 0 .157-.07.157-.155v-2.07l1.6 2.16a.154.154 0 0 0 .039.038l.001.001.01.006.004.002a.066.066 0 0 0 .008.004l.007.003.005.002a.168.168 0 0 0 .01.003h.003a.155.155 0 0 0 .04.006h.56c.087 0 .157-.07.157-.155V4.918a.156.156 0 0 0-.156-.156h-.561Zm3.815.717v-.56a.156.156 0 0 0-.155-.157h-2.242a.155.155 0 0 0-.108.044h-.001l-.001.002-.002.003a.155.155 0 0 0-.044.107v3.486c0 .041.017.08.044.107l.002.003.002.002a.155.155 0 0 0 .108.043h2.242c.086 0 .155-.07.155-.156v-.56a.156.156 0 0 0-.155-.157H11.81v-.589h1.525c.086 0 .155-.07.155-.156v-.56a.156.156 0 0 0-.155-.157H11.81v-.589h1.525c.086 0 .155-.07.155-.156Z"/>
                  </svg>
                </Link>
              </div>

              <div className="mt-8">
                <Button asChild className="bg-ht-red hover:bg-ht-black text-white w-full">
                  <Link href="/contact">聯絡我們</Link>
                </Button>
              </div>
            </div>
          </div>

          {/* Map */}
          <div className="w-full lg:w-2/3">
            <div className="relative h-[400px] rounded-lg overflow-hidden shadow-md">
              <iframe
                title="紘騰汽車大樓隔熱紙地圖位置"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3614.558342719151!2d121.46248377437053!3d25.0451363407733!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442a968ce44d643%3A0xa6a21e9d2f7fca9e!2zMjIw5paw5YyX5biC5p2x5YmN5Y2A5Lit5q2j6LevMzI16ba05LiD6JmOMzI16ba0N-iZnw!5e0!3m2!1szh-TW!2stw!4v1690338019552!5m2!1szh-TW!2stw"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
