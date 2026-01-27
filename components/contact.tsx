"use client"

import type React from "react"

import { useState } from "react"
import { Phone, Mail, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    city: "",
    service: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    alert("Thank you! We will contact you shortly.")
  }

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-primary mb-12">Contact Us Now</h2>

        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Contact info */}
          <div className="space-y-8">
            <div>
              <a
                href="tel:+18185551234"
                className="text-4xl md:text-5xl font-bold text-primary hover:text-primary/80 transition-colors"
              >
                (818) 555-1234
              </a>
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-3 text-foreground/80">
                <Mail className="size-5 text-primary" />
                <a href="mailto:info@jewelcitylocksmith.com" className="hover:text-primary transition-colors">
                  info@jewelcitylocksmith.com
                </a>
              </div>
              <div className="flex items-center gap-3 text-foreground/80">
                <MapPin className="size-5 text-primary" />
                <span>Glendale, CA</span>
              </div>
            </div>

            <div className="flex gap-4">
              <Button
                asChild
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full font-bold px-8"
              >
                <a href="tel:+18185551234">
                  <Phone className="size-5 mr-2" />
                  CALL NOW
                </a>
              </Button>
            </div>
          </div>

          {/* Quote form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <Input
              placeholder="Your Name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="bg-card border-border text-foreground placeholder:text-muted-foreground"
              required
            />
            <Input
              type="tel"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              className="bg-card border-border text-foreground placeholder:text-muted-foreground"
              required
            />
            <Input
              placeholder="City"
              value={formData.city}
              onChange={(e) => setFormData({ ...formData, city: e.target.value })}
              className="bg-card border-border text-foreground placeholder:text-muted-foreground"
            />
            <select
              value={formData.service}
              onChange={(e) => setFormData({ ...formData, service: e.target.value })}
              className="w-full h-9 rounded-md border border-border bg-card px-3 py-1 text-foreground"
              required
            >
              <option value="">Service Needed</option>
              <option value="lockout">Emergency Lockout</option>
              <option value="automotive">Automotive / Car Keys</option>
              <option value="residential">Residential Locksmith</option>
              <option value="commercial">Commercial Security</option>
              <option value="other">Other</option>
            </select>
            <textarea
              placeholder="Message (optional)"
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className="w-full min-h-[100px] rounded-md border border-border bg-card px-3 py-2 text-foreground placeholder:text-muted-foreground"
            />
            <Button
              type="submit"
              size="lg"
              className="w-full bg-primary hover:bg-primary/90 text-primary-foreground rounded-full font-bold"
            >
              REQUEST A QUOTE
            </Button>
          </form>
        </div>
      </div>
    </section>
  )
}
