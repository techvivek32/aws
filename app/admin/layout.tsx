"use client"

import { useSession, signOut } from "next-auth/react"
import { useRouter, usePathname } from "next/navigation"
import Link from "next/link"
import { 
  LayoutDashboard, 
  Stethoscope, 
  FileText, 
  CalendarCheck, 
  Settings, 
  BarChart3, 
  LogOut,
  Menu,
  X
} from "lucide-react"
import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const navItems = [
  { name: "Dashboard", href: "/admin/dashboard", icon: LayoutDashboard },
  { name: "Services", href: "/admin/services", icon: Stethoscope },
  { name: "Blog Posts", href: "/admin/blog", icon: FileText },
  { name: "Appointments", href: "/admin/appointments", icon: CalendarCheck },
  { name: "Site Stats", href: "/admin/stats", icon: BarChart3 },
  { name: "Settings", href: "/admin/settings", icon: Settings },
]

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const { data: session, status } = useSession()
  const router = useRouter()
  const pathname = usePathname()
  const [isSidebarOpen, setIsSidebarOpen] = useState(true)

  useEffect(() => {
    if (status === "unauthenticated" && pathname !== "/admin/login") {
      router.push("/admin/login")
    }
  }, [status, router, pathname])

  if (status === "loading") {
    return (
      <div className="min-h-screen flex items-center justify-center bg-secondary/30">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-teal"></div>
      </div>
    )
  }

  if (pathname === "/admin/login") {
    return <>{children}</>
  }

  if (!session) {
    return null
  }

  return (
    <div className="min-h-screen bg-secondary/20 flex">
      {/* Sidebar */}
      <aside className={cn(
        "bg-white border-r border-border transition-all duration-300 z-50",
        isSidebarOpen ? "w-72" : "w-20"
      )}>
        <div className="h-20 flex items-center justify-between px-6 border-b border-border">
          {isSidebarOpen && (
            <span className="text-xl font-black text-primary tracking-tighter">ADMIN PANEL</span>
          )}
          <button onClick={() => setIsSidebarOpen(!isSidebarOpen)} className="p-2 hover:bg-secondary rounded-xl">
            {isSidebarOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        <nav className="p-4 space-y-2">
          {navItems.map((item) => (
            <Link 
              key={item.name} 
              href={item.href}
              className={cn(
                "flex items-center gap-4 p-4 rounded-2xl transition-all font-bold",
                pathname === item.href 
                  ? "bg-teal text-white shadow-lg shadow-teal/20" 
                  : "text-muted-foreground hover:bg-secondary hover:text-teal-dark"
              )}
            >
              <item.icon className="h-6 w-6 shrink-0" />
              {isSidebarOpen && <span>{item.name}</span>}
            </Link>
          ))}
        </nav>

        <div className="absolute bottom-4 left-0 w-full px-4">
          <button 
            onClick={() => signOut({ callbackUrl: '/' })}
            className={cn(
              "flex items-center gap-4 p-4 w-full rounded-2xl transition-all font-bold text-red-500 hover:bg-red-50",
              !isSidebarOpen && "justify-center"
            )}
          >
            <LogOut className="h-6 w-6 shrink-0" />
            {isSidebarOpen && <span>Logout</span>}
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-auto">
        <header className="h-20 bg-white border-b border-border flex items-center justify-between px-10 sticky top-0 z-40">
          <h1 className="text-2xl font-black text-teal-dark">
            {navItems.find(item => item.href === pathname)?.name || "Dashboard"}
          </h1>
          <div className="flex items-center gap-4">
            <div className="text-right hidden sm:block">
              <p className="text-sm font-bold text-teal-dark">{session.user?.name}</p>
              <p className="text-xs font-medium text-muted-foreground uppercase tracking-widest">Administrator</p>
            </div>
            <div className="h-12 w-12 rounded-2xl bg-primary/10 text-primary flex items-center justify-center font-bold">
              {session.user?.name?.[0] || "A"}
            </div>
          </div>
        </header>
        <div className="p-10">
          {children}
        </div>
      </main>
    </div>
  )
}
