"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Plus, Pencil, Trash2, Loader2, Save, X, ImageIcon } from "lucide-react"

export default function AdminServicesPage() {
  const [services, setServices] = useState<any[]>([])
  const [loading, setLoading] = useState(true)
  const [editingId, setEditingId] = useState<string | null>(null)
  const [isAdding, setIsAdding] = useState(false)
  const [formData, setFormData] = useState({
    title: "",
    slug: "",
    description: "",
    image: "",
    price: "",
    category: "",
  })

  useEffect(() => {
    fetchServices()
  }, [])

  const fetchServices = async () => {
    try {
      const res = await fetch('/api/services')
      const data = await res.json()
      if (Array.isArray(data)) {
        setServices(data)
      } else {
        console.error('Expected an array of services, but received:', data)
        setServices([])
      }
    } catch (error) {
      console.error('Failed to fetch services:', error)
      setServices([])
    } finally {
      setLoading(false)
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    const url = editingId ? `/api/services/${editingId}` : '/api/services'
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
        setFormData({ title: "", slug: "", description: "", image: "", price: "", category: "" })
        fetchServices()
      }
    } catch (error) {
      console.error(error)
    } finally {
      setLoading(false)
    }
  }

  const handleEdit = (service: any) => {
    setEditingId(service._id)
    setFormData({
      title: service.title,
      slug: service.slug,
      description: service.description,
      image: service.image,
      price: service.price || "",
      category: service.category,
    })
    setIsAdding(true)
  }

  const handleDelete = async (id: string) => {
    if (!confirm('Are you sure you want to delete this service?')) return
    
    await fetch(`/api/services/${id}`, { method: 'DELETE' })
    fetchServices()
  }

  if (loading && services.length === 0) return <div>Loading...</div>

  return (
    <div className="space-y-10">
      <div className="flex justify-between items-center">
        <h2 className="text-3xl font-black text-accent italic underline decoration-primary/20 underline-offset-8">Manage Services</h2>
        <Button 
          onClick={() => {
            setIsAdding(true)
            setEditingId(null)
            setFormData({ title: "", slug: "", description: "", image: "", price: "", category: "" })
          }}
          className="bg-primary hover:bg-primary/90 rounded-full px-8 py-6 text-lg font-bold shadow-lg"
        >
          <Plus className="mr-2 h-6 w-6" /> Add Service
        </Button>
      </div>

      {isAdding && (
        <Card className="rounded-[3rem] border-none medical-shadow overflow-hidden">
          <CardHeader className="bg-accent text-white p-10 flex flex-row justify-between items-center">
            <CardTitle className="text-2xl font-black italic">{editingId ? 'Edit Service' : 'Add New Service'}</CardTitle>
            <button onClick={() => setIsAdding(false)} className="p-2 hover:bg-white/10 rounded-full">
              <X className="h-6 w-6" />
            </button>
          </CardHeader>
          <CardContent className="p-10">
            <form onSubmit={handleSubmit} className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-accent px-2">Service Title</label>
                  <Input 
                    required
                    value={formData.title}
                    onChange={(e) => setFormData({...formData, title: e.target.value})}
                    placeholder="e.g. Obstetrics & Pregnancy"
                    className="py-7 px-6 rounded-full border-primary/10"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-accent px-2">Slug (URL)</label>
                  <Input 
                    required
                    value={formData.slug}
                    onChange={(e) => setFormData({...formData, slug: e.target.value})}
                    placeholder="e.g. obstetrics"
                    className="py-7 px-6 rounded-full border-primary/10"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-accent px-2">Category</label>
                  <Input 
                    required
                    value={formData.category}
                    onChange={(e) => setFormData({...formData, category: e.target.value})}
                    placeholder="e.g. Women's Health"
                    className="py-7 px-6 rounded-full border-primary/10"
                  />
                </div>
              </div>
              <div className="space-y-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-accent px-2">Image URL</label>
                  <Input 
                    required
                    value={formData.image}
                    onChange={(e) => setFormData({...formData, image: e.target.value})}
                    placeholder="https://images.unsplash.com/..."
                    className="py-7 px-6 rounded-full border-primary/10"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-accent px-2">Price (Optional)</label>
                  <Input 
                    value={formData.price}
                    onChange={(e) => setFormData({...formData, price: e.target.value})}
                    placeholder="e.g. $100"
                    className="py-7 px-6 rounded-full border-primary/10"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-accent px-2">Description</label>
                  <Textarea 
                    required
                    value={formData.description}
                    onChange={(e) => setFormData({...formData, description: e.target.value})}
                    className="min-h-[120px] rounded-[2rem] border-primary/10 p-6"
                  />
                </div>
              </div>
              <div className="md:col-span-2">
                <Button className="w-full bg-primary py-8 rounded-full text-xl font-bold shadow-xl">
                  {loading ? <Loader2 className="animate-spin h-6 w-6" /> : (
                    <>
                      <Save className="mr-2 h-6 w-6" />
                      {editingId ? 'Update Service' : 'Save Service'}
                    </>
                  )}
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service) => (
          <Card key={service._id} className="rounded-[3rem] border-none medical-shadow overflow-hidden group">
            <div className="h-48 overflow-hidden relative">
              <img src={service.image} alt={service.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
              <div className="absolute top-4 right-4 flex gap-2">
                <button 
                  onClick={() => handleEdit(service)}
                  className="p-3 bg-white/90 backdrop-blur-sm text-blue-600 rounded-full shadow-lg hover:bg-blue-600 hover:text-white transition-all"
                >
                  <Pencil className="h-5 w-5" />
                </button>
                <button 
                  onClick={() => handleDelete(service._id)}
                  className="p-3 bg-white/90 backdrop-blur-sm text-red-600 rounded-full shadow-lg hover:bg-red-600 hover:text-white transition-all"
                >
                  <Trash2 className="h-5 w-5" />
                </button>
              </div>
            </div>
            <CardContent className="p-8">
              <span className="text-xs font-black text-primary uppercase tracking-widest bg-primary/10 px-4 py-1.5 rounded-full">{service.category}</span>
              <h3 className="text-2xl font-black text-accent mt-4">{service.title}</h3>
              <p className="text-muted-foreground mt-3 line-clamp-2 font-medium">{service.description}</p>
              {service.price && <p className="text-primary font-black text-lg mt-4">{service.price}</p>}
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
