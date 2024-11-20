import { MongoClient } from "mongodb";
import { UserModel } from "./lib/UserModel.js";
import { SurveyQuestionModel } from "./lib/SurveyQuestionModel.js";
import { SurveyQuestionResponseModel } from "./lib/SurveyQuestionResponseModel.js";
import { SurveyQuestionTagMapModel } from "./lib/SurveyQuestionTagMapModel.js";
import { UnitModel } from "./lib/UnitModel.js";
export type Models = ReturnType<typeof Models>;
export declare const Models: (client: MongoClient) => {
    users: UserModel;
    units: UnitModel;
    surveyQuestions: SurveyQuestionModel;
    surveyQuestionResponses: SurveyQuestionResponseModel;
    surveyQuestionTagMap: SurveyQuestionTagMapModel;
};
export declare const Db: {
    dispose: () => Promise<void>;
    models: (maybeConnectionString?: string) => Models;
};
//# sourceMappingURL=Models.d.ts.map