import mongoose, { Schema, model, models } from 'mongoose';

const PostSchema = new Schema({
  title: { type: String, required: true },
  slug: { type: String, required: true, unique: true },
  excerpt: { type: String, required: true },
  content: { type: String, required: true },
  image: { type: String, required: true },
  category: { type: String, required: true },
  author: { type: String, required: true },
  status: { type: String, enum: ['draft', 'published'], default: 'draft' },
  publishedAt: { type: Date, default: Date.now },
}, { timestamps: true });

export default models.Post || model('Post', PostSchema);
