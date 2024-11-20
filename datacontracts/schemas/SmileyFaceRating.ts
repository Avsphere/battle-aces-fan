import { z } from "zod";

export const SmileyFaceRating = z.enum([
  "veryUnhappy",
  "unhappy",
  "neutral",
  "happy",
  "veryHappy",
]);
export type SmileyFaceRating = z.infer<typeof SmileyFaceRating>;
