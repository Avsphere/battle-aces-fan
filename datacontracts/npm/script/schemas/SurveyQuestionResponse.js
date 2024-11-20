"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SurveyQuestionResponse = exports.SurveyQuestionResponseSchema = exports.SurveyQuestionResponseDetails = void 0;
const zod_1 = require("zod");
const SmileyFaceRating_js_1 = require("./SmileyFaceRating.js");
const SurveyQuestionTag_js_1 = require("./SurveyQuestionTag.js");
const SurveyQuestion_js_1 = require("./SurveyQuestion.js");
exports.SurveyQuestionResponseDetails = zod_1.z.object({
    questionId: zod_1.z.string(),
    questionKind: SurveyQuestion_js_1.SurveyQuestionKind,
    userId: zod_1.z.string(),
    smileyFaceRating: SmileyFaceRating_js_1.SmileyFaceRating.nullable(),
    tags: zod_1.z.array(SurveyQuestionTag_js_1.SurveyQuestionTag),
    /**
     * we count skipping as a valid answer as this is still interesting
     */
    skipped: zod_1.z.boolean(),
});
exports.SurveyQuestionResponseSchema = zod_1.z.object({
    _id: zod_1.z.string(),
    createdAt: zod_1.z.number(),
    lastUpdatedAt: zod_1.z.number(),
    details: exports.SurveyQuestionResponseDetails,
});
class SurveyQuestionResponse {
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
}
exports.SurveyQuestionResponse = SurveyQuestionResponse;
Object.defineProperty(SurveyQuestionResponse, "parse", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: (data) => new SurveyQuestionResponse(exports.SurveyQuestionResponseSchema.parse(data))
});
