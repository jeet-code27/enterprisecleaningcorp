import nodemailer from "nodemailer";

const smtpEmail = process.env.SMTP_EMAIL || "enterprisecleaningcorporation@gmail.com";
const smtpPassword = process.env.SMTP_PASSWORD || "keeb fwmf qlmn jiti";

export const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: smtpEmail,
    pass: smtpPassword,
  },
});

export interface SendMailOptions {
  to: string;
  subject: string;
  html: string;
  text?: string;
  replyTo?: string;
}

export async function sendEmail({ to, subject, html, text, replyTo }: SendMailOptions) {
  try {
    const info = await transporter.sendMail({
      from: `"Enterprise Cleaning Corporation" <${smtpEmail}>`,
      to,
      subject,
      html,
      text: text || html.replace(/<[^>]+>/g, ""),
      replyTo: replyTo || smtpEmail,
    });
    console.log("Email sent successfully:", info.messageId);
    return { success: true, messageId: info.messageId };
  } catch (error) {
    console.error("Nodemailer error sending email:", error);
    throw error;
  }
}
