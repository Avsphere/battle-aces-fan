import type { z } from "zod";
export declare const TagMoodKind: z.ZodEnum<["happy", "neutral", "angry"]>;
export type TagMoodKind = z.infer<typeof TagMoodKind>;
export declare const TagMoodMap: z.ZodRecord<
  z.ZodString,
  z.ZodEnum<["happy", "neutral", "angry"]>
>;
export type TagMoodMap = z.infer<typeof TagMoodMap>;
export declare const generatedTagMoodMap: TagMoodMap;
//# sourceMappingURL=TagMoodMap.d.ts.map
