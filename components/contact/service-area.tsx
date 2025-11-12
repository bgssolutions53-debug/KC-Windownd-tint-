export function ServiceArea() {
  return (
    <section className="py-24 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-serif font-bold text-4xl sm:text-5xl text-secondary-foreground mb-6 text-balance">
            Proudly Serving Kern County
          </h2>
          <p className="text-xl text-secondary-foreground/80 mb-8 leading-relaxed">
            We provide professional window tinting services throughout Bakersfield and the surrounding areas
          </p>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 text-secondary-foreground/80">
            <div className="p-4 bg-secondary-foreground/5 rounded-lg">Bakersfield</div>
            <div className="p-4 bg-secondary-foreground/5 rounded-lg">Oildale</div>
            <div className="p-4 bg-secondary-foreground/5 rounded-lg">Rosedale</div>
            <div className="p-4 bg-secondary-foreground/5 rounded-lg">Shafter</div>
            <div className="p-4 bg-secondary-foreground/5 rounded-lg">Wasco</div>
            <div className="p-4 bg-secondary-foreground/5 rounded-lg">Delano</div>
            <div className="p-4 bg-secondary-foreground/5 rounded-lg">Arvin</div>
            <div className="p-4 bg-secondary-foreground/5 rounded-lg">Lamont</div>
            <div className="p-4 bg-secondary-foreground/5 rounded-lg">Tehachapi</div>
          </div>

          <p className="text-secondary-foreground/60 mt-8">
            Don't see your city? Contact us — we may still be able to serve your area!
          </p>
        </div>
      </div>
    </section>
  )
}
