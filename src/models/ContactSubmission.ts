import mongoose, { Document, Schema } from 'mongoose';

export interface IContactSubmission extends Document {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  company?: string;
  service: string;
  department?: string;
  message: string;
  status: string;
  createdAt: Date;
}

const ContactSubmissionSchema = new Schema<IContactSubmission>({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  company: { type: String },
  service: { type: String, required: true },
  department: { type: String },
  message: { type: String, required: true },
  status: { type: String, default: "New" },
  createdAt: { type: Date, default: Date.now },
}, { strict: false });

export default mongoose.models.ContactSubmission || mongoose.model<IContactSubmission>('ContactSubmission', ContactSubmissionSchema);
