"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { 
  Baby, 
  Stethoscope, 
  Image as ImageIcon, 
  Heart, 
  ClipboardCheck, 
  Users, 
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  Loader2
} from "lucide-react"
import Link from "next/link"

export default function ServicesPage() {
  const [services, setServices] = useState<any[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch('/api/services')
      .then(res => res.json())
      .then(data => {
        setServices(data)
        setLoading(false)
      })
  }, [])

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-secondary/30 py-24 relative overflow-hidden">
        <div className="container px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-6xl md:text-8xl font-black text-accent mb-8 leading-[0.9] tracking-tighter italic">
              Comprehensive <span className="text-primary underline decoration-primary/20 underline-offset-8">Women's Care</span>
            </h1>
            <p className="text-xl md:text-3xl text-muted-foreground max-w-3xl mx-auto leading-relaxed font-medium">
              From routine wellness exams to complex pregnancy care, we provide expert medical services with a personalized touch.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services List */}
      <section className="py-24 bg-white">
        <div className="container px-4">
          {loading ? (
            <div className="flex justify-center py-20">
              <Loader2 className="h-12 w-12 animate-spin text-primary" />
            </div>
          ) : (
            <div className="flex flex-col gap-32">
              {services.map((service, idx) => (
                <motion.div
                  key={service._id}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  viewport={{ once: true, margin: "-100px" }}
                  className={`grid lg:grid-cols-2 gap-20 items-center ${idx % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
                >
                  <div className={`flex flex-col gap-8 ${idx % 2 === 1 ? 'lg:order-2' : ''}`}>
                    <div className="inline-flex items-center gap-3 bg-primary/10 text-primary px-5 py-2 rounded-full text-sm font-black uppercase tracking-widest self-start">
                      {service.category}
                    </div>
                    
                    <h2 className="text-5xl md:text-7xl font-black text-accent tracking-tighter leading-[0.9] italic">{service.title}</h2>
                    
                    <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed font-medium">
                      {service.description}
                    </p>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
                      {[
                        "Board-certified providers",
                        "Latest medical technology",
                        "Personalized treatment",
                        "Compassionate care",
                      ].map((feature, fIdx) => (
                        <div key={fIdx} className="flex items-center gap-4">
                          <div className="h-8 w-8 rounded-full bg-green-100 flex items-center justify-center text-green-600 shrink-0">
                            <CheckCircle2 className="h-5 w-5" />
                          </div>
                          <span className="font-bold text-accent text-lg">{feature}</span>
                        </div>
                      ))}
                    </div>
                    
                    <div className="pt-8 flex flex-col sm:flex-row gap-6">
                      <Button className="bg-primary hover:bg-primary/90 rounded-full py-10 px-12 text-2xl font-bold shadow-2xl shadow-primary/30 group" asChild>
                        <a href="#book-appointment">
                          Book Appointment
                          <ArrowRight className="ml-3 h-7 w-7 group-hover:translate-x-2 transition-transform" />
                        </a>
                      </Button>
                      <Button variant="outline" className="rounded-full py-10 px-12 text-2xl font-bold border-2 border-accent text-accent hover:bg-accent hover:text-white transition-all shadow-xl" asChild>
                        <Link href={`/services/${service.slug}`}>Learn More</Link>
                      </Button>
                    </div>
                  </div>
                  
                  <div className={`relative ${idx % 2 === 1 ? 'lg:order-1' : ''}`}>
                    <div className="relative rounded-[4rem] overflow-hidden medical-shadow border-[12px] border-white aspect-[4/5] lg:aspect-square group">
                      <img 
                        src={service.image} 
                        alt={service.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-accent/30 to-transparent"></div>
                    </div>
                    {/* Decorative blobs */}
                    <div className="absolute -top-10 -left-10 w-40 h-40 bg-primary/10 rounded-full blur-[80px] -z-10"></div>
                    <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-primary/10 rounded-full blur-[80px] -z-10"></div>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-accent text-white relative overflow-hidden">
        <div className="container px-4 relative z-10">
          <div className="text-center flex flex-col items-center max-w-5xl mx-auto">
            <h2 className="text-5xl md:text-8xl font-black mb-10 leading-[0.9] tracking-tighter">Ready to prioritize your <span className="text-primary italic">health journey</span>?</h2>
            <p className="text-xl md:text-3xl text-white/70 mb-16 max-w-3xl leading-relaxed font-medium">
              Join thousands of women in the Phoenix Valley who trust Arizona Women Specialists for their lifelong care.
            </p>
            <div className="flex flex-col sm:flex-row gap-8 w-full max-w-2xl">
              <Button className="flex-1 bg-primary hover:bg-primary/90 rounded-full py-10 px-12 text-2xl font-bold border-none shadow-2xl shadow-primary/40">
                Schedule Now
              </Button>
              <Button variant="outline" className="flex-1 rounded-full py-10 px-12 text-2xl font-bold border-2 border-white/20 text-white hover:bg-white hover:text-accent transition-all" asChild>
                <a href="tel:6238467597">
                  Call (623) 846-7597
                </a>
              </Button>
            </div>
          </div>
        </div>
        <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_top_right,#e91e6320_0%,transparent_50%)] -z-0"></div>
      </section>
    </div>
  )
}
