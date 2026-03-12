"use client"

import { useState, useEffect } from "react"
import { Phone, Calendar } from "lucide-react"
import { Button } from "@/components/ui/button"

export function MobileCallButton() {
  const [settings, setSettings] = useState<any>(null)

  useEffect(() => {
    fetch('/api/site-data')
      .then(res => res.json())
      .then(data => setSettings(data.settings))
      .catch(err => console.error(err))
  }, [])

  const phone = settings?.phoneNumber || '(623) 846-7597'

  return (
    <div className="md:hidden fixed bottom-6 left-1/2 -translate-x-1/2 z-50 flex gap-4 w-[90%] max-w-sm px-4">
      <Button 
        className="flex-1 bg-teal text-white rounded-full py-7 shadow-2xl hover:bg-teal-dark flex items-center justify-center gap-3 text-lg font-bold border-2 border-white/20"
        asChild
      >
        <a href={`tel:${phone.replace(/\D/g, '')}`}>
          <Phone className="h-6 w-6" />
          Call Now
        </a>
      </Button>
      <Button 
        variant="outline"
        className="flex-1 bg-white text-primary border-teal rounded-full py-7 shadow-2xl hover:bg-primary/5 flex items-center justify-center gap-3 text-lg font-bold"
        asChild
      >
        <a href="tel:6238467597">
          <Calendar className="h-6 w-6" />
          Book
        </a>
      </Button>
    </div>
  )
}
