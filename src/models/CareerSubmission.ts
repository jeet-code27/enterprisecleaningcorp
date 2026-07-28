import mongoose, { Schema, Document } from "mongoose";

export interface ICareerSubmission extends Document {
  fullName: string;
  email: string;
  phone: string;
  cityStateZip: string;
  position: string;
  employmentType: string;
  shiftPreference: string;
  startDate?: string;
  yearsExperience: string;
  hasDriversLicense: string;
  hasReliableTransport: string;
  authorizedToWork: string;
  workExperience?: string;
  additionalNotes?: string;
  status: "New" | "Reviewed" | "Contacted" | "Rejected";
  createdAt: Date;
}

const CareerSubmissionSchema = new Schema<ICareerSubmission>(
  {
    fullName: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: true },
    cityStateZip: { type: String, required: true },
    position: { type: String, required: true },
    employmentType: { type: String, default: "Full-Time" },
    shiftPreference: { type: String, default: "Night Shift" },
    startDate: { type: String },
    yearsExperience: { type: String, default: "1-3 years" },
    hasDriversLicense: { type: String, default: "Yes" },
    hasReliableTransport: { type: String, default: "Yes" },
    authorizedToWork: { type: String, default: "Yes" },
    workExperience: { type: String },
    additionalNotes: { type: String },
    status: { type: String, default: "New", enum: ["New", "Reviewed", "Contacted", "Rejected"] },
  },
  { timestamps: true }
);

export default mongoose.models.CareerSubmission ||
  mongoose.model<ICareerSubmission>("CareerSubmission", CareerSubmissionSchema);
