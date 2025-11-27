import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  metadataBase: new URL("https://kcintuitiveint.com"),
  title: {
    default: "KC Intuitive Window Tint | Professional Window Tinting Kern County",
    template: "%s | KC Intuitive Window Tint",
  },
  description:
    "Professional window tinting for homes and businesses in Kern County. Reduce heat, glare, and UV with premium film.",
  keywords: [
    "window tinting",
    "Kern County",
    "Bakersfield",
    "residential tinting",
    "commercial tinting",
    "UV protection",
    "energy saving",
    "privacy film",
  ],
  openGraph: {
    type: "website",
    url: "https://kcintuitiveint.com",
    siteName: "KC Intuitive Window Tint",
    title: "KC Intuitive Window Tint",
    description:
      "Premium residential & commercial window tinting in Kern County.",
    images: [
      {
        url: "/kc-intuitive-logo-minimal-color.jpg",
        width: 1200,
        height: 630,
        alt: "KC Intuitive Window Tint logo",
      },
    ],
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "KC Intuitive Window Tint",
    description:
      "Premium residential & commercial window tinting in Kern County.",
    images: ["/kc-intuitive-logo-minimal-color.jpg"],
  },
  icons: {
    icon: "/favicon.png",
    apple: "/favicon.png",
  },
  alternates: {
    canonical: "https://kcintuitiveint.com",
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
