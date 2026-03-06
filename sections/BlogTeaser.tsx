"use client"

import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { ArrowRight, Calendar, User } from "lucide-react"
import Link from "next/link"

const posts = [
  {
    title: "Understanding Different Types of Birth Control",
    excerpt: "Exploring the various options available for contraception and which one might be right for your lifestyle.",
    image: "https://images.unsplash.com/photo-1576091160550-2173bdd9962a?auto=format&fit=crop&q=80&w=600",
    date: "Mar 15, 2026",
    author: "Dr. Maria Rodriguez",
    category: "Family Planning",
  },
  {
    title: "What to Expect During Your First Prenatal Visit",
    excerpt: "A comprehensive guide to your initial appointment and how we support your pregnancy journey.",
    image: "https://images.unsplash.com/photo-1551884170-09fb70a3a2ed?auto=format&fit=crop&q=80&w=600",
    date: "Mar 10, 2026",
    author: "Dr. Sarah Johnson",
    category: "Obstetrics",
  },
  {
    title: "The Benefits of GLP-1 for Medical Weight Loss",
    excerpt: "How modern medications are revolutionizing weight management under medical supervision.",
    image: "https://images.unsplash.com/photo-1550831107-1553da8c8464?auto=format&fit=crop&q=80&w=600",
    date: "Mar 5, 2026",
    author: "Medical Director",
    category: "Weight Loss",
  },
]

export function BlogTeaser() {
  return (
    <section className="py-24 bg-secondary/30">
      <div className="container px-4">
        <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-16">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-5xl font-bold leading-tight tracking-tight text-accent">
              Expert Health <span className="text-primary italic">Insights</span>
            </h2>
            <p className="text-xl text-muted-foreground mt-4 leading-relaxed">
              Stay informed with the latest news, health tips, and medical insights from our experienced team.
            </p>
          </div>
          <Button variant="outline" className="rounded-full py-6 px-8 text-lg font-bold border-2 border-primary text-primary hover:bg-primary hover:text-white transition-all shadow-lg shrink-0" asChild>
            <Link href="/blog">
              View All Posts
            </Link>
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {posts.map((post, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-[2rem] overflow-hidden medical-shadow border border-primary/5 flex flex-col group h-full"
            >
              <div className="relative overflow-hidden aspect-[16/9]">
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute top-6 left-6 bg-primary text-white text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full">
                  {post.category}
                </div>
              </div>
              
              <div className="p-10 flex flex-col flex-1">
                <div className="flex items-center gap-6 mb-6 text-sm text-muted-foreground font-medium">
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4 text-primary" />
                    {post.date}
                  </div>
                  <div className="flex items-center gap-2">
                    <User className="h-4 w-4 text-primary" />
                    {post.author}
                  </div>
                </div>
                
                <h3 className="text-2xl font-bold text-accent mb-4 group-hover:text-primary transition-colors line-clamp-2">
                  {post.title}
                </h3>
                
                <p className="text-muted-foreground leading-relaxed text-lg mb-8 line-clamp-3">
                  {post.excerpt}
                </p>
                
                <div className="mt-auto">
                  <Button variant="ghost" className="p-0 text-primary font-bold text-lg hover:bg-transparent group/btn flex items-center gap-2" asChild>
                    <Link href="/blog">
                      Continue Reading
                      <ArrowRight className="h-5 w-5 group-hover/btn:translate-x-1 transition-transform" />
                    </Link>
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
