import { Card } from "@/components/ui/card"

export function AboutStory() {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-serif font-bold text-4xl sm:text-5xl text-foreground mb-6 text-balance">Our Story</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Dedicated to creativity, culture, and growth in window tinting excellence
            </p>
          </div>

          <Card className="p-8 lg:p-12 border-primary/20">
            <div className="prose prose-lg max-w-none">
              <p className="text-muted-foreground leading-relaxed mb-6">
                KC Intuitive Window Tint (Kern Country — Intuitive Window Tint) is a creative hub where quality and
                innovation come together. We help homeowners and businesses define their vision and bring comfort,
                protection, and energy efficiency to their spaces.
              </p>

              <p className="text-muted-foreground leading-relaxed mb-6">
                We help our clients find their voice through expert craftsmanship and premium materials. And we help
                them achieve their goals with solutions that work. That's why we created our comprehensive service
                approach — a new way to pause, reset, and spark the transformation that brings not just better windows,
                but a better quality of life.
              </p>

              <p className="text-muted-foreground leading-relaxed mb-6">
                Our mission is simple: to provide the highest quality window tinting services with unmatched customer
                care. We believe in building lasting relationships with our clients, ensuring every project exceeds
                expectations.
              </p>

              <div className="bg-primary/10 p-6 rounded-lg border-l-4 border-primary mt-8">
                <p className="text-foreground font-semibold text-lg mb-2">Proudly Serving Kern County</p>
                <p className="text-muted-foreground">
                  For years, we've been the trusted choice for residential and commercial window tinting across
                  Bakersfield and surrounding areas. Our commitment to excellence and customer satisfaction has made us
                  a leader in the industry.
                </p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  )
}
