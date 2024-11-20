import { z } from "zod";

export const FindByIdSchema = z.object({
    id : z.string()
})
export type FindByIdSchema = z.infer<typeof FindByIdSchema>