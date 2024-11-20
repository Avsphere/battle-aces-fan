import type { MongoClient } from "mongodb";
import type { UserModel } from "./lib/UserModel.js";
import type { SurveyQuestionModel } from "./lib/SurveyQuestionModel.js";
import type { SurveyQuestionResponseModel } from "./lib/SurveyQuestionResponseModel.js";
import type { SurveyQuestionTagMapModel } from "./lib/SurveyQuestionTagMapModel.js";
import type { UnitModel } from "./lib/UnitModel.js";
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
