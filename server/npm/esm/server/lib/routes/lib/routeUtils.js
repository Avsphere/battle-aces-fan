import { z } from "zod";
export const FindByIdSchema = z.object({
  id: z.string(),
});
