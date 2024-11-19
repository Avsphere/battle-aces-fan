import { z } from "zod";
export const SurveyQuestionKind = z.enum(["unit_single", "unit_matchup_1v1"]);
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
// Define the schema for 'unit_matchup_1v1' survey question
export const SurveyQuestion_UnitMatchupSchema = z.object({
    kind: z.literal("unit_matchup_1v1"),
    details: z.object({
        firstUnitId: z.string(),
        secondUnitId: z.string(),
    }),
});
export const SurveyQuestionSchema = z.discriminatedUnion("kind", [
    BaseSurveyQuestionSchema.merge(SurveyQuestion_UnitSingleSchema),
    BaseSurveyQuestionSchema.merge(SurveyQuestion_UnitMatchupSchema),
]);
export class SurveyQuestion {
    constructor(data) {
        Object.defineProperty(this, "data", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: data
        });
    }
    get id() {
        return this.data._id;
    }
    get kind() {
        return this.data.kind;
    }
    get details() {
        return this.data.details;
    }
}
Object.defineProperty(SurveyQuestion, "parse", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: (data) => new SurveyQuestion(SurveyQuestionSchema.parse(data))
});
// /users/getAnsweredQuestions
// /questions/getQuestions
// /questions/getSmileyToTagMap
// GET /units/populated
// single_unit : neutralFace : [Tag.enum.'didntUseTheUnit', 'didntThinkItWasCool']
// single_unit : sadFace : ['has bad stats']
// matchup : sadFace : ['has bad stat']
