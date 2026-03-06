"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { Menu, X, Phone } from "lucide-react"
import { motion } from "framer-motion"

export function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false)
  const [settings, setSettings] = React.useState<any>(null)
  const [services, setServices] = React.useState<any[]>([])
  const pathname = usePathname()

  React.useEffect(() => {
    fetch('/api/site-data')
      .then(res => res.json())
      .then(data => setSettings(data.settings))
      .catch(err => console.error(err))

    fetch('/api/services')
      .then(res => res.json())
      .then(data => {
        if (Array.isArray(data)) {
          setServices(data)
        } else {
          console.error('Expected array from /api/services, got:', data)
        }
      })
      .catch(err => console.error(err))
  }, [])

  const phone = settings?.phoneNumber || '(623) 846-7597'

  return (
    <header className="sticky-header">
      <div className="container flex h-20 items-center justify-between">
        <div className="flex items-center gap-8">
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-2xl font-bold tracking-tighter text-primary uppercase">
              {settings?.clinicName?.split(' ')[0] || 'Arizona'} <span className="text-foreground"> WOMEN SPECIALISTS</span>
            </span>
          </Link>

          <NavigationMenu className="hidden md:flex">
            <NavigationMenuList className="gap-2">
              <NavigationMenuItem>
                <Link href="/" className={cn(navigationMenuTriggerStyle(), pathname === "/" && "text-primary font-semibold")}>
                  Home
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger className={cn(pathname.startsWith("/services") && "text-primary font-semibold")}>
                  Services
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] min-h-[100px]">
                    {services.length > 0 ? services.map((service) => (
                      <ListItem
                        key={service._id}
                        title={service.title}
                        href={`/services/${service.slug}`}
                      >
                        {service.description}
                      </ListItem>
                    )) : (
                      <div className="p-4 text-muted-foreground text-sm font-medium">Loading services...</div>
                    )}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/weight-loss" className={cn(navigationMenuTriggerStyle(), pathname === "/weight-loss" && "text-primary font-semibold")}>
                  Weight Loss
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/cash-pay" className={cn(navigationMenuTriggerStyle(), pathname === "/cash-pay" && "text-primary font-semibold")}>
                  Pricing
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/blog" className={cn(navigationMenuTriggerStyle(), pathname === "/blog" && "text-primary font-semibold")}>
                  Blog
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/contact" className={cn(navigationMenuTriggerStyle(), pathname === "/contact" && "text-primary font-semibold")}>
                  Contact
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        <div className="flex items-center gap-6">
          <div className="hidden lg:flex items-center gap-2 text-foreground font-bold text-lg whitespace-nowrap">
            <Phone className="h-5 w-5 text-primary" />
            <a href={`tel:${phone.replace(/\D/g, '')}`} className="hover:text-primary transition-colors">
              {phone}
            </a>
          </div>
          <Button className="hidden sm:flex bg-primary hover:bg-primary/90 rounded-full px-8 py-6 text-lg font-bold shadow-lg shadow-primary/20" asChild>
            <a href="#book-appointment">Book Appointment</a>
          </Button>
          
          <button 
            className="md:hidden p-2 text-accent"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="h-8 w-8" /> : <Menu className="h-8 w-8" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden absolute top-20 left-0 w-full bg-white border-b border-border p-8 z-50 flex flex-col gap-6 medical-shadow"
        >
          <nav className="flex flex-col gap-6">
            <Link href="/" className="text-xl font-bold text-accent" onClick={() => setIsOpen(false)}>Home</Link>
            <div className="flex flex-col gap-4">
              <span className="text-xl font-bold text-primary">Services</span>
              {services.map(s => (
                <Link key={s.title} href={`/services/${s.slug}`} className="text-lg font-medium text-muted-foreground pl-4" onClick={() => setIsOpen(false)}>{s.title}</Link>
              ))}
            </div>
            <Link href="/weight-loss" className="text-xl font-bold text-accent" onClick={() => setIsOpen(false)}>Weight Loss</Link>
            <Link href="/cash-pay" className="text-xl font-bold text-accent" onClick={() => setIsOpen(false)}>Pricing</Link>
            <Link href="/blog" className="text-xl font-bold text-accent" onClick={() => setIsOpen(false)}>Blog</Link>
            <Link href="/contact" className="text-xl font-bold text-accent" onClick={() => setIsOpen(false)}>Contact</Link>
          </nav>
          <div className="pt-6 border-t border-border flex flex-col gap-4">
            <div className="flex items-center gap-3 text-lg font-bold text-accent">
              <Phone className="h-6 w-6 text-primary" />
              <a href={`tel:${phone.replace(/\D/g, '')}`}>{phone}</a>
            </div>
            <Button className="w-full bg-primary rounded-full py-7 text-xl font-bold" asChild onClick={() => setIsOpen(false)}>
              <a href="#book-appointment">Book Appointment</a>
            </Button>
          </div>
        </motion.div>
      )}
    </header>
  )
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"
