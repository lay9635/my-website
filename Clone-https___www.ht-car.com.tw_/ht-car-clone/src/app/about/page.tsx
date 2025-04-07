import { HeroSection } from "@/components/ui/hero-section";
import { SectionTitle } from "@/components/ui/section-title";
import Image from "next/image";
import Link from "next/link";

export default function AboutPage() {
  const advantages = [
    {
      title: "專業技術",
      description: "20年經驗的專業技師團隊，確保每次施工都達到完美品質。",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
    },
    {
      title: "優質材料",
      description: "使用頂級品牌隔熱紙，確保隔熱效果與使用壽命。",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
        </svg>
      ),
    },
    {
      title: "專業服務",
      description: "提供專業諮詢與完善的售後服務，讓您安心無憂。",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
        </svg>
      ),
    },
    {
      title: "多元應用",
      description: "適用於汽車、大樓、住家等多種場景，全方位隔熱解決方案。",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
        </svg>
      ),
    },
  ];

  return (
    <div>
      <HeroSection
        backgroundImage="/images/car-bg.png"
        title="ABOUT US"
        subtitle="關於紘騰"
        description="20年專業隔熱紙施工經驗"
      />

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <SectionTitle
              title="紘騰汽車大樓隔熱紙"
              align="center"
            />

            <div className="mt-6 text-center">
              <p className="text-gray-700 mb-6">
                紘騰汽車大樓隔熱紙擁有 20 年專業隔熱紙施工經驗，提供高品質汽車隔熱紙、大樓隔熱紙、隔熱紙安裝、貼隔熱紙、住家隔熱紙安裝等服務。
              </p>

              <p className="text-gray-700 mb-6">
                我們的團隊由經驗豐富的專業技師組成，確保每一次施工都能達到客戶的滿意，為您的愛車和建築物提供最佳的防護。
              </p>

              <p className="text-gray-700">
                無論是汽車隔熱紙、大樓隔熱紙還是住家隔熱紙，我們都能提供專業的諮詢和施工服務，為您解決各種隔熱需求。
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <SectionTitle
            title="我們的優勢"
            subtitle="專業、品質、服務"
            align="center"
          />

          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {advantages.map((advantage, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                <div className="w-12 h-12 bg-red-100 text-red-600 rounded-full flex items-center justify-center mb-4">
                  {advantage.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{advantage.title}</h3>
                <p className="text-gray-700">{advantage.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="w-full md:w-1/2">
              <SectionTitle title="我們的使命" />
              <p className="text-gray-700 mb-6">
                我們的使命是為客戶提供最高品質的隔熱紙產品和安裝服務，幫助客戶創造舒適、節能的環境。
              </p>
              <p className="text-gray-700 mb-6">
                我們堅持專業的施工標準，嚴格控制品質，每一次施工都力求完美，讓客戶滿意是我們最大的追求。
              </p>
              <p className="text-gray-700">
                同時，我們不斷尋找和引進更好的產品，與時俱進，為客戶提供最適合的隔熱解決方案。
              </p>
            </div>
            <div className="w-full md:w-1/2 relative rounded-lg overflow-hidden shadow-xl">
              <div className="aspect-video relative">
                <Image
                  src="/images/hero-bg.jpeg"
                  alt="紘騰汽車隔熱紙"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-red-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">有任何疑問或需求？</h2>
          <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
            歡迎隨時與我們聯繫，我們的專業團隊將為您提供最佳的解決方案。
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
