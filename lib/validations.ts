import { z } from "zod";

export const contactSchema = z.object({
  name: z
    .string()
    .min(2, "Name must be at least 2 characters.")
    .max(80, "Name is too long.")
    .regex(/^[a-zA-ZÀ-ÿ\s'-]+$/, "Name contains invalid characters."),

  email: z
    .string()
    .email("Please enter a valid email address.")
    .max(254, "Email address is too long."),

  subject: z
    .string()
    .min(3, "Subject must be at least 3 characters.")
    .max(120, "Subject is too long."),

  message: z
    .string()
    .min(20, "Message must be at least 20 characters.")
    .max(2000, "Message is too long (max 2 000 characters)."),
});

export type ContactFormData = z.infer<typeof contactSchema>;
