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
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.3 }}
            className="relative w-full max-w-3xl bg-white rounded-[3rem] overflow-hidden shadow-2xl border-2 border-teal/10"
          >
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-8 right-8 p-3 rounded-full bg-secondary/80 hover:bg-secondary transition-colors z-10 shadow-lg"
            >
              <X className="h-6 w-6 text-teal-dark" />
            </button>

            <div className="p-10 md:p-16">
              <div className="text-center mb-12">
                <h2 className="text-4xl md:text-5xl font-black text-teal tracking-tight mb-3 leading-tight">
                  Walk In for Same Day <br /><span className="text-magenta italic font-serif">Appointments</span>
                </h2>
                <div className="h-1 w-24 bg-teal/30 mx-auto rounded-full mb-10"></div>
                
                <ul className="space-y-5 text-lg md:text-xl font-bold text-teal-dark">
                  <li className="flex items-center justify-center gap-3">
                    <div className="h-8 w-8 rounded-full bg-teal/10 flex items-center justify-center shrink-0">
                      <Check className="h-5 w-5 text-teal stroke-[3]" />
                    </div>
                    <span>Free Pregnancy Test</span>
                  </li>
                  <li className="flex items-center justify-center gap-3">
                    <div className="h-8 w-8 rounded-full bg-teal/10 flex items-center justify-center shrink-0">
                      <Check className="h-5 w-5 text-teal stroke-[3]" />
                    </div>
                    <span>Same day Provider Appointment</span>
                  </li>
                  <li className="flex items-center justify-center gap-3">
                    <div className="h-8 w-8 rounded-full bg-teal/10 flex items-center justify-center shrink-0">
                      <Check className="h-5 w-5 text-teal stroke-[3]" />
                    </div>
                    <span>Same Day Ultrasound appointment</span>
                  </li>
                </ul>
              </div>

              <div className="grid md:grid-cols-2 gap-6 mb-10">
                <div className="p-6 bg-teal/5 rounded-2xl border border-teal/10">
                  <div className="flex items-center gap-2 mb-3">
                    <MapPin className="h-5 w-5 text-teal" />
                    <h3 className="text-base font-black text-teal uppercase tracking-wide">Glendale Office</h3>
                  </div>
                  <p className="text-base font-semibold text-teal-dark leading-relaxed">
                    18699 N 67th AVE, Suite 320,<br />Glendale AZ, 85308
                  </p>
                </div>

                <div className="p-6 bg-teal/5 rounded-2xl border border-teal/10">
                  <div className="flex items-center gap-2 mb-3">
                    <MapPin className="h-5 w-5 text-teal" />
                    <h3 className="text-base font-black text-teal uppercase tracking-wide">Phoenix Office</h3>
                  </div>
                  <p className="text-base font-semibold text-teal-dark leading-relaxed">
                    4700 N 51 Ave, Suite 5,<br />Phoenix, AZ, 85031
                  </p>
                </div>
              </div>

              <div className="flex flex-col gap-4">
                <Button className="w-full bg-teal hover:bg-teal-dark text-white rounded-full py-7 text-xl font-bold shadow-xl shadow-teal/20 transition-all hover:scale-[1.02]" asChild>
                  <a href="tel:6238467597">
                    <Phone className="mr-3 h-6 w-6" />
                    Call @ 623-846-7597
                  </a>
                </Button>
                <p className="text-center text-xs font-bold uppercase tracking-widest text-teal-dark/60">
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
