"use client"

import { useMemo, useState } from "react"
import { Button } from "@/components/ui/button"
import { PortfolioCard, Project, BeforeAfterSlider } from "./portfolio-card"
import { X } from "lucide-react"

const projects = [
  {
    id: 1,
    title: "Commercial Window",
    location: "Bakersfield, CA",
    category: "Residential",
    type: "Privacy Window",
    film: "White Frost",
    description: "This job has 2 layers of film the first is a frost grey. For greater privacy.",
    beforeImage: "/bright-sunny-room-with-harsh-glare-through-windows.jpg",
    afterImage: "/comfortable-room-with-tinted-windows-reducing-glar.jpg",

    results: "Improved privacy, elegant finish",
  },
  {
    id: 2,
    title: "Commercial Window Tinting",
    location: "Kern County, CA",
    category: "Residential",
    type: "Safety / Security Film",
    film: "Anti-Graffiti Clear",
    description: "High-end residential project with dark ceramic film for maximum privacy and heat rejection.",
    beforeImage: "/ventaft14.jpg",
    afterImage: "/ventbef14.jpg",
    results: "Enhanced privacy, superior heat rejection",
  },
  {
    id: 3,
    title: "Commercial Window Tinting",
    location: "Kern County, CA",
    category: "Residential",
    type: "Residential Window Tinting",
    film: "Ceramic Material 50%",
    description: "High-end residential project with dark ceramic film for maximum privacy and heat rejection.",
    beforeImage: "/ventaft16.jpg",
    afterImage: "/ventbeft16.jpg",
    results: "Enhanced privacy, superior heat rejection",
  },
  {
    id: 4,
    title: "Restaurant in Bakersfield",
    location: "Bakersfield, CA",
    category: "Commercial",
    type: " ASWF Sky-30",
    film: "Reflective Material",
    description: "Installation of reflective material on the windows of a restaurant in Bakersfield to improve heat rejection and reduce glare.",
    beforeImage: "/portfolio-commercial-before-1.jpg",
    afterImage: "/portfolio-commercial-after-1.jpg",
    results: "Reduced heat & glare, cleaner exterior look",
  },
  {
    id: 5,
    title: "Residential Window Tinting",
    location: "Kern County, CA",
    category: "Residential",
    type: "Residential Window Tinting",
    film: "Safety / Security Film",
    description: "High-end residential project with dark ceramic film for maximum privacy and heat rejection.",
    beforeImage: "/ventaft5.jpg",
    afterImage: "/ventbef5.jpg",
    results: "Enhanced privacy, superior heat rejection",
  },
  {
    id: 6,
    title: "Residential Window Tinting",
    location: "Kern County, CA",
    category: "Residential",
    type: "Residential Window Tinting",
    film: "Safety / Security Film",
    description: "High-end residential project with dark ceramic film for maximum privacy and heat rejection.",
    beforeImage: "/ventaft6.jpg",
    afterImage: "/ventbefore6.jpg",
    results: "Enhanced privacy, superior heat rejection",
  },
  {
    id: 7,
    title: "Commercial Window Tinting",
    location: "Bakersfield, CA",
    category: "Commercial",
    type: "Commercial Window Tinting",
    film: "Reflective Material",
    description: "Commercial office building project with reflective film to improve heat rejection and reduce glare.",
    beforeImage: "/portfolio-commercial-before-2.jpg",
    afterImage: "/portfolio-commercial-after-2.jpg",
    results: "Improved energy efficiency, enhanced exterior",
  },
  {
    id: 8,
    title: "Office Window ",
    location: "Bakersfield, CA",
    category: "Commercial",
    type: "Commercial Window Tinting",
    film: "Reflective Material",
    description: "Commercial office building project with reflective film to improve heat rejection and reduce glare.",
    beforeImage: "/Ofiice-Window-affter.jpg",
    afterImage: "/Office-window-before.jpg",
    results: "Improved energy efficiency, enhanced exterior",
  },
  {
    id: 9,
    title: "Commercial Window Tinting",
    location: "Bakersfield, CA",
    category: "Commercial",
    type: "Commercial Window Tinting",
    film: "Reflective Material",
    description: "Commercial office building project with reflective film to improve heat rejection and reduce glare.",
    beforeImage: "/portfolio-commercial-before-3.jpg",
    afterImage: "/portfolio-commercial-after-3.jpg",
    
    results: "Improved energy efficiency, enhanced exterior",
  },
  {
    id: 10,
    title: "Commercial Window Tinting",
    location: "Bakersfield, CA",
    category: "Commercial",
    type: "Commercial Window Tinting",
    film: "Reflective Material",
    description: "Commercial office building project with reflective film to improve heat rejection and reduce glare.",
    beforeImage: "/portfolio-commercial-before-5.jpg",
    afterImage: "/portfolio-commercial-after-5.0.jpg",
    results: "Improved energy efficiency, enhanced exterior",
  },
  {
    id: 11,
    title: "Commercial Window Tinting",
    location: "Bakersfield, CA",
    category: "Commercial",
    type: "Commercial Window Tinting",
    film: "Reflective Material",
    description: "Commercial office building project with reflective film to improve heat rejection and reduce glare.",
    beforeImage: "/portfolio-commercial-after-61.jpg",
    afterImage: "/portfolio-commercial-before-6.jpg",
    results: "Improved energy efficiency, enhanced exterior",
  },
  {
    id: 12,
    title: "Residential Privacy Film",
    location: "Kern County, CA",
    category: "Residential",
    type: "Decorative Privacy Film",
    film: "Frosted Grey",
    description: "Beautiful frosted privacy film installation for bathroom and bedroom windows.",
    beforeImage: "/residential-privacityafter.jpg",
    afterImage: "/residential-privacity-filmberft.jpg",
    results: "Enhanced privacy, modern aesthetic",
  },
  {
    id: 13,
    title: "Office Glare Reduction",
    location: "Bakersfield, CA",
    category: "Residential",
    type: "Solar Control Tint",
    film: "Ceramic 35%",
    description: "Home window tinting to reduce heat and protect interiors from UV damage.",
    beforeImage: "/ventaft18.jpg",
    afterImage: "/ventbeft18.jpg",
    results: "Lower indoor temps, UV blocking",
  },
  {
    id: 14,
    title: "Commercial Storefront Protection",
    location: "Bakersfield, CA",
    category: "Commercial",
    type: "Safety / Security Film",
    film: "Anti-Graffiti Clear",
    description: "Storefront protection film to prevent scratches and vandalism damage.",
    beforeImage: "/commercial-store-despues.jpg",
    afterImage: "/comercial-store-antes.jpg",
    results: "Protected glass, easy maintenance",
  },
  {
    id: 15,
    title: "Residential Heat Rejection",
    location: "Kern County, CA",
    category: "Commercial",
    type: "Glare Control",
    film: "Neutral Ceramic",
    description: "Office tinting to reduce harsh glare and improve screen visibility.",
    beforeImage: "/ventaft3.jpg",
    afterImage: "/vent3bef.jpg",
    results: "Reduced glare, better comfort",
  },
  {
    id: 16,
    title: "Healthcare Privacy Install",
    location: "Bakersfield, CA",
    category: "Commercial",
    type: "Privacy / Decorative",
    film: "Frosted White",
    description: "Medical clinic frosted film for patient privacy and professional aesthetics.",
    beforeImage: "/ventaft15.jpg",
    afterImage: "/ventbft15.jpg",
    results: "Enhanced privacy, professional appearance",
  },
]

const STEP = 6 // cuantos muestra por “página”

export function PortfolioGallery() {
  const [activeCategory, setActiveCategory] = useState<string>("All")
  const [activeProject, setActiveProject] = useState<Project | null>(null)
  const [visibleCount, setVisibleCount] = useState<number>(STEP)

  // categorías dinámicas según lo que tengas en projects
  const categories = useMemo(() => {
    const uniq = Array.from(new Set(projects.map((p) => p.category))).filter(Boolean)
    return ["All", ...uniq]
  }, [])

  const filteredProjects = useMemo(() => {
    return activeCategory === "All"
      ? projects
      : projects.filter((p) => p.category === activeCategory)
  }, [activeCategory])

  const visibleProjects = filteredProjects.slice(0, visibleCount)
  const hasMore = visibleCount < filteredProjects.length

  const handleCategoryChange = (cat: string) => {
    setActiveCategory(cat)
    setVisibleCount(STEP) // reset al cambiar filtro
  }

  return (
    <section id="portfolio" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="font-serif text-4xl font-bold mb-4 text-foreground">
            Our Work Portfolio
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Explore our recent window tinting projects showcasing dramatic before and after results.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex justify-center gap-4 mb-12 flex-wrap">
          {categories.map((category) => (
            <Button
              key={category}
              variant={activeCategory === category ? "default" : "outline"}
              onClick={() => handleCategoryChange(category)}
              className="px-6 py-2"
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Portfolio Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {visibleProjects.map((project) => (
            <PortfolioCard
              key={project.id}
              project={project}
              onOpen={(p) => setActiveProject(p)}
            />
          ))}
        </div>

        {/* Lightbox / Modal */}
        {activeProject && (
          <div
            className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={() => setActiveProject(null)}
          >
            <div
              className="relative w-full max-w-4xl bg-background rounded-2xl overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close */}
              <button
                type="button"
                onClick={() => setActiveProject(null)}
                className="absolute top-3 right-3 z-20 rounded-full bg-black/70 text-white p-2 hover:bg-black"
                aria-label="Close"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Slider big */}
              <BeforeAfterSlider
                beforeSrc={activeProject.beforeImage}
                afterSrc={activeProject.afterImage}
                altBase={activeProject.title}
                aspectClass="h-[60vh] md:h-[70vh]"
                showHint={false}
              />

              {/* Info */}
              <div className="p-6 md:p-8">
                <div className="flex flex-wrap items-center gap-2 mb-2">
                  <h3 className="font-serif font-bold text-2xl text-foreground">
                    {activeProject.title}
                  </h3>
                  <span className="text-xs px-2 py-1 rounded-full bg-primary/10 text-primary">
                    {activeProject.category}
                  </span>
                </div>

                <p className="text-muted-foreground mb-4">{activeProject.location}</p>

                <div className="grid md:grid-cols-2 gap-3 text-sm mb-4">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Type:</span>
                    <span className="font-semibold">{activeProject.type}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Film:</span>
                    <span className="font-semibold">{activeProject.film}</span>
                  </div>
                </div>

                <p className="text-muted-foreground leading-relaxed mb-4">
                  {activeProject.description}
                </p>
                <p className="font-semibold text-primary">{activeProject.results}</p>

                <div className="mt-6 flex justify-end">
                  <Button onClick={() => setActiveProject(null)}>Close</Button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* View More Button */}
        {hasMore && (
          <div className="text-center mt-12">
            <Button
              size="lg"
              className="px-8"
              onClick={() => setVisibleCount((v) => v + STEP)}
            >
              View More Projects
            </Button>
          </div>
        )}
      </div>
    </section>
  )
}
