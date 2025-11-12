import { Card } from "@/components/ui/card"
import { Phone, Mail, MapPin, Clock, Facebook, Instagram } from "lucide-react"

export function ContactInfo() {
  return (
    <div className="space-y-6">
      <Card className="p-8 border-primary/20">
        <h3 className="font-serif font-bold text-2xl text-foreground mb-6">Contact Information</h3>

        <div className="space-y-6">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
              <Phone className="w-6 h-6 text-primary" />
            </div>
            <div>
              <div className="font-semibold text-foreground mb-1">Phone</div>
              <a href="tel:661-525-8453" className="text-muted-foreground hover:text-primary transition-colors">
                661-525-8453
              </a>
              <p className="text-sm text-muted-foreground mt-1">Call or text for immediate assistance</p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
              <Mail className="w-6 h-6 text-primary" />
            </div>
            <div>
              <div className="font-semibold text-foreground mb-1">Email</div>
              <a
                href="mailto:info@kcintuitive.com"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                info@kcintuitive.com
              </a>
              <p className="text-sm text-muted-foreground mt-1">We respond within 24 hours</p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
              <MapPin className="w-6 h-6 text-primary" />
            </div>
            <div>
              <div className="font-semibold text-foreground mb-1">Service Area</div>
              <p className="text-muted-foreground">Central Valley, CA</p>
              <p className="text-sm text-muted-foreground mt-1">Serving all surrounding areas</p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
              <Clock className="w-6 h-6 text-primary" />
            </div>
            <div>
              <div className="font-semibold text-foreground mb-1">Hours of Operation</div>
              <p className="text-muted-foreground">Monday - Friday: 8:00 AM - 6:00 PM</p>
              <p className="text-muted-foreground">Saturday: Closed</p>
              <p className="text-muted-foreground">Sunday: Closed</p>
            </div>
          </div>
        </div>
      </Card>

      <Card className="p-8 border-primary/20">
        <h3 className="font-serif font-bold text-2xl text-foreground mb-6">Follow Us</h3>
        <div className="flex gap-4">
          <a
            href="#"
            className="w-12 h-12 rounded-full bg-primary/10 hover:bg-primary flex items-center justify-center transition-colors group"
          >
            <Facebook className="w-6 h-6 text-primary group-hover:text-primary-foreground" />
          </a>
          <a
            href="#"
            className="w-12 h-12 rounded-full bg-primary/10 hover:bg-primary flex items-center justify-center transition-colors group"
          >
            <Instagram className="w-6 h-6 text-primary group-hover:text-primary-foreground" />
          </a>
        </div>
        <p className="text-muted-foreground text-sm mt-4">Stay updated with our latest projects and tips!</p>
      </Card>

      <Card className="p-8 bg-primary/10 border-primary/20">
        <h3 className="font-serif font-bold text-xl text-foreground mb-3">Prefer to Call?</h3>
        <p className="text-muted-foreground mb-4">Speak directly with our team for immediate answers and scheduling.</p>
        <a
          href="tel:661-525-8453"
          className="inline-flex items-center justify-center px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors font-semibold"
        >
          <Phone className="w-5 h-5 mr-2" />
          Call Now: 661-525-8453
        </a>
      </Card>
    </div>
  )
}
