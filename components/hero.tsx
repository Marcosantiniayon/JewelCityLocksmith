import { Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { JewelCityLogo } from "@/components/logo"
import { Car, Home, Building2, Key } from "lucide-react"

const serviceCategories = [
  { icon: Car, label: "AUTOMOTIVE" },
  { icon: Home, label: "RESIDENTIAL" },
  { icon: Building2, label: "COMMERCIAL" },
  { icon: Key, label: "KEYS & FOBS" },
]

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Background image with overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('/dark-car-door-lock-being-picked-by-locksmith-hands.jpg')`,
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-background/95 via-background/85 to-background" />

      <div className="relative z-10 container mx-auto px-4 text-center py-12">
        {/* Logo */}
        <div className="flex justify-center mb-8">
          <JewelCityLogo className="h-44 md:h-56 w-auto" />
        </div>

        {/* Main headline */}
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-foreground mb-4 tracking-tight">
          <span className="block">FAST.</span>
          <span className="block">RELIABLE.</span>
          <span className="block">SECURE.</span>
        </h1>

        {/* Slogan */}
        <p className="text-primary text-lg md:text-xl font-semibold mb-4">The Crown Jewel of Locksmith Security</p>

        {/* Subheadline */}
        <p className="text-foreground/80 text-lg md:text-xl max-w-2xl mx-auto mb-8">
          Locked out? Lost your keys? Need to upgrade your security?
          <br />
          {"We've got you covered — 24/7."}
        </p>

        {/* Service categories */}
        <div className="flex flex-wrap justify-center gap-6 md:gap-10 mb-10">
          {serviceCategories.map((service) => (
            <div key={service.label} className="flex flex-col items-center gap-2">
              <div className="relative">
                {/* Shield shape */}
                <svg className="size-16 md:size-20" viewBox="0 0 80 90" fill="none">
                  <path
                    d="M40 5 L75 20 L75 50 Q75 75 40 85 Q5 75 5 50 L5 20 Z"
                    stroke="#F36B21"
                    strokeWidth="3"
                    fill="none"
                  />
                </svg>
                <service.icon className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-7 md:size-9 text-primary" />
              </div>
              <span className="text-xs md:text-sm font-bold text-foreground tracking-wide">{service.label}</span>
            </div>
          ))}
        </div>

        {/* CTA buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
          <Button
            asChild
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground text-lg px-8 py-6 rounded-full font-bold"
          >
            <a href="tel:+18189130155">
              <Phone className="size-5 mr-2" />
              CALL NOW
            </a>
          </Button>
          <Button
            asChild
            variant="outline"
            size="lg"
            className="border-primary text-primary hover:bg-primary hover:text-primary-foreground text-lg px-8 py-6 rounded-full font-bold bg-transparent"
          >
            <a href="#contact">REQUEST A QUOTE</a>
          </Button>
        </div>

        {/* Trust badges */}
        <div className="flex flex-wrap justify-center gap-2 text-foreground/70 text-sm">
          <span className="flex items-center gap-1">
            <span className="text-primary">✓</span> Licensed, Bonded & Insured
          </span>
          <span className="hidden sm:inline">•</span>
          <span>Serving Glendale, Burbank, Pasadena & Greater LA</span>
          <span className="hidden sm:inline">•</span>
          <span className="font-bold">Available 24/7</span>
        </div>
      </div>
    </section>
  )
}
