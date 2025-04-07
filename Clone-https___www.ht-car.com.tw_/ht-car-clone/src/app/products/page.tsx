import { HeroSection } from "@/components/ui/hero-section";
import { SectionTitle } from "@/components/ui/section-title";
import Image from "next/image";
import Link from "next/link";

export default function ProductsPage() {
  const products = [
    {
      id: 1,
      name: "丹龍-新銳SSR系列隔熱紙",
      description: "對對台灣氣特氣候所導致的產品品質DENO丹龍，個應大廠製品及效能經第三方公正單位認證，品牌上市販售也獲車商指定使用，至今已超百萬次人次使用實證，在台特色經銷商更是超過500家，為車主消費者提供便捷專業的服務。",
      features: ["高隔熱率95%", "高可見光透過率", "eTag及GPS可正常使用", "抗UV指數高", "SGS認證", "5年保固"],
      image: "/images/paper-bg.jpeg",
    },
    {
      id: 2,
      name: "史密斯隔熱紙",
      description: "使用自家專利及世界首創的「奈米三合一」多層膜結構技術，結合「奈米陶瓷」與「奈米碳」兩項頂尖奈米材料，其中「奈米陶瓷」粒徑只有30~50nm，是人一髮絲的千分之一細，並採用可視光高透光率，有效阻擋近紅外線熱能，達到隔熱效果。",
      features: ["高隔熱率94%", "高可見光透過率", "eTag及GPS可正常使用", "抗UV指數高", "7年保固"],
      image: "/images/benefit3.png",
    },
    {
      id: 3,
      name: "LOUIS隔熱紙 H雅士/L極致系列",
      description: "獨創奈米碳鍍銀玻璃鍍膜新一代奈米生產業科技材料採環保製程，採用環保無毒金屬材質，使得光學性能與超越隔熱能力，有效隔熱熱輻射，帶來舒適的駕駛體驗。",
      features: ["高隔熱率", "高可見光透過率", "eTag及GPS可正常使用", "生產工藝先進", "安全性高"],
      image: "/images/benefit4.png",
    },
  ];

  return (
    <div>
      <HeroSection
        backgroundImage="/images/paper-bg.jpeg"
        title="INSULATION PAPER"
        subtitle="隔熱紙介紹"
        description="我們提供多樣化的隔熱紙產品，滿足不同需求。"
      />

      <section className="py-16">
        <div className="container mx-auto px-4">
          <SectionTitle
            title="產品系列"
            subtitle="專業隔熱紙，多款選擇，滿足您的需求"
            align="center"
          />

          <div className="mt-12 space-y-20">
            {products.map((product, index) => (
              <div
                key={product.id}
                className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-8 items-center`}
              >
                <div className="w-full md:w-2/5 relative rounded-lg overflow-hidden shadow-lg">
                  <div className="aspect-[4/3] relative">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>

                <div className="w-full md:w-3/5">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">{product.name}</h2>
                  <p className="text-gray-700 mb-6">{product.description}</p>

                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h3 className="font-medium text-gray-900 mb-3">產品特點</h3>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-2">
                      {product.features.map((feature, i) => (
                        <li key={i} className="flex items-center text-gray-700">
                          <span className="text-red-500 mr-2">•</span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-6">
                    <Link
                      href="/contact"
                      className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-md inline-block transition-colors duration-300"
                    >
                      立即諮詢
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <SectionTitle
            title="為什麼選擇我們的隔熱紙"
            align="center"
          />

          <div className="mt-12 max-w-3xl mx-auto">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-red-600 font-bold">1</span>
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900 mb-1">專業施工技術</h3>
                    <p className="text-gray-700">
                      20年專業經驗，完美貼合無起泡、無氣泡、無皺褶，施工細緻。
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-red-600 font-bold">2</span>
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900 mb-1">高品質產品</h3>
                    <p className="text-gray-700">
                      嚴選各大品牌隔熱紙，提供最佳隔熱、防紫外線效果。
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-red-600 font-bold">3</span>
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900 mb-1">完善售後服務</h3>
                    <p className="text-gray-700">
                      提供產品保固，安心使用無後顧之憂。
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-red-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">需要專業的隔熱紙服務？</h2>
          <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
            立即聯繫我們，為您的愛車或建築物提供最佳的防護。
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            <Link
              href="/contact"
              className="bg-white text-red-600 hover:bg-gray-100 px-8 py-3 rounded-md font-medium transition-colors duration-300"
            >
              聯絡我們
            </Link>
            <a
              href="tel:0229680379"
              className="bg-red-700 hover:bg-red-800 text-white px-8 py-3 rounded-md font-medium transition-colors duration-300"
            >
              0229680379
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
