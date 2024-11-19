import { AppContext } from "../../app-context/appContext.js";
import { UsersRepo } from "./users/UsersRepo.js";
export declare class Repos {
    private readonly appContext;
    readonly users: UsersRepo;
    constructor(appContext: AppContext);
    static create: () => Repos;
}
//# sourceMappingURL=repos.d.ts.map