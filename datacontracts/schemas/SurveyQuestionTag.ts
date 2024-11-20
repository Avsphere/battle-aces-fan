import z from "zod";

export const VERY_HAPPY_TAG_KINDS = ['Fun', 'Feels great', 'Well designed'] as const
export const SAD_TAG_KINDS = ['Frustrating', 'Buggy', 'Confusing', 'Looks bad', 'Overpowered', 'Underpowered'] as const
export const OTHER_TAG_KINDS = ['Other', 'Have not used the unit'] as const

export const TAG_KINDS = [...VERY_HAPPY_TAG_KINDS, ...SAD_TAG_KINDS, ...OTHER_TAG_KINDS] as const

export const SurveyQuestionTagKind = z.enum(TAG_KINDS)
export type SurveyQuestionTagKind = z.infer<typeof SurveyQuestionTagKind>


export const SurveyQuestionTag = z.object({
    kind : SurveyQuestionTagKind,
    /**
     * where the value is the thing we may change
     */
    value : z.string(),
})
export type SurveyQuestionTag = z.infer<typeof SurveyQuestionTag>

