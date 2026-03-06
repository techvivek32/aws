"use client"

import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Check, ArrowRight, ShieldCheck, UserCheck, Activity, MapPin } from "lucide-react"

import Link from "next/link"

const treatments = [
  {
    title: "Compounded GLP-1",
    subtitle: "Custom-blended for your needs",
    image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&q=80&w=400",
  },
  {
    title: "Semaglutide Injections",
    subtitle: "FDA-approved active ingredient",
    image: "https://images.unsplash.com/photo-1631248055158-edec7a3c072b?auto=format&fit=crop&q=80&w=400",
  },
  {
    title: "Oral Weight Loss",
    subtitle: "Convenient daily medication",
    image: "https://images.unsplash.com/photo-1471864190281-a93a3070b6de?auto=format&fit=crop&q=80&w=400",
  },
]

export function WeightLossTeaser() {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="container px-4">
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-20">
          <Badge variant="secondary" className="bg-primary/10 text-primary px-4 py-1 rounded-full text-sm font-bold uppercase tracking-widest mb-6">
            New Program
          </Badge>
          <h2 className="text-5xl md:text-6xl font-bold leading-tight tracking-tight text-accent mb-8">
            Doctor-Supervised <span className="text-primary italic underline decoration-primary/20 underline-offset-8">Medical Weight Loss</span>
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
            Our clinic now offers a medically supervised weight loss program designed to help patients safely lose weight using modern treatments such as GLP-1 medications.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {treatments.map((t, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="group cursor-pointer"
            >
              <div className="relative rounded-[2rem] overflow-hidden mb-6 aspect-[4/5] medical-shadow border-4 border-white">
                <img 
                  src={t.image} 
                  alt={t.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-accent/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8">
                  <p className="text-white text-lg font-bold">Learn more</p>
                </div>
              </div>
              <h3 className="text-2xl font-bold text-accent mb-2 group-hover:text-primary transition-colors">{t.title}</h3>
              <p className="text-muted-foreground font-medium">{t.subtitle}</p>
            </motion.div>
          ))}
        </div>

        <div className="bg-secondary/50 rounded-[3rem] p-12 lg:p-20 grid lg:grid-cols-2 gap-16 items-center border border-primary/5">
          <div className="flex flex-col gap-8">
            <h3 className="text-4xl font-bold text-accent">Why start your journey with us?</h3>
            <div className="grid gap-6">
              {[
                { icon: UserCheck, title: "Physician Supervised", text: "Expert medical oversight throughout your entire journey." },
                { icon: ShieldCheck, title: "Personalized Treatment Plan", text: "Customized medication and dosage based on your health profile." },
                { icon: Activity, title: "Weekly Injections Available", text: "In-clinic support for those who prefer supervised care." },
                { icon: MapPin, title: "Lifestyle Guidance", text: "Comprehensive support for long-term health and wellness." },
              ].map((point, idx) => (
                <div key={idx} className="flex gap-4">
                  <div className="h-12 w-12 rounded-2xl bg-white flex items-center justify-center text-primary medical-shadow shrink-0">
                    <point.icon className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-accent text-lg">{point.title}</h4>
                    <p className="text-muted-foreground">{point.text}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="pt-6">
              <Button className="bg-primary hover:bg-primary/90 rounded-full py-8 px-12 text-xl font-bold shadow-xl shadow-primary/20 group w-full sm:w-auto" asChild>
                <Link href="/weight-loss">
                  Start Weight Loss Plan
                  <ArrowRight className="ml-2 h-6 w-6 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </div>
          </div>
          
          <div className="relative">
            <div className="relative rounded-[2.5rem] overflow-hidden medical-shadow border-4 border-white aspect-square lg:aspect-[4/5]">
              <img 
                src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&q=80&w=800" 
                alt="Health Journey"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Floating Trust Point */}
            <motion.div 
              animate={{ x: [0, 10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-10 -right-10 bg-white p-6 rounded-3xl medical-shadow z-20 border border-primary/10 max-w-[220px]"
            >
              <div className="flex items-center gap-3 mb-2">
                <div className="h-4 w-4 rounded-full bg-green-500"></div>
                <p className="text-sm font-bold text-accent italic underline decoration-green-500/20 underline-offset-4 uppercase tracking-tighter">Certified Provider</p>
              </div>
              <p className="text-xs text-muted-foreground leading-relaxed">Our medical weight loss program is managed by board-certified physicians.</p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
