import { Button } from "@/components/ui/button"
import { Phone, MessageSquare } from "lucide-react"
import Link from "next/link"

export function FaqCta() {
  return (
    <section className="py-24 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-serif font-bold text-4xl sm:text-5xl text-secondary-foreground mb-6 text-balance">
            Still Have Questions?
          </h2>
          <p className="text-xl text-secondary-foreground/80 mb-8 leading-relaxed">
            We're here to help! Contact us for personalized answers and expert advice.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90 text-lg px-8 py-6 h-auto"
              asChild
            >
              <a href="tel:661-525-8453">
                <Phone className="w-5 h-5 mr-2" />
                Call: 661-525-8453
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground text-lg px-8 py-6 h-auto bg-transparent"
              asChild
            >
              <Link href="/contact">
                <MessageSquare className="w-5 h-5 mr-2" />
                Send a Message
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
