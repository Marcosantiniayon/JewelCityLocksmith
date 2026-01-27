"use client"

import { Phone } from "lucide-react"

export function MobileCTABar() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-background/95 backdrop-blur-md border-t border-border p-3 flex gap-3">
      <a
        href="tel:+18185551234"
        className="flex-1 flex items-center justify-center gap-2 bg-primary text-primary-foreground font-bold py-3 rounded-full"
      >
        <Phone className="size-5" />
        CALL NOW
      </a>
      <a
        href="#contact"
        className="flex-1 flex items-center justify-center gap-2 border-2 border-primary text-primary font-bold py-3 rounded-full"
      >
        GET A QUOTE
      </a>
    </div>
  )
}
