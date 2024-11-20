import type { Repos } from "../Repos.ts";
import { SurveyQuestionResponseRepo } from "./lib/SurveyQuestionResponseRepo.ts";
import { SurveyQuestionTagMapRepo } from "./lib/SurveyQuestionTagMapRepo.ts";
import { SurveyQuestionRepo } from "./lib/SurveyQuestionRepo.ts";

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
