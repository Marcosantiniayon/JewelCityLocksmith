import { Lock, Key, Home, Building2 } from "lucide-react"

const services = [
  {
    icon: Lock,
    title: "Emergency Lockouts",
    description: "Get back in your car, home or office fast. 24/7 availability.",
  },
  {
    icon: Key,
    title: "Car Key Replacement",
    description: "Lost or broken key? We make and program new ones on the spot.",
  },
  {
    icon: Home,
    title: "Residential Locksmith",
    description: "Smart locks, rekeying, deadbolts, and home security upgrades.",
  },
  {
    icon: Building2,
    title: "Commercial Security",
    description: "High-security locks, access systems, and master keying.",
  },
]

export function Services() {
  return (
    <section id="services" className="py-20 bg-gradient-to-b from-background to-card">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-4">
          Full-Service Locksmith Solutions —
        </h2>
        <p className="text-xl md:text-2xl text-center text-foreground/80 mb-12">Right When You Need Them</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {services.map((service) => (
            <div key={service.title} className="flex gap-4">
              <div className="flex-shrink-0">
                <service.icon className="size-12 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-primary mb-2">{service.title}</h3>
                <p className="text-foreground/70 leading-relaxed">{service.description}</p>
              </div>
            </div>
          ))}
        </div>

        <p className="text-center text-foreground/60 italic mt-12">
          Proudly serving Glendale, Burbank, Pasadena, and the Greater LA Area.
        </p>

        <div className="flex justify-center mt-8">
          <a
            href="#contact"
            className="inline-flex items-center justify-center bg-primary hover:bg-primary/90 text-primary-foreground text-lg px-8 py-4 rounded-full font-bold transition-colors"
          >
            GET A QUOTE
          </a>
        </div>
      </div>
    </section>
  )
}
