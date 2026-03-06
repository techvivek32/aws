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
    <section className="relative min-h-[90vh] flex items-center pt-20 pb-20 overflow-hidden hers-gradient">
      <div className="container px-4 grid lg:grid-cols-2 gap-16 items-center relative z-10">
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col gap-10"
        >
          <div className="inline-flex items-center gap-3 bg-primary/10 text-primary px-5 py-2 rounded-full text-sm font-bold tracking-wider uppercase border border-primary/20 self-start">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-primary"></span>
            </span>
            Accepting New Patients
          </div>
          
          <h1 className="text-6xl md:text-8xl font-black leading-[0.9] tracking-tighter text-accent">
            Expert Women's <br /> Health Care & <span className="text-primary italic">Weight Loss</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground max-w-xl leading-relaxed font-medium">
            Personalized obstetrics, gynecology, and doctor-supervised medical weight loss programs designed for your biology.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-5 pt-4">
            <Button className="bg-primary hover:bg-primary/90 rounded-full py-10 px-12 text-2xl font-bold shadow-2xl shadow-primary/30 group" asChild>
              <a href="#book-appointment">
                Book Appointment
                <ArrowRight className="ml-3 h-7 w-7 group-hover:translate-x-2 transition-transform" />
              </a>
            </Button>
            <Button variant="outline" className="rounded-full py-10 px-12 text-2xl font-bold border-2 border-accent text-accent hover:bg-accent hover:text-white transition-all shadow-xl bg-white/50 backdrop-blur-sm" asChild>
              <a href={`tel:${settings.phoneNumber.replace(/\D/g, '')}`}>
                <Phone className="mr-3 h-6 w-6" />
                Call Now
              </a>
            </Button>
          </div>
          
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-8 pt-6">
            <div className="flex -space-x-4">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="h-14 w-14 rounded-full border-4 border-white bg-secondary flex items-center justify-center overflow-hidden shadow-lg">
                  <img src={`https://i.pravatar.cc/150?u=woman${i}`} alt="Patient" className="w-full h-full object-cover" />
                </div>
              ))}
              <div className="h-14 w-14 rounded-full border-4 border-white bg-primary text-white flex items-center justify-center shadow-lg font-bold text-sm">
                +1k
              </div>
            </div>
            <div>
              <p className="text-xl font-bold text-accent">
                {stats.happyPatients.toLocaleString()}+ Happy Patients
              </p>
              <p className="text-muted-foreground font-medium">Trusted care in Phoenix Valley</p>
            </div>
          </div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, scale: 0.9, x: 30 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
          className="relative hidden lg:block"
        >
          {/* Main Visual Component */}
          <div className="relative z-10 rounded-[4rem] overflow-hidden medical-shadow border-[12px] border-white aspect-[4/5] lg:aspect-[5/6] bg-secondary group">
            <img 
              src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=1200" 
              alt="Professional Women's Medical Care"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-accent/20 to-transparent"></div>
          </div>
          
          {/* Floating Card: Experience */}
          <motion.div 
            animate={{ y: [0, -15, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-12 -right-12 bg-white p-8 rounded-[2.5rem] medical-shadow z-20 border border-primary/10 max-w-[240px]"
          >
            <div className="bg-primary/10 w-16 h-16 rounded-2xl flex items-center justify-center mb-5 text-primary">
              <Award className="h-8 w-8" />
            </div>
            <h4 className="text-2xl font-black text-accent leading-tight">{stats.yearsExperience}+ Years</h4>
            <p className="text-muted-foreground font-medium mt-1">Serving the Community</p>
          </motion.div>
          
          {/* Floating Card: Appointments */}
          <motion.div 
            animate={{ y: [0, 15, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute -bottom-10 -left-12 bg-white p-8 rounded-[2.5rem] medical-shadow z-20 border border-primary/10 flex items-center gap-5 min-w-[280px]"
          >
            <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center text-green-600 shrink-0">
              <CheckCircle2 className="h-8 w-8" />
            </div>
            <div>
              <h4 className="text-xl font-black text-accent">Same-Day</h4>
              <p className="text-muted-foreground font-medium">Appointments Available</p>
            </div>
          </motion.div>
          
          {/* Decorative Blobs */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-primary/5 rounded-full blur-[120px] -z-10"></div>
        </motion.div>
      </div>
    </section>
  )
}
