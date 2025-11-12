import Link from "next/link"
import { Phone, Mail, MapPin, Facebook, Instagram } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-black text-white border-t border-primary/30">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-4 gap-12">
          <div>
            <img
              src="/kc-intuitive-logo-minimal-white.jpg"
              alt="KC Intuitive Window Tint"
              className="h-16 w-auto mb-4"
            />
            <p className="text-white/70 leading-relaxed mb-4">
              Professional window tinting services for homes and businesses in Kern County.
            </p>
            <div className="flex gap-3">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-primary flex items-center justify-center transition-all group hover:shadow-[0_0_20px_rgba(0,216,87,0.5)]"
              >
                <Facebook className="w-5 h-5 text-primary group-hover:text-black" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-primary flex items-center justify-center transition-all group hover:shadow-[0_0_20px_rgba(0,216,87,0.5)]"
              >
                <Instagram className="w-5 h-5 text-primary group-hover:text-black" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-serif font-semibold text-lg mb-4 text-white">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-white/70 hover:text-primary transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-white/70 hover:text-primary transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/portfolio" className="text-white/70 hover:text-primary transition-colors">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-white/70 hover:text-primary transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-white/70 hover:text-primary transition-colors">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-serif font-semibold text-lg mb-4 text-white">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/services#residential" className="text-white/70 hover:text-primary transition-colors">
                  Residential Tinting
                </Link>
              </li>
              <li>
                <Link href="/services#commercial" className="text-white/70 hover:text-primary transition-colors">
                  Commercial Tinting
                </Link>
              </li>
              <li>
                <Link href="/services#uv-protection" className="text-white/70 hover:text-primary transition-colors">
                  UV Protection
                </Link>
              </li>
              <li>
                <Link href="/services#decorative" className="text-white/70 hover:text-primary transition-colors">
                  Decorative Films
                </Link>
              </li>
              <li>
                <Link href="/services#safety" className="text-white/70 hover:text-primary transition-colors">
                  Safety Films
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-serif font-semibold text-lg mb-4 text-white">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <a href="tel:661-525-8453" className="text-white/70 hover:text-primary transition-colors">
                  661-525-8453
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <a href="mailto:info@kcintuitive.com" className="text-white/70 hover:text-primary transition-colors">
                  info@kcintuitive.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <span className="text-white/70">Central Valley, CA</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary/30 mt-12 pt-8 text-center text-white/60 text-sm">
          <p>&copy; {new Date().getFullYear()} KC Intuitive Window Tint. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
