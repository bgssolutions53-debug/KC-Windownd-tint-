import { Button } from "@/components/ui/button"
import { Phone, ArrowRight, ShieldCheck, Sun, Clock, MapPin } from "lucide-react"
import Link from "next/link"

export function Hero() {
  return (
    <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden bg-black">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src="/professional-window-tinting-installation-on-modern.jpg"
          alt="Window tinting installation"
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/60 to-black" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-20 text-center">
        <div className="max-w-4xl mx-auto space-y-8">
          <h1 className="font-serif font-bold text-5xl sm:text-6xl lg:text-7xl text-white leading-tight text-balance">
            Professional Window Tinting for <span className="text-primary">Homes & Businesses</span>
          </h1>

          <p className="text-xl sm:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed text-pretty">
            Reduce heat, glare, and energy costs — enjoy comfort and privacy year-round in The Central Valley
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Button
              size="lg"
              className="bg-primary text-black hover:bg-primary/90 text-lg px-8 py-6 h-auto font-semibold"
              asChild
            >
              <a href="tel:661-525-8453">
                <Phone className="w-5 h-5 mr-2" />
                Call Now: 661-525-8453
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-primary text-primary hover:bg-primary hover:text-black text-lg px-8 py-6 h-auto bg-transparent font-semibold"
              asChild
            >
              <Link href="/contact">
                Get Free Quote
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </Button>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-12 max-w-3xl mx-auto">
            <div className="flex flex-col items-center gap-2 text-white">
              <ShieldCheck className="w-8 h-8 text-primary" />
              <span className="text-sm font-medium">Licensed & Insured</span>
            </div>
            <div className="flex flex-col items-center gap-2 text-white">
              <Sun className="w-8 h-8 text-primary" />
              <span className="text-sm font-medium">99% UV Protection</span>
            </div>
            <div className="flex flex-col items-center gap-2 text-white">
              <Clock className="w-8 h-8 text-primary" />
              <span className="text-sm font-medium">10-Year Warranty</span>
            </div>
            <div className="flex flex-col items-center gap-2 text-white">
              <MapPin className="w-8 h-8 text-primary" />
              <span className="text-sm font-medium">Local Experts</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
