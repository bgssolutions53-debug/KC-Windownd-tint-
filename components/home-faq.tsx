import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"
import Link from "next/link"


const faqs = [
  {
    question: "How long does window tint last?",
    answer:
      "The lifespan of window tint depends on the type of film and environmental factors. Residential films typically last 10-15 years, while commercial-grade films can last 12-20 years. Premium ceramic films often have the longest lifespan.",
  },

  {
    question: "How do I measure my windows for a quote?",
    answer: (
      <div className="flex flex-col md:flex-row gap-6 items-center">
        <div className="md:w-1/2 space-y-3">
          <p>
            It's easy! Just follow the guide to measure the <strong>inside height</strong> of your
            window's glass, from frame to frame.
          </p>
          <p>
            Once you have the height and width, send them to us with your free quote request.
            This gives us a great starting point for your estimate!
          </p>
        </div>
        <div className="md:w-1/2 w-full max-w-sm">
        <img
                src="/kcen.png"
                alt="Commercial window tinting"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
        </div>
      </div>
    ),
  },
  
  {
    question: "Can window tint really reduce heat?",
    answer:
      "Yes! Quality window tint can reject up to 80% of solar heat, significantly reducing indoor temperatures. This leads to lower cooling costs (up to 30% savings), improved comfort, and less strain on your HVAC system.",
  },
  {
    question: "What's the curing time after installation?",
    answer:
      "Window tint typically takes 3-7 days to fully cure, depending on weather conditions and film type. During this time, you may notice small water bubbles or a hazy appearance — this is normal and will disappear as the film dries.",
  },
  {
    question: "Will window tint make my home too dark?",
    answer:
      "Not at all! Window tint comes in various shades from 5% (very dark) to 70% (very light). We'll help you choose the right shade that provides the benefits you want while maintaining the brightness and views you desire.",
  },
  {
    question: "Is window tinting energy efficient?",
    answer:
      "Window tinting is one of the most cost-effective energy efficiency upgrades. By reducing solar heat gain, tint lowers cooling costs in summer and can help retain heat in winter. Many clients see a return on investment within 3-5 years.",
  },
  {
    question: "How long does installation take?",
    answer:
      "Installation time varies based on the size and number of windows. A typical residential home takes 4-8 hours, while a single room might take 1-2 hours. We work efficiently to minimize disruption to your daily routine.",
  },
]

export function HomeFaq() {
  return (
    <section className="py-20 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-serif font-bold text-4xl sm:text-5xl text-black mb-4 text-balance">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-black/70 leading-relaxed">Get answers to common questions about window tinting</p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border border-primary/20 rounded-lg px-6 hover:border-primary transition-colors"
              >
                <AccordionTrigger className="text-left font-serif font-semibold text-lg text-black hover:text-primary">
                  {faq.question}
                </AccordionTrigger>
                {/* 3. NO HAY CAMBIOS AQUÍ. React renderizará el texto o el JSX automáticamente */}
                <AccordionContent className="text-black/70 leading-relaxed pt-2">{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          <div className="text-center mt-12 p-8 bg-gradient-to-r from-primary/10 to-primary/5 rounded-2xl border border-primary/20">
            <p className="text-lg text-black/80 mb-4">Didn't find your answer?</p>
            <Button size="lg" className="bg-primary text-black hover:bg-primary/90 font-semibold" asChild>
              <Link href="/contact">Get Your Free Quote Today</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}