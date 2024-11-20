"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Repos = void 0;
const appContext_js_1 = require("../../app-context/appContext.js");
const SurveyQuestionsRepo_js_1 = require("./surveyQuestions/SurveyQuestionsRepo.js");
const UnitsRepo_js_1 = require("./units/UnitsRepo.js");
const UsersRepo_js_1 = require("./users/UsersRepo.js");
class Repos {
    constructor(appContext) {
        Object.defineProperty(this, "appContext", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: appContext
        });
        Object.defineProperty(this, "users", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "surveyQuestions", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "units", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.users = new UsersRepo_js_1.UsersRepo(this);
        this.surveyQuestions = new SurveyQuestionsRepo_js_1.SurveyQuestionsRepo(this);
        this.units = new UnitsRepo_js_1.UnitsRepo(this);
    }
}
exports.Repos = Repos;
Object.defineProperty(Repos, "create", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: () => new Repos(appContext_js_1.appContext)
});
