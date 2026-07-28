import dbConnect from "@/lib/mongoose";
import CareerSubmission from "@/models/CareerSubmission";
import { CareerApplicationsClient } from "./CareerApplicationsClient";

export const dynamic = "force-dynamic";

export default async function AdminCareersPage() {
  await dbConnect();
  const rawSubmissions = await CareerSubmission.find().sort({ createdAt: -1 }).lean();

  const submissions = rawSubmissions.map((doc: any) => ({
    ...doc,
    _id: doc._id.toString(),
    createdAt: doc.createdAt ? doc.createdAt.toISOString() : new Date().toISOString(),
    updatedAt: doc.updatedAt ? doc.updatedAt.toISOString() : new Date().toISOString(),
  }));

  return <CareerApplicationsClient initialApplications={submissions} />;
}
