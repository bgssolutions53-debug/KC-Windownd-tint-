"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Card } from "@/components/ui/card"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ArrowRight, ArrowLeft, CheckCircle } from "lucide-react"

export function ContactForm() {
  const [step, setStep] = useState(1)
  const [submitted, setSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    propertyType: "",
    size: "",
    location: "",
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send the form data to your backend
    console.log("Form submitted:", formData)
    setSubmitted(true)
  }

  const updateFormData = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  if (submitted) {
    return (
      <Card className="p-12 text-center border-primary/20">
        <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
          <CheckCircle className="w-10 h-10 text-primary" />
        </div>
        <h3 className="font-serif font-bold text-3xl text-foreground mb-4">Thank You!</h3>
        <p className="text-muted-foreground leading-relaxed mb-6">
          We've received your request and will contact you shortly for your free estimate. Typically, we respond within
          24 hours.
        </p>
        <Button
          size="lg"
          className="bg-primary text-primary-foreground hover:bg-primary/90"
          onClick={() => {
            setSubmitted(false)
            setStep(1)
            setFormData({
              propertyType: "",
              size: "",
              location: "",
              firstName: "",
              lastName: "",
              email: "",
              phone: "",
              message: "",
            })
          }}
        >
          Submit Another Request
        </Button>
      </Card>
    )
  }

  return (
    <Card className="p-8 border-primary/20">
      <div className="mb-8">
        <h2 className="font-serif font-bold text-3xl text-foreground mb-2">Request a Free Quote</h2>
        <p className="text-muted-foreground">Step {step} of 3</p>
        <div className="flex gap-2 mt-4">
          <div className={`h-2 flex-1 rounded-full ${step >= 1 ? "bg-primary" : "bg-muted"}`} />
          <div className={`h-2 flex-1 rounded-full ${step >= 2 ? "bg-primary" : "bg-muted"}`} />
          <div className={`h-2 flex-1 rounded-full ${step >= 3 ? "bg-primary" : "bg-muted"}`} />
        </div>
      </div>

      <form onSubmit={handleSubmit}>
        {/* Step 1: Property Type */}
        {step === 1 && (
          <div className="space-y-6">
            <div>
              <Label className="text-base font-semibold mb-3 block">What type of property?</Label>
              <RadioGroup
                value={formData.propertyType}
                onValueChange={(value) => updateFormData("propertyType", value)}
              >
                <div className="flex items-center space-x-3 p-4 border border-border rounded-lg hover:border-primary transition-colors cursor-pointer">
                  <RadioGroupItem value="residential" id="residential" />
                  <Label htmlFor="residential" className="cursor-pointer flex-1">
                    Residential (Home, Apartment)
                  </Label>
                </div>
                <div className="flex items-center space-x-3 p-4 border border-border rounded-lg hover:border-primary transition-colors cursor-pointer">
                  <RadioGroupItem value="commercial" id="commercial" />
                  <Label htmlFor="commercial" className="cursor-pointer flex-1">
                    Commercial (Office, Store, Building)
                  </Label>
                </div>
              </RadioGroup>
            </div>

            <div>
              <Label htmlFor="size" className="text-base font-semibold mb-3 block">
                Approximate size or number of windows
              </Label>
              <Select value={formData.size} onValueChange={(value) => updateFormData("size", value)}>
                <SelectTrigger id="size">
                  <SelectValue placeholder="Select size" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="small">Small (1-5 windows)</SelectItem>
                  <SelectItem value="medium">Medium (6-15 windows)</SelectItem>
                  <SelectItem value="large">Large (16-30 windows)</SelectItem>
                  <SelectItem value="xlarge">Extra Large (30+ windows)</SelectItem>
                  <SelectItem value="custom">Custom / Not Sure</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <Button
              type="button"
              size="lg"
              className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
              onClick={() => setStep(2)}
              disabled={!formData.propertyType || !formData.size}
            >
              Next Step
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </div>
        )}

        {/* Step 2: Location */}
        {step === 2 && (
          <div className="space-y-6">
            <div>
              <Label htmlFor="location" className="text-base font-semibold mb-3 block">
                Property location (City, ZIP)
              </Label>
              <Input
                id="location"
                placeholder="e.g., Bakersfield, CA 93301"
                value={formData.location}
                onChange={(e) => updateFormData("location", e.target.value)}
                className="text-base"
              />
            </div>

            <div className="flex gap-3">
              <Button
                type="button"
                size="lg"
                variant="outline"
                className="flex-1 border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent"
                onClick={() => setStep(1)}
              >
                <ArrowLeft className="w-5 h-5 mr-2" />
                Back
              </Button>
              <Button
                type="button"
                size="lg"
                className="flex-1 bg-primary text-primary-foreground hover:bg-primary/90"
                onClick={() => setStep(3)}
                disabled={!formData.location}
              >
                Next Step
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </div>
          </div>
        )}

        {/* Step 3: Contact Info */}
        {step === 3 && (
          <div className="space-y-6">
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="firstName" className="text-base font-semibold mb-2 block">
                  First Name *
                </Label>
                <Input
                  id="firstName"
                  required
                  value={formData.firstName}
                  onChange={(e) => updateFormData("firstName", e.target.value)}
                />
              </div>
              <div>
                <Label htmlFor="lastName" className="text-base font-semibold mb-2 block">
                  Last Name *
                </Label>
                <Input
                  id="lastName"
                  required
                  value={formData.lastName}
                  onChange={(e) => updateFormData("lastName", e.target.value)}
                />
              </div>
            </div>

            <div>
              <Label htmlFor="email" className="text-base font-semibold mb-2 block">
                Email *
              </Label>
              <Input
                id="email"
                type="email"
                required
                value={formData.email}
                onChange={(e) => updateFormData("email", e.target.value)}
              />
            </div>

            <div>
              <Label htmlFor="phone" className="text-base font-semibold mb-2 block">
                Phone Number *
              </Label>
              <Input
                id="phone"
                type="tel"
                required
                placeholder="(661) 525-8453"
                value={formData.phone}
                onChange={(e) => updateFormData("phone", e.target.value)}
              />
            </div>

            <div>
              <Label htmlFor="message" className="text-base font-semibold mb-2 block">
                Additional Details (Optional)
              </Label>
              <Textarea
                id="message"
                rows={4}
                placeholder="Tell us more about your project..."
                value={formData.message}
                onChange={(e) => updateFormData("message", e.target.value)}
              />
            </div>

            <div className="flex gap-3">
              <Button
                type="button"
                size="lg"
                variant="outline"
                className="flex-1 border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent"
                onClick={() => setStep(2)}
              >
                <ArrowLeft className="w-5 h-5 mr-2" />
                Back
              </Button>
              <Button type="submit" size="lg" className="flex-1 bg-primary text-primary-foreground hover:bg-primary/90">
                Submit Request
                <CheckCircle className="w-5 h-5 ml-2" />
              </Button>
            </div>
          </div>
        )}
      </form>
    </Card>
  )
}
