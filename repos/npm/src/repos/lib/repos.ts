import { appContext, AppContext } from "../../app-context/appContext.js";
import { UsersRepo } from "./users/UsersRepo.js";



export class Repos {
    readonly users : UsersRepo

    constructor(private readonly appContext : AppContext) {
        this.users = new UsersRepo(appContext)
    }

    static create = () => new Repos(appContext)

}