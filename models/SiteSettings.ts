import mongoose, { Schema, model, models } from 'mongoose';

const SiteSettingsSchema = new Schema({
  clinicName: { type: String, default: 'Arizona Women Specialists' },
  phoneNumber: { type: String, default: '(623) 846-7597' },
  email: { type: String, default: 'info@arizonawomenspecialists.com' },
  addressPhoenix: { type: String, default: '4700 N 51st Ave Suite 5, Phoenix AZ 85031' },
  addressGlendale: { type: String, default: '18699 N 67th Ave Suite 320, Glendale AZ 85308' },
}, { timestamps: true });

export default models.SiteSettings || model('SiteSettings', SiteSettingsSchema);
