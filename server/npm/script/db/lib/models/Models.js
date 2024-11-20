"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Db = exports.Models = void 0;
const mongodb_1 = require("mongodb");
const UserModel_js_1 = require("./lib/UserModel.js");
const config_provider_1 = require("@battle-aces-fan/config-provider");
const SurveyQuestionModel_js_1 = require("./lib/SurveyQuestionModel.js");
const SurveyQuestionResponseModel_js_1 = require("./lib/SurveyQuestionResponseModel.js");
const SurveyQuestionTagMapModel_js_1 = require("./lib/SurveyQuestionTagMapModel.js");
const UnitModel_js_1 = require("./lib/UnitModel.js");
const Models = (client) => {
    const db = client.db('battle-aces-fan');
    const users = UserModel_js_1.UserModel.create(db);
    const surveyQuestions = SurveyQuestionModel_js_1.SurveyQuestionModel.create(db);
    const surveyQuestionResponses = SurveyQuestionResponseModel_js_1.SurveyQuestionResponseModel.create(db);
    const surveyQuestionTagMap = SurveyQuestionTagMapModel_js_1.SurveyQuestionTagMapModel.create(db);
    const units = UnitModel_js_1.UnitModel.create(db);
    return {
        users,
        units,
        surveyQuestions,
        surveyQuestionResponses,
        surveyQuestionTagMap
    };
};
exports.Models = Models;
let clientInstance = null;
exports.Db = {
    dispose: async () => {
        if (clientInstance) {
            await clientInstance.close();
            clientInstance = null;
        }
    },
    models: (maybeConnectionString) => {
        if (!clientInstance) {
            const connectionString = maybeConnectionString ||
                config_provider_1.ConfigProvider.config.MONGO_CONNECTION_STRING;
            clientInstance = new mongodb_1.MongoClient(connectionString);
        }
        return (0, exports.Models)(clientInstance);
    },
};
