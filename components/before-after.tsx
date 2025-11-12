"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"

export function BeforeAfter() {
  const [sliderPosition, setSliderPosition] = useState(50)

  return (
    <section className="py-20 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-serif font-bold text-4xl sm:text-5xl text-black mb-4 text-balance">See the Difference</h2>
          <p className="text-lg text-black/70 leading-relaxed">
            Experience the dramatic transformation window tinting provides
          </p>
        </div>

        <Card className="max-w-4xl mx-auto overflow-hidden border-2 border-[#00D857B3] rounded-2xl shadow-md">
          <div className="relative h-[500px] bg-muted">
            {/* Before Image */}
            <div className="absolute inset-0">
              <img
                src="/bright-sunny-room-with-harsh-glare-through-windows.jpg"
                alt="Before tinting"
                className="w-full h-full object-cover"
              />
              <div className="absolute top-4 left-4 bg-black text-white px-4 py-2 rounded-full font-semibold">
                Before
              </div>
            </div>

            {/* After Image */}
            <div className="absolute inset-0" style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}>
              <img
                src="/comfortable-room-with-tinted-windows-reducing-glar.jpg"
                alt="After tinting"
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
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-primary rounded-full flex items-center justify-center shadow-lg">
                <div className="flex gap-1">
                  <div className="w-0.5 h-6 bg-black" />
                  <div className="w-0.5 h-6 bg-black" />
                </div>
              </div>
            </div>
          </div>

          <div className="p-8 bg-white">
            <div className="grid sm:grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-3xl font-bold text-primary mb-1">99%</div>
                <div className="text-sm text-black/70">UV Protection</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary mb-1">30%</div>
                <div className="text-sm text-black/70">Energy Savings</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary mb-1">85%</div>
                <div className="text-sm text-black/70">Glare Reduction</div>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </section>
  )
}
