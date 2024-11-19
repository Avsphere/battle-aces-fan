import { z } from "zod";
export const SmileyFaceRating = z.enum([
    'veryUnhappy',
    'unhappy',
    'neutral',
    'happy',
    'veryHappy'
]);
