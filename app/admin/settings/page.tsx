"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Loader2, Save, Settings } from "lucide-react"

export default function SettingsPage() {
  const [settings, setSettings] = useState({
    clinicName: 'Arizona Women Specialists',
    phoneNumber: '(623) 846-7597',
    email: 'info@arizonawomenspecialists.com',
    addressPhoenix: '4700 N 51st Ave Suite 5, Phoenix AZ 85031',
    addressGlendale: '18699 N 67th Ave Suite 320, Glendale AZ 85308',
  })
  const [loading, setLoading] = useState(true)
  const [saving, setSaving] = useState(false)
  const [message, setMessage] = useState("")

  useEffect(() => {
    fetch('/api/site-data')
      .then(res => res.json())
      .then(data => {
        if (data.settings) setSettings(data.settings)
        setLoading(false)
      })
  }, [])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSaving(true)
    setMessage("")

    try {
      const res = await fetch('/api/site-data/settings', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(settings),
      })

      if (res.ok) {
        setMessage("Settings updated successfully!")
      } else {
        setMessage("Failed to update settings")
      }
    } catch (error) {
      setMessage("An error occurred")
    } finally {
      setSaving(false)
    }
  }

  if (loading) return <div>Loading...</div>

  return (
    <div className="max-w-4xl mx-auto">
      <Card className="rounded-[3rem] border-none medical-shadow overflow-hidden">
        <CardHeader className="bg-accent text-white p-10">
          <div className="flex items-center gap-4">
            <div className="h-12 w-12 rounded-2xl bg-white/20 flex items-center justify-center">
              <Settings className="h-6 w-6 text-white" />
            </div>
            <div>
              <CardTitle className="text-2xl font-black italic">General Settings</CardTitle>
              <p className="text-white/60 font-medium">Update your clinic's contact information</p>
            </div>
          </div>
        </CardHeader>
        <CardContent className="p-10">
          <form onSubmit={handleSubmit} className="space-y-8">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-3">
                <label className="text-sm font-bold text-teal-dark px-2">Clinic Name</label>
                <Input 
                  value={settings.clinicName}
                  onChange={(e) => setSettings({...settings, clinicName: e.target.value})}
                  className="py-7 px-6 rounded-full border-primary/10 focus:ring-teal medical-shadow"
                />
              </div>
              <div className="space-y-3">
                <label className="text-sm font-bold text-teal-dark px-2">Phone Number</label>
                <Input 
                  value={settings.phoneNumber}
                  onChange={(e) => setSettings({...settings, phoneNumber: e.target.value})}
                  className="py-7 px-6 rounded-full border-primary/10 focus:ring-teal medical-shadow"
                />
              </div>
              <div className="space-y-3">
                <label className="text-sm font-bold text-teal-dark px-2">Email Address</label>
                <Input 
                  type="email"
                  value={settings.email}
                  onChange={(e) => setSettings({...settings, email: e.target.value})}
                  className="py-7 px-6 rounded-full border-primary/10 focus:ring-teal medical-shadow"
                />
              </div>
            </div>

            <div className="space-y-6">
              <div className="space-y-3">
                <label className="text-sm font-bold text-teal-dark px-2">Phoenix Office Address</label>
                <Input 
                  value={settings.addressPhoenix}
                  onChange={(e) => setSettings({...settings, addressPhoenix: e.target.value})}
                  className="py-7 px-6 rounded-full border-primary/10 focus:ring-teal medical-shadow"
                />
              </div>
              <div className="space-y-3">
                <label className="text-sm font-bold text-teal-dark px-2">Glendale Office Address</label>
                <Input 
                  value={settings.addressGlendale}
                  onChange={(e) => setSettings({...settings, addressGlendale: e.target.value})}
                  className="py-7 px-6 rounded-full border-primary/10 focus:ring-teal medical-shadow"
                />
              </div>
            </div>

            {message && (
              <p className={`text-center font-bold p-4 rounded-2xl ${message.includes('success') ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
                {message}
              </p>
            )}

            <Button 
              disabled={saving}
              className="w-full bg-teal hover:bg-teal-dark rounded-full py-10 text-2xl font-bold shadow-2xl shadow-teal/20 group mt-4"
            >
              {saving ? <Loader2 className="h-8 w-8 animate-spin" /> : (
                <>
                  <Save className="mr-3 h-7 w-7" />
                  Save Settings
                </>
              )}
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}
