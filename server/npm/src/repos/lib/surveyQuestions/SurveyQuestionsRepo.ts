import type { Repos } from "../Repos.js";
import { SurveyQuestionResponseRepo } from "./lib/SurveyQuestionResponseRepo.js";
import { SurveyQuestionTagMapRepo } from "./lib/SurveyQuestionTagMapRepo.js";
import { SurveyQuestionRepo } from "./lib/SurveyQuestionRepo.js";

export class SurveyQuestionsRepo {
  readonly questions: SurveyQuestionRepo;
  readonly responses: SurveyQuestionResponseRepo;
  readonly tagMap: SurveyQuestionTagMapRepo;

  constructor(private readonly repos: Repos) {
    this.questions = SurveyQuestionRepo(repos);
    this.responses = SurveyQuestionResponseRepo(repos);
    this.tagMap = SurveyQuestionTagMapRepo(repos);
  }
}
