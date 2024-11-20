import { generatedTagMoodMap } from "@battle-aces-fan/datacontracts";
import type { SurveyQuestionTagMap } from "../../../../datacontracts/schemas/SurveyQuestionTagMap.js";
import type { Repos } from "../../Repos.js";

export type SurveyQuestionTagMapRepo = ReturnType<
  typeof SurveyQuestionTagMapRepo
>;
export const SurveyQuestionTagMapRepo = (repos: Repos) => {
  const appContext = repos.appContext;

  const getTagMoodMap = async () => {
    return generatedTagMoodMap;
  };

  return {
    getTagMoodMap,
  };
};
