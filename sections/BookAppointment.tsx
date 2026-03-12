"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { CheckCircle2, Loader2, ArrowRight } from "lucide-react"

export function BookAppointment() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    service: "",
    message: "",
  })
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('loading')

    try {
      const res = await fetch('/api/appointments', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })

      if (res.ok) {
        setStatus('success')
        setFormData({ name: "", phone: "", email: "", service: "", message: "" })
      } else {
        setStatus('error')
      }
    } catch (error) {
      console.error(error)
      setStatus('error')
    }
  }

  return (
    <section id="book-appointment" className="py-20 bg-secondary/30">
      <div className="container px-4">
        <div className="bg-white rounded-[4rem] p-12 lg:p-20 medical-shadow border border-primary/10 grid lg:grid-cols-2 gap-16 items-center relative overflow-hidden">
          <div className="relative z-10">
            <h2 className="text-4xl md:text-6xl font-black text-primary tracking-tighter mb-8 leading-[1.1]">
              Ready to <span className="text-[#b03a7e] italic font-serif">prioritize</span> <br /> your health?
            </h2>
            <p className="text-xl md:text-2xl text-teal-dark mb-12 leading-relaxed font-black max-w-lg">
              Book your visit today with Arizona's leading women's health specialists. We're here to support you at every stage.
            </p>
            
            <div className="space-y-8">
              {[
                "Board-certified providers",
                "Personalized care plans",
                "Modern clinical technology",
                "Confidential & secure",
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-6">
                  <div className="h-12 w-12 rounded-2xl bg-primary/20 flex items-center justify-center text-primary shadow-sm">
                    <CheckCircle2 className="h-8 w-8 stroke-[3]" />
                  </div>
                  <span className="text-2xl font-black text-teal-dark tracking-tight">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="relative z-10">
            {status === 'success' ? (
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-primary/5 rounded-[3rem] p-16 text-center flex flex-col items-center gap-8 border border-primary/10"
              >
                <div className="h-28 w-28 rounded-full bg-white flex items-center justify-center text-primary medical-shadow">
                  <CheckCircle2 className="h-14 w-14" />
                </div>
                <div className="flex flex-col gap-4">
                  <h3 className="text-4xl font-black text-teal-dark tracking-tight">Request Received</h3>
                  <p className="text-xl text-muted-foreground font-medium leading-relaxed">
                    Thank you for choosing us. Our team will contact you shortly to confirm your visit.
                  </p>
                </div>
                <Button 
                  onClick={() => setStatus('idle')}
                  className="bg-teal text-white rounded-full py-8 px-12 text-xl font-bold shadow-xl shadow-teal/20 transition-all hover:scale-[1.02]"
                >
                  Book Another
                </Button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-8 bg-primary/5 p-12 rounded-[3rem] border border-primary/10">
                <div className="grid sm:grid-cols-2 gap-8">
                  <div className="flex flex-col gap-3">
                    <label className="text-xs font-bold uppercase tracking-widest text-muted-foreground px-2">Full Name</label>
                    <Input 
                      required
                      placeholder="Jane Doe"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      className="py-8 px-8 rounded-2xl text-lg border-primary/10 focus:ring-teal medical-shadow bg-white"
                    />
                  </div>
                  <div className="flex flex-col gap-3">
                    <label className="text-xs font-bold uppercase tracking-widest text-muted-foreground px-2">Phone Number</label>
                    <Input 
                      required
                      type="tel"
                      placeholder="(623) 000-0000"
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      className="py-8 px-8 rounded-2xl text-lg border-primary/10 focus:ring-teal medical-shadow bg-white"
                    />
                  </div>
                </div>
                
                <div className="flex flex-col gap-3">
                  <label className="text-xs font-bold uppercase tracking-widest text-muted-foreground px-2">Email Address</label>
                  <Input 
                    required
                    type="email"
                    placeholder="jane@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="py-8 px-8 rounded-2xl text-lg border-primary/10 focus:ring-teal medical-shadow bg-white"
                  />
                </div>
                
                <div className="flex flex-col gap-3">
                  <label className="text-xs font-bold uppercase tracking-widest text-muted-foreground px-2">Preferred Service</label>
                  <div className="relative">
                    <select 
                      required
                      value={formData.service}
                      onChange={(e) => setFormData({...formData, service: e.target.value})}
                      className="flex h-16 w-full items-center justify-between rounded-2xl border border-primary/10 bg-white px-8 py-2 text-lg font-medium ring-offset-background focus:outline-none focus:ring-2 focus:ring-teal focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 medical-shadow appearance-none"
                    >
                      <option value="" disabled>Select a service</option>
                      <option value="Pregnancy">Pregnancy Care</option>
                      <option value="Gynecology">Gynecology Services</option>
                      <option value="Weight Loss">Medical Weight Loss</option>
                      <option value="Ultrasound">Ultrasound Imaging</option>
                      <option value="Family Planning">Family Planning</option>
                    </select>
                    <div className="absolute right-6 top-1/2 -translate-y-1/2 pointer-events-none">
                      <ArrowRight className="h-5 w-5 text-primary rotate-90" />
                    </div>
                  </div>
                </div>
                
                <div className="flex flex-col gap-3">
                  <label className="text-xs font-bold uppercase tracking-widest text-muted-foreground px-2">Message (Optional)</label>
                  <Textarea 
                    placeholder="Any specific details or questions?"
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    className="min-h-[140px] py-6 px-8 rounded-[2rem] text-lg border-primary/10 focus:ring-teal medical-shadow bg-white resize-none"
                  />
                </div>
                
                <Button 
                  disabled={status === 'loading'}
                  className="bg-teal hover:bg-teal-dark text-white rounded-full py-10 text-2xl font-bold shadow-xl shadow-teal/20 mt-4 transition-all hover:scale-[1.02]"
                >
                  {status === 'loading' ? (
                    <>
                      <Loader2 className="mr-3 h-7 w-7 animate-spin" />
                      Requesting...
                    </>
                  ) : 'Confirm My Appointment'}
                </Button>
                
                {status === 'error' && (
                  <p className="text-red-500 text-center font-bold">Something went wrong. Please try again or call us.</p>
                ) }
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
