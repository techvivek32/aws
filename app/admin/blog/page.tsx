"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Plus, Pencil, Trash2, Loader2, Save, X, FileText } from "lucide-react"

export default function AdminBlogPage() {
  const [posts, setPosts] = useState<any[]>([])
  const [loading, setLoading] = useState(true)
  const [editingId, setEditingId] = useState<string | null>(null)
  const [isAdding, setIsAdding] = useState(false)
  const [formData, setFormData] = useState({
    title: "",
    slug: "",
    excerpt: "",
    content: "",
    image: "",
    category: "",
    author: "Medical Director",
    status: "published",
  })

  useEffect(() => {
    fetchPosts()
  }, [])

  const fetchPosts = async () => {
    try {
      const res = await fetch('/api/blog/admin')
      const data = await res.json()
      if (Array.isArray(data)) {
        setPosts(data)
      } else {
        console.error('Expected an array of posts, but received:', data)
        setPosts([])
      }
    } catch (error) {
      console.error('Failed to fetch posts:', error)
      setPosts([])
    } finally {
      setLoading(false)
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    const url = editingId ? `/api/blog/${editingId}` : '/api/blog'
    const method = editingId ? 'PUT' : 'POST'

    try {
      const res = await fetch(url, {
        method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })

      if (res.ok) {
        setIsAdding(false)
        setEditingId(null)
        setFormData({ title: "", slug: "", excerpt: "", content: "", image: "", category: "", author: "Medical Director", status: "published" })
        fetchPosts()
      }
    } catch (error) {
      console.error(error)
    } finally {
      setLoading(false)
    }
  }

  const handleEdit = (post: any) => {
    setEditingId(post._id)
    setFormData({
      title: post.title,
      slug: post.slug,
      excerpt: post.excerpt,
      content: post.content,
      image: post.image,
      category: post.category,
      author: post.author,
      status: post.status,
    })
    setIsAdding(true)
  }

  const handleDelete = async (id: string) => {
    if (!confirm('Are you sure you want to delete this post?')) return
    
    await fetch(`/api/blog/${id}`, { method: 'DELETE' })
    fetchPosts()
  }

  if (loading && posts.length === 0) return <div>Loading...</div>

  return (
    <div className="space-y-10">
      <div className="flex justify-between items-center">
        <h2 className="text-3xl font-black text-teal-dark italic underline decoration-primary/20 underline-offset-8">Manage Blog Posts</h2>
        <Button 
          onClick={() => {
            setIsAdding(true)
            setEditingId(null)
            setFormData({ title: "", slug: "", excerpt: "", content: "", image: "", category: "", author: "Medical Director", status: "published" })
          }}
          className="bg-teal hover:bg-teal-dark rounded-full px-8 py-6 text-lg font-bold shadow-lg"
        >
          <Plus className="mr-2 h-6 w-6" /> Create Post
        </Button>
      </div>

      {isAdding && (
        <Card className="rounded-[3rem] border-none medical-shadow overflow-hidden">
          <CardHeader className="bg-accent text-white p-10 flex flex-row justify-between items-center">
            <CardTitle className="text-2xl font-black italic">{editingId ? 'Edit Post' : 'Create New Post'}</CardTitle>
            <button onClick={() => setIsAdding(false)} className="p-2 hover:bg-white/10 rounded-full">
              <X className="h-6 w-6" />
            </button>
          </CardHeader>
          <CardContent className="p-10">
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-teal-dark px-2">Post Title</label>
                    <Input 
                      required
                      value={formData.title}
                      onChange={(e) => setFormData({...formData, title: e.target.value})}
                      placeholder="e.g. Health Tips for Mothers"
                      className="py-7 px-6 rounded-full border-primary/10"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-teal-dark px-2">Slug (URL)</label>
                    <Input 
                      required
                      value={formData.slug}
                      onChange={(e) => setFormData({...formData, slug: e.target.value})}
                      placeholder="e.g. health-tips"
                      className="py-7 px-6 rounded-full border-primary/10"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-teal-dark px-2">Category</label>
                    <Input 
                      required
                      value={formData.category}
                      onChange={(e) => setFormData({...formData, category: e.target.value})}
                      placeholder="e.g. Wellness"
                      className="py-7 px-6 rounded-full border-primary/10"
                    />
                  </div>
                </div>
                <div className="space-y-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-teal-dark px-2">Image URL</label>
                    <Input 
                      required
                      value={formData.image}
                      onChange={(e) => setFormData({...formData, image: e.target.value})}
                      placeholder="https://images.unsplash.com/..."
                      className="py-7 px-6 rounded-full border-primary/10"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-teal-dark px-2">Excerpt</label>
                    <Input 
                      required
                      value={formData.excerpt}
                      onChange={(e) => setFormData({...formData, excerpt: e.target.value})}
                      placeholder="Short summary of the post"
                      className="py-7 px-6 rounded-full border-primary/10"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-teal-dark px-2">Status</label>
                    <select 
                      required
                      value={formData.status}
                      onChange={(e) => setFormData({...formData, status: e.target.value})}
                      className="flex h-14 w-full items-center justify-between rounded-full border border-primary/10 bg-white px-6 py-2 text-lg font-medium ring-offset-background focus:outline-none focus:ring-2 focus:ring-teal focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 appearance-none"
                    >
                      <option value="draft">Draft</option>
                      <option value="published">Published</option>
                    </select>
                  </div>
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-teal-dark px-2">Content (Markdown supported)</label>
                <Textarea 
                  required
                  value={formData.content}
                  onChange={(e) => setFormData({...formData, content: e.target.value})}
                  className="min-h-[300px] rounded-[2rem] border-primary/10 p-10 text-lg leading-relaxed"
                />
              </div>
              <Button className="w-full bg-teal py-8 rounded-full text-xl font-bold shadow-xl">
                {loading ? <Loader2 className="animate-spin h-6 w-6" /> : (
                  <>
                    <Save className="mr-2 h-6 w-6" />
                    {editingId ? 'Update Post' : 'Publish Post'}
                  </>
                )}
              </Button>
            </form>
          </CardContent>
        </Card>
      )}

      <div className="grid gap-8">
        {posts.map((post) => (
          <Card key={post._id} className="rounded-[3rem] border-none medical-shadow overflow-hidden group">
            <CardContent className="p-0">
              <div className="flex flex-col md:flex-row">
                <div className="w-full md:w-64 h-64 overflow-hidden relative shrink-0">
                  <img src={post.image} alt={post.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                </div>
                <div className="p-10 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex justify-between items-start mb-4">
                      <span className="text-xs font-black text-primary uppercase tracking-widest bg-primary/10 px-4 py-1.5 rounded-full">{post.category}</span>
                      <div className="flex gap-2">
                        <button onClick={() => handleEdit(post)} className="p-3 bg-secondary text-blue-600 rounded-full hover:bg-blue-600 hover:text-white transition-all"><Pencil className="h-5 w-5" /></button>
                        <button onClick={() => handleDelete(post._id)} className="p-3 bg-secondary text-red-600 rounded-full hover:bg-red-600 hover:text-white transition-all"><Trash2 className="h-5 w-5" /></button>
                      </div>
                    </div>
                    <h3 className="text-2xl font-black text-teal-dark">{post.title}</h3>
                    <p className="text-muted-foreground mt-2 line-clamp-2 font-medium">{post.excerpt}</p>
                  </div>
                  <div className="mt-6 flex items-center justify-between">
                    <p className="text-sm font-bold text-teal-dark">By {post.author} • {new Date(post.publishedAt).toLocaleDateString()}</p>
                    <span className={`px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest ${
                      post.status === 'published' ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700'
                    }`}>
                      {post.status}
                    </span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
        {posts.length === 0 && <p className="text-center text-muted-foreground font-medium py-20 bg-white rounded-[3rem] medical-shadow">No blog posts found</p>}
      </div>
    </div>
  )
}
