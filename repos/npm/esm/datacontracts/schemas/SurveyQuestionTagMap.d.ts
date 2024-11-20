import { z } from "zod";
export declare const SurveyQuestionTagMap: z.ZodRecord<z.ZodEnum<["basic", "unit_single", "unit_matchup_1v1"]>, z.ZodRecord<z.ZodEnum<["veryUnhappy", "unhappy", "neutral", "happy", "veryHappy"]>, z.ZodArray<z.ZodString, "many">>>;
export type SurveyQuestionTagMap = z.infer<typeof SurveyQuestionTagMap>;
/**
 * a singleton in the db that maps a question kind to a smiley face rating to a tag
 * e.g. unit_single : sad_face : ['boring', 'hard', 'uninteresting']
 */
export declare const SurveyQuestionTagMapSchema: z.ZodObject<{
    _id: z.ZodString;
    createdAt: z.ZodNumber;
    lastUpdatedAt: z.ZodNumber;
    data: z.ZodRecord<z.ZodEnum<["basic", "unit_single", "unit_matchup_1v1"]>, z.ZodRecord<z.ZodEnum<["veryUnhappy", "unhappy", "neutral", "happy", "veryHappy"]>, z.ZodArray<z.ZodString, "many">>>;
}, "strip", z.ZodTypeAny, {
    _id: string;
    createdAt: number;
    lastUpdatedAt: number;
    data: Partial<Record<"basic" | "unit_single" | "unit_matchup_1v1", Partial<Record<"veryUnhappy" | "unhappy" | "neutral" | "happy" | "veryHappy", string[]>>>>;
}, {
    _id: string;
    createdAt: number;
    lastUpdatedAt: number;
    data: Partial<Record<"basic" | "unit_single" | "unit_matchup_1v1", Partial<Record<"veryUnhappy" | "unhappy" | "neutral" | "happy" | "veryHappy", string[]>>>>;
}>;
export type SurveyQuestionTagMapSchema = z.infer<typeof SurveyQuestionTagMapSchema>;
//# sourceMappingURL=SurveyQuestionTagMap.d.ts.map