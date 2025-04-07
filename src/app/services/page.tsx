import { Layout } from "@/components/layout/Layout"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const services = [
  {
    id: "01",
    title: "丹龍-新銳SSR系列隔熱紙",
    description: "對對台灣獨特高溫發發熱帶產品品質以DENO丹龍，同樣大廠製造且效能經第三方公正單位認證，品牌上市即受眾多人次使用其中，在台特約經銷商更是超過500家，為眾多消費者優良保證的服務。",
    image: "https://ext.same-assets.com/1832564741/2130384098.png"
  },
  {
    id: "02",
    title: "史密斯隔熱紙",
    description: "運用自家專利全世界首創的「奈米三合一」多層膜結構技術，結合「奈米纖層」與「奈米炭」兩項現代尖端製程。其中，「奈米纖層」控制于30~50nm，是光一般散射、需求視線，並增強熱阻擋率，有效屏蔽紅外線熱能入射。",
    image: "https://ext.same-assets.com/1832564741/2258362770.png"
  },
  {
    id: "03",
    title: "LOUIS隔熱紙 H雅士/L極致系列",
    description: "結合先進奈米薄膜與獨特第一代分子奈米科技材料進階潘科技製程，控控環保毒害大全材料材質，採用安全安心，其產品具備超級隔熱能能力，有效隔熱熱輻射，帶來舒適的居家體體驗。",
    image: "https://ext.same-assets.com/1832564741/3919472856.png"
  }
]

export default function ServicesPage() {
  return (
    <Layout>
      <div className="pt-32 pb-20 bg-ht-light">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="section-title mb-4">
              <span className="text-ht-red">INSULATION PAPER</span>
            </h1>
            <div className="max-w-3xl mx-auto">
              <p className="section-subtitle">
                隔熱紙介紹
              </p>
            </div>
          </div>

          <div className="space-y-12">
            {services.map((service, index) => (
              <Card key={service.id} className="overflow-hidden">
                <div className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-6`}>
                  <div className="w-full md:w-1/3 p-4">
                    <div
                      className="w-full h-64 bg-cover bg-center rounded-lg"
                      style={{ backgroundImage: `url('${service.image}')` }}
                    />
                  </div>
                  <div className="w-full md:w-2/3 p-6">
                    <CardHeader className="px-0 pt-0">
                      <div className="flex items-center mb-2">
                        <span className="bg-ht-red text-white text-lg px-3 py-1 rounded-md mr-3">
                          {service.id}
                        </span>
                        <CardTitle className="text-2xl">{service.title}</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent className="px-0 pb-0">
                      <p className="text-gray-700">{service.description}</p>
                    </CardContent>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  )
}
