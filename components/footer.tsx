import { JewelCityLogo } from "@/components/logo"
import { Phone, Clock } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-card border-t border-border py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Logo & info */}
          <div>
            <JewelCityLogo className="h-12 w-auto mb-4" />
            <p className="text-foreground/60 text-sm">The Crown Jewel of Locksmith Security</p>
          </div>

          {/* Contact */}
          <div className="space-y-3">
            <h3 className="font-bold text-foreground mb-4">Contact</h3>
            <div className="flex items-center gap-2 text-foreground/70 text-sm">
              <Phone className="size-4 text-primary" />
              <a href="tel:+18189130155" className="hover:text-primary">
                (818) 913-0155
              </a>
            </div>
            <div className="flex items-center gap-2 text-foreground/70 text-sm">
              <Clock className="size-4 text-primary" />
              <span>Available 24/7</span>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="font-bold text-foreground mb-4">Quick Links</h3>
            <nav className="space-y-2 text-sm">
              <a href="#services" className="block text-foreground/70 hover:text-primary">
                Services
              </a>
              <a href="#why-us" className="block text-foreground/70 hover:text-primary">
                Why Choose Us
              </a>
              <a href="#testimonials" className="block text-foreground/70 hover:text-primary">
                Reviews
              </a>
              <a href="#contact" className="block text-foreground/70 hover:text-primary">
                Contact
              </a>
            </nav>
          </div>
        </div>

        <div className="border-t border-border pt-8 text-center text-foreground/50 text-sm">
          <p>© {new Date().getFullYear()} Jewel City Locksmith. All rights reserved.</p>
          <p className="mt-2">Licensed, Bonded & Insured • Glendale, CA</p>
        </div>
      </div>
    </footer>
  )
}
