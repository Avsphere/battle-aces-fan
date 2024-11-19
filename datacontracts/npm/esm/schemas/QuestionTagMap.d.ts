import { z } from "zod";
export declare const QuestionTagMap: z.ZodRecord<z.ZodEnum<["unit_single", "unit_matchup_1v1"]>, z.ZodRecord<z.ZodEnum<["veryUnhappy", "unhappy", "neutral", "happy", "veryHappy"]>, z.ZodEnum<["fun"]>>>;
export type QuestionTagMap = z.infer<typeof QuestionTagMap>;
export declare const QuestionTagMapSchema: z.ZodObject<{
    _id: z.ZodString;
    createdAt: z.ZodNumber;
    lastUpdatedAt: z.ZodNumber;
    data: z.ZodRecord<z.ZodEnum<["unit_single", "unit_matchup_1v1"]>, z.ZodRecord<z.ZodEnum<["veryUnhappy", "unhappy", "neutral", "happy", "veryHappy"]>, z.ZodEnum<["fun"]>>>;
}, "strip", z.ZodTypeAny, {
    _id: string;
    createdAt: number;
    lastUpdatedAt: number;
    data: Partial<Record<"unit_single" | "unit_matchup_1v1", Partial<Record<"veryUnhappy" | "unhappy" | "neutral" | "happy" | "veryHappy", "fun">>>>;
}, {
    _id: string;
    createdAt: number;
    lastUpdatedAt: number;
    data: Partial<Record<"unit_single" | "unit_matchup_1v1", Partial<Record<"veryUnhappy" | "unhappy" | "neutral" | "happy" | "veryHappy", "fun">>>>;
}>;
export type QuestionTagMapSchema = z.infer<typeof QuestionTagMapSchema>;
//# sourceMappingURL=QuestionTagMap.d.ts.map