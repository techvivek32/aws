"use client"

import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { CheckCircle2, Phone } from "lucide-react"

import Link from "next/link"

const features = [
  "Free pregnancy testing",
  "Same-day provider appointment",
  "Same-day ultrasound available",
  "Confidential and compassionate",
]

export function FreePregnancyTest() {
  return (
    <section className="py-16 bg-white overflow-hidden">
      <div className="container px-4">
        <div className="bg-teal/5 rounded-[3rem] p-12 lg:p-16 relative overflow-hidden border border-teal/10">
          <div className="grid lg:grid-cols-2 gap-16 items-center relative z-10">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="flex flex-col gap-10"
            >
              <div className="inline-flex items-center gap-2 bg-teal/20 text-teal px-5 py-2.5 rounded-full text-xs font-black uppercase tracking-[0.2em] shadow-sm">
                Immediate Care
              </div>
              
              <h2 className="text-4xl md:text-6xl font-black leading-[1.1] tracking-tighter text-teal-dark">
                Free Pregnancy Test – <br /><span className="text-magenta italic underline decoration-magenta/20 underline-offset-8 font-serif">Walk In Today</span>
              </h2>
              
              <p className="text-xl md:text-2xl text-teal-dark font-black leading-relaxed">
                Arizona Women Specialists offers free pregnancy testing with same-day appointments available. No waiting, no stress.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {features.map((feature, idx) => (
                  <div key={idx} className="flex items-center gap-4">
                    <div className="h-8 w-8 rounded-full bg-teal/20 flex items-center justify-center shrink-0">
                      <CheckCircle2 className="h-5 w-5 text-teal stroke-[3]" />
                    </div>
                    <span className="text-lg font-black text-teal-dark tracking-tight">{feature}</span>
                  </div>
                ))}
              </div>
              
              <div className="flex flex-col sm:flex-row gap-6 pt-8">
                <Button className="bg-teal hover:bg-teal-dark text-white rounded-full py-8 px-12 text-xl font-bold shadow-xl shadow-teal/20 transition-all duration-300 hover:scale-[1.02]" asChild>
                  <a href="tel:6238467597">
                    <Phone className="mr-3 h-6 w-6" />
                    Call (623) 846-7597
                  </a>
                </Button>
                <Button variant="ghost" className="rounded-full py-8 px-12 text-lg font-bold text-teal hover:bg-teal/5 transition-all" asChild>
                  <Link href="/services#pregnancy">Learn about pregnancy care from Julie Dent, a Nurse Practitioner.</Link>
                </Button>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative rounded-[2.5rem] overflow-hidden medical-shadow border-4 border-white rotate-2 hover:rotate-0 transition-transform duration-500">
                <img 
                  src="https://images.unsplash.com/photo-1555252333-9f8e92e65df9?auto=format&fit=crop&q=80&w=800" 
                  alt="Pregnancy Test Support"
                  className="w-full h-[500px] object-cover"
                />
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -top-10 -left-10 w-40 h-40 bg-teal/10 rounded-full blur-3xl -z-10"></div>
              <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-teal/10 rounded-full blur-3xl -z-10"></div>
            </motion.div>
          </div>
          
          {/* Subtle patterns */}
          <div className="absolute top-0 right-0 w-1/2 h-full bg-[radial-gradient(circle_at_right_top,#2d7a7a0d_0%,transparent_60%)] -z-0"></div>
        </div>
      </div>
    </section>
  )
}
