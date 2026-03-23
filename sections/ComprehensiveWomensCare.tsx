"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Check, Heart, Shield, Stethoscope } from "lucide-react"
import Link from "next/link"

const features = [
  "Comprehensive gynecological exams",
  "Family planning consultations", 
  "Contraceptive counseling",
  "Menopause management",
  "Preventive health screenings"
]

export function ComprehensiveWomensCare() {
  return (
    <section className="py-16 bg-white overflow-hidden">
      <div className="container px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex flex-col gap-8"
          >
            <Badge className="bg-teal/10 text-teal border-teal/20 px-6 py-3 rounded-full text-sm font-bold uppercase tracking-widest self-start">
              Comprehensive Care
            </Badge>
            
            <h2 className="text-4xl md:text-6xl font-black leading-[1.1] tracking-tighter text-teal-dark">
              Complete Women's Health – <br /><span className="text-magenta italic underline decoration-magenta/20 underline-offset-8 font-serif">All Your Needs</span>
            </h2>
            
            <p className="text-xl md:text-2xl text-teal-dark font-black leading-relaxed">
              Arizona Women Specialists provides comprehensive gynecological care and family planning services tailored to every stage of your life.
            </p>
            
            <ul className="flex flex-col gap-4">
              {features.map((feature, idx) => (
                <motion.li
                  key={idx}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: idx * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center gap-4 text-lg font-bold text-teal-dark"
                >
                  <div className="h-6 w-6 rounded-full bg-teal/20 flex items-center justify-center shrink-0">
                    <Check className="h-4 w-4 text-teal stroke-[3]" />
                  </div>
                  <span>{feature}</span>
                </motion.li>
              ))}
            </ul>
            
            <div className="flex flex-col sm:flex-row gap-6 pt-4">
              <Button className="bg-teal hover:bg-teal-dark rounded-full py-8 px-12 text-xl font-bold shadow-xl shadow-teal/20 group" asChild>
                <a href="tel:6238467597">
                  Schedule Consultation
                  <Heart className="ml-3 h-6 w-6 group-hover:scale-110 transition-transform" />
                </a>
              </Button>
              <Button variant="ghost" className="rounded-full py-8 px-12 text-lg font-bold text-teal hover:bg-teal/5 transition-all" asChild>
                <Link href="/services">Learn about our gynecology services</Link>
              </Button>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="bg-gradient-to-br from-teal/10 to-magenta/10 rounded-[4rem] p-12 relative overflow-hidden">
              <img 
                src="/images/service-gynecology-real.jpg" 
                alt="Comprehensive Women's Healthcare"
                className="w-full h-[500px] object-cover rounded-[2rem] medical-shadow"
              />
              
              {/* Floating cards */}
              <div className="absolute top-8 right-8 bg-white rounded-2xl p-6 medical-shadow border border-teal/10">
                <div className="flex items-center gap-3">
                  <div className="h-12 w-12 rounded-full bg-teal/10 flex items-center justify-center">
                    <Stethoscope className="h-6 w-6 text-teal" />
                  </div>
                  <div>
                    <p className="font-bold text-teal-dark text-sm">Expert Care</p>
                    <p className="text-xs text-muted-foreground">20+ Years Experience</p>
                  </div>
                </div>
              </div>
              
              <div className="absolute bottom-8 left-8 bg-white rounded-2xl p-6 medical-shadow border border-magenta/10">
                <div className="flex items-center gap-3">
                  <div className="h-12 w-12 rounded-full bg-magenta/10 flex items-center justify-center">
                    <Shield className="h-6 w-6 text-magenta" />
                  </div>
                  <div>
                    <p className="font-bold text-teal-dark text-sm">Personalized</p>
                    <p className="text-xs text-muted-foreground">Individual Treatment Plans</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}