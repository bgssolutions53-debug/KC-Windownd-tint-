import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Check } from "lucide-react"
import Link from "next/link"

export interface Service {
  id: string
  title: string
  subtitle: string
  description: string
  benefits: string[]
  icon: any
  image: string
  lifespan: string
  warranty: string
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
            <img
              src={service.image || "/placeholder.svg"}
              alt={service.title}
              loading="lazy"
              decoding="async"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-secondary/60 to-transparent" />
          </div>

          {/* Content */}
          <div className="p-8 lg:p-12 flex flex-col justify-center bg-background">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 rounded-full bg-primary/10">
                <Icon className="w-8 h-8 text-primary" />
              </div>
              <div>
                <h2 className="font-serif font-bold text-3xl lg:text-4xl text-foreground mb-2">
                  {service.title}
                </h2>
                <p className="text-primary font-semibold text-lg">{service.subtitle}</p>
              </div>
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

            {/* Specs */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="p-4 rounded-lg bg-secondary/5 border border-primary/10">
                <p className="text-sm text-muted-foreground mb-1">Lifespan</p>
                <p className="font-semibold text-foreground">{service.lifespan}</p>
              </div>
              <div className="p-4 rounded-lg bg-secondary/5 border border-primary/10">
                <p className="text-sm text-muted-foreground mb-1">Warranty</p>
                <p className="font-semibold text-foreground">{service.warranty}</p>
              </div>
            </div>

            <Button asChild className="w-fit bg-primary text-black hover:bg-primary/90">
              <Link href="/contact">
                Get Free Quote
              </Link>
            </Button>
          </div>
        </div>
      </Card>
    </div>
  )
}
