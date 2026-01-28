import Link from "next/link"
import { Phone } from "lucide-react"
import { JewelCityLogo } from "@/components/logo"

export function BlogHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/90 backdrop-blur">
      <div className="container mx-auto px-4">
        <div className="flex h-20 items-center justify-between">
          <Link href="/" className="flex items-center">
            <JewelCityLogo className="h-12 w-auto" />
          </Link>
          <nav className="flex items-center gap-6 text-sm">
            <Link href="/" className="text-foreground/80 hover:text-primary transition-colors">
              Home
            </Link>
            <Link href="/blog" className="text-foreground/80 hover:text-primary transition-colors">
              Blog
            </Link>
            <a href="tel:+18189130155" className="hidden md:flex items-center gap-2 text-primary font-semibold">
              <Phone className="size-4" />
              (818) 913-0155
            </a>
          </nav>
        </div>
      </div>
    </header>
  )
}
