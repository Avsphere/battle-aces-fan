import { z } from "zod";

export const SurveyQuestionKind = z.enum(["unit_single", "unit_matchup_1v1"]);
export type SurveyQuestionKind = z.infer<typeof SurveyQuestionKind>;

export const SurveyQuestion_UnitSingleSchema = z.object({
    kind: z.literal("unit_single"),
    unitId: z.string(),
});
export type SurveyQuestion_UnitSingleSchema = z.infer<
    typeof SurveyQuestion_UnitSingleSchema
>;

// Define the schema for 'unit_matchup_1v1' survey question
export const SurveyQuestion_UnitMatchupSchema = z.object({
    kind: z.literal("unit_matchup_1v1"),
    firstUnitId: z.string(),
    secondUnitId: z.string(),
});
export type SurveyQuestion_UnitMatchupSchema = z.infer<
    typeof SurveyQuestion_UnitMatchupSchema
>;

export const SurveyQuestionDetails = z.discriminatedUnion("kind", [
    SurveyQuestion_UnitSingleSchema,
    SurveyQuestion_UnitMatchupSchema,
]);
export type SurveyQuestionDetails = z.infer<typeof SurveyQuestionDetails>;

export const SurveyQuestionSchema = z.object({
    _id: z.string(),
    createdAt: z.number(),
    lastUpdatedAt: z.number(),
    /**
     * meaning the question is being displayed to users
     */
    isActive: z.boolean(),

    details: SurveyQuestionDetails,
});
export type SurveyQuestionSchema = z.infer<typeof SurveyQuestionSchema>;
export class SurveyQuestion<
    T extends SurveyQuestionDetails = SurveyQuestionDetails,
> {
    constructor(readonly data: SurveyQuestionSchema) {}

    static parse = (data: unknown) =>
        new SurveyQuestion(SurveyQuestionSchema.parse(data));

    get id() {
        return this.data._id;
    }

    get kind(): T["kind"] {
        return this.data.details.kind;
    }

    get details(): T {
        return this.data.details as T;
    }
}
