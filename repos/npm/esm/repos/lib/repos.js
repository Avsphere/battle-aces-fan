import { appContext } from "../../app-context/appContext.js";
import { UsersRepo } from "./users/UsersRepo.js";
export class Repos {
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
        this.users = new UsersRepo(appContext);
    }
}
Object.defineProperty(Repos, "create", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: () => new Repos(appContext)
});
