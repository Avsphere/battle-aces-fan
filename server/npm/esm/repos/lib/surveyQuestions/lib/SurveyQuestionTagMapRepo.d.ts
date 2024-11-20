import type { Repos } from "../../Repos.js";
export type SurveyQuestionTagMapRepo = ReturnType<
  typeof SurveyQuestionTagMapRepo
>;
export declare const SurveyQuestionTagMapRepo: (repos: Repos) => {
  getTagMoodMap: () => Promise<Record<string, "neutral" | "happy" | "angry">>;
};
//# sourceMappingURL=SurveyQuestionTagMapRepo.d.ts.map
