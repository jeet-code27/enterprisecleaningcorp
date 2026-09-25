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

export default mongoose.models.EmergencySubmission ||
  mongoose.model<IEmergencySubmission>('EmergencySubmission', EmergencySubmissionSchema);
