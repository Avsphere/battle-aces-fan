import { z } from "zod";
export declare const SurveyQuestionResponseSchema: z.ZodObject<{
    _id: z.ZodString;
    createdAt: z.ZodNumber;
    lastUpdatedAt: z.ZodNumber;
    questionId: z.ZodString;
    userId: z.ZodString;
    smileyFaceRating: z.ZodNullable<z.ZodEnum<["veryUnhappy", "unhappy", "neutral", "happy", "veryHappy"]>>;
    tags: z.ZodArray<z.ZodEnum<["fun"]>, "many">;
    /**
     * we count skipping as a valid answer as this is still interesting
     */
    skipped: z.ZodBoolean;
}, "strip", z.ZodTypeAny, {
    _id: string;
    createdAt: number;
    lastUpdatedAt: number;
    questionId: string;
    userId: string;
    smileyFaceRating: "veryUnhappy" | "unhappy" | "neutral" | "happy" | "veryHappy" | null;
    tags: "fun"[];
    skipped: boolean;
}, {
    _id: string;
    createdAt: number;
    lastUpdatedAt: number;
    questionId: string;
    userId: string;
    smileyFaceRating: "veryUnhappy" | "unhappy" | "neutral" | "happy" | "veryHappy" | null;
    tags: "fun"[];
    skipped: boolean;
}>;
export type SurveyQuestionResponseSchema = z.infer<typeof SurveyQuestionResponseSchema>;
export declare class SurveyQuestionResponse {
    readonly data: SurveyQuestionResponseSchema;
    constructor(data: SurveyQuestionResponseSchema);
    static parse: (data: unknown) => SurveyQuestionResponse;
    get id(): string;
}
//# sourceMappingURL=SurveyQuestionResponse.d.ts.map