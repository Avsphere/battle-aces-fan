import { Repos } from "../../Repos.ts";
import { SurveyQuestionModel } from "../../../../db/lib/models/lib/SurveyQuestionModel.ts";

export type SurveyQuestionRepo = ReturnType<typeof SurveyQuestionRepo>
export const SurveyQuestionRepo = (repos : Repos) => {
    const appContext = repos.appContext
    const create = async(params: Parameters<SurveyQuestionModel['create']>[0]) => {
        return await appContext.models.surveyQuestions.create(params)
    }

    const createMany = async(params: Parameters<SurveyQuestionModel['create']>[0][]) => {
        return await Promise.all(params.map(async (param) => await appContext.models.surveyQuestions.create(param)))
    }

    const deleteAll = async() => {
        return await appContext.models.surveyQuestions.deleteAll()
    }

    const findById = async(params: Parameters<SurveyQuestionModel['findById']>[0]) => {
        return await appContext.models.surveyQuestions.findById(params)
    }

    const findByKind = async(params: Parameters<SurveyQuestionModel['findByKind']>[0]) => {
        return await appContext.models.surveyQuestions.findByKind(params)
    }

    const findAll = async() => {
        return await appContext.models.surveyQuestions.findAll()
    }

    return {
        createMany,
        create,
        deleteAll,
        findById,
        findByKind,
        findAll
    }
}