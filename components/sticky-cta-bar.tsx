"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Phone, MessageSquare } from "lucide-react"
import Link from "next/link"

export function StickyCtaBar() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 500)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  if (!isVisible) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-black border-t border-primary/30 shadow-lg animate-in slide-in-from-bottom duration-300">
      <div className="container mx-auto px-4 py-4">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="text-center sm:text-left">
            <div className="font-serif font-bold text-lg text-white">Ready to Transform Your Space?</div>
            <div className="text-sm text-white/70">Get your free quote today</div>
          </div>
          <div className="flex items-center gap-3">
            <Button
              size="lg"
              variant="outline"
              className="border-primary text-primary hover:bg-primary hover:text-black bg-transparent"
              asChild
            >
              <a href="tel:661-525-8453">
                <Phone className="w-4 h-4 mr-2" />
                Call Now
              </a>
            </Button>
            <Button size="lg" className="bg-primary text-black hover:bg-primary/90" asChild>
              <Link href="/contact">
                <MessageSquare className="w-4 h-4 mr-2" />
                Free Quote
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
