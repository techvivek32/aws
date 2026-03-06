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
    <section className="py-24 bg-white overflow-hidden">
      <div className="container px-4">
        <div className="bg-primary/5 rounded-[3rem] p-12 lg:p-20 relative overflow-hidden border border-primary/10">
          <div className="grid lg:grid-cols-2 gap-12 items-center relative z-10">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="flex flex-col gap-8"
            >
              <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-1.5 rounded-full text-sm font-semibold tracking-wide uppercase">
                Immediate Care
              </div>
              
              <h2 className="text-4xl md:text-5xl font-bold leading-tight tracking-tight text-accent">
                Free Pregnancy Test – <span className="text-primary italic underline decoration-primary/20 underline-offset-8">Walk In Today</span>
              </h2>
              
              <p className="text-xl text-muted-foreground leading-relaxed">
                Arizona Women Specialists offers free pregnancy testing with same-day appointments available. No waiting, no stress.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {features.map((feature, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <div className="h-6 w-6 rounded-full bg-primary flex items-center justify-center shrink-0">
                      <CheckCircle2 className="h-4 w-4 text-white" />
                    </div>
                    <span className="text-lg font-medium text-accent">{feature}</span>
                  </div>
                ))}
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 pt-6">
                <Button className="bg-primary hover:bg-primary/90 rounded-full py-8 px-10 text-xl font-bold shadow-xl shadow-primary/20 group" asChild>
                  <a href="tel:6238467597">
                    <Phone className="mr-2 h-6 w-6" />
                    Call (623) 846-7597
                  </a>
                </Button>
                <Button variant="ghost" className="rounded-full py-8 px-10 text-lg font-semibold text-accent hover:bg-primary/10 transition-all" asChild>
                  <Link href="/services/obstetrics">Learn more about pregnancy care</Link>
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
                  src="https://images.unsplash.com/photo-1531983412531-1f49a365ffed?auto=format&fit=crop&q=80&w=800" 
                  alt="Pregnancy Test Support"
                  className="w-full h-auto object-cover"
                />
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -top-10 -left-10 w-40 h-40 bg-primary/10 rounded-full blur-3xl -z-10"></div>
              <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-primary/10 rounded-full blur-3xl -z-10"></div>
            </motion.div>
          </div>
          
          {/* Subtle patterns */}
          <div className="absolute top-0 right-0 w-1/2 h-full bg-[radial-gradient(circle_at_right_top,#e91e630d_0%,transparent_60%)] -z-0"></div>
        </div>
      </div>
    </section>
  )
}
