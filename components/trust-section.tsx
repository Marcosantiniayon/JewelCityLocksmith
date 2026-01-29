import Image from "next/image"

export function TrustSection() {
  return (
    <section className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-primary mb-12">
          Owner-Operated. Locally Trusted.
        </h2>

        <div className="grid md:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
          {/* Owner photo */}
          <div className="relative">
            <div className="aspect-[4/5] rounded-lg overflow-hidden border-4 border-primary/20 relative">
              <Image
                src="/images/IMG_8657.jpg"
                alt="Jewel City Locksmith owner"
                fill
                sizes="(max-width: 768px) 100vw, 40vw"
                className="object-cover"
              />
            </div>
          </div>

          {/* Trust copy */}
          <div className="space-y-6">
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <span className="text-primary text-2xl">✓</span>
                <div>
                  <h3 className="text-lg font-bold text-foreground">Owner-Operated Service</h3>
                  <p className="text-foreground/70">
                    No subcontractors — the same professional answers the phone and shows up at your door.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <span className="text-primary text-2xl">✓</span>
                <div>
                  <h3 className="text-lg font-bold text-foreground">Local Glendale Business</h3>
                  <p className="text-foreground/70">
                    {"We're your neighbors, serving the community we live in with pride."}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <span className="text-primary text-2xl">✓</span>
                <div>
                  <h3 className="text-lg font-bold text-foreground">Licensed, Bonded & Insured</h3>
                  <p className="text-foreground/70">Full credentials for your peace of mind and protection.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <span className="text-primary text-2xl">✓</span>
                <div>
                  <h3 className="text-lg font-bold text-foreground">7+ Years of Experience</h3>
                  <p className="text-foreground/70">Hands-on expertise across residential, automotive, and commercial work.</p>
                </div>
              </div>
            </div>

            <p className="text-foreground/80 leading-relaxed border-l-4 border-primary pl-4">
              {
                "When you call Jewel City Locksmith, you're getting a trusted local professional — not a call center or random contractor. I take pride in every job and treat your property like my own."
              }
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
