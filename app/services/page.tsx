import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { StickyCtaBar } from "@/components/sticky-cta-bar"
import { ServicesHero } from "@/components/services/services-hero"
import { ServicesList } from "@/components/services/services-list"
import { ServicesCta } from "@/components/services/services-cta"

export const metadata = {
  title: "Window Tinting Services | KC Intuitive Window Tint",
  description:
    "Professional window tinting services including residential, commercial, UV protection, decorative films, safety films, and anti-graffiti solutions in Kern County.",
}

export default function ServicesPage() {
  return (
    <>
      <Header />
      <main>
        <ServicesHero />
        <ServicesList />
        <ServicesCta />
      </main>
      <Footer />
      <StickyCtaBar />
    </>
  )
}
