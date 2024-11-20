import { z } from "zod";
import { SmileyFaceRating } from "./SmileyFaceRating.js";
import { SurveyQuestionTag } from "./SurveyQuestionTag.js";
import { SurveyQuestionKind } from "./SurveyQuestion.js";
export const SurveyQuestionResponseDetails = z.object({
  questionId: z.string(),
  questionKind: SurveyQuestionKind,
  userId: z.string(),
  smileyFaceRating: SmileyFaceRating.nullable(),
  tags: z.array(SurveyQuestionTag),
  /**
   * we count skipping as a valid answer as this is still interesting
   */
  skipped: z.boolean(),
});
export const SurveyQuestionResponseSchema = z.object({
  _id: z.string(),
  createdAt: z.number(),
  lastUpdatedAt: z.number(),
  details: SurveyQuestionResponseDetails,
});
export class SurveyQuestionResponse {
  constructor(data) {
    Object.defineProperty(this, "data", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: data,
    });
  }
  get id() {
    return this.data._id;
  }
}
Object.defineProperty(SurveyQuestionResponse, "parse", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: (data) =>
    new SurveyQuestionResponse(SurveyQuestionResponseSchema.parse(data)),
});
