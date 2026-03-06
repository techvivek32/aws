"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Loader2, Save, BarChart3 } from "lucide-react"

export default function StatsPage() {
  const [stats, setStats] = useState({
    happyPatients: 5000,
    yearsExperience: 20,
    sameDayAppointments: true
  })
  const [loading, setLoading] = useState(true)
  const [saving, setSaving] = useState(false)
  const [message, setMessage] = useState("")

  useEffect(() => {
    fetch('/api/site-data')
      .then(res => res.json())
      .then(data => {
        if (data.stats) setStats(data.stats)
        setLoading(false)
      })
  }, [])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSaving(true)
    setMessage("")

    try {
      const res = await fetch('/api/site-data/stats', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(stats),
      })

      if (res.ok) {
        setMessage("Statistics updated successfully!")
      } else {
        setMessage("Failed to update statistics")
      }
    } catch (error) {
      setMessage("An error occurred")
    } finally {
      setSaving(false)
    }
  }

  if (loading) return <div>Loading...</div>

  return (
    <div className="max-w-2xl mx-auto">
      <Card className="rounded-[3rem] border-none medical-shadow overflow-hidden">
        <CardHeader className="bg-accent text-white p-10">
          <div className="flex items-center gap-4">
            <div className="h-12 w-12 rounded-2xl bg-white/20 flex items-center justify-center">
              <BarChart3 className="h-6 w-6 text-white" />
            </div>
            <div>
              <CardTitle className="text-2xl font-black italic">Site Statistics</CardTitle>
              <p className="text-white/60 font-medium">Update the numbers shown on your homepage</p>
            </div>
          </div>
        </CardHeader>
        <CardContent className="p-10">
          <form onSubmit={handleSubmit} className="space-y-8">
            <div className="space-y-3">
              <label className="text-lg font-bold text-accent px-2">Happy Patients Count</label>
              <Input 
                type="number"
                value={stats.happyPatients}
                onChange={(e) => setStats({...stats, happyPatients: parseInt(e.target.value)})}
                className="py-8 px-8 rounded-full text-xl border-primary/10 focus:ring-primary medical-shadow"
              />
              <p className="text-sm text-muted-foreground px-4 italic">The total number of patients served (e.g., 5000)</p>
            </div>

            <div className="space-y-3">
              <label className="text-lg font-bold text-accent px-2">Years of Experience</label>
              <Input 
                type="number"
                value={stats.yearsExperience}
                onChange={(e) => setStats({...stats, yearsExperience: parseInt(e.target.value)})}
                className="py-8 px-8 rounded-full text-xl border-primary/10 focus:ring-primary medical-shadow"
              />
              <p className="text-sm text-muted-foreground px-4 italic">Total years the clinic has been serving the community</p>
            </div>

            <div className="flex items-center gap-4 p-6 rounded-[2rem] bg-secondary/30">
              <input 
                type="checkbox" 
                id="sameDay"
                checked={stats.sameDayAppointments}
                onChange={(e) => setStats({...stats, sameDayAppointments: e.target.checked})}
                className="h-6 w-6 rounded-md border-primary text-primary focus:ring-primary cursor-pointer"
              />
              <label htmlFor="sameDay" className="text-lg font-bold text-accent cursor-pointer">
                Enable "Same-Day Appointments" badge
              </label>
            </div>

            {message && (
              <p className={`text-center font-bold p-4 rounded-2xl ${message.includes('success') ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
                {message}
              </p>
            )}

            <Button 
              disabled={saving}
              className="w-full bg-primary hover:bg-primary/90 rounded-full py-10 text-2xl font-bold shadow-2xl shadow-primary/20 group"
            >
              {saving ? <Loader2 className="h-8 w-8 animate-spin" /> : (
                <>
                  <Save className="mr-3 h-7 w-7" />
                  Save Changes
                </>
              )}
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}
