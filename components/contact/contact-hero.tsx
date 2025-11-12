export function ContactHero() {
  return (
    <section className="relative pt-32 pb-20 bg-secondary overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent" />
      </div>

      <div className="relative container mx-auto px-4 text-center">
        <h1 className="font-serif font-bold text-5xl sm:text-6xl lg:text-7xl text-secondary-foreground mb-6 text-balance">
          Get Your <span className="text-primary">Free Quote</span>
        </h1>
        <p className="text-xl text-secondary-foreground/80 max-w-3xl mx-auto leading-relaxed">
          Ready to transform your space? Contact us today for a free consultation and estimate
        </p>
      </div>
    </section>
  )
}
