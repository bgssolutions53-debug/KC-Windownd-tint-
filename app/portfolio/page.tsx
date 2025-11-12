import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { StickyCtaBar } from "@/components/sticky-cta-bar"
import { PortfolioHero } from "@/components/portfolio/portfolio-hero"
import { PortfolioGallery } from "@/components/portfolio/portfolio-gallery"

export const metadata = {
  title: "Portfolio | KC Intuitive Window Tint Projects",
  description:
    "View our portfolio of residential and commercial window tinting projects across Kern County and Bakersfield. See the quality and craftsmanship we deliver.",
}

export default function PortfolioPage() {
  return (
    <>
      <Header />
      <main>
        <PortfolioHero />
        <PortfolioGallery />
      </main>
      <Footer />
      <StickyCtaBar />
    </>
  )
}
