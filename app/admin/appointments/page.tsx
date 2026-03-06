"use client"

import { useState, useEffect } from "react"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { 
  CalendarCheck, 
  Search, 
  User, 
  Phone, 
  Mail, 
  Stethoscope, 
  MessageSquare,
  Clock
} from "lucide-react"
import { Input } from "@/components/ui/input"

export default function AppointmentsPage() {
  const [appointments, setAppointments] = useState<any[]>([])
  const [loading, setLoading] = useState(true)
  const [searchTerm, setSearcherTerm] = useState("")

  useEffect(() => {
    fetch('/api/appointments')
      .then(res => res.json())
      .then(data => {
        if (Array.isArray(data)) {
          setAppointments(data)
        } else {
          console.error('Expected an array of appointments, but received:', data)
          setAppointments([])
        }
        setLoading(false)
      })
      .catch(err => {
        console.error('Failed to fetch appointments:', err)
        setAppointments([])
        setLoading(false)
      })
  }, [])

  const filteredAppointments = Array.isArray(appointments) ? appointments.filter(apt => 
    apt.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    apt.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
    apt.service.toLowerCase().includes(searchTerm.toLowerCase())
  ) : []

  if (loading) return <div>Loading...</div>

  return (
    <div className="space-y-10">
      <div className="flex flex-col md:flex-row justify-between items-center gap-6">
        <h2 className="text-3xl font-black text-accent italic underline decoration-primary/20 underline-offset-8">All Appointments</h2>
        <div className="relative w-full md:w-96">
          <Search className="absolute left-6 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
          <Input 
            placeholder="Search by name, email, or service..." 
            value={searchTerm}
            onChange={(e) => setSearcherTerm(e.target.value)}
            className="pl-14 py-7 rounded-full border-primary/10 focus:ring-primary medical-shadow bg-white"
          />
        </div>
      </div>

      <div className="grid gap-8">
        {filteredAppointments.map((apt, idx) => (
          <Card key={apt._id} className="rounded-[3rem] border-none medical-shadow overflow-hidden group hover:border-primary/20 transition-all border border-transparent">
            <CardContent className="p-0">
              <div className="grid lg:grid-cols-4">
                <div className="bg-primary/5 p-10 flex flex-col items-center justify-center text-center gap-4">
                  <div className="h-20 w-24 rounded-3xl bg-white flex items-center justify-center text-primary medical-shadow font-black text-3xl">
                    {apt.name[0]}
                  </div>
                  <div>
                    <h3 className="text-xl font-black text-accent">{apt.name}</h3>
                    <p className="text-primary font-bold text-sm uppercase tracking-widest mt-1">{apt.status}</p>
                  </div>
                </div>
                
                <div className="lg:col-span-3 p-10 grid md:grid-cols-2 gap-10">
                  <div className="space-y-6">
                    <div className="flex items-center gap-4">
                      <div className="h-10 w-10 rounded-xl bg-secondary flex items-center justify-center text-accent">
                        <Phone className="h-5 w-5" />
                      </div>
                      <a href={`tel:${apt.phone}`} className="text-lg font-bold text-accent hover:text-primary transition-colors">{apt.phone}</a>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="h-10 w-10 rounded-xl bg-secondary flex items-center justify-center text-accent">
                        <Mail className="h-5 w-5" />
                      </div>
                      <a href={`mailto:${apt.email}`} className="text-lg font-bold text-accent hover:text-primary transition-colors">{apt.email}</a>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="h-10 w-10 rounded-xl bg-secondary flex items-center justify-center text-accent">
                        <Stethoscope className="h-5 w-5" />
                      </div>
                      <span className="text-lg font-bold text-accent">{apt.service}</span>
                    </div>
                  </div>

                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <div className="h-10 w-10 rounded-xl bg-secondary flex items-center justify-center text-accent shrink-0">
                        <MessageSquare className="h-5 w-5" />
                      </div>
                      <div>
                        <p className="text-sm font-bold text-muted-foreground uppercase tracking-wider mb-1">Patient Message</p>
                        <p className="text-accent font-medium leading-relaxed italic">"{apt.message || "No message provided"}"</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="h-10 w-10 rounded-xl bg-secondary flex items-center justify-center text-accent">
                        <Clock className="h-5 w-5" />
                      </div>
                      <div>
                        <p className="text-sm font-bold text-muted-foreground uppercase tracking-wider">Requested On</p>
                        <p className="text-accent font-bold">{new Date(apt.createdAt).toLocaleString()}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
        {filteredAppointments.length === 0 && (
          <div className="text-center py-20 bg-white rounded-[3rem] medical-shadow">
            <CalendarCheck className="h-16 w-16 text-primary/20 mx-auto mb-6" />
            <h3 className="text-2xl font-black text-accent">No appointments found</h3>
            <p className="text-muted-foreground font-medium mt-2">Try searching for something else</p>
          </div>
        )}
      </div>
    </div>
  )
}
