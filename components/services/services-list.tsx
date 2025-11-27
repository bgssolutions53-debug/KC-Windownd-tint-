import { ServiceCard } from "./service-card"
import { Home, Building2, Sun, Palette, Shield, Sparkles } from "lucide-react"

const services = [
  {
    id: "residential",
    icon: Home,
    title: "Residential Window Tinting",
    subtitle: "Comfort All Year Round",
    description:
      "Transform your home into a comfortable sanctuary with our premium residential window tinting. Stay cool in summer and warm in winter while protecting your furniture and flooring from harmful UV rays.",
    benefits: [
      "Reduce cooling costs by up to 30%",
      "Block 99% of harmful UV rays",
      "Enhance privacy without losing natural light",
      "Protect furniture and flooring from fading",
      "Reduce glare on TVs and screens",
      "Increase home value and curb appeal",
    ],
    lifespan: "10-15 years with proper care",
    warranty: "5-year comprehensive warranty",
    image: "/residential-window-tinting-cozy-living-room.jpg",
  },
  {
    id: "commercial",
    icon: Building2,
    title: "Commercial Window Tinting",
    subtitle: "Sleek & Energy-Efficient Solutions",
    description:
      "Give your business a modern, professional appearance while improving employee comfort and reducing operational costs. Our commercial tinting solutions are designed for durability and performance.",
    benefits: [
      "Lower energy bills significantly",
      "Improve employee productivity and comfort",
      "Reduce glare on computer screens",
      "Create a uniform, professional exterior",
      "Enhance security and privacy",
      "Meet energy efficiency standards",
    ],
    lifespan: "10-15 years for commercial-grade films",
    warranty: "5-year warranty on materials and installation",
    image: "/modern-office-building-with-tinted-windows.jpg",
  },
  {
    id: "uv-protection",
    icon: Sun,
    title: "Anti-Glare & UV Protection",
    subtitle: "Reduce Harsh Sunlight & Eye Strain",
    description:
      "Protect your health and belongings with our specialized UV protection films. Block harmful rays while maintaining clear visibility and natural light in your space.",
    benefits: [
      "Block up to 99.9% of UV rays",
      "Prevent skin damage and health risks",
      "Reduce eye strain and headaches",
      "Protect artwork and valuable items",
      "Maintain clear, unobstructed views",
      "Medical-grade protection available",
    ],
    lifespan: "10-15 years",
    warranty: "5-year UV protection guarantee",
    image: "/uv-protection-film-blocking-sunlight.jpg",
  },
  {
    id: "decorative",
    icon: Palette,
    title: "Decorative / Privacy Films",
    subtitle: "Style + Privacy Combined",
    description:
      "Add elegance and privacy to your space with our decorative window films. Choose from frosted, etched, or patterned designs that complement your aesthetic while providing functional benefits.",
    benefits: [
      "Enhance privacy without blocking light",
      "Wide variety of patterns and finishes",
      "Cost-effective alternative to etched glass",
      "Easy to update and change designs",
      "Perfect for offices, bathrooms, and entryways",
      "Custom designs available",
    ],
    lifespan: "7-10 years",
    warranty: "3-year warranty on decorative films",
    image: "/decorative-frosted-window-film-in-modern-offic.jpg",
  },
  {
    id: "safety",
    icon: Shield,
    title: "Safety & Security Films",
    subtitle: "Strengthen Glass, Prevent Break-Ins",
    description:
      "Protect your property and loved ones with our safety and security films. These heavy-duty films hold shattered glass together, deterring intruders and preventing injuries from broken glass.",
    benefits: [
      "Hold glass together when shattered",
      "Deter break-ins and forced entry",
      "Protect against storm damage",
      "Reduce injury risk from flying glass",
      "Meet safety and building codes",
      "Available in clear or tinted options",
    ],
    lifespan: "5 years",
    warranty: "5-year warranty on security films",
    image: "/safety-security-window-film-reinforced-glass.jpg",
  },
  {
    id: "anti-graffiti",
    icon: Sparkles,
    title: "Anti-Graffiti Films",
    subtitle: "Protect Surfaces from Damage & Vandalism",
    description:
      "Safeguard your windows and glass surfaces from graffiti, scratches, and acid etching. Our sacrificial films can be easily removed and replaced, saving you thousands in glass replacement costs.",
    benefits: [
      "Protect against graffiti and vandalism",
      "Prevent scratches and acid etching",
      "Easy and cost-effective to replace",
      "Maintain professional appearance",
      "Ideal for storefronts and public buildings",
      "Optically clear and virtually invisible",
    ],
    lifespan: "3-5 years (designed to be replaced)",
    warranty: "2-year warranty",
    image: "/anti-graffiti-film-protecting-storefront-windo.jpg",
  },
]

export function ServicesList() {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="space-y-24">
          {services.map((service, index) => (
            <ServiceCard key={service.id} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
