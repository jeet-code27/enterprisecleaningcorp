import mongoose, { Document, Schema } from 'mongoose';

export interface IAdLead extends Document {
  fullName: string;
  email: string;
  phone: string;
  companyName?: string;
  serviceType: string;
  facilitySize?: string;
  message?: string;
  source: string;
  status: "New" | "Contacted" | "In Progress" | "Closed";
  createdAt: Date;
}

const AdLeadSchema = new Schema<IAdLead>({
  fullName: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  companyName: { type: String },
  serviceType: { type: String, required: true },
  facilitySize: { type: String },
  message: { type: String },
  source: { type: String, default: "Commercial Cleaning Ad LP" },
  status: { type: String, default: "New", enum: ["New", "Contacted", "In Progress", "Closed"] },
  createdAt: { type: Date, default: Date.now },
}, { strict: false });

export default mongoose.models.AdLead || mongoose.model<IAdLead>('AdLead', AdLeadSchema);
