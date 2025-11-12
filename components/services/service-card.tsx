import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Check, Phone } from "lucide-react"
import Link from "next/link"
import type { LucideIcon } from "lucide-react"

interface Service {
  id: string
  icon: LucideIcon
  title: string
  subtitle: string
  description: string
  benefits: string[]
  lifespan: string
  warranty: string
  image: string
}

interface ServiceCardProps {
  service: Service
  index: number
}

export function ServiceCard({ service, index }: ServiceCardProps) {
  const Icon = service.icon
  const isEven = index % 2 === 0

  return (
    <div id={service.id} className="scroll-mt-24">
      <Card className="overflow-hidden border-primary/20 hover:border-primary transition-colors">
        <div className={`grid lg:grid-cols-2 gap-0 ${isEven ? "" : "lg:grid-flow-dense"}`}>
          {/* Image */}
          <div className={`relative h-80 lg:h-auto ${isEven ? "" : "lg:col-start-2"}`}>
            <img src={service.image || "/placeholder.svg"} alt={service.title} className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-secondary/60 to-transparent" />
            <div className="absolute bottom-6 left-6">
              <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center">
                <Icon className="w-8 h-8 text-primary-foreground" />
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="p-8 lg:p-12 flex flex-col justify-center">
            <div className="mb-6">
              <h2 className="font-serif font-bold text-3xl lg:text-4xl text-foreground mb-2">{service.title}</h2>
              <p className="text-primary font-semibold text-lg">{service.subtitle}</p>
            </div>

            <p className="text-muted-foreground leading-relaxed mb-6">{service.description}</p>

            {/* Benefits */}
            <div className="space-y-3 mb-6">
              {service.benefits.map((benefit, i) => (
                <div key={i} className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground">{benefit}</span>
                </div>
              ))}
            </div>

            {/* Details */}
            <div className="grid sm:grid-cols-2 gap-4 mb-6 p-4 bg-muted rounded-lg">
              <div>
                <div className="text-sm text-muted-foreground mb-1">Lifespan</div>
                <div className="font-semibold text-foreground">{service.lifespan}</div>
              </div>
              <div>
                <div className="text-sm text-muted-foreground mb-1">Warranty</div>
                <div className="font-semibold text-foreground">{service.warranty}</div>
              </div>
            </div>

            {/* CTA */}
            <div className="flex flex-col sm:flex-row gap-3">
              <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90" asChild>
                <Link href="/contact">Get Free Quote</Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent"
                asChild
              >
                <a href="tel:661-525-8453">
                  <Phone className="w-4 h-4 mr-2" />
                  Call Now
                </a>
              </Button>
            </div>
          </div>
        </div>
      </Card>
    </div>
  )
}
