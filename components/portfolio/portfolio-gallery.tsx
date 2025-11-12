"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { PortfolioCard } from "./portfolio-card"

const projects = [
  {
    id: 1,
    title: "Modern Family Home",
    location: "Bakersfield, CA",
    category: "Residential",
    type: "Residential Window Tinting",
    film: "Ceramic 35% VLT",
    description: "Complete home tinting with ceramic film for maximum heat rejection and UV protection.",
    beforeImage: "/comfortable-room-with-tinted-windows-reducing-glar.jpg",
    afterImage: "/bright-sunny-room-with-harsh-glare-through-windows.jpg",
    results: "30% reduction in cooling costs, 99% UV protection",
  },
  {
    id: 2,
    title: "Downtown Office Building",
    location: "Santa Monica",
    category: "Commercial",
    type: "Residential Window Tinting",
    film: "Ceramic Material 50%",
    description: "Glass treated with advanced ceramic protection that guarantees efficiency and solar control, while maintaining the natural and distortion-free view that the client desired..",
    beforeImage: "/portfolio-commercial-before-1.jpg",
    afterImage: "/portfolio-commercial-after-1.jpg",
    results: "Improved employee comfort, reduced glare on screens",
  },
  {
    id: 3,
    title: "Luxury Residence",
    location: "Kern County, CA",
    category: "Residential",
    type: "Residential Window Tinting",
    film: "Ceramic Material 50%",
    description: "High-end residential project with dark ceramic film for maximum privacy and heat rejection.",
    beforeImage: "/portfolio-residential-before-2.jpg",
    afterImage: "/portfolio-residential-after-2.jpg",
    results: "Enhanced privacy, superior heat rejection",
  },
  {
    id: 4,
    title: "Restaurant in Bakersfield",
    location: "Bakersfield, CA",
    category: "Commercial",
    type: " ASWF Sky-30",
    film: "Reflective Material",
    description: "Installation of reflective material on the windows of a restaurant in Bakersfield to improve privacy and exterior appearance..",
    beforeImage: "/portfolio-commercial-before-2.jpg",
    afterImage: "/portfolio-commercial-after-2.jpg",
    results: "Protected against vandalism, maintained visibility",
  },
  {
    id: 5,
    title: "Suburban Home",
    location: "Bakersfield, CA",
    category: "Residential",
    type: "ASWF Moonlight 5",
    film: "Dark Material",
    description: "Installation of solid black tint film. This non-reflective option offers superior privacy and a uniform, elegant appearance.",
    beforeImage: "/portfolio-residential-before-3.jpg",
    afterImage: "/portfolio-residential-after-3.jpg",
    results: "25% energy savings, maintained bright interiors",
  },
  {
    id: 6,
    title: "Medical Office",
    location: "Kern County, CA",
    category: "Commercial",
    type: " ASWF Silver 20",
    film: "Mirror-type Reflection Material",
    description: "Installation of reflective mirror-type film to create a one-way daytime privacy effect, offering superior thermal control.",
    beforeImage: "/portfolio-commercial-before-3.0.jpg",
    afterImage: "/portfolio-commercial-after-.jpg",
    results: "Enhanced privacy, professional appearance",
  },
  {
    id: 7,
    title: "Panoramic Terrace",
    location: "Kern County, CA",
    category: "Commercial",
    type: "Residential Window Tinting",
    film: "Ceramic Material 50%",
    description: "High-end residential project with dark ceramic film for maximum privacy and heat rejection.",
    beforeImage: "/portfolio-commercial-before-5.jpg",
    afterImage: "/portfolio-commercial-after-5.0.jpg",
    results: "Enhanced privacy, professional appearance",
  },
   {
    id: 8,
    title: "Commercial Front",
    location: "Kern County, CA",
    category: "Commercial",
    type: "Anti-graffiti Security Film",
    film: "Graffiti Film",
    description: "An anti-graffiti security film was applied as a protective barrier, minimizing repair costs since only the film is replaced instead of the entire glass.",
    beforeImage: "/portfolio-commercial-before-4.jpg",
    afterImage: "/portfolio-commercial-after-4.1.jpg",
    results: "Enhanced privacy, professional appearance",
  },
   {
    id: 9,
    title: "Skylight",
    location: "Kern County, CA",
    category: "Commercial",
    type: "Decorative Privacy Film",
    film: "Frosted Privacy Film",
    description: "Medical office with decorative frosted film for patient privacy and professional aesthetics.",
    beforeImage: "/portfolio-commercial-before-6.jpg",
    afterImage: "/FROSTSKY.jpg",
    results: "Enhanced privacy, professional appearance",
  },
]

export function PortfolioGallery() {
  const [filter, setFilter] = useState<"All" | "Residential" | "Commercial">("All")

  const filteredProjects = filter === "All" ? projects : projects.filter((p) => p.category === filter)

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Filter Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
          <Button
            variant={filter === "All" ? "default" : "outline"}
            size="lg"
            onClick={() => setFilter("All")}
            className={
              filter === "All"
                ? "bg-primary text-primary-foreground hover:bg-primary/90"
                : "border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent"
            }
          >
            All Projects
          </Button>
          <Button
            variant={filter === "Residential" ? "default" : "outline"}
            size="lg"
            onClick={() => setFilter("Residential")}
            className={
              filter === "Residential"
                ? "bg-primary text-primary-foreground hover:bg-primary/90"
                : "border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent"
            }
          >
            Residential
          </Button>
          <Button
            variant={filter === "Commercial" ? "default" : "outline"}
            size="lg"
            onClick={() => setFilter("Commercial")}
            className={
              filter === "Commercial"
                ? "bg-primary text-primary-foreground hover:bg-primary/90"
                : "border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent"
            }
          >
            Commercial
          </Button>
        </div>

        {/* Gallery Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <PortfolioCard key={project.id} project={project} />
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground text-lg">No projects found in this category.</p>
          </div>
        )}
      </div>
    </section>
  )
}
