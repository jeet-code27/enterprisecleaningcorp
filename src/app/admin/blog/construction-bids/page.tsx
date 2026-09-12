import dbConnect from "@/lib/mongoose";
import ContactSubmission from "@/models/ContactSubmission";
import { ConstructionBidsClient, ConstructionBidItem } from "./ConstructionBidsClient";

export const dynamic = "force-dynamic";

export default async function ConstructionBidsPage() {
  await dbConnect();

  // Query all submissions related to post-construction cleaning bids or contractor list requests
  const rawBids = await ContactSubmission.find({
    $or: [
      { service: "GC Post-Construction Bid Center" },
      { service: "Subcontractor Bid List Registration" },
      { service: { $regex: /construction/i } },
      { department: { $regex: /estimating/i } },
      { message: { $regex: /POST-CONSTRUCTION/i } },
      { message: { $regex: /SUBCONTRACTOR BID LIST/i } },
    ],
  })
    .sort({ createdAt: -1 })
    .lean();

  const bids: ConstructionBidItem[] = rawBids.map((bid: any) => ({
    _id: bid._id.toString(),
    firstName: bid.firstName || "",
    lastName: bid.lastName || "",
    email: bid.email || "",
    phone: bid.phone || "",
    company: bid.company || "N/A",
    service: bid.service || "GC Post-Construction Bid Center",
    department: bid.department || "",
    message: bid.message || "",
    status: bid.status || "New",
    projectName: bid.projectName || "",
    projectAddress: bid.projectAddress || "",
    projectCity: bid.projectCity || "",
    projectState: bid.projectState || "MA",
    projectType: bid.projectType || "",
    cleaningPhases: Array.isArray(bid.cleaningPhases) ? bid.cleaningPhases : [],
    approxSqFt: bid.approxSqFt || "",
    bidDueDate: bid.bidDueDate || "",
    cleaningStartDate: bid.cleaningStartDate || "",
    ownerTurnoverDate: bid.ownerTurnoverDate || "",
    prevailingWage: bid.prevailingWage || "",
    unionRequirement: bid.unionRequirement || "",
    nightWeekendWork: bid.nightWeekendWork || "",
    uploadedDocuments: bid.uploadedDocuments || null,
    createdAt: bid.createdAt ? new Date(bid.createdAt).toISOString() : new Date().toISOString(),
  }));

  return <ConstructionBidsClient initialBids={bids} />;
}
