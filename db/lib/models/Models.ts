import { MongoClient } from "mongodb";
import type assert from "node:assert";
import { UserModel } from "./lib/UserModel.ts";
import { ConfigProvider } from "@battle-aces-fan/config-provider";
import { SurveyQuestionModel } from "./lib/SurveyQuestionModel.ts";
import { SurveyQuestionResponseModel } from "./lib/SurveyQuestionResponseModel.ts";
import { SurveyQuestionTagMapModel } from "./lib/SurveyQuestionTagMapModel.ts";
import { UnitModel } from "./lib/UnitModel.ts";

export type Models = ReturnType<typeof Models>;

export const Models = (client: MongoClient) => {
  const db = client.db("battle-aces-fan");

  const users = UserModel.create(db);
  const surveyQuestions = SurveyQuestionModel.create(db);
  const surveyQuestionResponses = SurveyQuestionResponseModel.create(db);
  const surveyQuestionTagMap = SurveyQuestionTagMapModel.create(db);
  const units = UnitModel.create(db);
  return {
    users,
    units,
    surveyQuestions,
    surveyQuestionResponses,
    surveyQuestionTagMap,
  };
};

let clientInstance: MongoClient | null = null;

export const Db = {
  dispose: async () => {
    if (clientInstance) {
      await clientInstance.close();
      clientInstance = null;
    }
  },
  models: (maybeConnectionString?: string): Models => {
    if (!clientInstance) {
      const connectionString = maybeConnectionString ||
        ConfigProvider.config.MONGO_CONNECTION_STRING;
      clientInstance = new MongoClient(connectionString);
    }

    return Models(clientInstance);
  },
};
