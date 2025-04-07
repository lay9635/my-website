import Image from "next/image"
import { cn } from "@/lib/utils"

export function HeroSection() {
  return (
    <section className="relative h-screen max-h-[800px] overflow-hidden">
      {/* Hero Background Image */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('https://ext.same-assets.com/679142383/1089508152.jpeg')",
            filter: "brightness(0.7)",
            zIndex: -1
          }}
        />
      </div>

      {/* Red Side Bar */}
      <div className="absolute left-0 top-0 bottom-0 w-20 lg:w-24 bg-ht-red flex flex-col justify-center items-center text-white py-6">
        <div className="vertical-text transform -rotate-90 whitespace-nowrap text-lg tracking-widest font-medium">
          紘騰汽車 • 全面防護 • 有力表現 • 不傷玻璃
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10 h-full flex items-center">
        <div className="text-white ml-24 lg:ml-32 max-w-2xl">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-3">
            <span className="text-white">20</span>
            <span className="font-anton text-ht-red">年超越</span>
          </h1>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium mb-8">
            卓越技術
          </h2>
          <p className="text-xl md:text-2xl mb-8">
            給您愛車 • 全面防護<br />
            有力表現 • 不傷玻璃
          </p>
        </div>
      </div>
    </section>
  )
}
