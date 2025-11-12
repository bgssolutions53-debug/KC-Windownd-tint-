const values = [
  {
    title: "Customer First",
    description:
      "Your satisfaction is our top priority. We listen, understand, and deliver solutions that exceed expectations.",
  },
  {
    title: "Quality Craftsmanship",
    description: "We use only premium materials and proven techniques to ensure lasting results you can trust.",
  },
  {
    title: "Community Focused",
    description:
      "As local experts, we're invested in our community and committed to serving our neighbors with integrity.",
  },
  {
    title: "Professional Excellence",
    description: "Our team is trained, certified, and dedicated to maintaining the highest standards in the industry.",
  },
]

export function AboutValues() {
  return (
    <section className="py-24 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-serif font-bold text-4xl sm:text-5xl text-secondary-foreground mb-4 text-balance">
            Our Values
          </h2>
          <p className="text-lg text-secondary-foreground/80 leading-relaxed">
            The principles that guide everything we do
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {values.map((value, index) => {
            return (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-4">
                  <div className="w-3 h-3 rounded-full bg-primary transition-transform hover:scale-110" />
                </div>
                <h3 className="font-serif font-semibold text-xl mb-3 text-secondary-foreground">{value.title}</h3>
                <p className="text-secondary-foreground/80 leading-relaxed">{value.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
