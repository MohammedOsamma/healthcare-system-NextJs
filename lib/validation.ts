import { z } from "zod";
export const UserFromValidation = z.object({
  name: z
    .string()
    .min(2, "Username must be at least 2 characters.")
    .max(30, "Username must be at most 30 characters."),
  email: z.string().email("Invalid email address."),
  phone: z
    .string()
    .refine((phone) => /^\+\d{10,15}$/.test(phone), "Invalid phone number."),
});
