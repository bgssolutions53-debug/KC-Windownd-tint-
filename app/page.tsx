import type { Metadata } from "next"
import { Hero } from "@/components/hero"
import { WhyChooseKC } from "@/components/why-choose-kc"
import { ServicesPreview } from "@/components/services-preview"
import { BeforeAfter } from "@/components/before-after"
import { Testimonials } from "@/components/testimonials"
import { HomeFaq } from "@/components/home-faq"
import { StickyCtaBar } from "@/components/sticky-cta-bar"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
  title: "KC Intuitive Window Tint | Professional Window Tinting Kern County",
  description:
    "Premium residential and commercial window tinting in Kern County. Improve privacy, reduce heat, block UV, and enhance comfort with high-quality film installation.",
  keywords: [
    "window tinting",
    "Bakersfield window tint",
    "Kern County tint",
    "residential tint",
    "commercial tint",
    "privacy film",
    "UV protection",
    "heat rejection film",
  ],
  openGraph: {
    title: "KC Intuitive Window Tint",
    description:
      "Professional window tinting services in Kern County. Home • Business • Privacy • Security Films.",
    url: "https://kcintuitiveint.com",
    siteName: "KC Intuitive Window Tint",
    type: "website",
    images: [
      {
        url: "/kc-intuitive-logo-minimal-color.jpg",
        width: 1200,
        height: 630,
        alt: "KC Intuitive Window Tint",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "KC Intuitive Window Tint – Kern County",
    description:
      "Residential & commercial window tinting services with high-quality film installation.",
    images: ["/kc-intuitive-logo-minimal-color.jpg"],
  },
  alternates: {
    canonical: "https://kcintuitiveint.com",
  },
}

export default function Home() {
  // JSON-LD para SEO LocalBusiness (ayuda a ranking local + Google Maps)
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "KC Intuitive Window Tint",
    url: "https://kcintuitiveint.com",
    telephone: "+1-661-525-8453", // cámbialo si quieres
    image: "https://kcintuitiveint.com/kc-intuitive-logo-minimal-color.jpg",
    description:
      "Professional window tinting for residential and commercial properties in Kern County.",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Bakersfield",
      addressRegion: "CA",
      addressCountry: "US",
    },
    areaServed: "Kern County, CA",
    priceRange: "$$",
  }

  return (
    <>
      {/* Schema.org JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

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
