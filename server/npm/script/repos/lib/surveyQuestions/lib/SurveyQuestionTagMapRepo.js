"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SurveyQuestionTagMapRepo = void 0;
const datacontracts_1 = require("@battle-aces-fan/datacontracts");
const SurveyQuestionTagMapRepo = (repos) => {
  const appContext = repos.appContext;
  const getTagMoodMap = async () => {
    return datacontracts_1.generatedTagMoodMap;
  };
  return {
    getTagMoodMap,
  };
};
exports.SurveyQuestionTagMapRepo = SurveyQuestionTagMapRepo;
