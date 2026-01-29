import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { Services } from "@/components/services"
import { EquipmentGallery } from "@/components/equipment-gallery"
import { TrustSection } from "@/components/trust-section"
import { WhyChooseUs } from "@/components/why-choose-us"
import { ServiceArea } from "@/components/service-area"
import { FAQ } from "@/components/faq"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"
import { MobileCTABar } from "@/components/mobile-cta-bar"
import { siteConfig } from "@/lib/site"

export default function Home() {
  const businessSchema = {
    "@context": "https://schema.org",
    "@type": "Locksmith",
    name: siteConfig.name,
    url: siteConfig.url,
    telephone: siteConfig.phoneE164,
    image: `${siteConfig.url}${siteConfig.defaultShareImage}`,
    areaServed: siteConfig.areaServed,
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday",
        ],
        opens: siteConfig.hours.opens,
        closes: siteConfig.hours.closes,
      },
    ],
  }

  return (
    <main className="min-h-screen pb-20 md:pb-0">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(businessSchema) }}
      />
      <Header />
      <Hero />
      <Services />
      <EquipmentGallery />
      <TrustSection />
      <WhyChooseUs />
      <ServiceArea />
      <FAQ />
      <Contact />
      <Footer />
      <MobileCTABar />
    </main>
  )
}
