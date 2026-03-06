"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { 
  Search, 
  ArrowRight, 
  Calendar, 
  User, 
  ChevronRight,
  Filter,
  Loader2
} from "lucide-react"
import { Input } from "@/components/ui/input"
import Link from "next/link"

export default function BlogPage() {
  const [posts, setPosts] = useState<any[]>([])
  const [loading, setLoading] = useState(true)
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("All")

  useEffect(() => {
    fetch('/api/blog')
      .then(res => res.json())
      .then(data => {
        setPosts(data)
        setLoading(false)
      })
  }, [])

  const categories = ["All", ...Array.from(new Set(posts.map(p => p.category)))]

  const filteredPosts = posts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = selectedCategory === "All" || post.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-secondary/30 py-24 relative overflow-hidden">
        <div className="container px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-6xl md:text-8xl font-black text-accent mb-8 leading-[0.9] tracking-tighter italic">
              Medical <span className="text-primary underline decoration-primary/20 underline-offset-8">Insights</span> & Wellness
            </h1>
            <p className="text-xl md:text-3xl text-muted-foreground max-w-3xl mx-auto leading-relaxed font-medium">
              Stay up-to-date with the latest news, health advice, and medical breakthroughs from our expert team.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter & Search Section */}
      <section className="py-12 bg-white sticky top-20 z-40 border-b border-secondary/50 backdrop-blur-md bg-white/80">
        <div className="container px-4">
          <div className="flex flex-col md:flex-row gap-8 justify-between items-center">
            <div className="flex flex-wrap gap-4 justify-center md:justify-start">
              {categories.map((cat, idx) => (
                <Button 
                  key={idx}
                  onClick={() => setSelectedCategory(cat)}
                  variant={selectedCategory === cat ? "default" : "outline"}
                  className={`rounded-full px-8 py-7 text-lg font-bold transition-all ${selectedCategory === cat ? 'bg-primary hover:bg-primary/90' : 'border-primary/20 text-accent hover:border-primary hover:text-primary bg-white'}`}
                >
                  {cat}
                </Button>
              ))}
            </div>
            
            <div className="relative w-full md:w-96">
              <Search className="absolute left-6 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <Input 
                placeholder="Search articles..." 
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-14 py-8 rounded-full text-lg border-primary/20 focus:ring-primary medical-shadow bg-white"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-24">
        <div className="container px-4">
          {loading ? (
            <div className="flex justify-center py-20">
              <Loader2 className="h-12 w-12 animate-spin text-primary" />
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
              {filteredPosts.map((post, idx) => (
                <motion.div
                  key={post._id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-[3rem] overflow-hidden medical-shadow border border-primary/5 flex flex-col group h-full"
                >
                  <div className="relative overflow-hidden aspect-[16/10]">
                    <img 
                      src={post.image} 
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute top-8 left-8 bg-primary text-white text-xs font-black uppercase tracking-[0.2em] px-5 py-2 rounded-full shadow-lg">
                      {post.category}
                    </div>
                  </div>
                  
                  <div className="p-10 flex flex-col flex-1">
                    <div className="flex items-center gap-6 mb-8 text-sm text-muted-foreground font-black uppercase tracking-widest">
                      <div className="flex items-center gap-2">
                        <Calendar className="h-4 w-4 text-primary" />
                        {new Date(post.publishedAt).toLocaleDateString()}
                      </div>
                      <div className="flex items-center gap-2">
                        <User className="h-4 w-4 text-primary" />
                        {post.author}
                      </div>
                    </div>
                    
                    <h3 className="text-3xl font-black text-accent mb-4 group-hover:text-primary transition-colors line-clamp-2 leading-[1.1] tracking-tight">
                      {post.title}
                    </h3>
                    
                    <p className="text-muted-foreground leading-relaxed text-lg mb-10 line-clamp-3 font-medium">
                      {post.excerpt}
                    </p>
                    
                    <div className="mt-auto">
                      <Button variant="ghost" className="p-0 text-primary font-bold text-xl hover:bg-transparent group/btn flex items-center gap-3" asChild>
                        <Link href={`/blog/${post.slug}`}>
                          Read Article
                          <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center group-hover/btn:bg-primary group-hover/btn:text-white transition-all">
                            <ArrowRight className="h-5 w-5 transition-transform" />
                          </div>
                        </Link>
                      </Button>
                    </div>
                  </div>
                </motion.div>
              ))}
              {filteredPosts.length === 0 && (
                <div className="col-span-full text-center py-20 bg-white rounded-[3rem] medical-shadow">
                  <Search className="h-16 w-16 text-primary/20 mx-auto mb-6" />
                  <h3 className="text-3xl font-black text-accent">No articles found</h3>
                  <p className="text-xl text-muted-foreground font-medium mt-2">Try searching for something else or browse another category.</p>
                </div>
              )}
            </div>
          )}
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-24 bg-primary/5">
        <div className="container px-4">
          <div className="bg-white rounded-[4rem] p-12 lg:p-24 medical-shadow border border-primary/10 text-center flex flex-col items-center max-w-5xl mx-auto">
            <h2 className="text-5xl md:text-7xl font-black text-accent mb-8 leading-tight tracking-tighter italic">Stay informed, <br /> <span className="text-primary underline decoration-primary/20 underline-offset-8">stay healthy</span>.</h2>
            <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-2xl leading-relaxed font-medium">
              Subscribe to our monthly newsletter for the latest women's health tips, clinic updates, and wellness advice delivered to your inbox.
            </p>
            <form className="flex flex-col sm:flex-row gap-6 w-full max-w-2xl">
              <Input 
                placeholder="Your email address" 
                className="flex-1 py-8 px-10 rounded-full text-lg border-primary/20 focus:ring-primary medical-shadow bg-white"
              />
              <Button className="bg-primary hover:bg-primary/90 rounded-full py-8 px-12 text-xl font-bold shadow-2xl shadow-primary/30">
                Subscribe
              </Button>
            </form>
          </div>
        </div>
      </section>
    </div>
  )
}
