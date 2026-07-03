import nodemailer from "nodemailer";
import { promises as fs } from "fs";
import path from "path";
import { siteConfig } from "@/lib/site";

type ContactPayload = {
  name: string;
  email: string;
  phone: string;
  businessName: string;
  serviceNeeded: string;
  budget: string;
  message: string;
};

export async function sendContactEmail(payload: ContactPayload) {
  const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS } = process.env;
  const recipient = siteConfig.email;

  if (!SMTP_HOST || !SMTP_PORT || !SMTP_USER || !SMTP_PASS) {
    const storePath = path.join(process.cwd(), "data", "contact-submissions.json");
    const current = await fs.readFile(storePath, "utf8").catch(() => "[]");
    const items = JSON.parse(current) as Array<ContactPayload & { createdAt: string }>;
    items.push({ ...payload, createdAt: new Date().toISOString() });
    await fs.mkdir(path.dirname(storePath), { recursive: true });
    await fs.writeFile(storePath, JSON.stringify(items, null, 2), "utf8");

    return { delivered: true, mode: "stored" as const, recipient };
  }

  const transporter = nodemailer.createTransport({
    host: SMTP_HOST,
    port: Number(SMTP_PORT),
    secure: Number(SMTP_PORT) === 465,
    auth: { user: SMTP_USER, pass: SMTP_PASS },
  });

  await transporter.sendMail({
    from: `"Dharm - The Digital Room" <${SMTP_USER}>`,
    to: recipient,
    subject: `New consultation request from ${payload.name}`,
    text: [
      "New consultation request received",
      "",
      `Name: ${payload.name}`,
      `Email: ${payload.email}`,
      `Phone: ${payload.phone}`,
      `Business Name: ${payload.businessName}`,
      `Service Needed: ${payload.serviceNeeded}`,
      `Budget: ${payload.budget}`,
      "",
      "Message:",
      payload.message,
    ].join("\n"),
  });

  return { delivered: true, mode: "smtp" as const, recipient };
}
