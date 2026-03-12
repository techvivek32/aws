"use client"

import * as React from "react"
import Link from "next/link"
import { Facebook, Instagram, Phone, MapPin, Mail, Calendar, ShieldCheck, Lock } from "lucide-react"

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
            <Link href="/" className="flex items-center group">
              <img 
                src="/images/logo.png" 
                alt="Arizona Women Specialists" 
                className="h-20 md:h-24 w-auto object-contain"
              />
            </Link>
            <p className="text-muted-foreground leading-relaxed font-bold">
              Providing modern, compassionate, and personalized women's care, gynecology, and weight loss care to women across the Phoenix Valley for over 20 years.
            </p>
            <div className="flex gap-4">
              <Link href="#" className="p-2 bg-background rounded-full hover:text-primary transition-colors medical-shadow" aria-label="Facebook">
                <Facebook className="h-5 w-5" />
              </Link>
              <Link href="#" className="p-2 bg-background rounded-full hover:text-primary transition-colors medical-shadow" aria-label="Instagram">
                <Instagram className="h-5 w-5" />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col gap-6">
            <h4 className="font-bold text-lg uppercase tracking-wider text-teal-dark">Services</h4>
            <nav className="flex flex-col gap-3">
              <Link href="/services#gynecology" className="text-muted-foreground hover:text-primary transition-colors">Gynecology Services</Link>
              <Link href="/weight-loss" className="text-muted-foreground hover:text-primary transition-colors font-bold">Medical Weight Loss</Link>
              <Link href="/services#ultrasounds" className="text-muted-foreground hover:text-primary transition-colors">Ultrasound Imaging</Link>
              <Link href="/services#family-planning" className="text-muted-foreground hover:text-primary transition-colors">Family Planning</Link>
              <Link href="/cash-pay" className="text-muted-foreground hover:text-primary transition-colors">Cash Pay Pricing</Link>
            </nav>
          </div>

          {/* Weight Loss Column */}
          <div className="flex flex-col gap-6">
            <h4 className="font-bold text-lg uppercase tracking-wider text-teal-dark">Weight Loss</h4>
            <nav className="flex flex-col gap-3">
              <Link href="/services/compounded-glp-1" className="text-muted-foreground hover:text-primary transition-colors text-sm">Compounded GLP-1</Link>
            </nav>
          </div>

          {/* Locations Column */}
          <div className="flex flex-col gap-6 lg:col-span-2">
            <h4 className="font-bold text-lg uppercase tracking-wider text-teal-dark">Our Locations</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {locations.map((loc) => (
                <div key={loc.name} className="flex flex-col gap-3">
                  <h5 className="font-semibold text-teal">{loc.name}</h5>
                  <div className="flex items-start gap-3 text-sm text-teal-dark/70">
                    <MapPin className="h-4 w-4 mt-0.5 shrink-0 text-teal" />
                    <span>{loc.address}</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-teal-dark/70">
                    <Phone className="h-4 w-4 shrink-0 text-teal" />
                    <a href={`tel:${loc.phone.replace(/\D/g,'')}`}>{loc.phone}</a>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-teal-dark/70">
                    <Calendar className="h-4 w-4 shrink-0 text-teal" />
                    <span>{loc.hours}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-20 pt-10 border-t border-border flex flex-col md:flex-row justify-between items-center gap-10">
          <div className="flex flex-col gap-4 items-center md:items-start">
            <p className="text-sm text-muted-foreground font-medium">
              © {new Date().getFullYear()} Arizona Women Specialists. All rights reserved.
            </p>
            <div className="flex gap-6 items-center">
              <div className="flex items-center gap-2 bg-white px-3 py-1 rounded border border-border medical-shadow shadow-sm">
                <ShieldCheck className="h-4 w-4 text-green-600" />
                <span className="text-[10px] font-bold uppercase tracking-widest text-teal-dark">HIPAA Compliant</span>
              </div>
              <div className="flex items-center gap-2 bg-white px-3 py-1 rounded border border-border medical-shadow shadow-sm">
                <Lock className="h-4 w-4 text-teal" />
                <span className="text-[10px] font-bold uppercase tracking-widest text-teal-dark">SSL Secured</span>
              </div>
            </div>
          </div>
          <div className="flex flex-wrap justify-center gap-8 text-sm text-muted-foreground font-bold uppercase tracking-widest">
            <Link href="/privacy-policy" className="hover:text-primary transition-colors">Privacy Policy</Link>
            <Link href="/terms-conditions" className="hover:text-primary transition-colors">Terms & Conditions</Link>
            <Link href="/privacy-policy#hipaa-compliance" className="hover:text-primary transition-colors">HIPAA Compliance</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
