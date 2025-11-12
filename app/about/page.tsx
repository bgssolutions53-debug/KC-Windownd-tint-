import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { StickyCtaBar } from "@/components/sticky-cta-bar"
import { AboutHero } from "@/components/about/about-hero"
import { AboutStory } from "@/components/about/about-story"
import { AboutValues } from "@/components/about/about-values"
import { AboutCertifications } from "@/components/about/about-certifications"

export const metadata = {
  title: "About Us | KC Intuitive Window Tint",
  description:
    "Learn about KC Intuitive Window Tint, your trusted window tinting experts serving Kern County and Bakersfield with professional service and quality craftsmanship.",
}

export default function AboutPage() {
  return (
    <>
      <Header />
      <main>
        <AboutHero />
        <AboutStory />
        <AboutValues />
        <AboutCertifications />
      </main>
      <Footer />
      <StickyCtaBar />
    </>
  )
}
