import { HeroSection } from "@/components/sections/home/HeroSection"
import { AboutSection } from "@/components/sections/home/AboutSection"
import { ServicesSection } from "@/components/sections/home/ServicesSection"
import { BenefitsSection } from "@/components/sections/home/BenefitsSection"
import { ContactSection } from "@/components/sections/home/ContactSection"
import { Layout } from "@/components/layout/Layout"

export default function Home() {
  return (
    <Layout>
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <BenefitsSection />
      <ContactSection />
    </Layout>
  )
}
