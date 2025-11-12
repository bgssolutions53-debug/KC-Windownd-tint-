import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Home, Building2, ArrowRight } from "lucide-react"
import Link from "next/link"

export function ServicesPreview() {
  return (
    <section className="py-20 md:py-24 bg-[#0F0F0F]">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-serif font-bold text-4xl sm:text-5xl text-white mb-4 text-balance">Our Services</h2>
          <p className="text-lg text-white/70 leading-relaxed">Professional window tinting solutions for every need</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Residential */}
          <Card className="group overflow-hidden border-0 bg-[#181818] hover:shadow-lg hover:-translate-y-1 transition-all duration-300 rounded-2xl">
            <div className="relative h-64 overflow-hidden">
              <img
                src="/modern-home-with-tinted-windows-exterior-view.jpg"
                alt="Residential window tinting"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
              <div className="absolute bottom-4 left-4">
                <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center">
                  <Home className="w-6 h-6 text-black" />
                </div>
              </div>
            </div>
            <div className="p-8">
              <h3 className="font-serif font-bold text-2xl mb-3 text-white">Residential Window Tinting</h3>
              <p className="text-white/70 leading-relaxed mb-6">
                Stay cool in summer and warm in winter with energy-efficient residential window tinting that enhances
                privacy and protects your interiors.
              </p>
              <Button
                variant="outline"
                className="border-primary text-primary hover:bg-primary hover:text-black group bg-transparent"
                asChild
              >
                <Link href="/services#residential">
                  Learn More
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </div>
          </Card>

          {/* Commercial */}
          <Card className="group overflow-hidden border-0 bg-[#181818] hover:shadow-lg hover:-translate-y-1 transition-all duration-300 rounded-2xl">
            <div className="relative h-64 overflow-hidden">
              <img
                src="/modern-tinted-office.png"
                alt="Commercial window tinting"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
              <div className="absolute bottom-4 left-4">
                <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center">
                  <Building2 className="w-6 h-6 text-black" />
                </div>
              </div>
            </div>
            <div className="p-8">
              <h3 className="font-serif font-bold text-2xl mb-3 text-white">Commercial Window Tinting</h3>
              <p className="text-white/70 leading-relaxed mb-6">
                Give your business a modern, polished look while improving comfort, reducing glare, and lowering energy
                costs for your employees and customers.
              </p>
              <Button
                variant="outline"
                className="border-primary text-primary hover:bg-primary hover:text-black group bg-transparent"
                asChild
              >
                <Link href="/services#commercial">
                  Learn More
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </div>
          </Card>
        </div>

        <div className="text-center mt-12">
          <Button size="lg" className="bg-primary text-black hover:bg-primary/90 font-semibold" asChild>
            <Link href="/services">
              View All Services
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
