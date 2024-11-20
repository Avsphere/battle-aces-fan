import { AppContext } from "../../app-context/appContext.js";
import { SurveyQuestionsRepo } from "./surveyQuestions/SurveyQuestionsRepo.js";
import { UnitsRepo } from "./units/UnitsRepo.js";
import { UsersRepo } from "./users/UsersRepo.js";
export declare class Repos {
    readonly appContext: AppContext;
    readonly users: UsersRepo;
    readonly surveyQuestions: SurveyQuestionsRepo;
    readonly units: UnitsRepo;
    constructor(appContext: AppContext);
    static create: () => Repos;
}
//# sourceMappingURL=Repos.d.ts.map