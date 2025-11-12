import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const faqs = [
  {
    question: "How long does window tint last?",
    answer:
      "The lifespan of window tint depends on the type of film and environmental factors. Residential films typically last 10-15 years, while commercial-grade films can last 12-20 years. Premium ceramic films often have the longest lifespan. Proper care and maintenance can extend the life of your tint significantly.",
  },
  {
    question: "How do I clean tinted windows?",
    answer:
      "Clean tinted windows with a soft cloth or squeegee and a mild, ammonia-free cleaning solution. Avoid abrasive materials, paper towels, or cleaners containing ammonia, as these can damage the film. Wait at least 30 days after installation before cleaning to allow the film to fully cure.",
  },
  {
    question: "Can window tint really reduce heat?",
    answer:
      "Yes! Quality window tint can reject up to 80% of solar heat, significantly reducing indoor temperatures. This leads to lower cooling costs (up to 30% savings), improved comfort, and less strain on your HVAC system. Ceramic films offer the best heat rejection performance.",
  },
  {
    question: "What's the curing time after installation?",
    answer:
      "Window tint typically takes 3-7 days to fully cure, depending on weather conditions and film type. During this time, you may notice small water bubbles or a hazy appearance — this is normal and will disappear as the film dries. Avoid rolling down car windows or cleaning the film during the curing period.",
  },
  {
    question: "What's covered under the warranty?",
    answer:
      "Our comprehensive warranty covers defects in materials and workmanship, including bubbling, peeling, discoloration, and adhesive failure. Residential films come with a 5-year warranty, while commercial and security films may have extended coverage. The warranty does not cover damage from accidents, improper cleaning, or normal wear and tear.",
  },
  {
    question: "Will window tint make my home too dark?",
    answer:
      "Not at all! Window tint comes in various shades (VLT - Visible Light Transmission) from 5% (very dark) to 70% (very light). We'll help you choose the right shade that provides the benefits you want while maintaining the brightness and views you desire. Many clients are surprised by how much natural light remains even with darker tints.",
  },
  {
    question: "Can window tint be removed?",
    answer:
      "Yes, window tint can be professionally removed without damaging the glass. However, DIY removal is not recommended as it can leave adhesive residue or scratch the glass. If you need tint removed or replaced, our team can handle it safely and efficiently.",
  },
  {
    question: "Does window tint provide privacy at night?",
    answer:
      "During the day, reflective and darker tints provide excellent privacy from outside. However, at night when interior lights are on, visibility from outside increases. For 24/7 privacy, we recommend decorative frosted or privacy films that obscure views regardless of lighting conditions.",
  },
  {
    question: "Is window tinting energy efficient?",
    answer:
      "Window tinting is one of the most cost-effective energy efficiency upgrades. By reducing solar heat gain, tint lowers cooling costs in summer and can help retain heat in winter. Many clients see a return on investment within 3-5 years through energy savings alone.",
  },
  {
    question: "How long does installation take?",
    answer:
      "Installation time varies based on the size and number of windows. A typical residential home takes 4-8 hours, while a single room might take 1-2 hours. Commercial projects are scheduled based on square footage and complexity. We work efficiently to minimize disruption to your daily routine.",
  },
  {
    question: "Can I tint windows myself?",
    answer:
      "While DIY kits are available, professional installation is strongly recommended. Proper installation requires specialized tools, techniques, and experience to avoid bubbles, creases, and improper adhesion. Professional installation also comes with warranty protection and guaranteed results.",
  },
  {
    question: "What's the difference between ceramic and regular tint?",
    answer:
      "Ceramic tint uses advanced nano-ceramic technology that provides superior heat rejection, UV protection, and clarity without interfering with electronics. Regular dyed or metallic films are more affordable but may fade over time or block signals. Ceramic is the premium choice for maximum performance and longevity.",
  },
]

export function FaqList() {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border border-primary/20 rounded-lg px-6 hover:border-primary transition-colors"
              >
                <AccordionTrigger className="text-left font-serif font-semibold text-lg text-foreground hover:text-primary">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pt-2">{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}
