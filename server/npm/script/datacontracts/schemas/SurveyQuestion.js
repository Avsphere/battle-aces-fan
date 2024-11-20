"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SurveyQuestion = exports.SurveyQuestionSchema = exports.SurveyQuestionDetails = exports.SurveyQuestion_BasicSchema = exports.SurveyQuestion_UnitMatchupSchema = exports.SurveyQuestion_UnitSingleSchema = exports.SurveyQuestionKind = void 0;
const node_assert_1 = __importDefault(require("node:assert"));
const zod_1 = require("zod");
const UnitSlugKind_js_1 = require("./UnitSlugKind.js");
const SurveyQuestionTag_js_1 = require("./SurveyQuestionTag.js");
exports.SurveyQuestionKind = zod_1.z.enum(["basic", "unit_single", "unit_matchup_1v1"]);
exports.SurveyQuestion_UnitSingleSchema = zod_1.z.object({
    kind: zod_1.z.literal("unit_single"),
    unitSlug: zod_1.z.string(),
    tags: zod_1.z.array(SurveyQuestionTag_js_1.SurveyQuestionTag)
});
// Define the schema for 'unit_matchup_1v1' survey question
exports.SurveyQuestion_UnitMatchupSchema = zod_1.z.object({
    kind: zod_1.z.literal("unit_matchup_1v1"),
    firstUnitSlug: UnitSlugKind_js_1.UnitSlugKind,
    secondUnitSlug: UnitSlugKind_js_1.UnitSlugKind,
    tags: zod_1.z.array(SurveyQuestionTag_js_1.SurveyQuestionTag)
});
exports.SurveyQuestion_BasicSchema = zod_1.z.object({
    kind: zod_1.z.literal("basic"),
    subKind: zod_1.z.string(),
    text: zod_1.z.string(),
    relevantUnitSlugs: zod_1.z.array(UnitSlugKind_js_1.UnitSlugKind).optional(),
    oppositeUnitSlugs: zod_1.z.array(UnitSlugKind_js_1.UnitSlugKind).optional(),
    tags: zod_1.z.array(SurveyQuestionTag_js_1.SurveyQuestionTag)
});
exports.SurveyQuestionDetails = zod_1.z.discriminatedUnion("kind", [
    exports.SurveyQuestion_UnitSingleSchema,
    exports.SurveyQuestion_UnitMatchupSchema,
    exports.SurveyQuestion_BasicSchema
]);
exports.SurveyQuestionSchema = zod_1.z.object({
    _id: zod_1.z.string(),
    createdAt: zod_1.z.number(),
    lastUpdatedAt: zod_1.z.number(),
    /**
     * meaning the question is being displayed to users
     */
    isActive: zod_1.z.boolean(),
    details: exports.SurveyQuestionDetails,
});
class SurveyQuestion {
    constructor(data) {
        Object.defineProperty(this, "data", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: data
        });
        Object.defineProperty(this, "isSameAs", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: (other) => {
                if (other.kind !== this.kind) {
                    return false;
                }
                if (other.kind === 'unit_matchup_1v1') {
                    (0, node_assert_1.default)(other.details.kind === 'unit_matchup_1v1');
                    (0, node_assert_1.default)(this.details.kind === 'unit_matchup_1v1');
                    return ((other.details.firstUnitSlug === this.details.firstUnitSlug &&
                        other.details.secondUnitSlug === this.details.secondUnitSlug) ||
                        (other.details.firstUnitSlug === this.details.secondUnitSlug &&
                            other.details.secondUnitSlug === this.details.firstUnitSlug));
                }
                if (other.kind === 'unit_single') {
                    (0, node_assert_1.default)(other.details.kind === 'unit_single');
                    (0, node_assert_1.default)(this.details.kind === 'unit_single');
                    return other.details.unitSlug === this.details.unitSlug;
                }
                if (other.kind === 'basic') {
                    (0, node_assert_1.default)(other.details.kind === 'basic');
                    (0, node_assert_1.default)(this.details.kind === 'basic');
                    const isTextTheSame = other.details.text === this.details.text;
                    const areUnitsTheSame = other.details.relevantUnitSlugs?.sort().join() === this.details.relevantUnitSlugs?.sort().join();
                    const areOpposingUnitsTheSame = other.details.oppositeUnitSlugs?.sort().join() === this.details.oppositeUnitSlugs?.sort().join();
                    return isTextTheSame && areUnitsTheSame && areOpposingUnitsTheSame;
                }
                return false;
            }
        });
    }
    get id() {
        return this.data._id;
    }
    get kind() {
        return this.data.details.kind;
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
Object.defineProperty(SurveyQuestion, "isSameAsDetails", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: (question1, question2) => {
        if (question1.kind !== question2.kind) {
            return false;
        }
        if (question1.kind === 'unit_matchup_1v1') {
            (0, node_assert_1.default)(question2.kind === 'unit_matchup_1v1');
            (0, node_assert_1.default)(question1.kind === 'unit_matchup_1v1');
            return ((question2.firstUnitSlug === question1.firstUnitSlug &&
                question2.secondUnitSlug === question1.secondUnitSlug) ||
                (question2.firstUnitSlug === question1.secondUnitSlug &&
                    question2.secondUnitSlug === question1.firstUnitSlug));
        }
        if (question1.kind === 'unit_single') {
            (0, node_assert_1.default)(question2.kind === 'unit_single');
            (0, node_assert_1.default)(question1.kind === 'unit_single');
            return question2.unitSlug === question1.unitSlug;
        }
        if (question1.kind === 'basic') {
            (0, node_assert_1.default)(question2.kind === 'basic');
            (0, node_assert_1.default)(question1.kind === 'basic');
            const isTextTheSame = question2.text === question1.text;
            const areUnitsTheSame = question2.relevantUnitSlugs?.sort().join() === question1.relevantUnitSlugs?.sort().join();
            const areOpposingUnitsTheSame = question2.oppositeUnitSlugs?.sort().join() === question1.oppositeUnitSlugs?.sort().join();
            return isTextTheSame && areUnitsTheSame && areOpposingUnitsTheSame;
        }
        return false;
    }
});
