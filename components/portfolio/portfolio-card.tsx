"use client"

import { useMemo, useRef, useState } from "react"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { MapPin, MoveHorizontal } from "lucide-react"

export interface Project {
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
  onOpen?: (project: Project) => void
}

/**
 * Simple before/after compare slider (no deps).
 * - Drag handle to reveal after image.
 * - Works with mouse and touch.
 * - Lazy loads images to improve performance.
 */
export function BeforeAfterSlider({
  beforeSrc,
  afterSrc,
  altBase,
  className = "",
  aspectClass = "h-64",
  showHint = true,
}: {
  beforeSrc: string
  afterSrc: string
  altBase: string
  className?: string
  aspectClass?: string
  showHint?: boolean
}) {
  const containerRef = useRef<HTMLDivElement | null>(null)
  const [pos, setPos] = useState(50) // percentage [0..100]
  const [dragging, setDragging] = useState(false)

  const clamp = (v: number) => Math.min(100, Math.max(0, v))

  const setFromClientX = (clientX: number) => {
    const rect = containerRef.current?.getBoundingClientRect()
    if (!rect) return
    const percent = ((clientX - rect.left) / rect.width) * 100
    setPos(clamp(percent))
  }

  const onPointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    e.preventDefault()
    ;(e.currentTarget as any).setPointerCapture?.(e.pointerId)
    setDragging(true)
    setFromClientX(e.clientX)
  }

  const onPointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!dragging) return
    setFromClientX(e.clientX)
  }

  const onPointerUp = (e: React.PointerEvent<HTMLDivElement>) => {
    setDragging(false)
    ;(e.currentTarget as any).releasePointerCapture?.(e.pointerId)
  }

  const clipStyle = useMemo(
    () => ({
      clipPath: `inset(0 ${100 - pos}% 0 0)`,
    }),
    [pos]
  )

  return (
    <div
      ref={containerRef}
      className={`relative overflow-hidden select-none ${aspectClass} ${className}`}
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={onPointerUp}
      onPointerCancel={onPointerUp}
    >
      {/* Before (lazy) */}
      <img
        loading="lazy"
        decoding="async"
        src={beforeSrc || "/placeholder.svg"}
        alt={`${altBase} - Before`}
        className="absolute inset-0 w-full h-full object-cover"
        draggable={false}
      />

      {/* After (lazy, clipped) */}
      <img
        loading="lazy"
        decoding="async"
        src={afterSrc || "/placeholder.svg"}
        alt={`${altBase} - After`}
        className="absolute inset-0 w-full h-full object-cover"
        style={clipStyle as any}
        draggable={false}
      />

      {/* Divider line */}
      <div
        className="absolute top-0 bottom-0 w-[2px] bg-white/90 shadow-[0_0_0_1px_rgba(0,0,0,0.2)]"
        style={{ left: `${pos}%` }}
      />

      {/* Handle */}
      <div
        className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 flex items-center justify-center
                   w-10 h-10 rounded-full bg-white/95 shadow-lg border border-black/10"
        style={{ left: `${pos}%` }}
      >
        <MoveHorizontal className="w-5 h-5 text-foreground" />
      </div>

      {/* Labels */}
      <div className="absolute top-3 left-3">
        <Badge className="bg-secondary text-secondary-foreground">Before</Badge>
      </div>
      <div className="absolute top-3 right-3">
        <Badge className="bg-primary text-primary-foreground">After</Badge>
      </div>

      {/* Hint */}
      {showHint && (
        <div className="absolute inset-x-0 bottom-0 p-2 bg-gradient-to-t from-black/60 to-transparent">
          <p className="text-white text-xs font-medium text-center">
            Drag the slider to compare
          </p>
        </div>
      )}
    </div>
  )
}

export function PortfolioCard({ project, onOpen }: PortfolioCardProps) {
  return (
    <Card className="group overflow-hidden border-primary/20 hover:border-primary transition-all duration-300">
      {/* Image Container */}
      <button
        type="button"
        className="relative w-full text-left"
        onClick={() => onOpen?.(project)}
        aria-label={`Open project ${project.title}`}
      >
        <BeforeAfterSlider
          beforeSrc={project.beforeImage}
          afterSrc={project.afterImage}
          altBase={project.title}
          aspectClass="h-64"
          className="cursor-pointer"
        />

        {/* Category Badge */}
        <div className="absolute top-4 right-4 z-10">
          <Badge variant="outline" className="bg-background/90 border-primary text-primary">
            {project.category}
          </Badge>
        </div>
      </button>

      {/* Content */}
      <div className="p-6">
        <h3 className="font-serif font-bold text-xl mb-2 text-foreground">
          {project.title}
        </h3>

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

        <p className="text-muted-foreground text-sm leading-relaxed mb-4 line-clamp-3">
          {project.description}
        </p>

        <div className="pt-4 border-t border-border">
          <p className="text-sm font-semibold text-primary">{project.results}</p>
        </div>
      </div>
    </Card>
  )
}
