"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { Heart, Baby, Stethoscope, Image as ImageIcon, Users, ClipboardCheck, ArrowRight, Loader2 } from "lucide-react"
import Link from "next/link"

const iconMap: any = {
  "Baby": Baby,
  "Stethoscope": Stethoscope,
  "ImageIcon": ImageIcon,
  "Heart": Heart,
  "ClipboardCheck": ClipboardCheck,
  "Users": Users,
}

export function Services() {
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
    <section id="services" className="py-20 bg-secondary/30 relative overflow-hidden">
      <div className="container px-4">
        <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-12">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black leading-tight tracking-tight text-teal-dark">
              Compassionate Care for <br /> <span className="text-magenta italic">Every Stage</span> of Life
            </h2>
            <p className="text-xl text-muted-foreground mt-8 leading-relaxed font-medium">
              We offer a full range of women's care and gynecological services tailored to your unique health journey.
            </p>
          </div>
          <Button variant="outline" className="rounded-full py-8 px-12 text-lg font-bold border-2 border-teal/20 text-teal hover:bg-teal hover:text-white transition-all shadow-sm bg-white shrink-0 group" asChild>
            <Link href="/services">
              View All Services
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
        </div>

        {loading ? (
          <div className="flex justify-center py-20">
            <Loader2 className="h-12 w-12 animate-spin text-teal" />
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {Array.isArray(services) && services.slice(0, 6).map((service, idx) => (
              <motion.div
                key={service._id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -8 }}
                className="bg-white p-10 rounded-[2.5rem] medical-shadow border border-teal/5 group relative overflow-hidden transition-all duration-300"
              >
                <div className="h-48 -mx-12 -mt-12 mb-10 overflow-hidden relative">
                  <img src={service.image} alt={service.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" loading="lazy" />
                  <div className="absolute inset-0 bg-gradient-to-t from-white via-white/20 to-transparent"></div>
                </div>

                <span className="text-xs font-black text-teal uppercase tracking-[0.2em] bg-teal/5 px-4 py-1.5 rounded-full">{service.category}</span>
                
                <h3 className="text-3xl font-black text-teal-dark mt-6 mb-4 group-hover:text-magenta transition-colors tracking-tight">
                  {service.title}
                </h3>
                
                <p className="text-muted-foreground leading-relaxed text-lg mb-10 font-medium line-clamp-3">
                  {service.description}
                </p>
                
                <Button variant="ghost" className="p-0 text-teal font-bold text-xl hover:bg-transparent group/btn flex items-center gap-3 cursor-pointer" asChild>
                  <Link href={`/services/${service.slug}`}>
                    Learn More
                    <div className="h-10 w-10 rounded-full bg-teal/10 flex items-center justify-center group-hover/btn:bg-teal group-hover/btn:text-white transition-all">
                      <ArrowRight className="h-5 w-5 transition-transform" />
                    </div>
                  </Link>
                </Button>
              </motion.div>
            ))}
          </div>
        )}
      </div>
      
      {/* Background accents */}
      <div className="absolute top-1/4 -right-20 w-80 h-80 bg-teal/5 rounded-full blur-[100px] -z-10"></div>
      <div className="absolute bottom-1/4 -left-20 w-80 h-80 bg-teal/5 rounded-full blur-[100px] -z-10"></div>
    </section>
  )
}
