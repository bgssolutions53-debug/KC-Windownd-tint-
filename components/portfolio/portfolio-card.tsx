"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { MapPin } from "lucide-react"

interface Project {
  id: number
  title: string
  location: string
  category: string
  type: string
  film: string
  description: string
  beforeImage: string
  afterImage: string
  results: string
}

interface PortfolioCardProps {
  project: Project
}

export function PortfolioCard({ project }: PortfolioCardProps) {
  const [showAfter, setShowAfter] = useState(false)

  return (
    <Card className="group overflow-hidden border-primary/20 hover:border-primary transition-all duration-300">
      {/* Image Container */}
      <div
        className="relative h-64 overflow-hidden cursor-pointer"
        onMouseEnter={() => setShowAfter(true)}
        onMouseLeave={() => setShowAfter(false)}
      >
        {/* Before Image */}
        <img
          src={project.beforeImage || "/placeholder.svg"}
          alt={`${project.title} - Before`}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
            showAfter ? "opacity-0" : "opacity-100"
          }`}
        />

        {/* After Image */}
        <img
          src={project.afterImage || "/placeholder.svg"}
          alt={`${project.title} - After`}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
            showAfter ? "opacity-100" : "opacity-0"
          }`}
        />

        {/* Before/After Labels */}
        <div className="absolute top-4 left-4">
          <Badge className={`${showAfter ? "bg-primary" : "bg-secondary"} text-white`}>
            {showAfter ? "After" : "Before"}
          </Badge>
        </div>

        {/* Category Badge */}
        <div className="absolute top-4 right-4">
          <Badge variant="outline" className="bg-background/90 border-primary text-primary">
            {project.category}
          </Badge>
        </div>

        {/* Hover Instruction */}
        <div className="absolute inset-0 flex items-center justify-center bg-secondary/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <p className="text-secondary-foreground font-semibold">Hover to see after</p>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="font-serif font-bold text-xl mb-2 text-foreground">{project.title}</h3>

        <div className="flex items-center gap-2 text-muted-foreground text-sm mb-3">
          <MapPin className="w-4 h-4" />
          <span>{project.location}</span>
        </div>

        <div className="space-y-2 mb-4">
          <div className="flex justify-between text-sm">
            <span className="text-muted-foreground">Type:</span>
            <span className="font-semibold text-foreground">{project.type}</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-muted-foreground">Film:</span>
            <span className="font-semibold text-foreground">{project.film}</span>
          </div>
        </div>

        <p className="text-muted-foreground text-sm leading-relaxed mb-4">{project.description}</p>

        <div className="pt-4 border-t border-border">
          <p className="text-sm font-semibold text-primary">{project.results}</p>
        </div>
      </div>
    </Card>
  )
}
