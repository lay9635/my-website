export function AboutSection() {
  return (
    <section id="about" className="py-20 relative overflow-hidden">
      {/* Red diagonal background */}
      <div className="absolute top-0 right-0 w-full md:w-2/3 h-full bg-ht-red transform -skew-y-6 origin-top-right z-0" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row items-center">
          {/* About Image */}
          <div className="w-full md:w-1/2 mb-10 md:mb-0">
            <div className="relative">
              <div
                className="w-full h-96 bg-cover bg-center rounded-lg shadow-xl"
                style={{ backgroundImage: "url('https://ext.same-assets.com/1832564741/2258362770.png')" }}
              />
            </div>
          </div>

          {/* About Content */}
          <div className="w-full md:w-1/2 md:pl-12">
            <div className="text-center md:text-left">
              <h2 className="section-title mb-6">
                ABOUT <span className="text-white">HONG TENG</span>
              </h2>
              <div className="text-white">
                <p className="mb-4 text-lg">
                  紘騰汽車大樓隔熱紙擁有 20 年專業隔熱紙施工經驗，提供高品質汽車隔熱紙、大樓隔熱紙、隔熱紙安裝、貼隔熱紙、住家隔熱紙安裝 等服務。
                </p>
                <p className="mb-4 text-lg">
                  我們使用頂級材料，確保最佳隔熱效果和長久耐用性。不論是汽車、住家或商業大樓，我們都能提供專業的隔熱解決方案。
                </p>
                <p className="text-lg">
                  在台北地區，紘騰是您隔熱紙安裝的可靠選擇，我們注重品質和客戶滿意度，為您提供最專業的服務。
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
