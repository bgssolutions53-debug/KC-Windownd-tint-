export function ServicesHero() {
  return (
    <section className="relative pt-32 pb-20 bg-secondary overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent" />
      </div>

      <div className="relative container mx-auto px-4 text-center">
        <h1 className="font-serif font-bold text-5xl sm:text-6xl lg:text-7xl text-secondary-foreground mb-6 text-balance">
          Our <span className="text-primary">Services</span>
        </h1>
        <p className="text-xl text-secondary-foreground/80 max-w-3xl mx-auto leading-relaxed">
          Comprehensive window tinting solutions for every need — from residential comfort to commercial efficiency
        </p>
      </div>
    </section>
  )
}
