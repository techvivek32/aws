"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { ArrowLeft, Loader2, CheckCircle2, ShieldCheck, Heart, Stethoscope, Baby } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { useParams } from "next/navigation"

export default function SingleServicePage() {
  const { slug } = useParams()
  const [service, setService] = useState<any>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch(`/api/services/slug/${slug}`)
      .then(res => res.json())
      .then(data => {
        setService(data)
        setLoading(false)
      })
  }, [slug])

  if (loading) return (
    <div className="min-h-screen flex items-center justify-center">
      <Loader2 className="h-12 w-12 animate-spin text-primary" />
    </div>
  )

  if (!service) return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-6">
      <h2 className="text-4xl font-black text-accent">Service not found</h2>
      <Button asChild className="bg-primary rounded-full px-10 py-6 text-lg font-bold">
        <Link href="/services">View All Services</Link>
      </Button>
    </div>
  )

  return (
    <div className="pt-20">
      {/* Hero Header */}
      <section className="bg-secondary/30 py-24 relative overflow-hidden">
        <div className="container px-4">
          <Button variant="ghost" className="mb-10 text-primary font-bold hover:bg-transparent p-0 group" asChild>
            <Link href="/services" className="flex items-center gap-2">
              <ArrowLeft className="h-5 w-5 group-hover:-translate-x-1 transition-transform" />
              Back to Services
            </Link>
          </Button>
          
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className="text-xs font-black text-primary uppercase tracking-[0.2em] bg-primary/10 px-5 py-2 rounded-full shadow-sm mb-8 inline-block">
                {service.category}
              </span>
              <h1 className="text-5xl md:text-8xl font-black text-accent leading-[0.9] tracking-tighter italic mb-10">
                {service.title}
              </h1>
              <p className="text-xl md:text-3xl text-muted-foreground font-medium leading-relaxed max-w-xl">
                {service.description}
              </p>
              
              <div className="pt-10 flex flex-col sm:flex-row gap-6">
                <Button className="bg-primary hover:bg-primary/90 rounded-full py-10 px-12 text-2xl font-bold shadow-2xl shadow-primary/30" asChild>
                  <a href="#book-appointment">Book Now</a>
                </Button>
                {service.price && (
                  <div className="flex flex-col justify-center">
                    <p className="text-sm font-black text-muted-foreground uppercase tracking-widest">Pricing starts at</p>
                    <p className="text-3xl font-black text-accent">{service.price}</p>
                  </div>
                )}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9, x: 30 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              transition={{ duration: 1 }}
              className="relative"
            >
              <div className="relative rounded-[4rem] overflow-hidden medical-shadow border-[12px] border-white aspect-[4/5] lg:aspect-square">
                <img src={service.image} alt={service.title} className="w-full h-full object-cover scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-accent/30 to-transparent"></div>
              </div>
              <div className="absolute -top-10 -left-10 w-40 h-40 bg-primary/10 rounded-full blur-[80px] -z-10"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-24 bg-white">
        <div className="container px-4">
          <div className="grid md:grid-cols-3 gap-12">
            {[
              { icon: ShieldCheck, title: "Board Certified", text: "Expert care provided by highly qualified medical specialists." },
              { icon: Heart, title: "Patient Centered", text: "We prioritize your comfort and individual health goals." },
              { icon: Stethoscope, title: "Modern Tech", text: "Equipped with the latest diagnostic and treatment tools." },
            ].map((item, idx) => (
              <div key={idx} className="flex flex-col items-center text-center gap-6 p-10 rounded-[3rem] bg-secondary/20 border border-primary/5">
                <div className="h-20 w-20 rounded-3xl bg-white flex items-center justify-center text-primary medical-shadow">
                  <item.icon className="h-10 w-10" />
                </div>
                <h3 className="text-2xl font-black text-accent italic">{item.title}</h3>
                <p className="text-lg text-muted-foreground font-medium">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-primary/5">
        <div className="container px-4 text-center">
          <h2 className="text-4xl md:text-6xl font-black text-accent mb-10 leading-[1.1] tracking-tighter italic">Ready to experience <br /> <span className="text-primary underline decoration-primary/20 underline-offset-8">premium care</span>?</h2>
          <Button className="bg-primary hover:bg-primary/90 rounded-full py-10 px-16 text-2xl font-bold shadow-2xl shadow-primary/30 border-none group" asChild>
             <a href="#book-appointment">
                Schedule {service.title}
                <ArrowLeft className="ml-3 h-7 w-7 rotate-180 group-hover:translate-x-2 transition-transform" />
             </a>
          </Button>
        </div>
      </section>
    </div>
  )
}
