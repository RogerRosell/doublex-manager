import { z } from "zod";
import { inferSchema } from './utils';

// Schema for ParentRoll
export const ParentRollSchema: z.ZodSchema = z.object({
  id: z.number().optional(), // Optional for new entries, as the database assigns it
  name: z.string().trim().min(1),   // Unique name for the parent roll
  purchaseDate: z.date({
    invalid_type_error: "Invalid date type",
    required_error: "A purchase date is required.",
  }).or(z.literal("yyyy-MM-dd")),  // Date the parent roll was bought
});

export const ParentRollFormSchema = inferSchema(ParentRollSchema);

export type TParentRoll = z.infer<typeof ParentRollSchema>;