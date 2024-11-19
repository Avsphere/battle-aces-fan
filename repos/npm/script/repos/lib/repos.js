"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Repos = void 0;
const appContext_js_1 = require("../../app-context/appContext.js");
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
        this.users = new UsersRepo_js_1.UsersRepo(appContext);
    }
}
exports.Repos = Repos;
Object.defineProperty(Repos, "create", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: () => new Repos(appContext_js_1.appContext)
});
