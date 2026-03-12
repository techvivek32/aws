"use client"

import { useState } from "react"
import { signIn } from "next-auth/react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card"
import { Loader2, Lock } from "lucide-react"

export default function LoginPage() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)
  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError("")

    try {
      const res = await signIn("credentials", {
        email,
        password,
        redirect: false,
      })

      if (res?.error) {
        setError("Invalid email or password")
      } else {
        router.push("/admin/dashboard")
      }
    } catch (err) {
      setError("An unexpected error occurred")
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-secondary/30 px-4">
      <Card className="w-full max-w-md rounded-[2rem] medical-shadow border-primary/10 overflow-hidden">
        <CardHeader className="bg-teal text-white p-10 text-center">
          <div className="h-16 w-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-6 backdrop-blur-sm">
            <Lock className="h-8 w-8 text-white" />
          </div>
          <CardTitle className="text-3xl font-black tracking-tight">Admin Login</CardTitle>
          <p className="text-white/70 mt-2 font-medium">Arizona Women Specialists</p>
        </CardHeader>
        <CardContent className="p-10">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <label className="text-sm font-bold text-teal-dark px-2">Email Address</label>
              <Input 
                type="email" 
                required
                placeholder="admin@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="py-7 px-6 rounded-full border-primary/10 focus:ring-teal medical-shadow"
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-bold text-teal-dark px-2">Password</label>
              <Input 
                type="password" 
                required
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="py-7 px-6 rounded-full border-primary/10 focus:ring-teal medical-shadow"
              />
            </div>
            {error && <p className="text-red-500 text-sm font-bold text-center">{error}</p>}
            <Button 
              disabled={loading}
              className="w-full bg-teal hover:bg-teal-dark rounded-full py-8 text-xl font-bold shadow-xl shadow-teal/20 mt-4"
            >
              {loading ? <Loader2 className="h-6 w-6 animate-spin" /> : "Sign In"}
            </Button>
          </form>
        </CardContent>
        <CardFooter className="bg-secondary/50 p-6 text-center justify-center">
          <p className="text-sm text-muted-foreground font-medium">Authorized personnel only</p>
        </CardFooter>
      </Card>
    </div>
  )
}
