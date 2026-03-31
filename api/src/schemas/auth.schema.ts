import { z } from 'zod';

export const registerSchema = z.object({
  name: z.string().trim().min(2, "The name must be at least 2 characters long."),
  email: z.string().trim().toLowerCase().email("Please provide a valid email address."),
  password: z.string().min(8, "The password must be at least 8 characters long for security."),
});

export const loginSchema = z.object({
  email: z.string().trim().toLowerCase().email("Invalid email format."),
  password: z.string().min(1, "A password is required."),
});
