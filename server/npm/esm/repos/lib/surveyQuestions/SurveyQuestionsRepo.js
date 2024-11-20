import { SurveyQuestionResponseRepo } from "./lib/SurveyQuestionResponseRepo.js";
import { SurveyQuestionTagMapRepo } from "./lib/SurveyQuestionTagMapRepo.js";
import { SurveyQuestionRepo } from "./lib/SurveyQuestionRepo.js";
export class SurveyQuestionsRepo {
  constructor(repos) {
    Object.defineProperty(this, "repos", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: repos,
    });
    Object.defineProperty(this, "questions", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0,
    });
    Object.defineProperty(this, "responses", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0,
    });
    Object.defineProperty(this, "tagMap", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0,
    });
    this.questions = SurveyQuestionRepo(repos);
    this.responses = SurveyQuestionResponseRepo(repos);
    this.tagMap = SurveyQuestionTagMapRepo(repos);
  }
}
