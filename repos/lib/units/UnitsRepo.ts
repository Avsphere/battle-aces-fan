import { appContext, AppContext } from '@battle-aces-fan/app-context'
import { Repos } from "../repos.ts";
import { UnitModel } from "../../../db/lib/models/lib/UnitModel.ts";

export class UnitsRepo {
    constructor(private readonly repos : Repos) {
    }

    create = async(params : Parameters<UnitModel['create']>[0]) => {
        return await this.repos.appContext.models.units.create(params)
    }

    createMany = async(params : Parameters<UnitModel['create']>[0][]) => {
        return await Promise.all(params.map(p => this.create(p)))
    }

    findById = async(params : Parameters<UnitModel['findById']>[0]) => {
        return await this.repos.appContext.models.units.findById(params)
    }


    findAll = async() => {
        return await this.repos.appContext.models.units.findAll()
    }



    static create = (repos : Repos) => new UnitsRepo(repos)

}