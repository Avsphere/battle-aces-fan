import { appContext, AppContext } from "../../app-context/appContext.js";
import { SurveyQuestionsRepo } from "./surveyQuestions/SurveyQuestionsRepo.js";
import { UnitsRepo } from "./units/UnitsRepo.js";
import { UsersRepo } from "./users/UsersRepo.js";



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