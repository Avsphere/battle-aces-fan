"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SurveyQuestion = exports.SurveyQuestionSchema = exports.SurveyQuestion_UnitMatchupSchema = exports.SurveyQuestion_UnitSingleSchema = exports.SurveyQuestionKind = void 0;
const zod_1 = require("zod");
exports.SurveyQuestionKind = zod_1.z.enum(["unit_single", "unit_matchup_1v1"]);
const BaseSurveyQuestionSchema = zod_1.z.object({
    _id: zod_1.z.string(),
    createdAt: zod_1.z.number(),
    lastUpdatedAt: zod_1.z.number(),
});
exports.SurveyQuestion_UnitSingleSchema = zod_1.z.object({
    kind: zod_1.z.literal("unit_single"),
    details: zod_1.z.object({
        unitId: zod_1.z.string(),
    }),
});
// Define the schema for 'unit_matchup_1v1' survey question
exports.SurveyQuestion_UnitMatchupSchema = zod_1.z.object({
    kind: zod_1.z.literal("unit_matchup_1v1"),
    details: zod_1.z.object({
        firstUnitId: zod_1.z.string(),
        secondUnitId: zod_1.z.string(),
    }),
});
exports.SurveyQuestionSchema = zod_1.z.discriminatedUnion("kind", [
    BaseSurveyQuestionSchema.merge(exports.SurveyQuestion_UnitSingleSchema),
    BaseSurveyQuestionSchema.merge(exports.SurveyQuestion_UnitMatchupSchema),
]);
class SurveyQuestion {
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
exports.SurveyQuestion = SurveyQuestion;
Object.defineProperty(SurveyQuestion, "parse", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: (data) => new SurveyQuestion(exports.SurveyQuestionSchema.parse(data))
});
// /users/getAnsweredQuestions
// /questions/getQuestions
// /questions/getSmileyToTagMap
// GET /units/populated
// single_unit : neutralFace : [Tag.enum.'didntUseTheUnit', 'didntThinkItWasCool']
// single_unit : sadFace : ['has bad stats']
// matchup : sadFace : ['has bad stat']
