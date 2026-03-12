"use client"

import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { MapPin, Phone, Calendar, Clock, Navigation } from "lucide-react"

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

export function LocationsSection() {
  return (
    <section className="py-20 bg-white">
      <div className="container px-4">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto mb-16">
          <h2 className="text-4xl md:text-6xl font-bold leading-[1.1] tracking-tighter text-teal-dark mb-6">
            Two Convenient <br /><span className="text-primary italic">Locations</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed font-medium">
            We are here to serve the Phoenix and Glendale communities with top-tier medical care.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {locations.map((loc, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="bg-primary/5 rounded-[4rem] p-12 lg:p-16 border border-primary/10 flex flex-col gap-12 overflow-hidden relative group transition-all duration-300"
            >
              <div className="flex flex-col gap-8 relative z-10">
                <div className="inline-flex items-center gap-2 bg-white text-primary px-6 py-2.5 rounded-full text-base font-bold shadow-sm self-start border border-primary/10 tracking-tight">
                  {loc.name}
                </div>
                
                <h3 className="text-4xl font-bold text-teal-dark tracking-tighter">{loc.name}</h3>
                
                <div className="grid gap-8">
                  <div className="flex gap-6">
                    <div className="h-14 w-14 rounded-2xl bg-white flex items-center justify-center text-primary medical-shadow shrink-0 shadow-sm">
                      <MapPin className="h-7 w-7" />
                    </div>
                    <div className="flex flex-col gap-1">
                      <p className="font-bold text-teal-dark text-xl tracking-tight">Address</p>
                      <p className="text-muted-foreground text-lg font-medium leading-relaxed">{loc.address}</p>
                    </div>
                  </div>
                  
                  <div className="flex gap-6">
                    <div className="h-14 w-14 rounded-2xl bg-white flex items-center justify-center text-primary medical-shadow shrink-0 shadow-sm">
                      <Phone className="h-7 w-7" />
                    </div>
                    <div className="flex flex-col gap-1">
                      <p className="font-bold text-teal-dark text-xl tracking-tight">Phone</p>
                      <a href={`tel:${loc.phone.replace(/\D/g,'')}`} className="text-muted-foreground text-lg font-medium hover:text-primary transition-colors underline decoration-primary/10 underline-offset-4">{loc.phone}</a>
                    </div>
                  </div>
                  
                  <div className="flex gap-6">
                    <div className="h-14 w-14 rounded-2xl bg-white flex items-center justify-center text-primary medical-shadow shrink-0 shadow-sm">
                      <Clock className="h-7 w-7" />
                    </div>
                    <div className="flex flex-col gap-1">
                      <p className="font-bold text-teal-dark text-xl tracking-tight">Hours</p>
                      <p className="text-muted-foreground text-lg font-medium leading-relaxed">{loc.hours}</p>
                    </div>
                  </div>
                </div>
                
                <div className="pt-8 flex flex-col sm:flex-row gap-6">
                  <Button className="bg-teal hover:bg-teal-dark text-white rounded-full py-8 px-12 text-xl font-bold shadow-xl shadow-teal/20 group flex-1 transition-all duration-300 hover:scale-[1.02]">
                    Get Directions
                    <Navigation className="ml-3 h-6 w-6" />
                  </Button>
                  <Button variant="outline" className="rounded-full py-8 px-12 text-xl font-bold border-2 border-primary/20 text-primary hover:bg-primary/5 transition-all duration-300 flex-1" asChild>
                    <a href="tel:6238467597">Book Now</a>
                  </Button>
                </div>
              </div>
              
              <div className="w-full h-[350px] rounded-[2rem] overflow-hidden medical-shadow border-4 border-white mt-10">
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
              </div>
              
              {/* Subtle background decoration */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl -z-0"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
