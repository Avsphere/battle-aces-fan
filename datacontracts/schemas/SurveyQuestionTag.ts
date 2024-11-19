import z from "zod";



export const SurveyQuestionTag = z.enum([
    'fun',
])
export type SurveyQuestionTag = z.infer<typeof SurveyQuestionTag>