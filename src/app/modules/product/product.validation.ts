import { z } from 'zod';

const productValidationSchema = z.object({
  name: z.string().min(2).max(50),
  description: z.string().min(20).max(500),
  price: z.number().min(0),
  category: z.enum(['Electronics', 'Clothing', 'Books', 'Home', 'Other']),
  tags: z.array(z.string().min(1).max(50)),
  variants: z.array(
    z.object({
      type: z.string().min(2).max(50),
      value: z.string().min(2).max(50),
    }),
  ),
  inventory: z.object({
    quantity: z.number().min(0),
    inStock: z.boolean(),
  }),
});

export default productValidationSchema;
