import dbConnect from "@/lib/mongoose";
import EmergencySubmission, { EmergencyRequestItem } from "@/models/EmergencySubmission";
import { notFound } from "next/navigation";
import { EmergencyDetailClient } from "@/app/admin/blog/emergency/[id]/EmergencyDetailClient";

export const dynamic = "force-dynamic";

export default async function EmergencyDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  await dbConnect();
  const { id } = await params;

  const raw = await EmergencySubmission.findById(id).lean();
  if (!raw) {
    notFound();
  }

  const emergencyData = {
    _id: (raw as any)._id.toString(),
    name: (raw as any).name || "",
    phone: (raw as any).phone || "",
    propertyAddress: (raw as any).propertyAddress || "",
    town: (raw as any).town || "",
    emergencyType: (raw as any).emergencyType || "Emergency Incident",
    description: (raw as any).description || "",
    email: (raw as any).email || "",
    companyName: (raw as any).companyName || "",
    photos: Array.isArray((raw as any).photos) ? (raw as any).photos : [],
    status: (raw as any).status || "New",
    priority: (raw as any).priority || "URGENT",
    notes: (raw as any).notes || "",
    createdAt: (raw as any).createdAt
      ? new Date((raw as any).createdAt).toISOString()
      : new Date().toISOString(),
  };

  return <EmergencyDetailClient item={emergencyData} />;
}
