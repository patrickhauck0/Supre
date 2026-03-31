import { z } from 'zod';

export const createProductSchema = z.object({
  name: z.string().min(3, "The product name must have at least 3 letters."),
  description: z.string().optional(),
  sku: z.string().optional(),
  price: z.number().min(0, "The price cannot be negative."),
  quantity: z.number().int().min(0, "The quantity in stock cannot be negative."),
});

export const updateProductSchema = createProductSchema.partial();
