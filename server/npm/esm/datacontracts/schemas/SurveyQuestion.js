import assert from "node:assert";
import { z } from "zod";
import { UnitSlugKind } from "./UnitSlugKind.js";
import { SurveyQuestionTag } from "./SurveyQuestionTag.js";
export const SurveyQuestionKind = z.enum(["basic", "unit_single", "unit_matchup_1v1"]);
export const SurveyQuestion_UnitSingleSchema = z.object({
    kind: z.literal("unit_single"),
    unitSlug: z.string(),
    tags: z.array(SurveyQuestionTag)
});
// Define the schema for 'unit_matchup_1v1' survey question
export const SurveyQuestion_UnitMatchupSchema = z.object({
    kind: z.literal("unit_matchup_1v1"),
    firstUnitSlug: UnitSlugKind,
    secondUnitSlug: UnitSlugKind,
    tags: z.array(SurveyQuestionTag)
});
export const SurveyQuestion_BasicSchema = z.object({
    kind: z.literal("basic"),
    subKind: z.string(),
    text: z.string(),
    relevantUnitSlugs: z.array(UnitSlugKind).optional(),
    oppositeUnitSlugs: z.array(UnitSlugKind).optional(),
    tags: z.array(SurveyQuestionTag)
});
export const SurveyQuestionDetails = z.discriminatedUnion("kind", [
    SurveyQuestion_UnitSingleSchema,
    SurveyQuestion_UnitMatchupSchema,
    SurveyQuestion_BasicSchema
]);
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
export class SurveyQuestion {
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
                    assert(other.details.kind === 'unit_matchup_1v1');
                    assert(this.details.kind === 'unit_matchup_1v1');
                    return ((other.details.firstUnitSlug === this.details.firstUnitSlug &&
                        other.details.secondUnitSlug === this.details.secondUnitSlug) ||
                        (other.details.firstUnitSlug === this.details.secondUnitSlug &&
                            other.details.secondUnitSlug === this.details.firstUnitSlug));
                }
                if (other.kind === 'unit_single') {
                    assert(other.details.kind === 'unit_single');
                    assert(this.details.kind === 'unit_single');
                    return other.details.unitSlug === this.details.unitSlug;
                }
                if (other.kind === 'basic') {
                    assert(other.details.kind === 'basic');
                    assert(this.details.kind === 'basic');
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
Object.defineProperty(SurveyQuestion, "parse", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: (data) => new SurveyQuestion(SurveyQuestionSchema.parse(data))
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
            assert(question2.kind === 'unit_matchup_1v1');
            assert(question1.kind === 'unit_matchup_1v1');
            return ((question2.firstUnitSlug === question1.firstUnitSlug &&
                question2.secondUnitSlug === question1.secondUnitSlug) ||
                (question2.firstUnitSlug === question1.secondUnitSlug &&
                    question2.secondUnitSlug === question1.firstUnitSlug));
        }
        if (question1.kind === 'unit_single') {
            assert(question2.kind === 'unit_single');
            assert(question1.kind === 'unit_single');
            return question2.unitSlug === question1.unitSlug;
        }
        if (question1.kind === 'basic') {
            assert(question2.kind === 'basic');
            assert(question1.kind === 'basic');
            const isTextTheSame = question2.text === question1.text;
            const areUnitsTheSame = question2.relevantUnitSlugs?.sort().join() === question1.relevantUnitSlugs?.sort().join();
            const areOpposingUnitsTheSame = question2.oppositeUnitSlugs?.sort().join() === question1.oppositeUnitSlugs?.sort().join();
            return isTextTheSame && areUnitsTheSame && areOpposingUnitsTheSame;
        }
        return false;
    }
});
