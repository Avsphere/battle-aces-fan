import { Repos } from "../Repos.js";
import { SurveyQuestionResponseRepo } from "./lib/SurveyQuestionResponseRepo.js";
import { SurveyQuestionTagMapRepo } from "./lib/SurveyQuestionTagMapRepo.js";
import { SurveyQuestionRepo } from "./lib/SurveyQuestionRepo.js";
export declare class SurveyQuestionsRepo {
    private readonly repos;
    readonly questions: SurveyQuestionRepo;
    readonly responses: SurveyQuestionResponseRepo;
    readonly tagMap: SurveyQuestionTagMapRepo;
    constructor(repos: Repos);
}
//# sourceMappingURL=SurveyQuestionsRepo.d.ts.map