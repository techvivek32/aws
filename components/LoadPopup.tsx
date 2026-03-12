"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X, Phone, MapPin, Calendar, Clock, Check } from "lucide-react"
import { Button } from "./ui/button"

export function LoadPopup() {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      const hasSeenPopup = sessionStorage.getItem("hasSeenPopup")
      if (!hasSeenPopup) {
        setIsOpen(true)
        sessionStorage.setItem("hasSeenPopup", "true")
      }
    }, 1500)
    return () => clearTimeout(timer)
  }, [])

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm">
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="relative w-full max-w-2xl bg-white rounded-[2.5rem] overflow-hidden shadow-2xl border border-primary/10"
          >
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-6 right-6 p-2 rounded-full hover:bg-secondary transition-colors z-10"
            >
              <X className="h-6 w-6 text-teal-dark/70" />
            </button>

            <div className="p-8 md:p-12">
              <div className="text-center mb-10">
                <h2 className="text-4xl md:text-6xl font-black text-primary tracking-tighter mb-4 leading-tight">
                  Walk In for Same Day <br /><span className="text-[#b03a7e] italic font-serif">Appointments</span>
                </h2>
                <div className="h-2 w-20 bg-primary/20 mx-auto rounded-full mb-8"></div>
                
                <ul className="space-y-6 text-xl md:text-3xl font-black text-teal-dark tracking-tight">
                  <li className="flex items-center justify-center gap-4">
                    <Check className="h-8 w-8 text-primary stroke-[4]" />
                    Free Pregnancy Test
                  </li>
                  <li className="flex items-center justify-center gap-4">
                    <Check className="h-8 w-8 text-primary stroke-[4]" />
                    Same day Provider Appointment
                  </li>
                  <li className="flex items-center justify-center gap-4">
                    <Check className="h-8 w-8 text-primary stroke-[4]" />
                    Same Day Ultrasound appointment
                  </li>
                </ul>
              </div>

              <div className="grid md:grid-cols-2 gap-8 mb-10">
                <div className="p-8 bg-primary/10 rounded-3xl border-4 border-white medical-shadow">
                  <div className="flex items-center gap-3 mb-4">
                    <MapPin className="h-6 w-6 text-teal" />
                    <h3 className="text-xl font-black text-primary uppercase tracking-tighter underline decoration-primary/20 underline-offset-4">Glendale Office</h3>
                  </div>
                  <p className="text-lg font-black text-teal-dark leading-relaxed">
                    18699 N 67th AVE, Suite 320,<br />Glendale AZ, 85308
                  </p>
                </div>

                <div className="p-8 bg-primary/10 rounded-3xl border-4 border-white medical-shadow">
                  <div className="flex items-center gap-3 mb-4">
                    <MapPin className="h-6 w-6 text-teal" />
                    <h3 className="text-xl font-black text-primary uppercase tracking-tighter underline decoration-primary/20 underline-offset-4">Phoenix Office</h3>
                  </div>
                  <p className="text-lg font-black text-teal-dark leading-relaxed">
                    4700 N 51 Ave, Suite 5,<br />Phoenix, AZ, 85031
                  </p>
                </div>
              </div>

              <div className="flex flex-col gap-4">
                <Button className="w-full bg-teal hover:bg-teal-dark text-white rounded-full py-8 text-xl font-black shadow-xl shadow-teal/20" asChild>
                  <a href="tel:6238467597">
                    <Phone className="mr-3 h-6 w-6" />
                    Call @ 623-846-7597
                  </a>
                </Button>
                <p className="text-center text-xs font-bold uppercase tracking-widest text-teal-dark/70">
                  Your health is our priority
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  )
}
