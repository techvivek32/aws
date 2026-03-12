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
      description: "Our team of board-certified providers has decades of specialized experience in women's healthcare.",
      icon: Award,
      color: "bg-primary/10 text-teal",
    },
    {
      title: "Modern Technology",
      description: "We use the latest 3D/4D ultrasound technology and diagnostic tools for precise care.",
      icon: Sparkles,
      color: "bg-primary/10 text-teal",
    },
    {
      title: "Personalized Care",
      description: "We take the time to listen and create a treatment plan that fits your unique needs.",
      icon: Heart,
      color: "bg-primary/10 text-teal",
    },
    {
      title: `${years}+ Years Serving Community`,
      description: "A trusted medical institution in the Phoenix Valley with deep roots in the community.",
      icon: MapPin,
      color: "bg-primary/10 text-teal",
    },
  ]
  return (
    <section className="py-20 bg-white relative overflow-hidden">
      <div className="container px-4">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto mb-16">
          <h2 className="text-4xl md:text-6xl font-black leading-[1.1] tracking-tighter text-teal-dark mb-6">
            Why Choose <br /><span className="text-magenta italic font-serif">Arizona Women Specialists</span>?
          </h2>
          <p className="text-xl md:text-2xl text-teal-dark leading-relaxed font-bold">
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
              whileHover={{ y: -8 }}
              className="flex flex-col gap-8 p-10 rounded-[3rem] bg-primary/10 hover:bg-white medical-shadow transition-all border-4 border-white cursor-default group duration-300"
            >
              <div className={`w-16 h-16 rounded-[1.5rem] flex items-center justify-center shrink-0 ${reason.color} group-hover:bg-teal group-hover:text-white transition-all duration-300 shadow-md`}>
                <reason.icon className="h-8 w-8 stroke-[3]" />
              </div>
              <div>
                <h3 className="text-2xl font-black text-teal-dark mb-4 tracking-tight">{reason.title}</h3>
                <p className="text-lg text-teal-dark leading-relaxed font-bold">
                  {reason.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      
      {/* Decorative background element */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,#33999905_0%,transparent_70%)] -z-10"></div>
    </section>
  )
}
