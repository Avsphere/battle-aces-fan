"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QuestionTagMapSchema = exports.QuestionTagMap = void 0;
const zod_1 = require("zod");
const SurveyQuestion_js_1 = require("./SurveyQuestion.js");
const SmileyFaceRating_js_1 = require("./SmileyFaceRating.js");
const SurveyQuestionTag_js_1 = require("./SurveyQuestionTag.js");
exports.QuestionTagMap = zod_1.z.record(SurveyQuestion_js_1.SurveyQuestionKind, zod_1.z.record(SmileyFaceRating_js_1.SmileyFaceRating, SurveyQuestionTag_js_1.SurveyQuestionTag));
exports.QuestionTagMapSchema = zod_1.z.object({
    _id: zod_1.z.string(),
    createdAt: zod_1.z.number(),
    lastUpdatedAt: zod_1.z.number(),
    data: exports.QuestionTagMap
});
