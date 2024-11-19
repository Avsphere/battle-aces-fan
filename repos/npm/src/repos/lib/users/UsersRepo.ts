import { appContext, AppContext } from '@battle-aces-fan/app-context'

export class UsersRepo {
    constructor(private readonly appContext : AppContext) {}

    create = async() => {}

    findById = async() => {}

    findAll = async() => {}

    // create question

    // submit a response

    static create = () => new UsersRepo(appContext)

}