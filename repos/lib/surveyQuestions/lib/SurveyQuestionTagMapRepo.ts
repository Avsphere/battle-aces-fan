import { generatedTagMoodMap } from "@battle-aces-fan/datacontracts";
import type { SurveyQuestionTagMap } from "../../../../datacontracts/schemas/SurveyQuestionTagMap.ts";
import type { Repos } from "../../Repos.ts";

export type SurveyQuestionTagMapRepo = ReturnType<
  typeof SurveyQuestionTagMapRepo
>;
export const SurveyQuestionTagMapRepo = (repos: Repos) => {
  const appContext = repos.appContext;

  const getTagMoodMap = async () => {
    return await generatedTagMoodMap;
  };

  return {
    getTagMoodMap,
  };
};
