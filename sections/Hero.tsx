"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { Phone, Calendar, ArrowRight, Award, ShieldCheck, CheckCircle2 } from "lucide-react"

export function Hero() {
  const [siteData, setSiteData] = useState<any>(null)

  useEffect(() => {
    fetch('/api/site-data')
      .then(res => res.json())
      .then(data => setSiteData(data))
      .catch(err => console.error(err))
  }, [])

  const stats = siteData?.stats || {
    happyPatients: 5000,
    yearsExperience: 20,
    sameDayAppointments: true
  }

  const settings = siteData?.settings || {
    phoneNumber: '(623) 846-7597'
  }

  return (
    <section className="relative min-h-[85vh] flex items-center pt-8 pb-16 overflow-hidden hers-gradient">
      <div className="container px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col gap-8 lg:pr-12"
          >
            <div className="inline-flex items-center gap-3 bg-teal/10 text-teal px-5 py-2.5 rounded-full text-xs font-black tracking-[0.2em] uppercase border border-teal/20 self-start shadow-sm">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-teal"></span>
              </span>
              Accepting New Patients
            </div>
            
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-black leading-[1.05] tracking-tighter text-teal-dark drop-shadow-sm">
              Modern Care for the <br /> <span className="text-magenta italic font-serif">Modern Woman</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground max-w-lg leading-relaxed font-bold tracking-tight">
              Personalized women's care, gynecology, and doctor-supervised medical weight loss programs designed for your biology.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 pt-6">
              <Button className="bg-teal hover:bg-teal-dark text-white rounded-full py-10 px-12 text-2xl font-black shadow-2xl shadow-teal/20 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]" asChild>
                <a href="tel:6238467597">
                  Book Your Visit
                  <ArrowRight className="ml-3 h-8 w-8" />
                </a>
              </Button>
              <Button variant="outline" className="rounded-full py-10 px-12 text-2xl font-black border-4 border-teal/20 text-teal-dark bg-white hover:bg-teal hover:text-white transition-all duration-300 shadow-xl" asChild>
                <a href={`tel:${settings.phoneNumber.replace(/\D/g, '')}`}>
                  <Phone className="mr-3 h-6 w-6" />
                  Call Clinic
                </a>
              </Button>
            </div>

            <div className="flex items-center gap-12 pt-10 border-t border-teal/10">
              <div className="flex flex-col">
                <span className="text-3xl font-black text-teal-dark">20+</span>
                <span className="text-xs font-bold uppercase tracking-widest text-teal-dark/70">Years Experience</span>
              </div>
              <div className="flex flex-col">
                <span className="text-3xl font-black text-teal-dark">10k+</span>
                <span className="text-xs font-bold uppercase tracking-widest text-teal-dark/70">Happy Patients</span>
              </div>
              <div className="flex flex-col">
                <span className="text-3xl font-black text-teal-dark">100%</span>
                <span className="text-xs font-bold uppercase tracking-widest text-teal-dark/70">Confidential</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95, x: 30 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative h-[500px] lg:h-[700px] w-full"
          >
            <div className="relative h-full w-full rounded-[4rem] overflow-hidden medical-shadow border-8 border-white bg-gradient-to-br from-teal/20 to-magenta/20">
              <img 
                src="/images/hero-doctor.jpg" 
                alt="Expert Women's Care - Doctor consulting with patient"
                className="absolute inset-0 w-full h-full object-cover"
                loading="eager"
              />
              
              <div className="absolute bottom-8 left-8 right-8 bg-white/95 backdrop-blur-md p-8 rounded-3xl border border-teal/20 shadow-2xl z-20">
                <div className="flex items-center gap-6 mb-4">
                  <div className="h-14 w-14 rounded-2xl bg-teal flex items-center justify-center text-white shadow-lg">
                    <Award className="h-8 w-8" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-black text-teal tracking-tighter uppercase leading-none">Phoenix Valley's Choice</h3>
                    <p className="text-sm font-black text-teal/80 italic">#1 Rated for Women's Wellness</p>
                  </div>
                </div>
                <p className="text-lg font-black text-teal-dark leading-relaxed">
                  "Expert care with a personalized touch. Arizona's trusted medical institution for over two decades."
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Background shapes */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-[radial-gradient(circle_at_top_right,#33999910_0%,transparent_70%)] -z-10"></div>
      <div className="absolute bottom-0 left-0 w-1/2 h-full bg-[radial-gradient(circle_at_bottom_left,#33999905_0%,transparent_70%)] -z-10"></div>
    </section>
  )
}
