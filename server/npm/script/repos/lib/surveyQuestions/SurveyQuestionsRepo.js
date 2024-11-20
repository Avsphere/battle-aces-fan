"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SurveyQuestionsRepo = void 0;
const SurveyQuestionResponseRepo_js_1 = require("./lib/SurveyQuestionResponseRepo.js");
const SurveyQuestionTagMapRepo_js_1 = require("./lib/SurveyQuestionTagMapRepo.js");
const SurveyQuestionRepo_js_1 = require("./lib/SurveyQuestionRepo.js");
class SurveyQuestionsRepo {
    constructor(repos) {
        Object.defineProperty(this, "repos", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: repos
        });
        Object.defineProperty(this, "questions", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "responses", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "tagMap", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.questions = (0, SurveyQuestionRepo_js_1.SurveyQuestionRepo)(repos);
        this.responses = (0, SurveyQuestionResponseRepo_js_1.SurveyQuestionResponseRepo)(repos);
        this.tagMap = (0, SurveyQuestionTagMapRepo_js_1.SurveyQuestionTagMapRepo)(repos);
    }
}
exports.SurveyQuestionsRepo = SurveyQuestionsRepo;
