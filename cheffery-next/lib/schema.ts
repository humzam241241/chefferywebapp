import { z } from "zod";

export const enterSchema = z.object({
  name: z.string().min(2, "Please enter your name"),
  email: z.string().email("Enter a valid email"),
  phone: z.string().min(7, "Enter a valid phone").optional().or(z.literal("")),
  eventDate: z.string().min(1, "Please select a date"),
  guestCount: z.coerce.number().int().positive("Enter a valid number"),
  address: z.string().optional().or(z.literal("")),
  needVenue: z.boolean().optional().default(false),
  budgetRange: z.string().optional().or(z.literal("")),
  notes: z.string().optional().or(z.literal("")),
  social: z.string().url("Enter a valid URL").optional().or(z.literal("")),
});

export const contactSchema = z.object({
  name: z.string().min(2, "Please enter your name"),
  email: z.string().email("Enter a valid email"),
  message: z.string().min(10, "Please include a brief message"),
});

export type EnterInput = z.infer<typeof enterSchema>;
export type ContactInput = z.infer<typeof contactSchema>;


