import { Clock, Zap, DollarSign, Shield, Users, ThumbsUp } from "lucide-react"

const reasons = [
  { icon: Clock, text: "24/7 Emergency Service" },
  { icon: Zap, text: "Fast Response Time" },
  { icon: Shield, text: "Licensed & Insured" },
  { icon: DollarSign, text: "Affordable Pricing" },
  { icon: Users, text: "Owner-Operated, Community-Focused" },
  { icon: ThumbsUp, text: "Professional, Respectful Service" },
]

export function WhyChooseUs() {
  return (
    <section id="why-us" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-primary mb-12">
          Why Choose Jewel City Locksmith?
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
          {reasons.map((reason) => (
            <div key={reason.text} className="flex items-center gap-4">
              <div className="flex-shrink-0 size-10 rounded-full bg-primary/10 flex items-center justify-center">
                <reason.icon className="size-5 text-primary" />
              </div>
              <span className="text-foreground font-medium">{reason.text}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
