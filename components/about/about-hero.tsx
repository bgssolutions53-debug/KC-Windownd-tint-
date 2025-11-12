export function AboutHero() {
  return (
    <section className="relative pt-32 pb-20 bg-secondary overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent" />
      </div>

      <div className="relative container mx-auto px-4 text-center">
        <h1 className="font-serif font-bold text-5xl sm:text-6xl lg:text-7xl text-secondary-foreground mb-6 text-balance">
          About <span className="text-primary">KC Intuitive</span>
        </h1>
        <p className="text-xl text-secondary-foreground/80 max-w-3xl mx-auto leading-relaxed">
          Your trusted partner for professional window tinting in Kern County
        </p>
      </div>
    </section>
  )
}
