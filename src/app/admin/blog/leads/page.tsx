import dbConnect from "@/lib/mongoose";
import AdLead from "@/models/AdLead";
import { AdLeadsClient, AdLeadItem } from "@/app/admin/blog/leads/AdLeadsClient";

export const dynamic = "force-dynamic";

export default async function AdLeadsPage() {
  await dbConnect();
  const rawLeads = await AdLead.find().sort({ createdAt: -1 }).lean();

  const leads: AdLeadItem[] = rawLeads.map((lead: any) => ({
    _id: lead._id.toString(),
    fullName: lead.fullName || "",
    email: lead.email || "",
    phone: lead.phone || "",
    companyName: lead.companyName || "N/A",
    serviceType: lead.serviceType || "Commercial Cleaning",
    facilitySize: lead.facilitySize || "Not Specified",
    message: lead.message || "",
    source: lead.source || "Ad Landing Page",
    status: lead.status || "New",
    createdAt: lead.createdAt ? new Date(lead.createdAt).toISOString() : new Date().toISOString(),
  }));

  return <AdLeadsClient initialLeads={leads} />;
}
