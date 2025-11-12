import { Card } from "@/components/ui/card"

const certifications = [
  {
    title: "Licensed & Insured",
    description: "Fully licensed and insured for your complete peace of mind",
  },
  {
    title: "Certified Installers",
    description: "Factory-trained and certified in professional installation techniques",
  },
  {
    title: "Premium Materials",
    description: "Authorized dealer of industry-leading window film brands",
  },
  {
    title: "Warranty Backed",
    description: "Comprehensive warranties on all materials and workmanship",
  },
]

export function AboutCertifications() {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-serif font-bold text-4xl sm:text-5xl text-foreground mb-4 text-balance">
            Certifications & Credentials
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Trust in our expertise and commitment to excellence
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {certifications.map((cert, index) => {
            return (
              <Card key={index} className="p-6 text-center border-primary/20 hover:border-primary transition-colors">
                <div className="flex justify-center mb-4">
                  <div className="w-3 h-3 rounded-full bg-primary transition-transform hover:scale-110" />
                </div>
                <h3 className="font-serif font-semibold text-lg mb-2 text-foreground">{cert.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{cert.description}</p>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
