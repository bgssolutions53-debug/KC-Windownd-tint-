import { Hero } from "@/components/hero"
import { WhyChooseKC } from "@/components/why-choose-kc"
import { ServicesPreview } from "@/components/services-preview"
import { BeforeAfter } from "@/components/before-after"
import { Testimonials } from "@/components/testimonials"
import { HomeFaq } from "@/components/home-faq"
import { StickyCtaBar } from "@/components/sticky-cta-bar"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <WhyChooseKC />
        <ServicesPreview />
        <BeforeAfter />
        <Testimonials />
        <HomeFaq />
      </main>
      <Footer />
      <StickyCtaBar />
    </>
  )
}
