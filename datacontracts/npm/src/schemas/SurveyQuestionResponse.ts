import { z } from "zod";
import { SmileyFaceRating } from "./SmileyFaceRating.js";
import { SurveyQuestionTag } from "./SurveyQuestionTag.js";
import { SurveyQuestionKind } from "./SurveyQuestion.js";

export const SurveyQuestionResponseDetails = z.object({
    questionId : z.string(),
    questionKind : SurveyQuestionKind,
    userId : z.string(),
    smileyFaceRating : SmileyFaceRating.nullable(),
    tags : z.array(SurveyQuestionTag),
    /**
     * we count skipping as a valid answer as this is still interesting
     */
    skipped : z.boolean(),
})
export type SurveyQuestionResponseDetails = z.infer<typeof SurveyQuestionResponseDetails>

export const SurveyQuestionResponseSchema = z.object({
    _id: z.string(),
    createdAt: z.number(),
    lastUpdatedAt: z.number(),
    details : SurveyQuestionResponseDetails,
});
export type SurveyQuestionResponseSchema = z.infer<typeof SurveyQuestionResponseSchema>;


export class SurveyQuestionResponse {
    constructor(readonly data: SurveyQuestionResponseSchema) {}

    static parse = (data: unknown) => new SurveyQuestionResponse(SurveyQuestionResponseSchema.parse(data))

    get id() {
        return this.data._id;
    }

}
