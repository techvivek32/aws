"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { 
  ArrowRight,
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
    <div className="pt-6">
      {/* Hero Section */}
      <section className="bg-primary/5 py-20 relative overflow-hidden hers-gradient">
        <div className="container px-4 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col gap-10 items-center"
          >
            <h1 className="text-6xl md:text-8xl font-black text-teal-dark mb-8 leading-[1.1] tracking-tighter">
              Comprehensive <br /><span className="text-primary italic">Women's Care</span>
            </h1>
            <p className="text-xl md:text-3xl text-muted-foreground max-w-3xl mx-auto leading-relaxed font-medium">
              From routine wellness exams to pregnancy care, we provide expert medical services with a personalized touch.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services List */}
      <section className="py-32 bg-white">
        <div className="container px-4">
          {loading ? (
            <div className="flex justify-center py-20">
              <Loader2 className="h-12 w-12 animate-spin text-teal" />
            </div>
          ) : (
            <div className="flex flex-col gap-40">
              {services.map((service, idx) => (
                <motion.div
                  key={service._id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  viewport={{ once: true, margin: "-100px" }}
                  className={`grid lg:grid-cols-2 gap-24 items-center ${idx % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
                >
                  <div className={`flex flex-col gap-10 ${idx % 2 === 1 ? 'lg:order-2' : ''}`}>
                    <div className="inline-flex items-center gap-3 bg-primary/10 text-primary px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-[0.2em] self-start shadow-sm">
                      {service.category}
                    </div>
                    
                    <h2 className="text-5xl md:text-7xl font-black text-teal-dark tracking-tighter leading-[1.1]">{service.title}</h2>
                    
                    <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed font-medium">
                      {service.description}
                    </p>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 pt-6">
                      {[
                        "Board-certified providers",
                        "Latest medical technology",
                        "Personalized treatment",
                        "Compassionate care",
                      ].map((feature, fIdx) => (
                        <div key={fIdx} className="flex items-center gap-4">
                          <div className="h-10 w-10 rounded-2xl bg-primary/5 flex items-center justify-center text-primary shrink-0 shadow-sm">
                            <CheckCircle2 className="h-6 w-6" />
                          </div>
                          <span className="font-bold text-teal-dark text-xl tracking-tight">{feature}</span>
                        </div>
                      ))}
                    </div>
                    
                    <div className="pt-10 flex flex-col sm:flex-row gap-6">
                      <Button className="bg-teal hover:bg-teal-dark text-white rounded-full py-8 px-12 text-xl font-bold shadow-xl shadow-teal/20 transition-all hover:scale-[1.02]" asChild>
                        <a href="#book-appointment">
                          Book Now
                          <ArrowRight className="ml-3 h-6 w-6" />
                        </a>
                      </Button>
                      <Button variant="outline" className="rounded-full py-8 px-12 text-xl font-bold border-2 border-primary/10 text-primary hover:bg-primary/5 transition-all" asChild>
                        <Link href={`/services/${service.slug}`}>Learn More</Link>
                      </Button>
                    </div>
                  </div>
                  
                  <div className={`relative ${idx % 2 === 1 ? 'lg:order-1' : ''}`}>
                    <div className="absolute inset-0 bg-primary/10 rounded-[4rem] rotate-3 -z-10"></div>
                    <div className="relative aspect-square rounded-[4rem] overflow-hidden medical-shadow border-[12px] border-white bg-secondary group">
                      <img 
                        src={service.image} 
                        alt={service.title} 
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                        loading="lazy"
                      />
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-accent text-white relative overflow-hidden">
        <div className="container px-4 relative z-10">
          <div className="text-center flex flex-col items-center max-w-5xl mx-auto">
            <h2 className="text-5xl md:text-8xl font-black mb-10 leading-[0.9] tracking-tighter">Ready to prioritize your <span className="text-primary italic">health journey</span>?</h2>
            <p className="text-xl md:text-3xl text-white/70 mb-16 max-w-3xl leading-relaxed font-medium">
              Join thousands of women in the Phoenix Valley who trust Arizona Women Specialists for their lifelong care.
            </p>
            <div className="flex flex-col sm:flex-row gap-8 w-full max-w-2xl">
              <Button className="flex-1 bg-teal hover:bg-teal-dark text-white rounded-full py-10 px-12 text-2xl font-bold border-none shadow-2xl shadow-teal/40">
                Schedule Now
              </Button>
              <Button variant="outline" className="flex-1 rounded-full py-10 px-12 text-2xl font-bold border-2 border-white/20 text-white hover:bg-white hover:text-teal-dark transition-all" asChild>
                <a href="tel:6238467597">
                  Call (623) 846-7597
                </a>
              </Button>
            </div>
          </div>
        </div>
        <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_top_right,#33999920_0%,transparent_50%)] -z-0"></div>
      </section>
    </div>
  )
}
