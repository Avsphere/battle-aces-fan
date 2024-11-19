import { z } from "zod";
import { SurveyQuestionKind } from "./SurveyQuestion.js";
import { SmileyFaceRating } from "./SmileyFaceRating.js";
import { SurveyQuestionTag } from "./SurveyQuestionTag.js";
export const QuestionTagMap = z.record(SurveyQuestionKind, z.record(SmileyFaceRating, SurveyQuestionTag));
export const QuestionTagMapSchema = z.object({
    _id: z.string(),
    createdAt: z.number(),
    lastUpdatedAt: z.number(),
    data: QuestionTagMap
});
