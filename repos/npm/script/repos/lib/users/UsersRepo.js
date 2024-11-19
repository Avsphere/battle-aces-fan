"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersRepo = void 0;
const app_context_1 = require("@battle-aces-fan/app-context");
class UsersRepo {
    constructor(appContext) {
        Object.defineProperty(this, "appContext", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: appContext
        });
        Object.defineProperty(this, "create", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: async () => { }
        });
        Object.defineProperty(this, "findById", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: async () => { }
        });
        Object.defineProperty(this, "findAll", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: async () => { }
        });
    }
}
exports.UsersRepo = UsersRepo;
// create question
// submit a response
Object.defineProperty(UsersRepo, "create", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: () => new UsersRepo(app_context_1.appContext)
});
