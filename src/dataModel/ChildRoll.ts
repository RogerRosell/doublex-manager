import { z } from "zod";
import { inferSchema } from './utils';
import { ParentRollSchema } from './ParentRoll';

export const ChildRollSchema: z.ZodSchema = z.object({
  id: z.number().optional(),      // Optional for new entries
  name: z.string().min(1),        // Name of the 50ft roll
  date: z.date(),         // Date the roll was spooled
  parentRollId: z.number(),       // Foreign key to the ParentRoll
  parentRoll: ParentRollSchema.optional(), // Optional when validating single entries
});

export const ChildRollFormSchema = inferSchema(ChildRollSchema);
export type ChildRollType = z.infer<typeof ChildRollSchema>;