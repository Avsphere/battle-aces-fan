import type { SurveyQuestionResponseModel } from "../../../../db/lib/models/lib/SurveyQuestionResponseModel.ts";
import type { Repos } from "../../Repos.ts";

export type SurveyQuestionResponseRepo = ReturnType<
  typeof SurveyQuestionResponseRepo
>;
export const SurveyQuestionResponseRepo = (repos: Repos) => {
  const appContext = repos.appContext;

  const findByQuestionKind = async (
    params: Parameters<SurveyQuestionResponseModel["findByQuestionKind"]>[0],
  ) => {
    return await appContext.models.surveyQuestionResponses.findByQuestionKind(
      params,
    );
  };

  const findByUser = async (
    params: Parameters<SurveyQuestionResponseModel["findAllByUser"]>[0],
  ) => {
    return await appContext.models.surveyQuestionResponses.findAllByUser(
      params,
    );
  };

  const create = async (
    params: Parameters<SurveyQuestionResponseModel["create"]>[0],
  ) => {
    return await appContext.models.surveyQuestionResponses.create(params);
  };

  const findAll = async () => {
    return await appContext.models.surveyQuestionResponses.findAll();
  };

  return {
    findAll,
    findByQuestionKind,
    findByUser,
    create,
  };
};
