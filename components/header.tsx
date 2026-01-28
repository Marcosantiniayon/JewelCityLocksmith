"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Phone, Menu, X } from "lucide-react"
import { JewelCityLogo } from "@/components/logo"

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/95 backdrop-blur-md shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-28 md:h-32">
          <JewelCityLogo className="h-20 md:h-24 w-auto" />

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-6">
            <a href="#services" className="text-foreground/80 hover:text-primary transition-colors">
              Services
            </a>
            <a href="#why-us" className="text-foreground/80 hover:text-primary transition-colors">
              Why Us
            </a>
            <a href="#testimonials" className="text-foreground/80 hover:text-primary transition-colors">
              Reviews
            </a>
            <Link href="/blog" className="text-foreground/80 hover:text-primary transition-colors">
              Blog
            </Link>
            <a href="#contact" className="text-foreground/80 hover:text-primary transition-colors">
              Contact
            </a>
          </nav>

          {/* Phone CTA */}
          <a href="tel:+18189130155" className="hidden md:flex items-center gap-2 text-primary font-bold text-lg">
            <Phone className="size-5" />
            (818) 913-0155
          </a>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-foreground"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="size-6" /> : <Menu className="size-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-background/95 backdrop-blur-md pb-4">
            <nav className="flex flex-col gap-4 px-4">
              <a href="#services" className="text-foreground/80 hover:text-primary transition-colors py-2">
                Services
              </a>
              <a href="#why-us" className="text-foreground/80 hover:text-primary transition-colors py-2">
                Why Us
              </a>
              <a href="#testimonials" className="text-foreground/80 hover:text-primary transition-colors py-2">
                Reviews
              </a>
              <Link href="/blog" className="text-foreground/80 hover:text-primary transition-colors py-2">
                Blog
              </Link>
              <a href="#contact" className="text-foreground/80 hover:text-primary transition-colors py-2">
                Contact
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
