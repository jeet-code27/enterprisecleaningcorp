import mongoose, { Document, Schema } from 'mongoose';

export interface IEmergencySubmission extends Document {
  name: string;
  phone: string;
  propertyAddress: string;
  town: string;
  emergencyType: string;
  description: string;
  email?: string;
  companyName?: string;
  photos?: string[];
  status: 'New' | 'Acknowledged' | 'Dispatched' | 'In Progress' | 'Completed';
  priority: 'URGENT' | 'HIGH' | 'NORMAL';
  notes?: string;

  // Emergency Contract & Dispatch Authorization Fields
  contractSigned?: boolean;
  signedBy?: string;
  signerTitle?: string;
  signatureData?: string;
  signedAt?: Date;
  signerIp?: string;
  shiftType?: 'weekday' | 'after_8pm_weekend' | string;
  technicianCount?: number;
  baseRate?: number;
  overtimeRatePerTech?: number;
  paymentMethod?: 'credit_card' | 'debit_card' | 'ach' | string;
  processingFee?: number;
  totalAmount?: number;
  paymentStatus?: 'pending' | 'authorized' | 'paid' | 'failed' | string;
  stripePaymentIntentId?: string;
  stripeReceiptUrl?: string;

  createdAt: Date;
  updatedAt: Date;
}

export interface EmergencyRequestItem {
  _id: string;
  name: string;
  phone: string;
  propertyAddress: string;
  town: string;
  emergencyType: string;
  description: string;
  email?: string;
  companyName?: string;
  photos?: string[];
  status: "New" | "Acknowledged" | "Dispatched" | "In Progress" | "Completed" | string;
  priority: "URGENT" | "HIGH" | "NORMAL" | string;
  notes?: string;

  // Contract & Authorization Fields
  contractSigned?: boolean;
  signedBy?: string;
  signerTitle?: string;
  signatureData?: string;
  signedAt?: string;
  signerIp?: string;
  shiftType?: string;
  technicianCount?: number;
  baseRate?: number;
  overtimeRatePerTech?: number;
  paymentMethod?: string;
  processingFee?: number;
  totalAmount?: number;
  paymentStatus?: string;
  stripePaymentIntentId?: string;
  stripeReceiptUrl?: string;

  createdAt: string;
}

const EmergencySubmissionSchema = new Schema<IEmergencySubmission>(
  {
    name: { type: String, required: true, trim: true },
    phone: { type: String, required: true, trim: true },
    propertyAddress: { type: String, required: true, trim: true },
    town: { type: String, required: true, trim: true },
    emergencyType: { type: String, required: true, trim: true },
    description: { type: String, required: true, trim: true },
    email: { type: String, trim: true },
    companyName: { type: String, trim: true },
    photos: { type: [String], default: [] },
    status: {
      type: String,
      enum: ['New', 'Acknowledged', 'Dispatched', 'In Progress', 'Completed'],
      default: 'New',
    },
    priority: {
      type: String,
      enum: ['URGENT', 'HIGH', 'NORMAL'],
      default: 'URGENT',
    },
    notes: { type: String },

    // Emergency Contract & Dispatch Authorization Fields
    contractSigned: { type: Boolean, default: false },
    signedBy: { type: String, trim: true },
    signerTitle: { type: String, trim: true },
    signatureData: { type: String },
    signedAt: { type: Date },
    signerIp: { type: String },
    shiftType: { type: String },
    technicianCount: { type: Number },
    baseRate: { type: Number },
    overtimeRatePerTech: { type: Number },
    paymentMethod: { type: String },
    processingFee: { type: Number },
    totalAmount: { type: Number },
    paymentStatus: {
      type: String,
      enum: ['pending', 'authorized', 'paid', 'failed'],
      default: 'pending',
    },
    stripePaymentIntentId: { type: String },
    stripeReceiptUrl: { type: String },
  },
  {
    timestamps: true,
    strict: false,
  }
);

// Indexes for fast lookup in admin panel
EmergencySubmissionSchema.index({ createdAt: -1 });
EmergencySubmissionSchema.index({ status: 1 });
EmergencySubmissionSchema.index({ town: 1 });
EmergencySubmissionSchema.index({ contractSigned: 1 });

export default mongoose.models.EmergencySubmission ||
  mongoose.model<IEmergencySubmission>('EmergencySubmission', EmergencySubmissionSchema);
