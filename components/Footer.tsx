"use client"

import * as React from "react"
import Link from "next/link"
import { Facebook, Instagram, Phone, MapPin, Mail, Calendar } from "lucide-react"

export function Footer() {
  const [settings, setSettings] = React.useState<any>(null)

  React.useEffect(() => {
    fetch('/api/site-data')
      .then(res => res.json())
      .then(data => setSettings(data.settings))
      .catch(err => console.error(err))
  }, [])

  const phone = settings?.phoneNumber || '(623) 846-7597'
  const email = settings?.email || 'info@arizonawomenspecialists.com'
  const phoenixAddress = settings?.addressPhoenix || '4700 N 51st Ave Suite 5, Phoenix AZ 85031'
  const glendaleAddress = settings?.addressGlendale || '18699 N 67th Ave Suite 320, Glendale AZ 85308'

  const locations = [
    {
      name: "Phoenix Office",
      address: phoenixAddress,
      phone: phone,
      hours: "Mon – Fri: 8:00 AM – 5:00 PM",
    },
    {
      name: "Glendale Office",
      address: glendaleAddress,
      phone: phone,
      hours: "Mon – Fri: 8:00 AM – 5:00 PM",
    },
  ]
  return (
    <footer className="bg-secondary/50 pt-20 pb-10 border-t border-border">
      <div className="container px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand Column */}
          <div className="flex flex-col gap-6 lg:col-span-1">
            <Link href="/" className="flex items-center space-x-2">
              <span className="text-2xl font-bold tracking-tighter text-primary">
                AZ WOMEN<span className="text-foreground"> SPECIALISTS</span>
              </span>
            </Link>
            <p className="text-muted-foreground leading-relaxed">
              Providing modern, compassionate, and personalized obstetrics, gynecology, and weight loss care to women across the Phoenix Valley for over 20 years.
            </p>
            <div className="flex gap-4">
              <Link href="#" className="p-2 bg-background rounded-full hover:text-primary transition-colors medical-shadow">
                <Facebook className="h-5 w-5" />
              </Link>
              <Link href="#" className="p-2 bg-background rounded-full hover:text-primary transition-colors medical-shadow">
                <Instagram className="h-5 w-5" />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col gap-6">
            <h4 className="font-bold text-lg uppercase tracking-wider text-accent">Services</h4>
            <nav className="flex flex-col gap-3">
              <Link href="/services#obstetrics" className="text-muted-foreground hover:text-primary transition-colors">Obstetrics & Pregnancy</Link>
              <Link href="/services#gynecology" className="text-muted-foreground hover:text-primary transition-colors">Gynecology Services</Link>
              <Link href="/weight-loss" className="text-muted-foreground hover:text-primary transition-colors font-bold">Medical Weight Loss</Link>
              <Link href="/services#ultrasounds" className="text-muted-foreground hover:text-primary transition-colors">Ultrasound Imaging</Link>
              <Link href="/services#family-planning" className="text-muted-foreground hover:text-primary transition-colors">Family Planning</Link>
              <Link href="/cash-pay" className="text-muted-foreground hover:text-primary transition-colors">Cash Pay Pricing</Link>
            </nav>
          </div>

          {/* Weight Loss Column */}
          <div className="flex flex-col gap-6">
            <h4 className="font-bold text-lg uppercase tracking-wider text-accent">Weight Loss</h4>
            <nav className="flex flex-col gap-3">
              <Link href="/services/compounded-glp-1" className="text-muted-foreground hover:text-primary transition-colors text-sm">Compounded GLP-1</Link>
              <Link href="/services/compounded-glp-1-microdose" className="text-muted-foreground hover:text-primary transition-colors text-sm">GLP-1 Microdose</Link>
              <Link href="/services/oral-medication-kit" className="text-muted-foreground hover:text-primary transition-colors text-sm">Oral Medication Kit</Link>
              <Link href="/services/ozempic" className="text-muted-foreground hover:text-primary transition-colors text-sm">Ozempic</Link>
              <Link href="/services/wegovy" className="text-muted-foreground hover:text-primary transition-colors text-sm">Wegovy</Link>
              <Link href="/services/zepbound" className="text-muted-foreground hover:text-primary transition-colors text-sm">Zepbound</Link>
              <Link href="/services/mounjaro" className="text-muted-foreground hover:text-primary transition-colors text-sm">Mounjaro</Link>
              <Link href="/services/generic-liraglutide" className="text-muted-foreground hover:text-primary transition-colors text-sm">Generic Liraglutide</Link>
            </nav>
          </div>

          {/* Locations Column */}
          <div className="flex flex-col gap-6 lg:col-span-2">
            <h4 className="font-bold text-lg uppercase tracking-wider text-accent">Our Locations</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {locations.map((loc) => (
                <div key={loc.name} className="flex flex-col gap-3">
                  <h5 className="font-semibold text-primary">{loc.name}</h5>
                  <div className="flex items-start gap-3 text-sm text-muted-foreground">
                    <MapPin className="h-4 w-4 mt-0.5 shrink-0 text-primary" />
                    <span>{loc.address}</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-muted-foreground">
                    <Phone className="h-4 w-4 shrink-0 text-primary" />
                    <a href={`tel:${loc.phone.replace(/\D/g,'')}`}>{loc.phone}</a>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-muted-foreground">
                    <Calendar className="h-4 w-4 shrink-0 text-primary" />
                    <span>{loc.hours}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-20 pt-10 border-t border-border flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Arizona Women Specialists. All rights reserved.
          </p>
          <div className="flex gap-8 text-sm text-muted-foreground">
            <Link href="/privacy-policy" className="hover:text-primary transition-colors">Privacy Policy</Link>
            <Link href="/terms-conditions" className="hover:text-primary transition-colors">Terms & Conditions</Link>
            <Link href="/privacy-policy#hipaa-compliance" className="hover:text-primary transition-colors">HIPAA Compliance</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
