import dbConnect from "@/lib/mongoose";
import ContactSubmission from "@/models/ContactSubmission";
import { notFound } from "next/navigation";
import { ConstructionBidItem } from "../ConstructionBidsClient";
import { BidDetailClient } from "./BidDetailClient";

export const dynamic = "force-dynamic";

export default async function ConstructionBidDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  await dbConnect();
  const { id } = await params;

  let rawBid: any = null;
  try {
    rawBid = await ContactSubmission.findById(id).lean();
  } catch (err) {
    console.error("Error fetching construction bid by ID:", err);
    notFound();
  }

  if (!rawBid) {
    notFound();
  }

  const bid: ConstructionBidItem = {
    _id: rawBid._id.toString(),
    firstName: rawBid.firstName || "",
    lastName: rawBid.lastName || "",
    email: rawBid.email || "",
    phone: rawBid.phone || "",
    company: rawBid.company || "N/A",
    service: rawBid.service || "GC Post-Construction Bid Center",
    department: rawBid.department || "",
    message: rawBid.message || "",
    status: rawBid.status || "New",
    projectName: rawBid.projectName || "",
    projectAddress: rawBid.projectAddress || "",
    projectCity: rawBid.projectCity || "",
    projectState: rawBid.projectState || "MA",
    projectType: rawBid.projectType || "",
    cleaningPhases: Array.isArray(rawBid.cleaningPhases) ? rawBid.cleaningPhases : [],
    approxSqFt: rawBid.approxSqFt || "",
    bidDueDate: rawBid.bidDueDate || "",
    cleaningStartDate: rawBid.cleaningStartDate || "",
    ownerTurnoverDate: rawBid.ownerTurnoverDate || "",
    prevailingWage: rawBid.prevailingWage || "",
    unionRequirement: rawBid.unionRequirement || "",
    nightWeekendWork: rawBid.nightWeekendWork || "",
    uploadedDocuments: rawBid.uploadedDocuments || null,
    createdAt: rawBid.createdAt ? new Date(rawBid.createdAt).toISOString() : new Date().toISOString(),
  };

  return <BidDetailClient bid={bid} />;
}
