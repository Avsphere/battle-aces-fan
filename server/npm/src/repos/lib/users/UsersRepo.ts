import type { AppContext, appContext } from "@battle-aces-fan/app-context";
import type { Repos } from "../Repos.js";
import type { UserModel } from "../../../db/mod.js";
import type { SurveyQuestionResponseModel } from "../../../db/lib/models/lib/SurveyQuestionResponseModel.js";

export class UsersRepo {
  constructor(private readonly repos: Repos) {
  }

  create = async () => {
    return await this.repos.appContext.models.users.create();
  };

  findById = async (params: Parameters<UserModel["findById"]>[0]) => {
    return await this.repos.appContext.models.users.findById(params);
  };

  findByUsername = async (
    params: Parameters<UserModel["findByBattleAcesUsername"]>[0],
  ) => {
    return await this.repos.appContext.models.users.findByBattleAcesUsername;
  };
  findAll = async () => {
    return await this.repos.appContext.models.users.findAll();
  };

  // wraps SurveyQuestionResponse model method
  answerSurveyQuestion = async (
    response: Parameters<SurveyQuestionResponseModel["create"]>[0],
  ) => {
    const questionId = response.details.questionId;
    const question = await this.repos.surveyQuestions.questions.findById(
      questionId,
    );

    // make sure tags user selected are valid
    const questionTags = question.details.tags;
    const responseTags = response.details.tags;

    for (const tag of responseTags) {
      if (!questionTags.includes(tag)) {
        throw new Error(
          `user supplies invalid response tag: ${tag}. Response : ${
            JSON.stringify(response)
          }`,
        );
      }
    }

    return await this.repos.surveyQuestions.responses.create(response);
  };

  findAllResponses = async (userId: string) => {
    return await this.repos.appContext.models.surveyQuestionResponses
      .findAllByUser(userId);
  };

  findAllUnansweredQuestions = async (userId: string) => {
    const responses = await this.findAllResponses(userId);
    const responseQuestionIds = responses.map((r) => r.data.details.questionId);
    const questions = await this.repos.appContext.models.surveyQuestions
      .findAll();

    const unanswered = questions.filter((q) =>
      !responseQuestionIds.includes(q.id)
    );

    return unanswered;
  };

  static create = (repos: Repos) => new UsersRepo(repos);
}
