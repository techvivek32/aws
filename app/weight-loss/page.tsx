"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { 
  Check, 
  ArrowRight, 
  ShieldCheck, 
  UserCheck, 
  Activity, 
  ClipboardCheck, 
  Video, 
  Stethoscope,
  ChevronRight,
  HelpCircle
} from "lucide-react"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const steps = [
  {
    number: "01",
    title: "Complete Online Intake",
    description: "Fill out a comprehensive health history and weight loss goals questionnaire online.",
    icon: ClipboardCheck,
  },
  {
    number: "02",
    title: "Provider Review",
    description: "Our board-certified physicians review your health profile to ensure safety and effectiveness.",
    icon: Stethoscope,
  },
  {
    number: "03",
    title: "Start Treatment",
    description: "Receive your personalized treatment plan and medication delivered to your door or in-clinic.",
    icon: Activity,
  },
  {
    number: "04",
    title: "Ongoing Support",
    description: "Regular check-ins and adjustments to your plan to ensure long-term success.",
    icon: Video,
  },
]

const treatments = [
  {
    title: "Compounded GLP-1",
    subtitle: "Custom-blended medication",
    price: "$100 first month",
    priceDetail: "$500 total for first 3 months",
    features: ["Personalized dosage", "Physician supervised", "Supplies included", "In-clinic training"],
    image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&q=80&w=800",
  }
]

const faqs = [
  {
    question: "How does the medical weight loss program work?",
    answer: "Our program combines FDA-approved medications (like GLP-1s) with professional medical oversight. After an initial health review, our doctors prescribe the most suitable treatment for your body and provide ongoing monitoring to ensure safety and effectiveness.",
  },
  {
    question: "What are GLP-1 medications?",
    answer: "GLP-1s (Glucagon-like peptide-1 receptor agonists) are a class of medications that mimic a natural hormone that regulates appetite and blood sugar. They help you feel full longer and reduce cravings, leading to sustainable weight loss.",
  },
  {
    question: "Do I need an appointment for injections?",
    answer: "We offer both options: you can come into the clinic for weekly supervised injections, or we can provide you with everything needed to self-administer at home after thorough training by our medical staff.",
  },
  {
    question: "Is this program covered by insurance?",
    answer: "While some aspects of the provider visits may be covered, we offer competitive cash-pay pricing for the medications and the full program to ensure access for all patients regardless of insurance status.",
  },
]

export default function WeightLossPage() {
  return (
    <div className="pt-6">
      {/* Hero Section - Hers Style */}
      <section className="bg-white py-16 lg:py-20 relative overflow-hidden">
        <div className="container px-4">
          <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="flex flex-col gap-10 items-center"
            >
              <Badge variant="outline" className="bg-primary/5 text-primary border-primary/20 px-6 py-2 rounded-full text-base font-bold uppercase tracking-[0.2em] mb-4">
                The Science of Weight Loss
              </Badge>
              
              <h1 className="text-6xl md:text-8xl font-black text-primary leading-[0.9] tracking-tighter">
                Weight Loss <br /> <span className="text-[#b03a7e] italic font-serif">That Works</span>
              </h1>
              
              <p className="text-xl md:text-3xl text-teal-dark font-black leading-relaxed max-w-2xl">
                Modern medical treatments prescribed by real doctors. Designed for your biology.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 w-full max-w-lg">
                <Button className="flex-1 bg-teal hover:bg-teal-dark text-white rounded-full py-10 px-12 text-2xl font-black shadow-2xl shadow-teal/30" asChild>
                  <a href="#book-appointment">Start My Plan</a>
                </Button>
                <Button variant="outline" className="flex-1 rounded-full py-10 px-12 text-2xl font-black border-4 border-teal/30 text-teal hover:bg-teal hover:text-white transition-all" asChild>
                  <a href="#how-it-works">How it works</a>
                </Button>
              </div>
              
              <div className="flex flex-wrap justify-center gap-12 pt-10">
                <div className="flex items-center gap-3">
                  <ShieldCheck className="h-8 w-8 text-primary stroke-[3]" />
                  <span className="font-black text-teal-dark text-xl">Physician Supervised</span>
                </div>
                <div className="flex items-center gap-3">
                  <UserCheck className="h-8 w-8 text-primary stroke-[3]" />
                  <span className="font-black text-teal-dark text-xl">Personalized Dosage</span>
                </div>
                <div className="flex items-center gap-3">
                  <Activity className="h-8 w-8 text-primary stroke-[3]" />
                  <span className="font-black text-teal-dark text-xl">No Hidden Fees</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
        
        {/* Decorative elements */}
        <div className="absolute top-1/4 -left-20 w-80 h-80 bg-primary/5 rounded-full blur-3xl -z-10"></div>
        <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-primary/5 rounded-full blur-3xl -z-10"></div>
      </section>

      {/* Steps Section */}
      <section className="py-24 bg-secondary/30">
        <div className="container px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
            {steps.map((step, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="flex flex-col gap-6 p-10 bg-white rounded-[3rem] border border-primary/5 medical-shadow relative overflow-hidden group hover:bg-teal hover:text-white transition-all duration-500"
              >
                <div className="text-5xl font-black text-teal/10 group-hover:text-white/20 transition-colors absolute top-6 right-8">
                  {step.number}
                </div>
                <div className="w-16 h-16 rounded-2xl bg-primary/20 text-primary flex items-center justify-center group-hover:bg-white group-hover:text-primary transition-colors shadow-sm">
                  <step.icon className="h-8 w-8 stroke-[3]" />
                </div>
                <div>
                  <h3 className="text-3xl font-black mb-4 tracking-tight">{step.title}</h3>
                  <p className="text-xl text-teal-dark font-black group-hover:text-white/90 transition-colors leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Treatment Section */}
      <section className="py-24 bg-white">
        <div className="container px-4">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-7xl font-black text-primary mb-6 tracking-tighter">
              Find the <span className="text-[#b03a7e] italic font-serif underline decoration-[#b03a7e]/20 underline-offset-8">Right Solution</span> for You
            </h2>
            <p className="text-xl md:text-3xl text-teal-dark font-black max-w-3xl mx-auto leading-relaxed">
              Our clinical program is built around the most effective medical weight loss advancements available today.
            </p>
          </div>
          
          <div className="flex justify-center">
            {treatments.map((t, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="relative w-full max-w-5xl bg-primary/5 rounded-[4rem] overflow-hidden border-8 border-white medical-shadow"
              >
                <div className="grid lg:grid-cols-2 items-center">
                  <div className="relative h-[400px] lg:h-[700px] overflow-hidden">
                    <img 
                      src={t.image} 
                      alt={t.title}
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                    <div className="absolute top-10 left-10">
                      <div className="bg-white/95 backdrop-blur-md rounded-2xl p-4 shadow-xl border border-teal/10">
                        <div className="text-3xl font-black text-teal">{t.price}</div>
                        <div className="text-sm font-bold text-teal-dark/70">{t.priceDetail}</div>
                      </div>
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent to-primary/5"></div>
                  </div>
                  
                  <div className="p-12 lg:p-20 flex flex-col gap-10">
                    <div className="inline-flex items-center gap-2 bg-teal text-white px-6 py-2.5 rounded-full text-xs font-black uppercase tracking-[0.2em] self-start shadow-xl">
                      Highly Recommended
                    </div>
                    
                    <h3 className="text-5xl md:text-7xl font-black text-primary tracking-tighter leading-none">{t.title}</h3>
                    
                    <div className="flex flex-col gap-3">
                      <div className="text-4xl font-black text-teal-dark">{t.price}</div>
                      <div className="text-2xl font-bold text-teal-dark/70">{t.priceDetail}</div>
                    </div>
                    
                    <p className="text-2xl text-teal-dark font-black leading-relaxed">
                      {t.subtitle}. Our physician-supervised program uses custom-blended GLP-1 therapy tailored specifically to your metabolic profile.
                    </p>
                    
                    <div className="grid gap-6 py-4">
                      {t.features.map((feature, fIdx) => (
                        <div key={fIdx} className="flex items-center gap-5">
                          <div className="h-10 w-10 rounded-full bg-primary/20 flex items-center justify-center text-teal">
                            <Check className="h-6 w-6 stroke-[4]" />
                          </div>
                          <span className="text-2xl font-black text-teal-dark tracking-tight">{feature}</span>
                        </div>
                      ))}
                    </div>

                    <Button className="bg-teal hover:bg-teal-dark text-white rounded-full py-10 px-14 text-3xl font-black shadow-2xl shadow-teal/30 transition-all hover:scale-[1.02] self-start mt-4" asChild>
                      <a href="#book-appointment">
                        Get Started Now
                        <ArrowRight className="ml-3 h-10 w-10" />
                      </a>
                    </Button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-secondary/30">
        <div className="container px-4 max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-teal-dark mb-6 flex items-center justify-center gap-4">
              <HelpCircle className="h-10 w-10 text-teal" />
              Common Questions
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Everything you need to know about our medical weight loss program.
            </p>
          </div>
          
          <Accordion type="single" collapsible className="w-full space-y-6">
            {faqs.map((faq, idx) => (
              <AccordionItem key={idx} value={`item-${idx}`} className="bg-white rounded-[2rem] border-none medical-shadow px-10 py-4">
                <AccordionTrigger className="text-2xl font-bold text-teal-dark hover:text-primary hover:no-underline transition-colors text-left py-6">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-lg text-muted-foreground leading-relaxed pb-8">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="container px-4 relative z-10">
          <div className="bg-accent rounded-[5rem] p-16 lg:p-32 text-center text-white relative overflow-hidden">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="flex flex-col items-center gap-10 max-w-4xl mx-auto"
            >
              <h2 className="text-5xl md:text-7xl font-bold leading-[0.9] tracking-tighter">
                Ready to transform <br /> your <span className="text-primary italic">metabolic health</span>?
              </h2>
              <p className="text-xl md:text-2xl text-white/70 max-w-2xl leading-relaxed">
                Take the first step today. Our medical team is ready to support your journey to a healthier you.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 w-full max-w-lg">
                <Button className="flex-1 bg-teal hover:bg-teal-dark text-white rounded-full py-10 px-12 text-2xl font-bold border-none" asChild>
                  <a href="#book-appointment">Get Started</a>
                </Button>
                <Button variant="outline" className="flex-1 rounded-full py-10 px-12 text-2xl font-bold border-4 border-white/30 text-white hover:bg-white hover:text-teal-dark transition-all" asChild>
                  <a href="tel:6238467597">Contact Specialist</a>
                </Button>
              </div>
            </motion.div>
            
            {/* Background pattern */}
            <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_top_right,#e91e6320_0%,transparent_50%)] -z-0"></div>
          </div>
        </div>
      </section>
    </div>
  )
}
