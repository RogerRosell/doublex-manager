import { z } from "zod";
import { inferSchema } from './utils';

// Schema for ParentRoll
export const ParentRollSchema: z.ZodSchema = z.object({
  id: z.number().optional(), // Optional for new entries, as the database assigns it
  name: z.string().trim().min(1),   // Unique name for the parent roll
  purchaseDate: z.date({
    required_error: "A purchase date is required.",
  }).optional().or(z.string()),    // Date the parent roll was bought
  qrCodeUrl: z.string().trim().url().optional(),       // URL or file path for the QR code
});

export const ParentRollFormSchema = inferSchema(ParentRollSchema);

export type TParentRoll = z.infer<typeof ParentRollSchema>;