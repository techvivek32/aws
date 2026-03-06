"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Calendar, User, ArrowLeft, Loader2, Share2, Bookmark } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { useParams } from "next/navigation"

export default function BlogPostPage() {
  const { slug } = useParams()
  const [post, setPost] = useState<any>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch(`/api/blog/slug/${slug}`)
      .then(res => res.json())
      .then(data => {
        setPost(data)
        setLoading(false)
      })
  }, [slug])

  if (loading) return (
    <div className="min-h-screen flex items-center justify-center">
      <Loader2 className="h-12 w-12 animate-spin text-primary" />
    </div>
  )

  if (!post) return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-6">
      <h2 className="text-4xl font-black text-accent">Article not found</h2>
      <Button asChild className="bg-primary rounded-full px-10 py-6 text-lg font-bold">
        <Link href="/blog">Back to Blog</Link>
      </Button>
    </div>
  )

  return (
    <div className="pt-20 pb-24">
      {/* Hero Header */}
      <section className="bg-secondary/30 py-24 relative overflow-hidden">
        <div className="container px-4 max-w-4xl mx-auto">
          <Button variant="ghost" className="mb-10 text-primary font-bold hover:bg-transparent p-0 group" asChild>
            <Link href="/blog" className="flex items-center gap-2">
              <ArrowLeft className="h-5 w-5 group-hover:-translate-x-1 transition-transform" />
              Back to Blog
            </Link>
          </Button>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-xs font-black text-primary uppercase tracking-[0.2em] bg-primary/10 px-5 py-2 rounded-full shadow-sm mb-8 inline-block">
              {post.category}
            </span>
            <h1 className="text-5xl md:text-7xl font-black text-accent leading-[1.1] tracking-tighter italic mb-10">
              {post.title}
            </h1>
            
            <div className="flex flex-wrap items-center gap-10 text-muted-foreground font-black uppercase tracking-widest text-sm">
              <div className="flex items-center gap-3">
                <div className="h-12 w-12 rounded-full bg-white flex items-center justify-center text-primary medical-shadow">
                  <User className="h-6 w-6" />
                </div>
                <span>By {post.author}</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="h-12 w-12 rounded-full bg-white flex items-center justify-center text-primary medical-shadow">
                  <Calendar className="h-6 w-6" />
                </div>
                <span>{new Date(post.publishedAt).toLocaleDateString()}</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="py-24">
        <div className="container px-4 max-w-4xl mx-auto">
          <div className="relative rounded-[4rem] overflow-hidden medical-shadow mb-16 aspect-[21/9]">
            <img src={post.image} alt={post.title} className="w-full h-full object-cover" />
          </div>
          
          <div className="flex flex-col lg:flex-row gap-20">
            {/* Sidebar Tools */}
            <div className="lg:w-20 flex lg:flex-col gap-6 sticky top-32 h-fit">
              <Button variant="outline" className="h-16 w-16 rounded-2xl medical-shadow border-primary/10 hover:bg-primary hover:text-white transition-all">
                <Share2 className="h-6 w-6" />
              </Button>
              <Button variant="outline" className="h-16 w-16 rounded-2xl medical-shadow border-primary/10 hover:bg-primary hover:text-white transition-all">
                <Bookmark className="h-6 w-6" />
              </Button>
            </div>

            <div className="flex-1">
              <div 
                className="prose prose-xl max-w-none text-accent font-medium leading-relaxed prose-headings:font-black prose-headings:italic prose-headings:tracking-tighter prose-p:mb-8"
                dangerouslySetInnerHTML={{ __html: post.content }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-primary/5">
        <div className="container px-4 max-w-4xl mx-auto">
          <div className="bg-accent rounded-[3rem] p-16 text-center text-white relative overflow-hidden">
            <h2 className="text-4xl font-black mb-6 italic">Have questions about your health?</h2>
            <p className="text-white/70 text-xl mb-10 max-w-xl mx-auto">Our medical experts are ready to provide personalized care and support for your health journey.</p>
            <Button className="bg-primary hover:bg-primary/90 rounded-full py-8 px-12 text-xl font-bold shadow-2xl shadow-primary/40 border-none">
              <Link href="/contact">Schedule a Consultation</Link>
            </Button>
            <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_top_right,#e91e6320_0%,transparent_50%)] -z-0"></div>
          </div>
        </div>
      </section>
    </div>
  )
}
