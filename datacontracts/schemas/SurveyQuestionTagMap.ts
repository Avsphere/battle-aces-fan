import { z } from "zod";
import { SurveyQuestionKind } from "./SurveyQuestion.ts";
import { SmileyFaceRating } from "./SmileyFaceRating.ts";
import { SurveyQuestionTagKind } from "./SurveyQuestionTag.ts";



export const SurveyQuestionTagMap = z.record(SurveyQuestionKind, z.record(SmileyFaceRating, z.array(SurveyQuestionTagKind)))
export type SurveyQuestionTagMap = z.infer<typeof SurveyQuestionTagMap>


/**
 * a singleton in the db that maps a question kind to a smiley face rating to a tag
 * e.g. unit_single : sad_face : ['boring', 'hard', 'uninteresting']
 */
export const SurveyQuestionTagMapSchema = z.object({
    _id : z.string(),
    createdAt : z.number(),
    lastUpdatedAt : z.number(),
    data : SurveyQuestionTagMap
})

export type SurveyQuestionTagMapSchema = z.infer<typeof SurveyQuestionTagMapSchema>


