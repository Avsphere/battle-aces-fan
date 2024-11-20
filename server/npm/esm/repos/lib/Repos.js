import { appContext } from "../../app-context/appContext.js";
import { SurveyQuestionsRepo } from "./surveyQuestions/SurveyQuestionsRepo.js";
import { UnitsRepo } from "./units/UnitsRepo.js";
import { UsersRepo } from "./users/UsersRepo.js";
export class Repos {
  constructor(appContext) {
    Object.defineProperty(this, "appContext", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: appContext,
    });
    Object.defineProperty(this, "users", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0,
    });
    Object.defineProperty(this, "surveyQuestions", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0,
    });
    Object.defineProperty(this, "units", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0,
    });
    this.users = new UsersRepo(this);
    this.surveyQuestions = new SurveyQuestionsRepo(this);
    this.units = new UnitsRepo(this);
  }
}
Object.defineProperty(Repos, "create", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: () => new Repos(appContext),
});
