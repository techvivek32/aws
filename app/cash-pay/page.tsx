"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { 
  Check, 
  DollarSign, 
  CreditCard, 
  Calendar, 
  ShieldCheck,
  Stethoscope,
  Image as ImageIcon,
  Heart,
  ArrowRight
} from "lucide-react"

const pricingCategories = [
  {
    title: "Provider Visits",
    icon: Stethoscope,
    items: [
      { name: "New Patient Visit", price: "$100", description: "Comprehensive initial consultation and exam." },
      { name: "Established Patient Visit", price: "$75", description: "Follow-up care and routine monitoring." },
    ]
  },
  {
    title: "Imaging & Diagnostics",
    icon: ImageIcon,
    items: [
      { name: "Diagnostic Ultrasound", price: "$75", description: "Pelvic or obstetric imaging." },
      { name: "Pregnancy Confirmation", price: "FREE", description: "Initial pregnancy test (Walk-in available)." },
    ]
  },
  {
    title: "Family Planning",
    icon: Heart,
    items: [
      { name: "Depo-Provera Injection", price: "$50", description: "Contraceptive injection (Every 3 months)." },
      { name: "IUD Insertion", price: "$150", description: "Professional insertion of contraceptive device." },
      { name: "IUD Removal", price: "$100", description: "Safe removal of contraceptive device." },
    ]
  },
]

export default function CashPayPage() {
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
            <h1 className="text-5xl md:text-7xl font-bold text-accent mb-8 leading-tight tracking-tight">
              Transparent <span className="text-primary italic underline decoration-primary/20 underline-offset-8">Cash Pay Pricing</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              High-quality healthcare shouldn't be a mystery. We offer clear, upfront pricing for patients without insurance or those who prefer to pay out-of-pocket.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Pricing Grid */}
      <section className="py-24">
        <div className="container px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {pricingCategories.map((category, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-[3rem] p-10 medical-shadow border border-primary/5 flex flex-col h-full"
              >
                <div className="w-14 h-14 rounded-2xl bg-primary/10 text-primary flex items-center justify-center mb-8">
                  <category.icon className="h-7 w-7" />
                </div>
                
                <h2 className="text-3xl font-bold text-accent mb-8">{category.title}</h2>
                
                <div className="flex flex-col gap-8 flex-1">
                  {category.items.map((item, iIdx) => (
                    <div key={iIdx} className="flex flex-col gap-2 pb-6 border-b border-secondary/50 last:border-0 last:pb-0">
                      <div className="flex justify-between items-center">
                        <h3 className="text-xl font-bold text-accent">{item.name}</h3>
                        <span className="text-2xl font-black text-primary">{item.price}</span>
                      </div>
                      <p className="text-muted-foreground leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
          
          <div className="mt-20 bg-accent text-white rounded-[3rem] p-10 lg:p-16 flex flex-col lg:flex-row items-center justify-between gap-12">
            <div className="max-w-2xl">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 italic underline decoration-primary/50 underline-offset-8">Don't see what you're looking for?</h2>
              <p className="text-xl text-white/70 leading-relaxed">
                Our team is happy to provide pricing for other services, procedures, and laboratory tests over the phone. We believe in financial transparency for all our patients.
              </p>
            </div>
            <Button className="bg-primary hover:bg-primary/90 rounded-full py-8 px-12 text-xl font-bold border-none w-full lg:w-auto" asChild>
              <a href="tel:6238467597">
                Call (623) 846-7597
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Trust Points */}
      <section className="py-24 bg-secondary/30">
        <div className="container px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: CreditCard, title: "No Hidden Fees", text: "What you see is what you pay. No surprise medical bills." },
              { icon: ShieldCheck, title: "Secure Payment", text: "We accept all major credit cards, HSA, and FSA cards." },
              { icon: DollarSign, title: "Cost-Effective", text: "Premium care at competitive rates for the Phoenix area." },
              { icon: Calendar, title: "Same-Day Pay", text: "Payment is collected at the time of service for your convenience." },
            ].map((point, idx) => (
              <div key={idx} className="flex flex-col items-center text-center gap-4">
                <div className="h-16 w-16 rounded-full bg-white flex items-center justify-center text-primary medical-shadow">
                  <point.icon className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-bold text-accent">{point.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {point.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24">
        <div className="container px-4 text-center">
          <div className="max-w-4xl mx-auto flex flex-col items-center">
            <h2 className="text-4xl md:text-6xl font-bold text-accent mb-10 leading-tight">Ready to <span className="text-primary italic">book your visit</span>?</h2>
            <div className="flex flex-col sm:flex-row gap-6 w-full max-w-lg">
              <Button className="flex-1 bg-primary hover:bg-primary/90 rounded-full py-8 px-10 text-xl font-bold shadow-xl shadow-primary/20 group">
                Schedule Appointment
                <ArrowRight className="ml-2 h-6 w-6 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
