export interface ContactFormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  company?: string;
  service: string;
  department?: string;
  message: string;
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

const BRAND_NAVY = "#003B7A";
const BRAND_CYAN = "#00B8FF";
const BRAND_RED = "#E31837";
const LOGO_URL = "https://res.cloudinary.com/dnd8u5sll/image/upload/v1785476409/enterprise-logo_eno6xq.png";
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
