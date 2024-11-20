import { Repos } from "../Repos.js";
import { UnitModel } from "../../../db/lib/models/lib/UnitModel.js";
export declare class UnitsRepo {
    private readonly repos;
    constructor(repos: Repos);
    create: (params: Parameters<UnitModel["create"]>[0]) => Promise<import("@battle-aces-fan/datacontracts").Unit>;
    createMany: (params: Parameters<UnitModel["create"]>[0][]) => Promise<import("@battle-aces-fan/datacontracts").Unit[]>;
    findById: (params: Parameters<UnitModel["findById"]>[0]) => Promise<import("@battle-aces-fan/datacontracts").Unit>;
    findAll: () => Promise<import("@battle-aces-fan/datacontracts").Unit[]>;
    deleteAll: () => Promise<void>;
    static create: (repos: Repos) => UnitsRepo;
}
//# sourceMappingURL=UnitsRepo.d.ts.map