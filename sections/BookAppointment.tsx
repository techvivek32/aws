"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { CheckCircle2, Loader2 } from "lucide-react"

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
    <section id="book-appointment" className="py-24 bg-secondary/30">
      <div className="container px-4">
        <div className="bg-white rounded-[4rem] p-12 lg:p-24 medical-shadow border border-primary/10 grid lg:grid-cols-2 gap-20 items-center">
          <div>
            <h2 className="text-4xl md:text-6xl font-black text-accent mb-8 leading-tight">
              Ready to <span className="text-primary italic">prioritize</span> <br /> your health?
            </h2>
            <p className="text-xl text-muted-foreground mb-12 leading-relaxed font-medium max-w-lg">
              Book your appointment today with Arizona's leading women's health specialists. We're here to support you at every stage.
            </p>
            
            <div className="space-y-6">
              {[
                "Board-certified physicians",
                "Personalized care plans",
                "State-of-the-art technology",
                "Same-day pregnancy testing",
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-4">
                  <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                    <CheckCircle2 className="h-6 w-6" />
                  </div>
                  <span className="text-lg font-bold text-accent">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            {status === 'success' ? (
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-green-50 rounded-[3rem] p-12 text-center flex flex-col items-center gap-6"
              >
                <div className="h-24 w-24 rounded-full bg-green-100 flex items-center justify-center text-green-600">
                  <CheckCircle2 className="h-12 w-12" />
                </div>
                <h3 className="text-3xl font-black text-accent">Appointment Requested!</h3>
                <p className="text-lg text-muted-foreground font-medium">
                  Thank you for choosing us. Our team will contact you shortly to confirm your visit.
                </p>
                <Button 
                  onClick={() => setStatus('idle')}
                  className="bg-accent text-white rounded-full py-6 px-10 text-lg font-bold"
                >
                  Book Another
                </Button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="flex flex-col gap-2">
                    <label className="text-sm font-bold text-accent px-2">Full Name</label>
                    <Input 
                      required
                      placeholder="Jane Doe"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      className="py-8 px-8 rounded-full text-lg border-primary/10 focus:ring-primary medical-shadow bg-white"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-sm font-bold text-accent px-2">Phone Number</label>
                    <Input 
                      required
                      type="tel"
                      placeholder="(623) 000-0000"
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      className="py-8 px-8 rounded-full text-lg border-primary/10 focus:ring-primary medical-shadow bg-white"
                    />
                  </div>
                </div>
                
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-bold text-accent px-2">Email Address</label>
                  <Input 
                    required
                    type="email"
                    placeholder="jane@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="py-8 px-8 rounded-full text-lg border-primary/10 focus:ring-primary medical-shadow bg-white"
                  />
                </div>
                
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-bold text-accent px-2">Preferred Service</label>
                  <select 
                    required
                    value={formData.service}
                    onChange={(e) => setFormData({...formData, service: e.target.value})}
                    className="flex h-16 w-full items-center justify-between rounded-full border border-primary/10 bg-white px-8 py-2 text-lg font-medium ring-offset-background focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 medical-shadow appearance-none"
                  >
                    <option value="" disabled>Select a service</option>
                    <option value="Obstetrics">Obstetrics & Pregnancy</option>
                    <option value="Gynecology">Gynecology Services</option>
                    <option value="Weight Loss">Medical Weight Loss</option>
                    <option value="Ultrasound">Ultrasound Imaging</option>
                    <option value="Family Planning">Family Planning</option>
                  </select>
                </div>
                
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-bold text-accent px-2">Message (Optional)</label>
                  <Textarea 
                    placeholder="Any specific details or questions?"
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    className="min-h-[120px] py-6 px-8 rounded-[2rem] text-lg border-primary/10 focus:ring-primary medical-shadow bg-white resize-none"
                  />
                </div>
                
                <Button 
                  disabled={status === 'loading'}
                  className="bg-primary hover:bg-primary/90 rounded-full py-10 text-2xl font-bold shadow-2xl shadow-primary/30 mt-4"
                >
                  {status === 'loading' ? (
                    <>
                      <Loader2 className="mr-3 h-6 w-6 animate-spin" />
                      Requesting...
                    </>
                  ) : 'Confirm Appointment'}
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
