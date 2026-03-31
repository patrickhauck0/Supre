import { z } from 'zod';

export const createProductSchema = z.object({
  name: z.string().min(3, "The product name must have at least 3 letters."),
  category: z.string().min(2, "The category must have at least 2 letters."),
  quantity: z.number().int().min(0, "The quantity in stock cannot be negative."),
  minQuantity: z.number().int().min(0, "The minimum quantity for the lince alert cannot be negative."),
  imageUrl: z.string().url("The image URL provided is invalid.").optional(),
  sku: z.string().optional(),
  description: z.string().optional(),
});

export const updateProductSchema = createProductSchema.partial();
