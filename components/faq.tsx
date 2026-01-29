import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const faqs = [
  {
    question: "How quickly can a locksmith arrive?",
    answer:
      "We typically arrive within 15-25 minutes for emergency calls in our service area. Response times may vary depending on location and traffic, but we always prioritize urgent situations.",
  },
  {
    question: "How much does a locksmith cost?",
    answer:
      "Pricing depends on the service needed. We offer upfront, transparent pricing with no hidden fees. Call us for a free estimate before we start any work.",
  },
  {
    question: "Do you provide car key and fob programming?",
    answer:
      "Yes! We specialize in automotive locksmith services including car key replacement, key fob programming, transponder key duplication, and ignition repair for most vehicle makes and models.",
  },
  {
    question: "Should I rekey or replace my locks?",
    answer:
      "Rekeying is often more cost-effective if your locks are in good condition. However, if you want upgraded security or have older/damaged locks, replacement may be better. We'll assess your situation and recommend the best option.",
  },
  {
    question: "What areas do you serve?",
    answer:
      "We proudly serve Glendale, Burbank, Pasadena, and the greater Los Angeles area including surrounding communities. Contact us to confirm service in your specific location.",
  },
]

export function FAQ() {
  return (
    <section className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-primary mb-12">Frequently Asked Questions</h2>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-background rounded-lg border border-border px-6"
              >
                <AccordionTrigger className="text-left font-semibold text-foreground hover:text-primary">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-foreground/70 leading-relaxed">{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}
