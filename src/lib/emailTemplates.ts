export interface ContactFormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  company?: string;
  service: string;
  department?: string;
  message: string;
  uploadedDocuments?: {
    [key: string]: { name: string; size: number; url?: string; type?: string } | null;
  };
}

export interface CareerFormData {
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
}

export interface EmergencyFormData {
  name: string;
  phone: string;
  propertyAddress: string;
  town: string;
  emergencyType: string;
  description: string;
  email?: string;
  companyName?: string;
  photos?: string[];
}

const BRAND_NAVY = "#003B7A";
const BRAND_CYAN = "#00B8FF";
const BRAND_RED = "#E31837";
const LOGO_URL = "https://res.cloudinary.com/dnd8u5sll/image/upload/v1787296503/ecc-new-logo_wzkxbr.png";
const COMPANY_ADDRESS = "99 Hartwell Street, West Boylston, MA 01583 | (508) 890-1000";

/**
 * HTML Template for Admin Notification when a Contact Form is submitted.
 */
export function getContactAdminEmailHtml(data: ContactFormData): string {
  return `
  <!DOCTYPE html>
  <html>
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>New Contact Request</title>
  </head>
  <body style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: #f1f5f9; margin: 0; padding: 30px 10px; -webkit-font-smoothing: antialiased;">
    <table width="100%" border="0" cellspacing="0" cellpadding="0" style="max-width: 620px; margin: 0 auto; background-color: #ffffff; border-radius: 16px; overflow: hidden; box-shadow: 0 10px 25px -5px rgba(15, 23, 42, 0.08), 0 8px 10px -6px rgba(15, 23, 42, 0.04); border: 1px solid #e2e8f0;">
      
      <!-- Top Accent Bar -->
      <tr>
        <td style="background-color: ${BRAND_NAVY}; height: 6px; font-size: 0; line-height: 0;">&nbsp;</td>
      </tr>

      <!-- Header with Clean White Background for High Logo Contrast -->
      <tr>
        <td style="background-color: #ffffff; padding: 30px 25px 20px 25px; text-align: center; border-bottom: 1px solid #f1f5f9;">
          <a href="https://enterprisecleaningcorp.com" target="_blank" style="text-decoration: none; display: inline-block;">
            <img src="${LOGO_URL}" alt="Enterprise Cleaning Corporation" style="max-width: 250px; width: 100%; height: auto; display: block; margin: 0 auto;" />
          </a>
          <div style="margin-top: 14px;">
            <span style="display: inline-block; background-color: #eff6ff; color: ${BRAND_NAVY}; border: 1px solid #dbeafe; font-size: 11px; font-weight: 700; text-transform: uppercase; letter-spacing: 1.2px; padding: 5px 14px; border-radius: 50px;">
              New Website Inquiry
            </span>
          </div>
        </td>
      </tr>
      
      <!-- Content Body -->
      <tr>
        <td style="padding: 30px 30px;">
          <p style="font-size: 15px; color: #334155; margin: 0 0 22px 0; line-height: 1.5;">
            You have received a new commercial cleaning inquiry via the website contact form:
          </p>
          
          <!-- Data Summary Card -->
          <table width="100%" border="0" cellspacing="0" cellpadding="12" style="background-color: #f8fafc; border-radius: 12px; border: 1px solid #e2e8f0; margin-bottom: 25px; font-size: 14px;">
            ${data.department ? `
            <tr>
              <td width="35%" style="font-weight: 700; color: #475569;">Target Department:</td>
              <td style="color: ${BRAND_NAVY}; font-weight: 700;">${data.department}</td>
            </tr>` : ''}
            <tr>
              <td width="35%" style="font-weight: 700; color: #475569; ${data.department ? 'border-top: 1px solid #e2e8f0;' : ''}">Full Name:</td>
              <td style="color: #0f172a; font-weight: 600; ${data.department ? 'border-top: 1px solid #e2e8f0;' : ''}">${data.firstName} ${data.lastName}</td>
            </tr>
            <tr>
              <td style="font-weight: 700; color: #475569; border-top: 1px solid #e2e8f0;">Email Address:</td>
              <td style="color: #0f172a; border-top: 1px solid #e2e8f0;"><a href="mailto:${data.email}" style="color: ${BRAND_NAVY}; font-weight: 600; text-decoration: underline;">${data.email}</a></td>
            </tr>
            <tr>
              <td style="font-weight: 700; color: #475569; border-top: 1px solid #e2e8f0;">Phone Number:</td>
              <td style="color: #0f172a; border-top: 1px solid #e2e8f0;"><a href="tel:${data.phone}" style="color: ${BRAND_NAVY}; font-weight: 600; text-decoration: none;">${data.phone}</a></td>
            </tr>
            <tr>
              <td style="font-weight: 700; color: #475569; border-top: 1px solid #e2e8f0;">Company:</td>
              <td style="color: #0f172a; border-top: 1px solid #e2e8f0;">${data.company || "Not provided"}</td>
            </tr>
            <tr>
              <td style="font-weight: 700; color: #475569; border-top: 1px solid #e2e8f0;">Service / Category:</td>
              <td style="color: ${BRAND_NAVY}; font-weight: 700; border-top: 1px solid #e2e8f0;">${data.service}</td>
            </tr>
          </table>

          <div>
            <p style="font-weight: 700; color: #0f172a; font-size: 14px; margin: 0 0 10px 0;">Client Message:</p>
            <div style="background-color: #f1f5f9; padding: 18px; border-radius: 10px; border-left: 4px solid ${BRAND_CYAN}; font-size: 14px; color: #334155; line-height: 1.6;">
              ${data.message.replace(/\n/g, "<br/>")}
            </div>
          </div>

          ${data.uploadedDocuments && Object.keys(data.uploadedDocuments).length > 0 ? `
          <div style="margin-top: 25px;">
            <p style="font-weight: 700; color: #0f172a; font-size: 14px; margin: 0 0 12px 0;">📁 Attached Drawings & Bid Documents:</p>
            <table width="100%" border="0" cellspacing="0" cellpadding="0" style="background-color: #f8fafc; border-radius: 12px; border: 1px solid #e2e8f0; overflow: hidden;">
              ${Object.entries(data.uploadedDocuments).map(([key, fileObj]) => {
                if (!fileObj || !fileObj.url) return '';
                const sizeMb = (fileObj.size / (1024 * 1024)).toFixed(2);
                const isImage = fileObj.name.match(/\.(jpg|jpeg|png|webp|gif|svg)$/i);
                const downloadUrl = `https://www.enterprisecleaningcorp.com/api/download?url=${encodeURIComponent(fileObj.url)}&filename=${encodeURIComponent(fileObj.name)}`;
                return `
                <tr>
                  <td style="padding: 12px 16px; border-bottom: 1px solid #e2e8f0;">
                    <div style="font-weight: 700; font-size: 13px; color: #0f172a;">${fileObj.name}</div>
                    <div style="font-size: 11px; color: #64748b; margin-top: 3px;">
                      <span style="text-transform: uppercase; font-weight: 600; color: ${BRAND_NAVY};">${key}</span> • ${sizeMb} MB
                      ${isImage ? ' • <span style="color: #059669; font-weight: 600;">Image File</span>' : ''}
                    </div>
                  </td>
                  <td style="padding: 12px 16px; text-align: right; border-bottom: 1px solid #e2e8f0;">
                    <a href="${downloadUrl}" target="_blank" style="display: inline-block; background-color: ${BRAND_NAVY}; color: #ffffff; text-decoration: none; font-size: 12px; font-weight: 700; padding: 7px 14px; border-radius: 6px;">
                      ${isImage ? '👁️ View / Download' : '📥 Download File'}
                    </a>
                  </td>
                </tr>
                `;
              }).join('')}
            </table>
          </div>
          ` : ''}
        </td>
      </tr>

      <!-- Footer -->
      <tr>
        <td style="background-color: #0f172a; padding: 22px 25px; text-align: center; color: #94a3b8; font-size: 12px; line-height: 1.6;">
          <p style="margin: 0 0 4px 0; color: #ffffff; font-weight: 600;">Enterprise Cleaning Corporation</p>
          <p style="margin: 0 0 4px 0; color: #94a3b8;">${COMPANY_ADDRESS}</p>
          <p style="margin: 0;"><a href="https://enterprisecleaningcorp.com" style="color: ${BRAND_CYAN}; text-decoration: none;">www.enterprisecleaningcorp.com</a></p>
        </td>
      </tr>
    </table>
  </body>
  </html>
  `;
}

/**
 * HTML Auto-Reply Email for Candidate/Client submitting the Contact Us form.
 */
export function getContactUserAutoReplyHtml(data: ContactFormData): string {
  return `
  <!DOCTYPE html>
  <html>
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Thank You for Contacting Enterprise Cleaning</title>
  </head>
  <body style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: #f1f5f9; margin: 0; padding: 30px 10px; -webkit-font-smoothing: antialiased;">
    <table width="100%" border="0" cellspacing="0" cellpadding="0" style="max-width: 620px; margin: 0 auto; background-color: #ffffff; border-radius: 16px; overflow: hidden; box-shadow: 0 10px 25px -5px rgba(15, 23, 42, 0.08), 0 8px 10px -6px rgba(15, 23, 42, 0.04); border: 1px solid #e2e8f0;">
      
      <!-- Top Accent Bar -->
      <tr>
        <td style="background-color: ${BRAND_NAVY}; height: 6px; font-size: 0; line-height: 0;">&nbsp;</td>
      </tr>

      <!-- Header with Clean White Background for High Logo Contrast -->
      <tr>
        <td style="background-color: #ffffff; padding: 32px 25px 20px 25px; text-align: center; border-bottom: 1px solid #f1f5f9;">
          <a href="https://enterprisecleaningcorp.com" target="_blank" style="text-decoration: none; display: inline-block;">
            <img src="${LOGO_URL}" alt="Enterprise Cleaning Corporation" style="max-width: 260px; width: 100%; height: auto; display: block; margin: 0 auto;" />
          </a>
          <div style="margin-top: 14px;">
            <span style="display: inline-block; background-color: #f0f9ff; color: #0284c7; border: 1px solid #bae6fd; font-size: 11px; font-weight: 700; text-transform: uppercase; letter-spacing: 1.2px; padding: 5px 14px; border-radius: 50px;">
              Commercial Cleaning Excellence
            </span>
          </div>
        </td>
      </tr>
      
      <!-- Content Body -->
      <tr>
        <td style="padding: 35px 30px;">
          <h2 style="color: #0f172a; margin: 0 0 16px 0; font-size: 22px; font-weight: 700; letter-spacing: -0.3px;">Dear ${data.firstName},</h2>
          
          <p style="font-size: 15px; color: #334155; line-height: 1.6; margin: 0 0 22px 0;">
            Thank you for reaching out to <strong>Enterprise Cleaning Corporation</strong>. We have received your request regarding <strong>${data.service}</strong>.
          </p>

          <!-- Banner Highlight Box -->
          <div style="background-color: #f0f9ff; border-left: 4px solid ${BRAND_CYAN}; padding: 18px 20px; border-radius: 10px; margin-bottom: 28px; border-top: 1px solid #e0f2fe; border-right: 1px solid #e0f2fe; border-bottom: 1px solid #e0f2fe;">
            <p style="margin: 0; font-size: 15px; color: ${BRAND_NAVY}; font-weight: 600; line-height: 1.5;">
              Our dedicated commercial operations team will review your inquiry and connect with you shortly (typically within 24 business hours).
            </p>
          </div>

          <p style="font-size: 14px; color: #64748b; font-weight: 600; margin: 0 0 12px 0; text-transform: uppercase; letter-spacing: 0.5px;">Summary of Submitted Details:</p>
          
          <!-- Summary Table -->
          <table width="100%" border="0" cellspacing="0" cellpadding="12" style="background-color: #f8fafc; border-radius: 12px; border: 1px solid #e2e8f0; margin-bottom: 28px; font-size: 14px;">
            <tr>
              <td width="40%" style="font-weight: 700; color: #475569;">Requested Service:</td>
              <td style="color: #0f172a; font-weight: 700;">${data.service}</td>
            </tr>
            <tr>
              <td style="font-weight: 700; color: #475569; border-top: 1px solid #e2e8f0;">Phone Number:</td>
              <td style="color: #0f172a; border-top: 1px solid #e2e8f0;">${data.phone}</td>
            </tr>
            ${data.company ? `
            <tr>
              <td style="font-weight: 700; color: #475569; border-top: 1px solid #e2e8f0;">Company:</td>
              <td style="color: #0f172a; border-top: 1px solid #e2e8f0;">${data.company}</td>
            </tr>` : ""}
          </table>

          <p style="font-size: 14px; color: #334155; line-height: 1.6; margin: 0 0 25px 0;">
            If your inquiry is urgent, feel free to contact our office directly at <a href="tel:508-890-1000" style="color: ${BRAND_NAVY}; font-weight: 700; text-decoration: none;">(508) 890-1000</a>.
          </p>

          <div style="border-top: 1px solid #f1f5f9; padding-top: 20px;">
            <p style="font-size: 14px; color: #334155; margin: 0; line-height: 1.6;">
              Best regards,<br>
              <strong style="color: ${BRAND_NAVY}; font-size: 16px;">The Enterprise Cleaning Team</strong><br>
              <span style="font-size: 13px; color: #64748b;">Enterprise Cleaning Corporation</span>
            </p>
          </div>
        </td>
      </tr>

      <!-- Footer -->
      <tr>
        <td style="background-color: #0f172a; padding: 25px; text-align: center; color: #94a3b8; font-size: 12px; line-height: 1.6;">
          <p style="margin: 0 0 6px 0; color: #ffffff; font-weight: 600;">Enterprise Cleaning Corporation</p>
          <p style="margin: 0 0 6px 0;">${COMPANY_ADDRESS}</p>
          <p style="margin: 0;"><a href="https://enterprisecleaningcorp.com" style="color: ${BRAND_CYAN}; text-decoration: none; font-weight: 600;">www.enterprisecleaningcorp.com</a></p>
        </td>
      </tr>
    </table>
  </body>
  </html>
  `;
}

/**
 * HTML Admin Notification for new Career/Job Application.
 */
export function getCareerAdminEmailHtml(data: CareerFormData): string {
  return `
  <!DOCTYPE html>
  <html>
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>New Job Application</title>
  </head>
  <body style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: #f1f5f9; margin: 0; padding: 30px 10px; -webkit-font-smoothing: antialiased;">
    <table width="100%" border="0" cellspacing="0" cellpadding="0" style="max-width: 650px; margin: 0 auto; background-color: #ffffff; border-radius: 16px; overflow: hidden; box-shadow: 0 10px 25px -5px rgba(15, 23, 42, 0.08), 0 8px 10px -6px rgba(15, 23, 42, 0.04); border: 1px solid #e2e8f0;">
      
      <!-- Top Accent Bar -->
      <tr>
        <td style="background-color: ${BRAND_RED}; height: 6px; font-size: 0; line-height: 0;">&nbsp;</td>
      </tr>

      <!-- Header with Clean White Background for High Logo Contrast -->
      <tr>
        <td style="background-color: #ffffff; padding: 30px 25px 20px 25px; text-align: center; border-bottom: 1px solid #f1f5f9;">
          <a href="https://enterprisecleaningcorp.com" target="_blank" style="text-decoration: none; display: inline-block;">
            <img src="${LOGO_URL}" alt="Enterprise Cleaning Corporation" style="max-width: 250px; width: 100%; height: auto; display: block; margin: 0 auto;" />
          </a>
          <div style="margin-top: 14px;">
            <span style="display: inline-block; background-color: #fef2f2; color: #dc2626; border: 1px solid #fecaca; font-size: 11px; font-weight: 700; text-transform: uppercase; letter-spacing: 1.2px; padding: 5px 14px; border-radius: 50px;">
              New Employment Application
            </span>
          </div>
        </td>
      </tr>
      
      <!-- Content Body -->
      <tr>
        <td style="padding: 30px 30px;">
          <div style="background-color: #fef2f2; border-left: 4px solid ${BRAND_RED}; padding: 16px 20px; border-radius: 10px; margin-bottom: 25px; border-top: 1px solid #fee2e2; border-right: 1px solid #fee2e2; border-bottom: 1px solid #fee2e2;">
            <p style="margin: 0; font-size: 17px; font-weight: 700; color: #991b1b;">
              Applicant: ${data.fullName}
            </p>
            <p style="margin: 4px 0 0 0; font-size: 14px; color: #7f1d1d;">
              Position Desired: <strong style="color: #991b1b;">${data.position}</strong>
            </p>
          </div>
          
          <h3 style="color: ${BRAND_NAVY}; font-size: 14px; font-weight: 700; margin: 22px 0 10px 0; text-transform: uppercase; letter-spacing: 0.5px; border-bottom: 2px solid #e2e8f0; padding-bottom: 6px;">Personal & Contact Info</h3>
          <table width="100%" border="0" cellspacing="0" cellpadding="10" style="background-color: #f8fafc; border-radius: 10px; border: 1px solid #e2e8f0; font-size: 14px;">
            <tr>
              <td width="40%" style="font-weight: 700; color: #475569;">Full Name:</td>
              <td style="color: #0f172a; font-weight: 600;">${data.fullName}</td>
            </tr>
            <tr>
              <td style="font-weight: 700; color: #475569; border-top: 1px solid #e2e8f0;">Email:</td>
              <td style="color: #0f172a; border-top: 1px solid #e2e8f0;"><a href="mailto:${data.email}" style="color: ${BRAND_NAVY}; font-weight: 600; text-decoration: underline;">${data.email}</a></td>
            </tr>
            <tr>
              <td style="font-weight: 700; color: #475569; border-top: 1px solid #e2e8f0;">Phone:</td>
              <td style="color: #0f172a; border-top: 1px solid #e2e8f0;"><a href="tel:${data.phone}" style="color: ${BRAND_NAVY}; font-weight: 600; text-decoration: none;">${data.phone}</a></td>
            </tr>
            <tr>
              <td style="font-weight: 700; color: #475569; border-top: 1px solid #e2e8f0;">Location:</td>
              <td style="color: #0f172a; border-top: 1px solid #e2e8f0;">${data.cityStateZip}</td>
            </tr>
          </table>

          <h3 style="color: ${BRAND_NAVY}; font-size: 14px; font-weight: 700; margin: 22px 0 10px 0; text-transform: uppercase; letter-spacing: 0.5px; border-bottom: 2px solid #e2e8f0; padding-bottom: 6px;">Position & Availability</h3>
          <table width="100%" border="0" cellspacing="0" cellpadding="10" style="background-color: #f8fafc; border-radius: 10px; border: 1px solid #e2e8f0; font-size: 14px;">
            <tr>
              <td width="40%" style="font-weight: 700; color: #475569;">Position:</td>
              <td style="color: #0f172a; font-weight: 700;">${data.position}</td>
            </tr>
            <tr>
              <td style="font-weight: 700; color: #475569; border-top: 1px solid #e2e8f0;">Employment Type:</td>
              <td style="color: #0f172a; border-top: 1px solid #e2e8f0;">${data.employmentType}</td>
            </tr>
            <tr>
              <td style="font-weight: 700; color: #475569; border-top: 1px solid #e2e8f0;">Shift Preference:</td>
              <td style="color: #0f172a; border-top: 1px solid #e2e8f0;">${data.shiftPreference}</td>
            </tr>
            <tr>
              <td style="font-weight: 700; color: #475569; border-top: 1px solid #e2e8f0;">Earliest Start Date:</td>
              <td style="color: #0f172a; border-top: 1px solid #e2e8f0;">${data.startDate || "Immediate"}</td>
            </tr>
          </table>

          <h3 style="color: ${BRAND_NAVY}; font-size: 14px; font-weight: 700; margin: 22px 0 10px 0; text-transform: uppercase; letter-spacing: 0.5px; border-bottom: 2px solid #e2e8f0; padding-bottom: 6px;">Qualifications</h3>
          <table width="100%" border="0" cellspacing="0" cellpadding="10" style="background-color: #f8fafc; border-radius: 10px; border: 1px solid #e2e8f0; font-size: 14px;">
            <tr>
              <td width="40%" style="font-weight: 700; color: #475569;">Experience Level:</td>
              <td style="color: #0f172a;">${data.yearsExperience}</td>
            </tr>
            <tr>
              <td style="font-weight: 700; color: #475569; border-top: 1px solid #e2e8f0;">Authorized to Work in US:</td>
              <td style="color: #0f172a; border-top: 1px solid #e2e8f0;">${data.authorizedToWork}</td>
            </tr>
            <tr>
              <td style="font-weight: 700; color: #475569; border-top: 1px solid #e2e8f0;">Valid Driver's License:</td>
              <td style="color: #0f172a; border-top: 1px solid #e2e8f0;">${data.hasDriversLicense}</td>
            </tr>
            <tr>
              <td style="font-weight: 700; color: #475569; border-top: 1px solid #e2e8f0;">Reliable Transport:</td>
              <td style="color: #0f172a; border-top: 1px solid #e2e8f0;">${data.hasReliableTransport}</td>
            </tr>
          </table>

          ${data.workExperience ? `
          <h3 style="color: ${BRAND_NAVY}; font-size: 14px; font-weight: 700; margin: 22px 0 10px 0; text-transform: uppercase; letter-spacing: 0.5px;">Work Experience History</h3>
          <div style="background-color: #f1f5f9; padding: 15px 18px; border-radius: 10px; font-size: 14px; color: #334155; line-height: 1.6;">
            ${data.workExperience.replace(/\n/g, "<br/>")}
          </div>` : ""}

          ${data.additionalNotes ? `
          <h3 style="color: ${BRAND_NAVY}; font-size: 14px; font-weight: 700; margin: 22px 0 10px 0; text-transform: uppercase; letter-spacing: 0.5px;">Additional Notes / Applicant Comments</h3>
          <div style="background-color: #f1f5f9; padding: 15px 18px; border-radius: 10px; font-size: 14px; color: #334155; line-height: 1.6;">
            ${data.additionalNotes.replace(/\n/g, "<br/>")}
          </div>` : ""}
        </td>
      </tr>

      <!-- Footer -->
      <tr>
        <td style="background-color: #0f172a; padding: 22px 25px; text-align: center; color: #94a3b8; font-size: 12px; line-height: 1.6;">
          <p style="margin: 0 0 4px 0; color: #ffffff; font-weight: 600;">Enterprise Cleaning Corporation</p>
          <p style="margin: 0 0 4px 0; color: #94a3b8;">${COMPANY_ADDRESS}</p>
          <p style="margin: 0;"><a href="https://enterprisecleaningcorp.com" style="color: ${BRAND_CYAN}; text-decoration: none;">www.enterprisecleaningcorp.com</a></p>
        </td>
      </tr>
    </table>
  </body>
  </html>
  `;
}

/**
 * HTML Candidate Auto-Reply for Job Application submission.
 */
export function getCareerUserAutoReplyHtml(data: CareerFormData): string {
  return `
  <!DOCTYPE html>
  <html>
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Application Received - Enterprise Cleaning Corporation</title>
  </head>
  <body style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: #f1f5f9; margin: 0; padding: 30px 10px; -webkit-font-smoothing: antialiased;">
    <table width="100%" border="0" cellspacing="0" cellpadding="0" style="max-width: 620px; margin: 0 auto; background-color: #ffffff; border-radius: 16px; overflow: hidden; box-shadow: 0 10px 25px -5px rgba(15, 23, 42, 0.08), 0 8px 10px -6px rgba(15, 23, 42, 0.04); border: 1px solid #e2e8f0;">
      
      <!-- Top Accent Bar -->
      <tr>
        <td style="background-color: ${BRAND_NAVY}; height: 6px; font-size: 0; line-height: 0;">&nbsp;</td>
      </tr>

      <!-- Header with Clean White Background for High Logo Contrast -->
      <tr>
        <td style="background-color: #ffffff; padding: 32px 25px 20px 25px; text-align: center; border-bottom: 1px solid #f1f5f9;">
          <a href="https://enterprisecleaningcorp.com" target="_blank" style="text-decoration: none; display: inline-block;">
            <img src="${LOGO_URL}" alt="Enterprise Cleaning Corporation" style="max-width: 260px; width: 100%; height: auto; display: block; margin: 0 auto;" />
          </a>
          <div style="margin-top: 14px;">
            <span style="display: inline-block; background-color: #f0fdf4; color: #15803d; border: 1px solid #bbf7d0; font-size: 11px; font-weight: 700; text-transform: uppercase; letter-spacing: 1.2px; padding: 5px 14px; border-radius: 50px;">
              Application Confirmation
            </span>
          </div>
        </td>
      </tr>
      
      <!-- Content Body -->
      <tr>
        <td style="padding: 35px 30px;">
          <h2 style="color: #0f172a; margin: 0 0 16px 0; font-size: 22px; font-weight: 700; letter-spacing: -0.3px;">Hello ${data.fullName},</h2>
          
          <p style="font-size: 15px; color: #334155; line-height: 1.6; margin: 0 0 22px 0;">
            Thank you for applying for the <strong>${data.position}</strong> position at <strong>Enterprise Cleaning Corporation</strong>. We appreciate your interest in joining our commercial cleaning team!
          </p>

          <!-- Banner Highlight Box -->
          <div style="background-color: #f0fdf4; border-left: 4px solid #16a34a; padding: 18px 20px; border-radius: 10px; margin-bottom: 28px; border-top: 1px solid #dcfce7; border-right: 1px solid #dcfce7; border-bottom: 1px solid #dcfce7;">
            <p style="margin: 0; font-size: 15px; color: #14532d; font-weight: 600; line-height: 1.5;">
              Your application has been received. Our hiring managers review applications daily and will reach out if your qualifications match our current openings.
            </p>
          </div>

          <p style="font-size: 14px; color: #64748b; font-weight: 600; margin: 0 0 12px 0; text-transform: uppercase; letter-spacing: 0.5px;">Submitted Application Overview:</p>
          
          <!-- Summary Table -->
          <table width="100%" border="0" cellspacing="0" cellpadding="12" style="background-color: #f8fafc; border-radius: 12px; border: 1px solid #e2e8f0; margin-bottom: 28px; font-size: 14px;">
            <tr>
              <td width="40%" style="font-weight: 700; color: #475569;">Position Applied For:</td>
              <td style="color: ${BRAND_NAVY}; font-weight: 700;">${data.position}</td>
            </tr>
            <tr>
              <td style="font-weight: 700; color: #475569; border-top: 1px solid #e2e8f0;">Employment Type:</td>
              <td style="color: #0f172a; border-top: 1px solid #e2e8f0;">${data.employmentType} (${data.shiftPreference})</td>
            </tr>
            <tr>
              <td style="font-weight: 700; color: #475569; border-top: 1px solid #e2e8f0;">Contact Email:</td>
              <td style="color: #0f172a; border-top: 1px solid #e2e8f0;">${data.email}</td>
            </tr>
            <tr>
              <td style="font-weight: 700; color: #475569; border-top: 1px solid #e2e8f0;">Phone Number:</td>
              <td style="color: #0f172a; border-top: 1px solid #e2e8f0;">${data.phone}</td>
            </tr>
          </table>

          <p style="font-size: 14px; color: #334155; line-height: 1.6; margin: 0 0 25px 0;">
            Thank you again for taking the time to apply with Enterprise Cleaning Corporation.
          </p>

          <div style="border-top: 1px solid #f1f5f9; padding-top: 20px;">
            <p style="font-size: 14px; color: #334155; margin: 0; line-height: 1.6;">
              Best regards,<br>
              <strong style="color: ${BRAND_NAVY}; font-size: 16px;">Hiring & Recruitment Team</strong><br>
              <span style="font-size: 13px; color: #64748b;">Enterprise Cleaning Corporation</span>
            </p>
          </div>
        </td>
      </tr>

      <!-- Footer -->
      <tr>
        <td style="background-color: #0f172a; padding: 25px; text-align: center; color: #94a3b8; font-size: 12px; line-height: 1.6;">
          <p style="margin: 0 0 6px 0; color: #ffffff; font-weight: 600;">Enterprise Cleaning Corporation</p>
          <p style="margin: 0 0 6px 0;">${COMPANY_ADDRESS}</p>
          <p style="margin: 0;"><a href="https://enterprisecleaningcorp.com" style="color: ${BRAND_CYAN}; text-decoration: none; font-weight: 600;">www.enterprisecleaningcorp.com</a></p>
        </td>
      </tr>
    </table>
  </body>
  </html>
  `;
}

/**
 * High-Priority HTML Template for Admin/Alex Notification when an Emergency Request is submitted.
 */
export function getEmergencyAdminEmailHtml(data: EmergencyFormData): string {
  const photoList = data.photos && data.photos.length > 0 
    ? data.photos.map((url, i) => `
      <div style="margin: 8px 8px 8px 0; display: inline-block;">
        <a href="${url}" target="_blank" style="text-decoration: none;">
          <img src="${url}" alt="Damage Photo ${i + 1}" style="width: 140px; height: 110px; object-fit: cover; border-radius: 8px; border: 2px solid #cbd5e1;" />
          <div style="font-size: 11px; color: #0284c7; text-align: center; margin-top: 4px; font-weight: 600;">View Photo ${i + 1} ↗</div>
        </a>
      </div>
    `).join('')
    : '<span style="color: #94a3b8; font-style: italic;">No photos attached</span>';

  return `
  <!DOCTYPE html>
  <html>
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>🚨 URGENT: Emergency Cleaning Request</title>
  </head>
  <body style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: #f8fafc; margin: 0; padding: 25px 10px; -webkit-font-smoothing: antialiased;">
    <table width="100%" border="0" cellspacing="0" cellpadding="0" style="max-width: 640px; margin: 0 auto; background-color: #ffffff; border-radius: 16px; overflow: hidden; box-shadow: 0 20px 25px -5px rgba(227, 24, 55, 0.15), 0 8px 10px -6px rgba(0, 0, 0, 0.1); border: 2px solid #E31837;">
      
      <!-- URGENT HEADER BANNER -->
      <tr>
        <td style="background: linear-gradient(135deg, #c8102e 0%, #E31837 50%, #990017 100%); padding: 24px 20px; text-align: center;">
          <div style="display: inline-block; background-color: #FFE800; color: #000000; font-size: 12px; font-weight: 900; text-transform: uppercase; letter-spacing: 1.5px; padding: 6px 16px; border-radius: 50px; margin-bottom: 12px; box-shadow: 0 2px 8px rgba(0,0,0,0.2);">
            🚨 URGENT DISPATCH CALLBACK REQUEST
          </div>
          <h1 style="color: #ffffff; margin: 0; font-size: 24px; font-weight: 900; letter-spacing: -0.5px;">
            ${data.emergencyType.toUpperCase()}
          </h1>
          <p style="color: #ffe4e6; margin: 8px 0 0 0; font-size: 14px; font-weight: 600;">
            Location: ${data.town} · Immediate Action Required
          </p>
        </td>
      </tr>

      <!-- FAST CALL-TO-ACTION BUTTON -->
      <tr>
        <td style="padding: 24px 25px 10px 25px; text-align: center; background-color: #fff1f2; border-bottom: 1px solid #fecdd3;">
          <p style="font-size: 13px; color: #9f1239; font-weight: 800; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 10px 0;">
            Immediate On-Call Action Required:
          </p>
          <a href="tel:${data.phone.replace(/[^0-9+]/g, '')}" style="display: inline-block; background-color: #E31837; color: #ffffff; text-decoration: none; padding: 15px 32px; border-radius: 12px; font-size: 18px; font-weight: 900; box-shadow: 0 4px 14px rgba(227, 24, 55, 0.4); letter-spacing: 0.5px;">
            📞 Call Customer: ${data.phone}
          </a>
          <p style="font-size: 12px; color: #64748b; margin: 10px 0 0 0; font-weight: 500;">
            Target Dispatch Process: 1. Check Availability ➔ 2. Send DocuSign ➔ 3. Dispatch Crew
          </p>
        </td>
      </tr>
      
      <!-- DETAIL TABLE -->
      <tr>
        <td style="padding: 25px 30px;">
          <h2 style="font-size: 15px; color: #0f172a; margin: 0 0 15px 0; text-transform: uppercase; letter-spacing: 0.8px; font-weight: 800;">
            Incident &amp; Caller Details
          </h2>

          <table width="100%" border="0" cellspacing="0" cellpadding="12" style="background-color: #f8fafc; border-radius: 12px; border: 1px solid #e2e8f0; font-size: 14px; margin-bottom: 22px;">
            <tr>
              <td width="35%" style="font-weight: 700; color: #475569; background-color: #f1f5f9;">Customer Name:</td>
              <td style="color: #0f172a; font-weight: 800; font-size: 15px;">${data.name}</td>
            </tr>
            <tr>
              <td style="font-weight: 700; color: #475569; border-top: 1px solid #e2e8f0; background-color: #f1f5f9;">Callback Phone:</td>
              <td style="color: #E31837; font-weight: 900; font-size: 16px; border-top: 1px solid #e2e8f0;">
                <a href="tel:${data.phone.replace(/[^0-9+]/g, '')}" style="color: #E31837; text-decoration: none;">${data.phone}</a>
              </td>
            </tr>
            <tr>
              <td style="font-weight: 700; color: #475569; border-top: 1px solid #e2e8f0; background-color: #f1f5f9;">Town / City:</td>
              <td style="color: #0f172a; font-weight: 800; border-top: 1px solid #e2e8f0;">${data.town}</td>
            </tr>
            <tr>
              <td style="font-weight: 700; color: #475569; border-top: 1px solid #e2e8f0; background-color: #f1f5f9;">Property Address:</td>
              <td style="color: #0f172a; font-weight: 700; border-top: 1px solid #e2e8f0;">
                ${data.propertyAddress}
                <div style="margin-top: 4px;">
                  <a href="https://maps.google.com/?q=${encodeURIComponent(data.propertyAddress + ', ' + data.town + ', MA')}" target="_blank" style="font-size: 12px; color: #0284c7; text-decoration: underline; font-weight: 600;">
                    Open in Google Maps ↗
                  </a>
                </div>
              </td>
            </tr>
            <tr>
              <td style="font-weight: 700; color: #475569; border-top: 1px solid #e2e8f0; background-color: #f1f5f9;">Emergency Type:</td>
              <td style="color: #b91c1c; font-weight: 800; border-top: 1px solid #e2e8f0;">${data.emergencyType}</td>
            </tr>
            <tr>
              <td style="font-weight: 700; color: #475569; border-top: 1px solid #e2e8f0; background-color: #f1f5f9;">Company Name:</td>
              <td style="color: #0f172a; border-top: 1px solid #e2e8f0;">${data.companyName || '<span style="color: #94a3b8; font-style: italic;">Not provided</span>'}</td>
            </tr>
            <tr>
              <td style="font-weight: 700; color: #475569; border-top: 1px solid #e2e8f0; background-color: #f1f5f9;">Email:</td>
              <td style="color: #0f172a; border-top: 1px solid #e2e8f0;">${data.email ? `<a href="mailto:${data.email}" style="color: #0284c7; text-decoration: underline;">${data.email}</a>` : '<span style="color: #94a3b8; font-style: italic;">Not provided</span>'}</td>
            </tr>
          </table>

          <!-- Description Box -->
          <div style="background-color: #fef2f2; border: 1px solid #fecaca; border-radius: 12px; padding: 18px; margin-bottom: 22px;">
            <div style="font-size: 12px; font-weight: 800; color: #991b1b; text-transform: uppercase; letter-spacing: 0.5px; margin-bottom: 6px;">
              Incident Description:
            </div>
            <p style="font-size: 15px; color: #1e293b; margin: 0; line-height: 1.6; white-space: pre-line; font-weight: 500;">
              ${data.description}
            </p>
          </div>

          <!-- Photos Section -->
          <div style="margin-bottom: 22px;">
            <div style="font-size: 12px; font-weight: 800; color: #475569; text-transform: uppercase; letter-spacing: 0.5px; margin-bottom: 8px;">
              Uploaded Photos / Documentation:
            </div>
            <div>
              ${photoList}
            </div>
          </div>

          <!-- DocuSign Workflow Notice -->
          <div style="background-color: #f8fafc; border-left: 4px solid #003B7A; padding: 14px 18px; border-radius: 0 8px 8px 0;">
            <p style="font-size: 13px; color: #334155; margin: 0; line-height: 1.5; font-weight: 500;">
              <strong>On-Call Protocol:</strong> 1. Check crew availability. 2. Send customer DocuSign authorization form. 3. Dispatch fleet.
            </p>
          </div>
        </td>
      </tr>

      <!-- Footer -->
      <tr>
        <td style="background-color: #0f172a; padding: 20px; text-align: center; color: #94a3b8; font-size: 12px;">
          <p style="margin: 0 0 4px 0; color: #ffffff; font-weight: 700;">Enterprise Cleaning Corporation — Emergency Dispatch System</p>
          <p style="margin: 0; color: #64748b;">Automated high-priority alert routed directly to on-call dispatcher.</p>
        </td>
      </tr>
    </table>
  </body>
  </html>
  `;
}

/**
 * Auto-reply sent to the user if they provided an email address during emergency submission.
 */
export function getEmergencyUserAutoReplyHtml(data: EmergencyFormData): string {
  return `
  <!DOCTYPE html>
  <html>
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Emergency Request Received - Enterprise Cleaning Corp</title>
  </head>
  <body style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: #f8fafc; margin: 0; padding: 25px 10px; -webkit-font-smoothing: antialiased;">
    <table width="100%" border="0" cellspacing="0" cellpadding="0" style="max-width: 600px; margin: 0 auto; background-color: #ffffff; border-radius: 16px; overflow: hidden; box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.08); border: 1px solid #e2e8f0;">
      
      <tr>
        <td style="background-color: #E31837; height: 6px; font-size: 0; line-height: 0;">&nbsp;</td>
      </tr>

      <tr>
        <td style="padding: 28px 25px 20px 25px; text-align: center; border-bottom: 1px solid #f1f5f9;">
          <img src="${LOGO_URL}" alt="Enterprise Cleaning Corporation" style="max-width: 220px; width: 100%; height: auto; display: block; margin: 0 auto;" />
          <div style="margin-top: 14px;">
            <span style="display: inline-block; background-color: #fef2f2; color: #E31837; border: 1px solid #fecaca; font-size: 11px; font-weight: 800; text-transform: uppercase; letter-spacing: 1px; padding: 5px 14px; border-radius: 50px;">
              Emergency Request Received
            </span>
          </div>
        </td>
      </tr>

      <tr>
        <td style="padding: 28px 30px;">
          <h2 style="font-size: 18px; color: #0f172a; margin: 0 0 12px 0; font-weight: 800;">
            Hello ${data.name},
          </h2>
          <p style="font-size: 15px; color: #334155; line-height: 1.6; margin: 0 0 20px 0;">
            We have received your emergency request for <strong>${data.emergencyType}</strong> in <strong>${data.town}</strong>. Our on-call operations supervisor has been notified immediately.
          </p>

          <div style="background-color: #f8fafc; border-radius: 12px; border: 1px solid #e2e8f0; padding: 18px; margin-bottom: 22px;">
            <p style="font-size: 13px; color: #0f172a; font-weight: 700; margin: 0 0 8px 0; text-transform: uppercase; letter-spacing: 0.5px;">
              What Happens Next:
            </p>
            <ol style="margin: 0; padding-left: 20px; font-size: 14px; color: #475569; line-height: 1.6;">
              <li style="margin-bottom: 6px;">We check technician and fleet availability immediately.</li>
              <li style="margin-bottom: 6px;">Our supervisor will call your callback number: <strong style="color: #E31837;">${data.phone}</strong>.</li>
              <li style="margin-bottom: 6px;">We will send a quick DocuSign authorization form.</li>
              <li>Our equipped emergency response crew will be dispatched to your location.</li>
            </ol>
          </div>

          <div style="background-color: #fef2f2; border: 1px solid #fecaca; border-radius: 12px; padding: 16px; text-align: center; margin-bottom: 22px;">
            <p style="font-size: 13px; color: #991b1b; font-weight: 700; margin: 0 0 8px 0;">
              Need immediate verbal contact?
            </p>
            <a href="tel:5088901000" style="display: inline-block; background-color: #E31837; color: #ffffff; text-decoration: none; padding: 10px 22px; border-radius: 8px; font-size: 15px; font-weight: 800;">
              Call (508) 890-1000
            </a>
          </div>

          <p style="font-size: 13px; color: #64748b; margin: 0; line-height: 1.5;">
            Enterprise Cleaning Corporation • 24/7 Rapid Emergency Response Fleet
          </p>
        </td>
      </tr>

      <tr>
        <td style="background-color: #0f172a; padding: 20px; text-align: center; color: #94a3b8; font-size: 12px;">
          <p style="margin: 0 0 4px 0; color: #ffffff; font-weight: 600;">Enterprise Cleaning Corporation</p>
          <p style="margin: 0 0 4px 0;">${COMPANY_ADDRESS}</p>
          <p style="margin: 0;"><a href="https://enterprisecleaningcorp.com" style="color: ${BRAND_CYAN}; text-decoration: none;">www.enterprisecleaningcorp.com</a></p>
        </td>
      </tr>
    </table>
  </body>
  </html>
  `;
}

