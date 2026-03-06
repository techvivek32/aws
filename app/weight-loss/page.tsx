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
    price: "From $249/mo",
    features: ["Personalized dosage", "Physician supervised", "Supplies included"],
    image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&q=80&w=400",
  },
  {
    title: "Semaglutide Injections",
    subtitle: "FDA-approved active ingredient",
    price: "From $299/mo",
    features: ["Weekly administration", "Metabolic health focus", "Doctor review"],
    image: "https://images.unsplash.com/photo-1631248055158-edec7a3c072b?auto=format&fit=crop&q=80&w=400",
  },
  {
    title: "Oral Weight Loss",
    subtitle: "Convenient daily medication",
    price: "From $99/mo",
    features: ["No needles", "Lifestyle integration", "Monthly supplies"],
    image: "https://images.unsplash.com/photo-1471864190281-a93a3070b6de?auto=format&fit=crop&q=80&w=400",
  },
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
    <div className="pt-20">
      {/* Hero Section - Hers Style */}
      <section className="bg-white py-24 lg:py-32 relative overflow-hidden">
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
              
              <h1 className="text-6xl md:text-8xl font-bold text-accent leading-[0.9] tracking-tighter">
                Weight Loss <br /> <span className="text-primary italic">That Works</span>
              </h1>
              
              <p className="text-xl md:text-3xl text-muted-foreground leading-relaxed max-w-2xl">
                Modern medical treatments prescribed by real doctors. Designed for your biology.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 w-full max-w-lg">
                <Button className="flex-1 bg-primary hover:bg-primary/90 rounded-full py-10 px-12 text-2xl font-bold shadow-2xl shadow-primary/20">
                  Start My Plan
                </Button>
                <Button variant="outline" className="flex-1 rounded-full py-10 px-12 text-2xl font-bold border-2 border-accent text-accent hover:bg-accent hover:text-white transition-all">
                  How it works
                </Button>
              </div>
              
              <div className="flex flex-wrap justify-center gap-12 pt-10">
                <div className="flex items-center gap-3">
                  <ShieldCheck className="h-6 w-6 text-primary" />
                  <span className="font-bold text-accent">Physician Supervised</span>
                </div>
                <div className="flex items-center gap-3">
                  <UserCheck className="h-6 w-6 text-primary" />
                  <span className="font-bold text-accent">Personalized Dosage</span>
                </div>
                <div className="flex items-center gap-3">
                  <Activity className="h-6 w-6 text-primary" />
                  <span className="font-bold text-accent">No Hidden Fees</span>
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
                className="flex flex-col gap-6 p-10 bg-white rounded-[3rem] border border-primary/5 medical-shadow relative overflow-hidden group hover:bg-primary hover:text-white transition-all duration-500"
              >
                <div className="text-5xl font-black text-primary/10 group-hover:text-white/20 transition-colors absolute top-6 right-8">
                  {step.number}
                </div>
                <div className="w-14 h-14 rounded-2xl bg-primary/10 text-primary flex items-center justify-center group-hover:bg-white group-hover:text-primary transition-colors">
                  <step.icon className="h-7 w-7" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-4">{step.title}</h3>
                  <p className="text-muted-foreground group-hover:text-white/80 transition-colors leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Treatments Grid */}
      <section className="py-24">
        <div className="container px-4 text-center">
          <h2 className="text-4xl md:text-6xl font-bold text-accent mb-16">
            Find the <span className="text-primary italic">Right Solution</span> for You
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {treatments.map((t, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-[4rem] overflow-hidden border border-primary/10 medical-shadow flex flex-col group cursor-pointer hover:border-primary/30 transition-all"
              >
                <div className="aspect-square relative overflow-hidden">
                  <img 
                    src={t.image} 
                    alt={t.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute top-8 left-8">
                    <Badge className="bg-white/90 text-accent font-bold px-4 py-1.5 rounded-full border-none shadow-sm backdrop-blur-sm">
                      {t.price}
                    </Badge>
                  </div>
                </div>
                <div className="p-12 flex flex-col items-center text-center">
                  <h3 className="text-3xl font-bold text-accent mb-2">{t.title}</h3>
                  <p className="text-lg text-muted-foreground mb-8">{t.subtitle}</p>
                  
                  <ul className="flex flex-col gap-4 mb-10 w-full">
                    {t.features.map((f, i) => (
                      <li key={i} className="flex items-center gap-3 text-accent font-medium">
                        <Check className="h-5 w-5 text-primary shrink-0" />
                        {f}
                      </li>
                    ))}
                  </ul>
                  
                  <Button className="w-full bg-accent hover:bg-accent/90 rounded-full py-8 text-xl font-bold group">
                    Learn More
                    <ChevronRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
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
            <h2 className="text-4xl md:text-5xl font-bold text-accent mb-6 flex items-center justify-center gap-4">
              <HelpCircle className="h-10 w-10 text-primary" />
              Common Questions
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Everything you need to know about our medical weight loss program.
            </p>
          </div>
          
          <Accordion type="single" collapsible className="w-full space-y-6">
            {faqs.map((faq, idx) => (
              <AccordionItem key={idx} value={`item-${idx}`} className="bg-white rounded-[2rem] border-none medical-shadow px-10 py-4">
                <AccordionTrigger className="text-2xl font-bold text-accent hover:text-primary hover:no-underline transition-colors text-left py-6">
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
                <Button className="flex-1 bg-primary hover:bg-primary/90 rounded-full py-10 px-12 text-2xl font-bold border-none">
                  Get Started
                </Button>
                <Button variant="outline" className="flex-1 rounded-full py-10 px-12 text-2xl font-bold border-2 border-white/20 text-white hover:bg-white hover:text-accent transition-all">
                  Contact Specialist
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
