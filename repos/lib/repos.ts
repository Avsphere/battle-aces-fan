import { appContext, AppContext } from "../../app-context/appContext.ts";
import { UsersRepo } from "./users/UsersRepo.ts";



export class Repos {
    readonly users : UsersRepo

    constructor(private readonly appContext : AppContext) {
        this.users = new UsersRepo(appContext)
    }

    static create = () => new Repos(appContext)

}