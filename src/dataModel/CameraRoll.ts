import { z } from "zod";
import { inferSchema } from './utils';
import { ParentRollSchema } from './ParentRoll';

export const CameraRollSchema: z.ZodSchema = z.object({
  id: z.number().optional(),      // Optional for new entries
  name: z.string().min(1),        // Name of the Camera roll
  date: z.date(),
  exposures: z.number(),          // Date the roll was spooled
  qrCode: z.string().url(),       // URL or file path for the QR code
  parentRollId: z.number(),       // Foreign key to the ParentRoll
  parentRoll: ParentRollSchema.optional(), // Optional when validating single entries
});

export const CameraRollFormSchema = inferSchema(CameraRollSchema);
export type CameraRollType = z.infer<typeof CameraRollSchema>;