const benefits = [
  {
    title: "UV Protection",
    description: "Blocks 99% of harmful rays",
  },
  {
    title: "Energy Efficiency",
    description: "Reduces cooling costs by up to 30%",
  },
  {
    title: "Privacy",
    description: "Keeps natural light while improving privacy",
  },
  {
    title: "Safety",
    description: "Strengthens glass and improves security",
  },
]

export function WhyChooseKC() {
  return (
    <section className="py-20 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-serif font-bold text-4xl sm:text-5xl text-black mb-4 text-balance">
            Why Choose KC Intuitive?
          </h2>
          <p className="text-lg text-black/70 leading-relaxed">
            Experience the difference of working with true professionals
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
          {benefits.map((benefit, index) => {
            return (
              <div key={index} className="text-center group">
                <div className="mb-6 flex justify-center">
                  <div className="w-3 h-3 rounded-full bg-primary group-hover:scale-125 transition-transform" />
                </div>
                <h3 className="font-serif font-semibold text-xl mb-2 text-black">{benefit.title}</h3>
                <p className="text-black/70 leading-relaxed">{benefit.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
