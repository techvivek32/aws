import mongoose, { Schema, model, models } from 'mongoose';

const ServiceSchema = new Schema({
  title: { type: String, required: true },
  slug: { type: String, required: true, unique: true },
  description: { type: String, required: true },
  image: { type: String, required: true },
  price: { type: String },
  category: { type: String, required: true },
}, { timestamps: true });

export default models.Service || model('Service', ServiceSchema);
