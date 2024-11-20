export class UsersRepo {
    constructor(repos) {
        Object.defineProperty(this, "repos", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: repos
        });
        Object.defineProperty(this, "create", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: async () => {
                return await this.repos.appContext.models.users.create();
            }
        });
        Object.defineProperty(this, "findById", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: async (params) => {
                return await this.repos.appContext.models.users.findById(params);
            }
        });
        Object.defineProperty(this, "findByUsername", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: async (params) => {
                return await this.repos.appContext.models.users.findByBattleAcesUsername;
            }
        });
        Object.defineProperty(this, "findAll", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: async () => {
                return await this.repos.appContext.models.users.findAll();
            }
        });
        // wraps SurveyQuestionResponse model method
        Object.defineProperty(this, "answerSurveyQuestion", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: async (response) => {
                const questionId = response.details.questionId;
                const question = await this.repos.surveyQuestions.questions.findById(questionId);
                // make sure tags user selected are valid
                const questionTags = question.details.tags;
                const responseTags = response.details.tags;
                for (const tag of responseTags) {
                    if (!questionTags.includes(tag)) {
                        throw new Error(`user supplies invalid response tag: ${tag}. Response : ${JSON.stringify(response)}`);
                    }
                }
                return await this.repos.surveyQuestions.responses.create(response);
            }
        });
        Object.defineProperty(this, "findAllResponses", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: async (userId) => {
                return await this.repos.appContext.models.surveyQuestionResponses.findAllByUser(userId);
            }
        });
        Object.defineProperty(this, "findAllUnansweredQuestions", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: async (userId) => {
                const responses = await this.findAllResponses(userId);
                const responseQuestionIds = responses.map(r => r.data.details.questionId);
                const questions = await this.repos.appContext.models.surveyQuestions.findAll();
                const unanswered = questions.filter(q => !responseQuestionIds.includes(q.id));
                return unanswered;
            }
        });
    }
}
Object.defineProperty(UsersRepo, "create", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: (repos) => new UsersRepo(repos)
});
