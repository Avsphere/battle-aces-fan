export const SurveyQuestionResponseRepo = (repos) => {
    const appContext = repos.appContext;
    const findByQuestionKind = async (params) => {
        return await appContext.models.surveyQuestionResponses.findByQuestionKind(params);
    };
    const findByUser = async (params) => {
        return await appContext.models.surveyQuestionResponses.findAllByUser(params);
    };
    const create = async (params) => {
        return await appContext.models.surveyQuestionResponses.create(params);
    };
    const findAll = async () => {
        return await appContext.models.surveyQuestionResponses.findAll();
    };
    return {
        findAll,
        findByQuestionKind,
        findByUser,
        create
    };
};
