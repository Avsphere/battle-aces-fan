import { generatedTagMoodMap } from "@battle-aces-fan/datacontracts";
import { SurveyQuestionTagMap } from "../../../../datacontracts/schemas/SurveyQuestionTagMap.js";
import { Repos } from "../../Repos.js";


export type SurveyQuestionTagMapRepo = ReturnType<typeof SurveyQuestionTagMapRepo>
export const SurveyQuestionTagMapRepo = (repos : Repos) => {
    const appContext = repos.appContext


    const getTagMoodMap = async() => {
        return generatedTagMoodMap
    }


    return {
        getTagMoodMap
    }


}