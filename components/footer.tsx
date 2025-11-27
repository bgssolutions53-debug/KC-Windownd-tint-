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
              Professional window tinting services for homes and businesses in
              Kern County.
            </p>
            <div className="flex items-center gap-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-white/10 hover:bg-primary/20 transition-colors"
              >
                <Facebook className="w-5 h-5 text-white" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-white/10 hover:bg-primary/20 transition-colors"
              >
                <Instagram className="w-5 h-5 text-white" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Navigation</h3>
            <ul className="space-y-2">
              <li><Link href="/" className="text-white/70 hover:text-primary transition-colors">Home</Link></li>
              <li><Link href="/services" className="text-white/70 hover:text-primary transition-colors">Services</Link></li>
              <li><Link href="/portfolio" className="text-white/70 hover:text-primary transition-colors">Portfolio</Link></li>
              <li><Link href="/about" className="text-white/70 hover:text-primary transition-colors">About</Link></li>
              <li><Link href="/contact" className="text-white/70 hover:text-primary transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Services</h3>
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
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary" />
                <a href="tel:661-525-8453" className="text-white/70 hover:text-primary transition-colors">
                  661-525-8453
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary" />
                <a href="mailto:info@kcintuitivetint.com" className="text-white/70 hover:text-primary transition-colors">
                  info@kcintuitivetint.com
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
          <p className="mt-2">
            Designed by{" "}
            <a
              href="https://bgssolution.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              BGSSolutions
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
