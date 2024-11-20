import { SurveyQuestionTagMap } from "../../../../datacontracts/schemas/SurveyQuestionTagMap.ts";
import { Repos } from "../../repos.ts";


export type SurveyQuestionTagMapRepo = ReturnType<typeof SurveyQuestionTagMapRepo>
export const SurveyQuestionTagMapRepo = (repos : Repos) => {
    const appContext = repos.appContext
    const replaceTagMap = async(data: SurveyQuestionTagMap) => {
        return await appContext.models.surveyQuestionTagMap.update(data)
    }

    const getTagMap = async() => {
        return await appContext.models.surveyQuestionTagMap.getSingleton()
    }


    return {
        replaceTagMap,
        getTagMap
    }


}