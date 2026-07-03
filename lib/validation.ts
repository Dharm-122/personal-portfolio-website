import { z } from "zod";

export const contactSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  phone: z.string().min(6),
  businessName: z.string().min(2),
  serviceNeeded: z.string().min(2),
  budget: z.string().min(1),
  message: z.string().min(10),
});

export const newsletterSchema = z.object({
  email: z.string().email(),
});
