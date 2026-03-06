"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Calendar,
  Send,
  Navigation,
  CheckCircle2,
  ChevronRight
} from "lucide-react"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

const locations = [
  {
    name: "Phoenix Office",
    address: "4700 N 51st Ave Suite 5, Phoenix AZ 85031",
    phone: "(623) 846-7597",
    hours: "Monday – Friday: 8:00 AM – 5:00 PM",
    map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3326.6874438317764!2d-112.171129!3d33.50558!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x872b14444444444b%3A0x4444444444444444!2s4700%20N%2051st%20Ave%20%235%2C%20Phoenix%2C%20AZ%2085031!5e0!3m2!1sen!2sus!4v1234567890",
  },
  {
    name: "Glendale Office",
    address: "18699 N 67th Ave Suite 320, Glendale AZ 85308",
    phone: "(623) 846-7597",
    hours: "Monday – Friday: 8:00 AM – 5:00 PM",
    map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3322.2874438317764!2d-112.204129!3d33.66558!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x872b14444444444b%3A0x4444444444444444!2s18699%20N%2067th%20Ave%20%23320%2C%20Glendale%2C%20AZ%2085308!5e0!3m2!1sen!2sus!4v1234567890",
  },
]

export default function ContactPage() {
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
              Get in <span className="text-primary italic underline decoration-primary/20 underline-offset-8">Touch</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              We're here to answer your questions and help you schedule your next visit. Reach out to us at either of our convenient locations.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Grid */}
      <section className="py-24">
        <div className="container px-4">
          <div className="grid lg:grid-cols-2 gap-20">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-white rounded-[4rem] p-10 lg:p-16 medical-shadow border border-primary/5 flex flex-col h-full"
            >
              <h2 className="text-4xl font-bold text-accent mb-6 italic underline decoration-primary/20 underline-offset-8">Send us a message</h2>
              <p className="text-xl text-muted-foreground mb-12">
                Fill out the form below and our team will get back to you within 24-48 business hours.
              </p>
              
              <form className="flex flex-col gap-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="flex flex-col gap-3">
                    <label className="text-lg font-bold text-accent px-2">First Name</label>
                    <Input placeholder="Jane" className="py-8 px-8 rounded-full text-lg border-primary/10 focus:ring-primary medical-shadow" />
                  </div>
                  <div className="flex flex-col gap-3">
                    <label className="text-lg font-bold text-accent px-2">Last Name</label>
                    <Input placeholder="Doe" className="py-8 px-8 rounded-full text-lg border-primary/10 focus:ring-primary medical-shadow" />
                  </div>
                </div>
                
                <div className="flex flex-col gap-3">
                  <label className="text-lg font-bold text-accent px-2">Email Address</label>
                  <Input placeholder="jane@example.com" type="email" className="py-8 px-8 rounded-full text-lg border-primary/10 focus:ring-primary medical-shadow" />
                </div>
                
                <div className="flex flex-col gap-3">
                  <label className="text-lg font-bold text-accent px-2">Phone Number</label>
                  <Input placeholder="(623) 000-0000" type="tel" className="py-8 px-8 rounded-full text-lg border-primary/10 focus:ring-primary medical-shadow" />
                </div>
                
                <div className="flex flex-col gap-3">
                  <label className="text-lg font-bold text-accent px-2">How can we help?</label>
                  <Textarea placeholder="Tell us more about your needs..." className="min-h-[150px] py-6 px-8 rounded-[2rem] text-lg border-primary/10 focus:ring-primary medical-shadow resize-none" />
                </div>
                
                <div className="pt-4">
                  <Button className="w-full bg-primary hover:bg-primary/90 rounded-full py-10 text-2xl font-bold shadow-xl shadow-primary/20 group">
                    Send Message
                    <Send className="ml-3 h-6 w-6 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </Button>
                </div>
                
                <p className="text-sm text-center text-muted-foreground italic">
                  * For medical emergencies, please dial 911 or visit the nearest emergency room.
                </p>
              </form>
            </motion.div>
            
            {/* Location Info */}
            <div className="flex flex-col gap-12">
              {locations.map((loc, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: idx * 0.2 }}
                  viewport={{ once: true }}
                  className="bg-secondary/20 rounded-[3rem] p-10 lg:p-14 border border-primary/5 flex flex-col gap-8 relative overflow-hidden group"
                >
                  <div className="flex flex-col gap-6 relative z-10">
                    <h3 className="text-3xl font-bold text-accent">{loc.name}</h3>
                    
                    <div className="grid gap-6">
                      <div className="flex gap-4">
                        <div className="h-12 w-12 rounded-2xl bg-white flex items-center justify-center text-primary medical-shadow shrink-0">
                          <MapPin className="h-6 w-6" />
                        </div>
                        <div>
                          <p className="font-bold text-accent text-lg">Address</p>
                          <p className="text-muted-foreground text-lg">{loc.address}</p>
                        </div>
                      </div>
                      
                      <div className="flex gap-4">
                        <div className="h-12 w-12 rounded-2xl bg-white flex items-center justify-center text-primary medical-shadow shrink-0">
                          <Phone className="h-6 w-6" />
                        </div>
                        <div>
                          <p className="font-bold text-accent text-lg">Phone</p>
                          <a href={`tel:${loc.phone.replace(/\D/g,'')}`} className="text-muted-foreground text-lg hover:text-primary transition-colors underline decoration-primary/20">{loc.phone}</a>
                        </div>
                      </div>
                      
                      <div className="flex gap-4">
                        <div className="h-12 w-12 rounded-2xl bg-white flex items-center justify-center text-primary medical-shadow shrink-0">
                          <Clock className="h-6 w-6" />
                        </div>
                        <div>
                          <p className="font-bold text-accent text-lg">Hours</p>
                          <p className="text-muted-foreground text-lg">{loc.hours}</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="pt-6 flex flex-col sm:flex-row gap-4">
                      <Button className="bg-primary hover:bg-primary/90 rounded-full py-8 px-10 text-xl font-bold shadow-xl shadow-primary/20 group flex-1">
                        Get Directions
                        <Navigation className="ml-2 h-5 w-5" />
                      </Button>
                      <Button variant="outline" className="rounded-full py-8 px-10 text-xl font-bold border-2 border-accent text-accent hover:bg-accent hover:text-white transition-all shadow-lg flex-1">
                        Book Now
                      </Button>
                    </div>
                  </div>
                  
                  {/* Subtle background decoration */}
                  <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl -z-0"></div>
                </motion.div>
              ))}
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="bg-accent rounded-[3rem] p-10 text-white flex items-center justify-between group cursor-pointer hover:bg-accent/90 transition-all"
              >
                <div>
                  <h3 className="text-2xl font-bold mb-2">Need immediate assistance?</h3>
                  <p className="text-white/70 text-lg">Call us directly during office hours.</p>
                </div>
                <div className="h-14 w-14 rounded-full bg-primary flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Phone className="h-6 w-6 text-white" />
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-24 bg-secondary/30">
        <div className="container px-4">
          <div className="flex flex-col gap-12">
            <h2 className="text-4xl font-bold text-accent text-center mb-4">Find us on <span className="text-primary italic underline decoration-primary/20 underline-offset-8">Google Maps</span></h2>
            <div className="grid lg:grid-cols-2 gap-12">
              {locations.map((loc, idx) => (
                <div key={idx} className="w-full h-[500px] rounded-[3rem] overflow-hidden medical-shadow border-8 border-white relative group">
                  <iframe 
                    src={loc.map} 
                    width="100%" 
                    height="100%" 
                    style={{ border: 0 }} 
                    allowFullScreen={true} 
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade"
                    className="grayscale hover:grayscale-0 transition-all duration-700"
                  />
                  <div className="absolute top-8 left-8">
                    <Badge className="bg-white/90 text-accent font-bold px-6 py-2 rounded-full border-none shadow-lg backdrop-blur-md text-lg">
                      {loc.name}
                    </Badge>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
