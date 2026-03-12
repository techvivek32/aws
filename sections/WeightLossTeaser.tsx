"use client"

import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Check, ArrowRight, ShieldCheck, UserCheck, Activity, MapPin } from "lucide-react"

import Link from "next/link"

const treatments = [
  {
    title: "Compounded GLP-1",
    subtitle: "Custom-blended for your unique needs",
    image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&q=80&w=800",
  }
]

export function WeightLossTeaser() {
  return (
    <section className="py-20 bg-white overflow-hidden">
      <div className="container px-4">
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16">
          <Badge variant="secondary" className="bg-teal/5 text-teal border-teal/10 px-6 py-2 rounded-full text-xs font-bold uppercase tracking-[0.2em] mb-6">
            Expert Guidance
          </Badge>
          <h2 className="text-5xl md:text-6xl font-bold leading-[1.1] tracking-tighter text-teal-dark mb-6">
            Doctor-Supervised <br /><span className="text-magenta italic">Medical Weight Loss</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed font-bold">
            Our clinic offers a medically supervised weight loss program designed to help patients safely lose weight using modern treatments.
          </p>
        </div>

        <div className="flex justify-center mb-20">
          {treatments.map((t, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative w-full max-w-5xl bg-teal/5 rounded-[4rem] overflow-hidden border-8 border-white medical-shadow group"
            >
              <div className="grid lg:grid-cols-2 items-center">
                <div className="relative h-[400px] lg:h-[600px] overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&q=80&w=800" 
                    alt={t.title}
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent to-teal/5"></div>
                </div>
                
                <div className="p-12 lg:p-20 flex flex-col gap-8">
                  <div className="inline-flex items-center gap-2 bg-teal text-white px-5 py-2 rounded-full text-xs font-black uppercase tracking-widest self-start shadow-lg">
                    Featured Program
                  </div>
                  
                  <h3 className="text-4xl md:text-6xl font-black text-teal tracking-tighter leading-none">{t.title}</h3>
                  
                  <div className="flex flex-col gap-2">
                    <div className="text-3xl font-black text-teal-dark">$100 first month</div>
                    <div className="text-xl font-bold text-teal-dark/70">$500 total for first 3 months</div>
                  </div>
                  
                  <p className="text-xl md:text-2xl text-teal-dark font-black leading-relaxed">
                    {t.subtitle}. Our physician-supervised program uses the latest advancements in GLP-1 therapy to help you achieve sustainable health.
                  </p>
                  
                  <div className="grid gap-6 py-4">
                    {[
                      "Custom-blended medication",
                      "Physician-led dosing",
                      "Personalized wellness plan",
                      "Ongoing clinical support"
                    ].map((feature, fIdx) => (
                      <div key={fIdx} className="flex items-center gap-4">
                        <div className="h-8 w-8 rounded-full bg-teal/20 flex items-center justify-center text-teal">
                          <Check className="h-5 w-5 stroke-[4]" />
                        </div>
                        <span className="text-lg font-black text-teal-dark">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <Button className="bg-teal hover:bg-teal-dark text-white rounded-full py-10 px-12 text-2xl font-black shadow-2xl shadow-teal/20 transition-all hover:scale-[1.02] self-start mt-4" asChild>
                    <Link href="/weight-loss">
                      Start Your Journey
                      <ArrowRight className="ml-3 h-8 w-8" />
                    </Link>
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="bg-teal/5 rounded-[4rem] p-16 lg:p-24 grid lg:grid-cols-2 gap-20 items-center border border-teal/10 relative overflow-hidden">
          <div className="flex flex-col gap-10 relative z-10">
            <h3 className="text-4xl md:text-5xl font-bold text-teal-dark leading-tight">Why start your journey <br /> with us?</h3>
            <div className="grid gap-8">
              {[
                { icon: UserCheck, title: "Physician Supervised", text: "Expert medical oversight throughout your entire journey." },
                { icon: ShieldCheck, title: "Personalized Treatment Plan", text: "Customized medication and dosage based on your health profile." },
                { icon: Activity, title: "In-Clinic Support", text: "Weekly injections available for those who prefer supervised care." },
                { icon: MapPin, title: "Lifestyle Guidance", text: "Comprehensive support for long-term health and wellness." },
              ].map((point, idx) => (
                <div key={idx} className="flex gap-6">
                  <div className="h-14 w-14 rounded-2xl bg-white flex items-center justify-center text-teal medical-shadow shrink-0 shadow-sm">
                    <point.icon className="h-7 w-7" />
                  </div>
                  <div className="flex flex-col gap-1">
                    <h4 className="font-bold text-teal-dark text-xl tracking-tight">{point.title}</h4>
                    <p className="text-lg text-muted-foreground font-medium leading-relaxed">{point.text}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="pt-8">
              <Button className="bg-teal hover:bg-teal-dark text-white rounded-full py-8 px-12 text-xl font-bold shadow-xl shadow-teal/20 group w-full sm:w-auto transition-all duration-300 hover:scale-[1.02]" asChild>
                <Link href="/weight-loss">
                  Start Weight Loss Plan
                  <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </div>
          </div>
          
          <div className="relative hidden lg:block h-full">
            <div className="absolute inset-0 bg-teal/10 rounded-[3rem] -rotate-3 -z-10"></div>
            <div className="relative h-full min-h-[500px] rounded-[3rem] overflow-hidden medical-shadow border-4 border-white">
              <img 
                src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=800" 
                alt="Patient Journey"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

