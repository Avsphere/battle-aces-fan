import { generatedTagMoodMap } from "@battle-aces-fan/datacontracts";
export const SurveyQuestionTagMapRepo = (repos) => {
  const appContext = repos.appContext;
  const getTagMoodMap = async () => {
    return generatedTagMoodMap;
  };
  return {
    getTagMoodMap,
  };
};
