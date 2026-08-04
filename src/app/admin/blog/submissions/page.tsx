import dbConnect from "@/lib/mongoose";
import ContactSubmission from "@/models/ContactSubmission";
import { ContactSubmissionsClient, ContactSubmissionItem } from "./ContactSubmissionsClient";

export const dynamic = "force-dynamic";

export default async function SubmissionsPage() {
  await dbConnect();
  const rawSubmissions = await ContactSubmission.find().sort({ createdAt: -1 }).lean();

  const submissions: ContactSubmissionItem[] = rawSubmissions.map((sub: any) => ({
    _id: sub._id.toString(),
    firstName: sub.firstName || "",
    lastName: sub.lastName || "",
    email: sub.email || "",
    phone: sub.phone || "",
    company: sub.company || "",
    service: sub.service || "General",
    department: sub.department || "",
    message: sub.message || "",
    status: sub.status || "New",
    createdAt: sub.createdAt ? new Date(sub.createdAt).toISOString() : new Date().toISOString(),
  }));

  return <ContactSubmissionsClient initialSubmissions={submissions} />;
}
