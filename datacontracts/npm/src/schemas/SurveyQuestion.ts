import { z } from "zod";

export const SurveyQuestionKind = z.enum(["unit_single", "unit_matchup_1v1"]);
export type SurveyQuestionKind = z.infer<typeof SurveyQuestionKind>;

const BaseSurveyQuestionSchema = z.object({
    _id: z.string(),
    createdAt: z.number(),
    lastUpdatedAt: z.number(),
});

export const SurveyQuestion_UnitSingleSchema = z.object({
    kind: z.literal("unit_single"),
    details: z.object({
        unitId: z.string(),
    }),
});
export type SurveyQuestion_UnitSingleSchema = z.infer<
    typeof SurveyQuestion_UnitSingleSchema
>;



// Define the schema for 'unit_matchup_1v1' survey question
export const SurveyQuestion_UnitMatchupSchema = z.object({
    kind: z.literal("unit_matchup_1v1"),
    details: z.object({
        firstUnitId: z.string(),
        secondUnitId: z.string(),
    }),
});
export type SurveyQuestion_UnitMatchupSchema = z.infer<
    typeof SurveyQuestion_UnitMatchupSchema
>;

export const SurveyQuestionSchema = z.discriminatedUnion("kind", [
    BaseSurveyQuestionSchema.merge(SurveyQuestion_UnitSingleSchema),
    BaseSurveyQuestionSchema.merge(SurveyQuestion_UnitMatchupSchema),
]);
export type SurveyQuestionSchema = z.infer<typeof SurveyQuestionSchema>;

export class SurveyQuestion<
    T extends SurveyQuestionSchema = SurveyQuestionSchema,
> {
    constructor(readonly data: T) {}

    static parse = (data: unknown) =>
        new SurveyQuestion(SurveyQuestionSchema.parse(data));

    get id() {
        return this.data._id;
    }

    get kind(): T["kind"] {
        return this.data.kind;
    }

    get details(): T["details"] {
        return this.data.details;
    }
}

// /users/getAnsweredQuestions

// /questions/getQuestions
// /questions/getSmileyToTagMap

// GET /units/populated


// single_unit : neutralFace : [Tag.enum.'didntUseTheUnit', 'didntThinkItWasCool']
// single_unit : sadFace : ['has bad stats']


// matchup : sadFace : ['has bad stat']
