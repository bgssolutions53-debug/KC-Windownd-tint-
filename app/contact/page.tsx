import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { StickyCtaBar } from "@/components/sticky-cta-bar"
import { ContactHero } from "@/components/contact/contact-hero"
import { ContactForm } from "@/components/contact/contact-form"
import { ContactInfo } from "@/components/contact/contact-info"
import { ServiceArea } from "@/components/contact/service-area"

export const metadata = {
  title: "Contact Us | Get Free Quote | KC Intuitive Window Tint",
  description:
    "Contact KC Intuitive Window Tint for a free quote. Call 661-525-8453 or fill out our form. Serving Kern County and Bakersfield with professional window tinting.",
}

export default function ContactPage() {
  return (
    <>
      <Header />
      <main>
        <ContactHero />
        <div className="py-24 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
              <ContactForm />
              <ContactInfo />
            </div>
          </div>
        </div>
        <ServiceArea />
      </main>
      <Footer />
      <StickyCtaBar />
    </>
  )
}
