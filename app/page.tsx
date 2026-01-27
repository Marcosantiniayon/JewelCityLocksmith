import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { Services } from "@/components/services"
import { EquipmentGallery } from "@/components/equipment-gallery"
import { TrustSection } from "@/components/trust-section"
import { WhyChooseUs } from "@/components/why-choose-us"
import { Testimonials } from "@/components/testimonials"
import { ServiceArea } from "@/components/service-area"
import { FAQ } from "@/components/faq"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"
import { MobileCTABar } from "@/components/mobile-cta-bar"

export default function Home() {
  return (
    <main className="min-h-screen pb-20 md:pb-0">
      <Header />
      <Hero />
      <Services />
      <EquipmentGallery />
      <TrustSection />
      <WhyChooseUs />
      <Testimonials />
      <ServiceArea />
      <FAQ />
      <Contact />
      <Footer />
      <MobileCTABar />
    </main>
  )
}
