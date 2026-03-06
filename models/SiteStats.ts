import mongoose, { Schema, model, models } from 'mongoose';

const SiteStatsSchema = new Schema({
  happyPatients: { type: Number, default: 5000 },
  yearsExperience: { type: Number, default: 20 },
  sameDayAppointments: { type: Boolean, default: true },
}, { timestamps: true });

export default models.SiteStats || model('SiteStats', SiteStatsSchema);
