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
                  <a href="tel:6238467597">Start My Plan</a>
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
                className="relative w-full max-w-6xl bg-white rounded-[3rem] overflow-hidden medical-shadow border border-teal/10"
              >
                <div className="grid lg:grid-cols-5 items-stretch">
                  {/* Image Section */}
                  <div className="lg:col-span-2 relative h-[350px] lg:h-auto overflow-hidden bg-gradient-to-br from-teal/5 to-teal/10">
                    <img 
                      src={t.image} 
                      alt={t.title}
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                    <div className="absolute top-8 left-8">
                      <div className="bg-teal text-white rounded-2xl px-6 py-3 shadow-xl">
                        <div className="text-xs font-bold uppercase tracking-wider opacity-90">Starting at</div>
                        <div className="text-3xl font-black">{t.price}</div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Content Section */}
                  <div className="lg:col-span-3 p-10 lg:p-14 flex flex-col">
                    <div className="inline-flex items-center gap-2 bg-teal/10 text-teal px-5 py-2 rounded-full text-xs font-bold uppercase tracking-wider self-start mb-6">
                      ⭐ Highly Recommended
                    </div>
                    
                    <h3 className="text-4xl md:text-5xl font-black text-teal-dark mb-4 leading-tight">{t.title}</h3>
                    
                    <p className="text-lg text-teal-dark/80 font-semibold leading-relaxed mb-6">
                      {t.subtitle}. Our physician-supervised program uses custom-blended GLP-1 therapy tailored specifically to your metabolic profile.
                    </p>
                    
                    <div className="bg-teal/5 rounded-2xl p-6 mb-6">
                      <div className="text-sm font-bold text-teal-dark/70 mb-2">Investment</div>
                      <div className="text-2xl font-black text-teal">{t.priceDetail}</div>
                    </div>
                    
                    <div className="grid gap-4 mb-8">
                      {t.features.map((feature, fIdx) => (
                        <div key={fIdx} className="flex items-center gap-3">
                          <div className="h-7 w-7 rounded-full bg-teal/10 flex items-center justify-center shrink-0">
                            <Check className="h-4 w-4 text-teal stroke-[3]" />
                          </div>
                          <span className="text-base font-semibold text-teal-dark">{feature}</span>
                        </div>
                      ))}
                    </div>

                    <Button className="bg-teal hover:bg-teal-dark text-white rounded-full py-6 px-10 text-xl font-bold shadow-xl shadow-teal/20 transition-all hover:scale-[1.02] self-start mt-auto" asChild>
                      <a href="tel:6238467597">
                        Get Started Now
                        <ArrowRight className="ml-2 h-6 w-6" />
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
                  <a href="tel:6238467597">Get Started</a>
                </Button>
                <Button variant="outline" className="flex-1 rounded-full py-10 px-12 text-2xl font-bold border-4 border-white/30 bg-white text-teal-dark hover:bg-teal hover:text-white transition-all" asChild>
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
