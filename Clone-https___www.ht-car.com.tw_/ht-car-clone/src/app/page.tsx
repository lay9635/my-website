import { HeroSection } from '@/components/ui/hero-section';
import { SectionTitle } from '@/components/ui/section-title';
import { ServiceCard } from '@/components/ui/service-card';
import { BenefitCard } from '@/components/ui/benefit-card';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  const services = [
    {
      number: '01',
      image: '/images/service1.png',
      title: '汽車隔熱紙',
      link: '/products',
    },
    {
      number: '02',
      image: '/images/service2.png',
      title: '大樓隔熱紙',
      link: '/products',
    },
    {
      number: '03',
      image: '/images/service3.png',
      title: '商家/辦公室隔熱紙',
      link: '/products',
    },
    {
      number: '04',
      image: '/images/service4.png',
      title: '修補汽車玻璃',
      link: '/products',
    },
  ];

  const benefits = [
    {
      number: '01',
      image: '/images/benefit1.png',
      title: '有效隔絕紫外線與紅外線',
      description: '降低車室內溫度，保護內裝，有效抵擋紫外線傷害。',
    },
    {
      number: '02',
      image: '/images/benefit2.png',
      title: '降低日曬造成皮膚曬傷及皺摺的出現',
      description: '抵擋紫外線傷害，保護皮膚健康。',
    },
    {
      number: '03',
      image: '/images/benefit3.png',
      title: '節省能源及空調花費',
      description: '有效降低室內溫度，節省冷氣使用。',
    },
    {
      number: '04',
      image: '/images/benefit4.png',
      title: '強化防爆性能提高安全防護效果',
      description: '安全第一，防護作用讓您更安心。',
    },
  ];

  return (
    <div className="pb-16">
      {/* Hero Section */}
      <HeroSection
        backgroundImage="/images/hero-bg.jpeg"
        title="20年經驗 卓越技術"
        subtitle="給您愛車‧全面防護"
        description="耐力長效‧不褪便褪"
      />

      {/* About Section */}
      <section id="about" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="w-full md:w-1/2">
              <p className="text-red-600 font-bold text-lg mb-2">ABOUT HONG TENG</p>
              <h2 className="text-3xl font-bold mb-6">
                專業隔熱紙施工經驗 20 年以上
              </h2>
              <p className="text-gray-700 mb-4">
                紘騰汽車大樓隔熱紙擁有 20 年專業隔熱紙施工經驗，提供高品質汽車隔熱紙、大樓隔熱紙、隔熱紙安裝、貼隔熱紙、住家隔熱紙安裝 等服務。
              </p>
              <p className="text-gray-700 mb-4">
                我們致力於提供客戶最優質的服務，使用高品質的材料，確保施工品質與效果，讓您的愛車和建築物獲得最佳的保護。
              </p>
              <p className="text-gray-700">
                無論是汽車隔熱紙、大樓隔熱紙還是住家隔熱紙，我們都能提供專業的諮詢和施工服務，為您解決各種隔熱需求。
              </p>
            </div>
            <div className="w-full md:w-1/2 relative rounded-lg overflow-hidden shadow-lg">
              <Image
                src="/images/car-bg.png"
                alt="紘騰汽車隔熱紙"
                width={600}
                height={400}
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <SectionTitle
            title="SERVICE"
            subtitle="服務項目"
            align="center"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {services.map((service) => (
              <ServiceCard
                key={service.number}
                number={service.number}
                image={service.image}
                title={service.title}
                link={service.link}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="benefits" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <SectionTitle
            title="BENEFIT"
            subtitle="汽車貼隔熱紙的好處"
            align="center"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {benefits.map((benefit) => (
              <BenefitCard
                key={benefit.number}
                number={benefit.number}
                image={benefit.image}
                title={benefit.title}
                description={benefit.description}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section
        className="py-20 bg-cover bg-center relative text-white"
        style={{ backgroundImage: 'url(/images/contact-bg.jpeg)' }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-70"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <SectionTitle
              title="CONTACT"
              subtitle="聯絡我們"
              align="center"
              color="white"
            />
            <p className="mt-6 text-lg text-white/80 mb-8">
              需要專業的隔熱紙服務嗎？立即聯繫我們，讓專業的團隊為您提供最佳的解決方案。
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
              <Link
                href="/contact"
                className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-md font-medium transition-colors duration-300"
              >
                聯絡我們
              </Link>
              <a
                href="tel:0229680379"
                className="bg-white/10 hover:bg-white/20 text-white px-8 py-3 rounded-md font-medium transition-colors duration-300"
              >
                0229680379
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
