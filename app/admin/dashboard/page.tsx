"use client"

import { useState, useEffect } from "react"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { 
  Users, 
  Stethoscope, 
  CalendarCheck, 
  TrendingUp,
  ArrowUpRight,
  Clock
} from "lucide-react"

export default function DashboardPage() {
  const [stats, setStats] = useState<any>(null)
  const [appointments, setAppointments] = useState<any[]>([])

  useEffect(() => {
    fetch('/api/site-data')
      .then(res => res.json())
      .then(data => setStats(data.stats))
      .catch(err => console.error('Failed to fetch stats:', err))
    
    fetch('/api/appointments')
      .then(res => res.json())
      .then(data => {
        if (Array.isArray(data)) {
          setAppointments(data)
        } else {
          setAppointments([])
        }
      })
      .catch(err => {
        console.error('Failed to fetch appointments:', err)
        setAppointments([])
      })
  }, [])

  const safeAppointments = Array.isArray(appointments) ? appointments : []

  const cards = [
    { name: "Total Appointments", value: safeAppointments.length, icon: CalendarCheck, color: "text-blue-600", bg: "bg-blue-100" },
    { name: "Happy Patients", value: stats?.happyPatients || 5000, icon: Users, color: "text-green-600", bg: "bg-green-100" },
    { name: "Services Offered", value: 5, icon: Stethoscope, color: "text-purple-600", bg: "bg-purple-100" },
    { name: "Growth Rate", value: "+12%", icon: TrendingUp, color: "text-pink-600", bg: "bg-pink-100" },
  ]

  return (
    <div className="space-y-10">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {cards.map((card) => (
          <Card key={card.name} className="rounded-[2.5rem] border-none medical-shadow overflow-hidden">
            <CardContent className="p-8">
              <div className="flex justify-between items-start mb-6">
                <div className={`h-14 w-14 rounded-2xl ${card.bg} ${card.color} flex items-center justify-center`}>
                  <card.icon className="h-7 w-7" />
                </div>
                <div className="flex items-center gap-1 text-green-600 font-bold bg-green-50 px-3 py-1 rounded-full text-xs">
                  <ArrowUpRight className="h-3 w-3" />
                  2.5%
                </div>
              </div>
              <p className="text-muted-foreground font-bold text-sm uppercase tracking-wider">{card.name}</p>
              <h3 className="text-4xl font-black text-teal-dark mt-2">{card.value}</h3>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid lg:grid-cols-3 gap-10">
        <Card className="lg:col-span-2 rounded-[3rem] border-none medical-shadow">
          <CardHeader className="p-10 pb-0">
            <CardTitle className="text-2xl font-black flex items-center gap-3">
              <Clock className="h-6 w-6 text-teal" />
              Recent Appointments
            </CardTitle>
          </CardHeader>
          <CardContent className="p-10">
            <div className="space-y-6">
              {safeAppointments.slice(0, 5).map((apt, idx) => (
                <div key={idx} className="flex items-center justify-between p-6 rounded-3xl bg-secondary/30 border border-transparent hover:border-primary/10 transition-all group">
                  <div className="flex items-center gap-6">
                    <div className="h-14 w-14 rounded-2xl bg-white flex items-center justify-center font-bold text-primary medical-shadow group-hover:scale-110 transition-transform">
                      {apt.name[0]}
                    </div>
                    <div>
                      <h4 className="font-bold text-teal-dark text-lg">{apt.name}</h4>
                      <p className="text-muted-foreground font-medium">{apt.service} • {new Date(apt.createdAt).toLocaleDateString()}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className={`px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest ${
                      apt.status === 'pending' ? 'bg-yellow-100 text-yellow-700' : 'bg-green-100 text-green-700'
                    }`}>
                      {apt.status}
                    </span>
                  </div>
                </div>
              ))}
              {appointments.length === 0 && <p className="text-center text-muted-foreground font-medium py-10">No recent appointments</p>}
            </div>
          </CardContent>
        </Card>

        <Card className="rounded-[3rem] border-none medical-shadow bg-accent text-white">
          <CardHeader className="p-10">
            <CardTitle className="text-2xl font-black italic">Quick Actions</CardTitle>
          </CardHeader>
          <CardContent className="p-10 pt-0 space-y-4">
            <button className="w-full bg-teal hover:bg-teal-dark text-white rounded-2xl py-5 font-bold transition-all">Add New Service</button>
            <button className="w-full bg-white/10 hover:bg-white/20 text-white rounded-2xl py-5 font-bold transition-all border border-white/10">Write Blog Post</button>
            <button className="w-full bg-white/10 hover:bg-white/20 text-white rounded-2xl py-5 font-bold transition-all border border-white/10">Update Site Stats</button>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
