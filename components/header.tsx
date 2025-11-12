"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X, Phone } from "lucide-react"

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/95 backdrop-blur-sm border-b border-primary/30">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="flex items-center">
            <img src="/kc-intuitive-logo-minimal-color.jpg" alt="KC Intuitive Window Tint" className="h-12 w-auto" />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            <Link href="/" className="text-white hover:text-primary transition-colors">
              Home
            </Link>
            <Link href="/services" className="text-white hover:text-primary transition-colors">
              Services
            </Link>
            <Link href="/portfolio" className="text-white hover:text-primary transition-colors">
              Portfolio
            </Link>
            <Link href="/about" className="text-white hover:text-primary transition-colors">
              About
            </Link>
            <Link href="/contact" className="text-white hover:text-primary transition-colors">
              Contact
            </Link>
          </nav>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center gap-3">
            <Button
              variant="outline"
              size="lg"
              asChild
              className="border-primary text-primary hover:bg-primary hover:text-black bg-transparent"
            >
              <a href="tel:661-525-8453">
                <Phone className="w-4 h-4 mr-2" />
                661-525-8453
              </a>
            </Button>
            <Button size="lg" asChild className="bg-primary text-black hover:bg-primary/90">
              <Link href="/contact">Get Free Quote</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden py-6 border-t border-primary/30">
            <nav className="flex flex-col gap-4">
              <Link href="/" className="text-white hover:text-primary transition-colors py-2">
                Home
              </Link>
              <Link href="/services" className="text-white hover:text-primary transition-colors py-2">
                Services
              </Link>
              <Link href="/portfolio" className="text-white hover:text-primary transition-colors py-2">
                Portfolio
              </Link>
              <Link href="/about" className="text-white hover:text-primary transition-colors py-2">
                About
              </Link>
              <Link href="/contact" className="text-white hover:text-primary transition-colors py-2">
                Contact
              </Link>
              <div className="flex flex-col gap-3 pt-4">
                <Button variant="outline" size="lg" asChild className="border-primary text-primary bg-transparent">
                  <a href="tel:661-525-8453">
                    <Phone className="w-4 h-4 mr-2" />
                    661-525-8453
                  </a>
                </Button>
                <Button size="lg" asChild className="bg-primary text-black">
                  <Link href="/contact">Get Free Quote</Link>
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
