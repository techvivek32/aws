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
    <section className="py-24 bg-white">
      <div className="container px-4">
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-4xl md:text-5xl font-bold leading-tight tracking-tight text-accent mb-6">
            Two Convenient <span className="text-primary italic underline decoration-primary/20 underline-offset-8">Locations</span>
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            We are here to serve the Phoenix and Glendale communities with top-tier medical care.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {locations.map((loc, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="bg-secondary/20 rounded-[3rem] p-10 lg:p-14 border border-primary/5 flex flex-col gap-10 overflow-hidden relative group"
            >
              <div className="flex flex-col gap-6 relative z-10">
                <div className="inline-flex items-center gap-2 bg-white text-primary px-6 py-2 rounded-full text-lg font-bold shadow-sm self-start border border-primary/10">
                  {loc.name}
                </div>
                
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
                    Book Appointment
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
