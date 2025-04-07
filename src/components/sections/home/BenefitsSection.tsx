import { Card, CardContent } from "@/components/ui/card"

const benefits = [
  {
    id: "01",
    image: "https://ext.same-assets.com/679142383/9676443.png",
    title: "有效防曬與空調耗電",
    description: "隔熱紙能有效阻隔高達95%以上的紫外線和紅外線，降低室內溫度，減少空調使用，節省能源消耗。"
  },
  {
    id: "02",
    image: "https://ext.same-assets.com/679142383/3772742033.png",
    title: "降低日曬造成皮膚直接接觸及皮革褪色",
    description: "防止陽光直射引起的皮膚傷害，同時保護車內皮革座椅和儀表板不因長期日曬而褪色或老化。"
  },
  {
    id: "03",
    image: "https://ext.same-assets.com/679142383/2503715661.png",
    title: "節省能源及降低熱能",
    description: "隔熱紙能反射和吸收大量熱能，有效降低室內溫度，減少冷氣使用時間，降低能源消耗。"
  },
  {
    id: "04",
    image: "https://ext.same-assets.com/679142383/3688330555.png",
    title: "增進隱私與安全性及舒適的氛圍",
    description: "提供更好的隱私保護，增強安全性，同時創造更舒適、不受外界干擾的內部環境。"
  }
]

export function BenefitsSection() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="section-title mb-4">
            <span className="text-ht-red">BENEFIT</span>
          </h2>
          <div className="max-w-3xl mx-auto">
            <p className="section-subtitle">
              只有隔熱紙能帶給您的便利
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit) => (
            <BenefitCard
              key={benefit.id}
              id={benefit.id}
              image={benefit.image}
              title={benefit.title}
              description={benefit.description}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

interface BenefitCardProps {
  id: string
  image: string
  title: string
  description: string
}

function BenefitCard({ id, image, title, description }: BenefitCardProps) {
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
