"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { Users, Award, ShieldCheck, Heart, Sparkles, MapPin } from "lucide-react"

export function WhyChooseUs() {
  const [stats, setStats] = React.useState<any>(null)

  React.useEffect(() => {
    fetch('/api/site-data')
      .then(res => res.json())
      .then(data => setStats(data.stats))
      .catch(err => console.error(err))
  }, [])

  const years = stats?.yearsExperience || 20

  const reasons = [
    {
      title: "Experienced Providers",
      description: "Our board-certified physicians have decades of specialized experience in women's healthcare.",
      icon: Award,
      color: "bg-blue-100 text-blue-600",
    },
    {
      title: "Modern Technology",
      description: "We use the latest 3D/4D ultrasound technology and diagnostic tools for precise care.",
      icon: Sparkles,
      color: "bg-purple-100 text-purple-600",
    },
    {
      title: "Personalized Care",
      description: "We take the time to listen and create a treatment plan that fits your unique needs.",
      icon: Heart,
      color: "bg-red-100 text-red-600",
    },
    {
      title: `${years}+ Years Serving Community`,
      description: "A trusted medical institution in the Phoenix Valley with deep roots in the community.",
      icon: MapPin,
      color: "bg-green-100 text-green-600",
    },
  ]
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="container px-4">
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-4xl md:text-5xl font-bold leading-tight tracking-tight text-accent mb-6">
            Why Choose <span className="text-primary italic">Arizona Women Specialists</span>?
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            We are dedicated to providing the highest quality of care to women in our community through every stage of life.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((reason, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="flex flex-col gap-6 p-8 rounded-[2rem] bg-secondary/30 hover:bg-white hover:medical-shadow transition-all border border-transparent hover:border-primary/5 cursor-default group"
            >
              <div className={`w-14 h-14 rounded-2xl flex items-center justify-center shrink-0 ${reason.color} group-hover:scale-110 transition-transform`}>
                <reason.icon className="h-7 w-7" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-accent mb-3">{reason.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {reason.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      
      {/* Decorative background element */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,#e91e6305_0%,transparent_70%)] -z-10"></div>
    </section>
  )
}
