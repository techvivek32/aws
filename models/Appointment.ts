import mongoose, { Schema, model, models } from 'mongoose';

const AppointmentSchema = new Schema({
  name: { type: String, required: true },
  phone: { type: String, required: true },
  email: { type: String, required: true },
  service: { type: String, required: true },
  message: { type: String },
  status: { type: String, enum: ['pending', 'confirmed', 'cancelled'], default: 'pending' },
}, { timestamps: true });

export default models.Appointment || model('Appointment', AppointmentSchema);
