"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"

export function BeforeAfter() {
  const [sliderPosition, setSliderPosition] = useState(50)

  return (
    <section className="py-20 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-serif font-bold text-4xl sm:text-5xl text-black mb-4 text-balance">
            See the Difference
          </h2>
          <p className="text-lg text-black/70 leading-relaxed">
            Experience the dramatic transformation window tinting provides
          </p>
        </div>

        <Card className="overflow-hidden border-primary/20 max-w-5xl mx-auto">
          <div className="relative h-[500px] bg-muted">
            {/* Before Image */}
            <div className="absolute inset-0">
              <img
                src="/bright-sunny-room-with-harsh-glare-through-windows.jpg"
                alt="Before tinting"
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover"
              />
              <div className="absolute top-4 left-4 bg-black text-white px-4 py-2 rounded-full font-semibold">
                Before
              </div>
            </div>

            {/* After Image */}
            <div
              className="absolute inset-0"
              style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
            >
              <img
                src="/comfortable-room-with-tinted-windows-reducing-glar.jpg"
                alt="After tinting"
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover"
              />
              <div className="absolute top-4 right-4 bg-primary text-black px-4 py-2 rounded-full font-semibold">
                After
              </div>
            </div>

            {/* Slider */}
            <div
              className="absolute inset-y-0 w-1 bg-primary cursor-ew-resize"
              style={{ left: `${sliderPosition}%` }}
              onMouseDown={(e) => {
                const container = e.currentTarget.parentElement
                if (!container) return

                const handleMouseMove = (moveEvent: MouseEvent) => {
                  const rect = container.getBoundingClientRect()
                  const x = moveEvent.clientX - rect.left
                  const percentage = (x / rect.width) * 100
                  setSliderPosition(Math.max(0, Math.min(100, percentage)))
                }

                const handleMouseUp = () => {
                  document.removeEventListener("mousemove", handleMouseMove)
                  document.removeEventListener("mouseup", handleMouseUp)
                }

                document.addEventListener("mousemove", handleMouseMove)
                document.addEventListener("mouseup", handleMouseUp)
              }}
            >
              <div className="absolute top-1/2 left-1/2 w-10 h-10 bg-primary rounded-full -translate-x-1/2 -translate-y-1/2 flex items-center justify-center shadow-lg">
                <div className="w-1 h-6 bg-black rounded-full" />
              </div>
            </div>
          </div>
        </Card>
      </div>
    </section>
  )
}
