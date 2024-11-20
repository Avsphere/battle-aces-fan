"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SurveyQuestionRepo = void 0;
const SurveyQuestionRepo = (repos) => {
  const appContext = repos.appContext;
  const create = async (params) => {
    return await appContext.models.surveyQuestions.create(params);
  };
  const createMany = async (params) => {
    return await Promise.all(
      params.map(async (param) =>
        await appContext.models.surveyQuestions.create(param)
      ),
    );
  };
  const deleteAll = async () => {
    return await appContext.models.surveyQuestions.deleteAll();
  };
  const findById = async (params) => {
    return await appContext.models.surveyQuestions.findById(params);
  };
  const findByKind = async (params) => {
    return await appContext.models.surveyQuestions.findByKind(params);
  };
  const findAll = async () => {
    return await appContext.models.surveyQuestions.findAll();
  };
  return {
    createMany,
    create,
    deleteAll,
    findById,
    findByKind,
    findAll,
  };
};
exports.SurveyQuestionRepo = SurveyQuestionRepo;
