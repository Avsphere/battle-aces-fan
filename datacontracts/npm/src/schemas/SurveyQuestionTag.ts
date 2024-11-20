import z from "zod";

export const SurveyQuestionTag = z.string();
export type SurveyQuestionTag = z.infer<typeof SurveyQuestionTag>;
