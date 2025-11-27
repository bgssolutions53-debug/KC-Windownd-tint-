"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Star, ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const testimonials = [
  {
    name: "Jesus Fernandez",
    location: "Bakersfield, CA",
    rating: 5,
    text: "Very satisfied with the job these guys did, clean and professional work highly recommended for you’re commercial or residential tints",
    image: "/",
  },
  {
    name: "Ricardo Serrato",
    location: "Bakersfield, CA",
    rating: 4,
    text: "Great customer service and they pay attention to details. 100% honest and reliable. Highly recommend for all your residential and commercial window tint.",
    image: "/",
  },
  {
    name: "Rocio Alvarez",
    location: "Bakersfield, CA",
    rating: 5,
    text: "You can tell this guys are professional, great service and most of all great quality in their installation.  100% recommended",
    image: "",
  },
]

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section className="py-20 md:py-24 bg-gradient-to-b from-[#111] via-[#0F0F0F] to-[#111]">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-serif font-bold text-4xl sm:text-5xl text-white mb-4 text-balance">
            What Our Clients Say
          </h2>
          <p className="text-lg text-white/70 leading-relaxed">
            Join hundreds of satisfied customers across Kern County
          </p>
        </div>

        <div className="max-w-4xl mx-auto relative">
          <Card className="p-8 md:p-12 bg-[#181818] border border-primary/30 rounded-2xl shadow-lg">
            <div className="flex gap-1 mb-6">
              {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-primary text-primary" />
              ))}
            </div>
            <p className="text-white/90 leading-relaxed mb-8 text-lg italic">"{testimonials[currentIndex].text}"</p>
            <div className="flex items-center gap-4">
              <img
                src={testimonials[currentIndex].image || "/placeholder.svg"}
                alt={testimonials[currentIndex].name}
                className="w-16 h-16 rounded-full object-cover"
              />
              <div>
                <div className="font-semibold text-white text-lg">{testimonials[currentIndex].name}</div>
                <div className="text-sm text-white/60">{testimonials[currentIndex].location}</div>
              </div>
            </div>
          </Card>

          {/* Carousel Controls */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <Button
              variant="outline"
              size="icon"
              onClick={prevTestimonial}
              className="border-primary/30 text-primary hover:bg-primary hover:text-black bg-transparent rounded-full"
            >
              <ChevronLeft className="w-5 h-5" />
            </Button>
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    index === currentIndex ? "bg-primary w-8" : "bg-white/30"
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
            <Button
              variant="outline"
              size="icon"
              onClick={nextTestimonial}
              className="border-primary/30 text-primary hover:bg-primary hover:text-black bg-transparent rounded-full"
            >
              <ChevronRight className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
