import { appContext, AppContext } from '@battle-aces-fan/app-context'
import { Repos } from "../repos.ts";
import { UserModel } from "../../../db/mod.ts";
import { SurveyQuestionResponseModel } from "../../../db/lib/models/lib/SurveyQuestionResponseModel.ts";

export class UsersRepo {
    constructor(private readonly repos : Repos) {
    }

    create = async() => {
        return await this.repos.appContext.models.users.create()
    }

    findById = async(params : Parameters<UserModel['findById']>[0]) => {
        return await this.repos.appContext.models.users.findById(params)
    }

    findByUsername = async(params : Parameters<UserModel['findByBattleAcesUsername']>[0]) => {
        return await this.repos.appContext.models.users.findByBattleAcesUsername
    }
    findAll = async() => {
        return await this.repos.appContext.models.users.findAll()
    }

    // wraps SurveyQuestionResponse model method
    answerSurveyQuestion = async(response : Parameters<SurveyQuestionResponseModel['create']>[0]) => {
        return await this.repos.surveyQuestions.responses.create(response)
    }

    findAllResponses = async(userId : string) => {
        return await this.repos.appContext.models.surveyQuestionResponses.findAllByUser(userId)
    }

    static create = (repos : Repos) => new UsersRepo(repos)

}