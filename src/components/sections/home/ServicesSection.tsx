import { Card, CardContent } from "@/components/ui/card"

const services = [
  {
    id: "01",
    image: "https://ext.same-assets.com/679142383/354150837.png",
    title: "汽車隔熱紙",
    description: "提供高品質汽車隔熱紙安裝，降低車內溫度，防UV紫外線，提升行車舒適度與安全性。"
  },
  {
    id: "02",
    image: "https://ext.same-assets.com/679142383/264705342.png",
    title: "大樓隔熱紙",
    description: "專業安裝大樓隔熱紙，有效阻隔陽光熱能，降低空調耗電，提供更舒適的室內環境。"
  },
  {
    id: "03",
    image: "https://ext.same-assets.com/679142383/2160864494.png",
    title: "住家/辦公室隔熱紙",
    description: "為住家與辦公空間量身安裝隔熱紙，提高能源效率，同時保護家具免受紫外線傷害。"
  },
  {
    id: "04",
    image: "https://ext.same-assets.com/679142383/1006528703.png",
    title: "特殊窗戶隔熱",
    description: "針對各種特殊形狀或大型窗戶提供客製化隔熱解決方案，專業技術確保完美安裝。"
  }
]

export function ServicesSection() {
  return (
    <section className="py-20 bg-ht-light">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="section-title mb-4">
            OUR <span className="text-ht-red">PROJECT</span>
          </h2>
          <div className="max-w-3xl mx-auto">
            <p className="section-subtitle">
              提供各種優質隔熱紙安裝服務，滿足您的不同需求
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service) => (
            <ServiceCard
              key={service.id}
              id={service.id}
              image={service.image}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

interface ServiceCardProps {
  id: string
  image: string
  title: string
  description: string
}

function ServiceCard({ id, image, title, description }: ServiceCardProps) {
  return (
    <Card className="relative overflow-hidden border-none shadow-lg h-full group">
      <div className="absolute top-0 right-0 bg-ht-red text-white font-anton text-xl px-3 py-1 z-10">
        {id}
      </div>
      <div className="relative h-48 overflow-hidden">
        <div
          className="w-full h-full bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
          style={{ backgroundImage: `url('${image}')` }}
        />
      </div>
      <CardContent className="p-5">
        <h3 className="text-lg font-semibold mb-2">{title}</h3>
        <p className="text-sm text-gray-600">{description}</p>
      </CardContent>
    </Card>
  )
}
