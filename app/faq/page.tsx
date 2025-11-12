import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { StickyCtaBar } from "@/components/sticky-cta-bar"
import { FaqHero } from "@/components/faq/faq-hero"
import { FaqList } from "@/components/faq/faq-list"
import { FaqCta } from "@/components/faq/faq-cta"

export const metadata = {
  title: "FAQ | KC Intuitive Window Tint",
  description:
    "Find answers to frequently asked questions about window tinting, installation, maintenance, warranties, and more from KC Intuitive Window Tint.",
}

export default function FaqPage() {
  return (
    <>
      <Header />
      <main>
        <FaqHero />
        <FaqList />
        <FaqCta />
      </main>
      <Footer />
      <StickyCtaBar />
    </>
  )
}
