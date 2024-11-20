import type { AppContext } from "../../app-context/appContext.js";
import type { SurveyQuestionsRepo } from "./surveyQuestions/SurveyQuestionsRepo.js";
import type { UnitsRepo } from "./units/UnitsRepo.js";
import type { UsersRepo } from "./users/UsersRepo.js";
export declare class Repos {
  readonly appContext: AppContext;
  readonly users: UsersRepo;
  readonly surveyQuestions: SurveyQuestionsRepo;
  readonly units: UnitsRepo;
  constructor(appContext: AppContext);
  static create: () => Repos;
}
//# sourceMappingURL=Repos.d.ts.map
