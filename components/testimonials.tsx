import { Star } from "lucide-react"

const testimonials = [
  {
    quote: "Locked out of my apartment at midnight and Jewel City Locksmith showed up in 20 minutes. Lifesavers!",
    author: "Alex M.",
    rating: 5,
  },
  {
    quote: "Quick, affordable, and very professional. Highly recommended.",
    author: "Jessica L.",
    rating: 5,
  },
  {
    quote: "Best locksmith in Glendale! They replaced all my locks after a break-in. Fast and fair pricing.",
    author: "Michael R.",
    rating: 5,
  },
]

export function Testimonials() {
  return (
    <section id="testimonials" className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-primary mb-4">What Our Customers Say</h2>
        <p className="text-center text-foreground/60 mb-12 text-sm">
          Sample feedback shown until verified reviews are added
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-background rounded-lg p-6 border border-border">
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="size-5 text-primary fill-primary" />
                ))}
              </div>
              <p className="text-foreground/80 italic mb-4">{`"${testimonial.quote}"`}</p>
              <p className="text-foreground font-semibold">— {testimonial.author} (Sample)</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
