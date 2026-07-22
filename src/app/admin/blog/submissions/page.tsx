import dbConnect from "@/lib/mongoose";
import ContactSubmission from "@/models/ContactSubmission";
import { format } from "date-fns";

export const dynamic = "force-dynamic";

export default async function SubmissionsPage() {
  await dbConnect();
  const submissions = await ContactSubmission.find().sort({ createdAt: -1 }).lean();

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-slate-900 tracking-tight">Contact Submissions</h1>
        <p className="text-slate-500 mt-2">View and manage form submissions from the website.</p>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left">
            <thead className="bg-slate-50 border-b border-slate-200 text-slate-600 font-medium">
              <tr>
                <th className="px-6 py-4 whitespace-nowrap">Date</th>
                <th className="px-6 py-4">Name</th>
                <th className="px-6 py-4">Contact Info</th>
                <th className="px-6 py-4">Service</th>
                <th className="px-6 py-4">Message</th>
                <th className="px-6 py-4">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {submissions.length === 0 ? (
                <tr>
                  <td colSpan={6} className="px-6 py-8 text-center text-slate-500">
                    No submissions found.
                  </td>
                </tr>
              ) : (
                submissions.map((sub: any) => (
                  <tr key={sub._id.toString()} className="hover:bg-slate-50 transition-colors">
                    <td className="px-6 py-4 whitespace-nowrap text-slate-600">
                      {format(new Date(sub.createdAt), "MMM d, yyyy h:mm a")}
                    </td>
                    <td className="px-6 py-4">
                      <div className="font-medium text-slate-900">
                        {sub.firstName} {sub.lastName}
                      </div>
                      {sub.company && (
                        <div className="text-xs text-slate-500 mt-0.5">{sub.company}</div>
                      )}
                    </td>
                    <td className="px-6 py-4">
                      <div className="text-slate-900">{sub.email}</div>
                      <div className="text-slate-500">{sub.phone}</div>
                    </td>
                    <td className="px-6 py-4 text-slate-600 capitalize">
                      {sub.service.replace("-", " ")}
                    </td>
                    <td className="px-6 py-4">
                      <div className="max-w-xs truncate text-slate-600" title={sub.message}>
                        {sub.message}
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                        {sub.status || "New"}
                      </span>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
