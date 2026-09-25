import dbConnect from "@/lib/mongoose";
import EmergencySubmission, { EmergencyRequestItem } from "@/models/EmergencySubmission";
import { EmergencyRequestsClient } from "@/app/admin/blog/emergency/EmergencyRequestsClient";

export const dynamic = "force-dynamic";

export default async function EmergencyRequestsPage() {
  await dbConnect();

  const rawSubmissions = await EmergencySubmission.find({})
    .sort({ createdAt: -1 })
    .lean();

  const emergencyRequests: EmergencyRequestItem[] = rawSubmissions.map((sub: any) => ({
    _id: sub._id.toString(),
    name: sub.name || "",
    phone: sub.phone || "",
    propertyAddress: sub.propertyAddress || "",
    town: sub.town || "",
    emergencyType: sub.emergencyType || "Emergency Cleanup",
    description: sub.description || "",
    email: sub.email || "",
    companyName: sub.companyName || "",
    photos: Array.isArray(sub.photos) ? sub.photos : [],
    status: sub.status || "New",
    priority: sub.priority || "URGENT",
    notes: sub.notes || "",
    createdAt: sub.createdAt ? new Date(sub.createdAt).toISOString() : new Date().toISOString(),
  }));

  return <EmergencyRequestsClient initialRequests={emergencyRequests} />;
}
