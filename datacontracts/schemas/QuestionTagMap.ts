import { z } from "zod";
import { SurveyQuestionKind } from "./SurveyQuestion.ts";
import { SmileyFaceRating } from "./SmileyFaceRating.ts";
import { SurveyQuestionTag } from "./SurveyQuestionTag.ts";



export const QuestionTagMap = z.record(SurveyQuestionKind, z.record(SmileyFaceRating, SurveyQuestionTag))
export type QuestionTagMap = z.infer<typeof QuestionTagMap>

export const QuestionTagMapSchema = z.object({
    _id : z.string(),
    createdAt : z.number(),
    lastUpdatedAt : z.number(),
    data : QuestionTagMap
})

export type QuestionTagMapSchema = z.infer<typeof QuestionTagMapSchema>
