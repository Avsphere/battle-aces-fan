import { appContext, AppContext } from "../../app-context/appContext.ts";
import { SurveyQuestionsRepo } from "./surveyQuestions/SurveyQuestionsRepo.ts";
import { UnitsRepo } from "./units/UnitsRepo.ts";
import { UsersRepo } from "./users/UsersRepo.ts";



export class Repos {
    readonly users : UsersRepo
    readonly surveyQuestions : SurveyQuestionsRepo
    readonly units : UnitsRepo

    constructor(readonly appContext : AppContext) {
        this.users = new UsersRepo(this)
        this.surveyQuestions = new SurveyQuestionsRepo(this)
        this.units = new UnitsRepo(this)
    }

    static create = () => new Repos(appContext)

}