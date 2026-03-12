"use client"

import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { ArrowRight, Calendar, User } from "lucide-react"
import Link from "next/link"

const posts = [
  {
    title: "What to Expect During Your First Prenatal Visit",
    excerpt: "A comprehensive guide to your initial appointment and how we support your pregnancy journey.",
    image: "/images/prenatal-visit.jpg",
    date: "Mar 10, 2026",
    author: "Dr. Sarah Johnson",
    category: "Pregnancy Care",
  },
  {
    title: "The Benefits of GLP-1 for Medical Weight Loss",
    excerpt: "How modern medications are revolutionizing weight management under medical supervision.",
    image: "/images/weight-loss-medical.jpg",
    date: "Mar 5, 2026",
    author: "Medical Director",
    category: "Weight Loss",
  },
]

export function BlogTeaser() {
  return (
    <section className="py-20 bg-secondary/30">
      <div className="container px-4">
        <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-16">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-6xl font-bold leading-tight tracking-tight text-teal-dark">
              Expert Health <br /><span className="text-primary italic">Insights</span>
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground mt-6 leading-relaxed font-medium">
              Stay informed with the latest news, health tips, and medical insights from our experienced team.
            </p>
          </div>
          <Button variant="outline" className="rounded-full py-6 px-10 text-lg font-bold border-2 border-primary/20 text-primary hover:bg-teal hover:text-white transition-all shadow-sm shrink-0 bg-white" asChild>
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
              whileHover={{ y: -8 }}
              className="bg-white rounded-[3rem] overflow-hidden medical-shadow border border-primary/5 flex flex-col group h-full transition-all duration-300"
            >
              <div className="relative overflow-hidden aspect-[16/10]">
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  loading="lazy"
                />
                <div className="absolute top-8 left-8 bg-primary/90 backdrop-blur-sm text-white text-[10px] font-bold uppercase tracking-[0.2em] px-5 py-2 rounded-full">
                  {post.category}
                </div>
              </div>
              
              <div className="p-10 flex flex-col flex-1">
                <div className="flex items-center gap-6 mb-8 text-xs font-bold uppercase tracking-widest text-teal-dark/70">
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4 text-teal/50" />
                    {post.date}
                  </div>
                  <div className="flex items-center gap-2">
                    <User className="h-4 w-4 text-teal/50" />
                    {post.author}
                  </div>
                </div>
                
                <h3 className="text-2xl md:text-3xl font-bold text-teal-dark mb-6 group-hover:text-primary transition-colors line-clamp-2 tracking-tight">
                  {post.title}
                </h3>
                
                <p className="text-muted-foreground leading-relaxed text-lg mb-10 font-medium line-clamp-3">
                  {post.excerpt}
                </p>
                
                <div className="mt-auto">
                  <Button variant="ghost" className="p-0 text-primary font-bold text-lg hover:bg-transparent group/btn flex items-center gap-4" asChild>
                    <Link href="/blog">
                      Continue Reading
                      <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center group-hover/btn:bg-teal group-hover/btn:text-white transition-all">
                        <ArrowRight className="h-5 w-5" />
                      </div>
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
