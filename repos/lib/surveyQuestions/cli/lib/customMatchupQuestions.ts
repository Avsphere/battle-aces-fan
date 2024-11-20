import { SurveyQuestionDetails } from "@battle-aces-fan/datacontracts";
import { UnitSlugKind } from "../../../../../datacontracts/schemas/UnitSlugKind.ts";

const createMatchupQuestion = (
    unitSlug1: UnitSlugKind,
    unitSlug2: UnitSlugKind,
    tags: string[],
): SurveyQuestionDetails => {
    return {
        kind: "basic",
        subKind: "thoughts_on_custom_unit_matchup",
        text: `Thoughts on ${unitSlug1} vs ${unitSlug2}?`,
        tags,
        relevantUnitSlugs: [unitSlug1],
        oppositeUnitSlugs: [unitSlug2],
    };
};

const basicTags = [
    "fun",
    "brutally snowballs",
    "boring",
    "frustrating",
    "low skill expression",
    "high skill expression",
];
export const CUSTOM_MATCHUP_QUESTIONS: SurveyQuestionDetails[] = [
    createMatchupQuestion(
        "kingcrab",
        "butterfly",
        basicTags,
    ),
];
