import { z } from "zod";
export declare const SurveyQuestionResponseDetails: z.ZodObject<{
    questionId: z.ZodString;
    questionKind: z.ZodEnum<["basic", "unit_single", "unit_matchup_1v1"]>;
    userId: z.ZodString;
    smileyFaceRating: z.ZodNullable<z.ZodEnum<["veryUnhappy", "unhappy", "neutral", "happy", "veryHappy"]>>;
    tags: z.ZodArray<z.ZodString, "many">;
    /**
     * we count skipping as a valid answer as this is still interesting
     */
    skipped: z.ZodBoolean;
}, "strip", z.ZodTypeAny, {
    tags: string[];
    questionId: string;
    questionKind: "basic" | "unit_single" | "unit_matchup_1v1";
    userId: string;
    smileyFaceRating: "veryUnhappy" | "unhappy" | "neutral" | "happy" | "veryHappy" | null;
    skipped: boolean;
}, {
    tags: string[];
    questionId: string;
    questionKind: "basic" | "unit_single" | "unit_matchup_1v1";
    userId: string;
    smileyFaceRating: "veryUnhappy" | "unhappy" | "neutral" | "happy" | "veryHappy" | null;
    skipped: boolean;
}>;
export type SurveyQuestionResponseDetails = z.infer<typeof SurveyQuestionResponseDetails>;
export declare const SurveyQuestionResponseSchema: z.ZodObject<{
    _id: z.ZodString;
    createdAt: z.ZodNumber;
    lastUpdatedAt: z.ZodNumber;
    details: z.ZodObject<{
        questionId: z.ZodString;
        questionKind: z.ZodEnum<["basic", "unit_single", "unit_matchup_1v1"]>;
        userId: z.ZodString;
        smileyFaceRating: z.ZodNullable<z.ZodEnum<["veryUnhappy", "unhappy", "neutral", "happy", "veryHappy"]>>;
        tags: z.ZodArray<z.ZodString, "many">;
        /**
         * we count skipping as a valid answer as this is still interesting
         */
        skipped: z.ZodBoolean;
    }, "strip", z.ZodTypeAny, {
        tags: string[];
        questionId: string;
        questionKind: "basic" | "unit_single" | "unit_matchup_1v1";
        userId: string;
        smileyFaceRating: "veryUnhappy" | "unhappy" | "neutral" | "happy" | "veryHappy" | null;
        skipped: boolean;
    }, {
        tags: string[];
        questionId: string;
        questionKind: "basic" | "unit_single" | "unit_matchup_1v1";
        userId: string;
        smileyFaceRating: "veryUnhappy" | "unhappy" | "neutral" | "happy" | "veryHappy" | null;
        skipped: boolean;
    }>;
}, "strip", z.ZodTypeAny, {
    _id: string;
    createdAt: number;
    lastUpdatedAt: number;
    details: {
        tags: string[];
        questionId: string;
        questionKind: "basic" | "unit_single" | "unit_matchup_1v1";
        userId: string;
        smileyFaceRating: "veryUnhappy" | "unhappy" | "neutral" | "happy" | "veryHappy" | null;
        skipped: boolean;
    };
}, {
    _id: string;
    createdAt: number;
    lastUpdatedAt: number;
    details: {
        tags: string[];
        questionId: string;
        questionKind: "basic" | "unit_single" | "unit_matchup_1v1";
        userId: string;
        smileyFaceRating: "veryUnhappy" | "unhappy" | "neutral" | "happy" | "veryHappy" | null;
        skipped: boolean;
    };
}>;
export type SurveyQuestionResponseSchema = z.infer<typeof SurveyQuestionResponseSchema>;
export declare class SurveyQuestionResponse {
    readonly data: SurveyQuestionResponseSchema;
    constructor(data: SurveyQuestionResponseSchema);
    static parse: (data: unknown) => SurveyQuestionResponse;
    get id(): string;
}
//# sourceMappingURL=SurveyQuestionResponse.d.ts.map