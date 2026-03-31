import { z } from 'zod';

export const createMovementSchema = z.object({
  productId: z.string().uuid("Product UUID invalid."),
  type: z.enum(['in', 'out'], {
    message: "The type must be either 'in' (input) or 'out' (output)."
  }),
  quantity: z.number().int().positive("The amount of the transaction must be at least 1."),
  notes: z.string().optional(),
});
