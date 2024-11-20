import type { Repos } from "../Repos.js";
import type { SurveyQuestionResponseRepo } from "./lib/SurveyQuestionResponseRepo.js";
import type { SurveyQuestionTagMapRepo } from "./lib/SurveyQuestionTagMapRepo.js";
import type { SurveyQuestionRepo } from "./lib/SurveyQuestionRepo.js";
export declare class SurveyQuestionsRepo {
  private readonly repos;
  readonly questions: SurveyQuestionRepo;
  readonly responses: SurveyQuestionResponseRepo;
  readonly tagMap: SurveyQuestionTagMapRepo;
  constructor(repos: Repos);
}
//# sourceMappingURL=SurveyQuestionsRepo.d.ts.map
