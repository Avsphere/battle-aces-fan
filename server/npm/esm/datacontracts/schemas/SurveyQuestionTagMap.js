import { z } from "zod";
import { SurveyQuestionKind } from "./SurveyQuestion.js";
import { SmileyFaceRating } from "./SmileyFaceRating.js";
import { SurveyQuestionTag } from "./SurveyQuestionTag.js";
export const SurveyQuestionTagMap = z.record(SurveyQuestionKind, z.record(SmileyFaceRating, z.array(SurveyQuestionTag)));
/**
 * a singleton in the db that maps a question kind to a smiley face rating to a tag
 * e.g. unit_single : sad_face : ['boring', 'hard', 'uninteresting']
 */
export const SurveyQuestionTagMapSchema = z.object({
    _id: z.string(),
    createdAt: z.number(),
    lastUpdatedAt: z.number(),
    data: SurveyQuestionTagMap
});
