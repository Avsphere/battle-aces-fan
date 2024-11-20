"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SurveyQuestionTagMapSchema = exports.SurveyQuestionTagMap = void 0;
const zod_1 = require("zod");
const SurveyQuestion_js_1 = require("./SurveyQuestion.js");
const SmileyFaceRating_js_1 = require("./SmileyFaceRating.js");
const SurveyQuestionTag_js_1 = require("./SurveyQuestionTag.js");
exports.SurveyQuestionTagMap = zod_1.z.record(SurveyQuestion_js_1.SurveyQuestionKind, zod_1.z.record(SmileyFaceRating_js_1.SmileyFaceRating, zod_1.z.array(SurveyQuestionTag_js_1.SurveyQuestionTag)));
/**
 * a singleton in the db that maps a question kind to a smiley face rating to a tag
 * e.g. unit_single : sad_face : ['boring', 'hard', 'uninteresting']
 */
exports.SurveyQuestionTagMapSchema = zod_1.z.object({
    _id: zod_1.z.string(),
    createdAt: zod_1.z.number(),
    lastUpdatedAt: zod_1.z.number(),
    data: exports.SurveyQuestionTagMap
});
