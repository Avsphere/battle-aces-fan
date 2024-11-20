"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Unit = exports.UnitSchema = exports.UnitDetailsSchema = void 0;
const zod_1 = require("zod");
const UnitSlugKind_js_1 = require("./UnitSlugKind.js");
const UnitColorSchema = zod_1.z.object({
    hex: zod_1.z.string(),
    red: zod_1.z.number(),
    green: zod_1.z.number(),
    blue: zod_1.z.number(),
});
const UnitManufacturerSchema = zod_1.z.object({
    slug: zod_1.z.string(),
    name: zod_1.z.string(),
    description: zod_1.z.string(),
    primaryColor: UnitColorSchema,
});
const UnitTechTierSchema = zod_1.z.object({
    slug: zod_1.z.string(),
    techTierId: zod_1.z.number(),
    name: zod_1.z.string(),
});
const UnitDomainSchema = zod_1.z.object({
    slug: zod_1.z.string(),
    name: zod_1.z.string(),
});
const UnitAbilitySchema = zod_1.z
    .object({
    slug: zod_1.z.string(),
    name: zod_1.z.string(),
    description: zod_1.z.string(),
})
    .nullable();
const UnitTraitSchema = zod_1.z.object({
    slug: zod_1.z.string(),
    name: zod_1.z.string(),
    color: UnitColorSchema,
});
const UnitCounterSchema = zod_1.z.object({
    slug: zod_1.z.string(),
    name: zod_1.z.string(),
});
const UnitLeaderboardStatsSchema = zod_1.z.object({
    "1v1": zod_1.z.object({
        playrate: zod_1.z.number(),
        mmrGain: zod_1.z.number().nullable(),
        tier: zod_1.z.string(),
    }),
    "2v2": zod_1.z.object({
        playrate: zod_1.z.number(),
        mmrGain: zod_1.z.number().nullable(),
        tier: zod_1.z.string(),
    }),
});
exports.UnitDetailsSchema = zod_1.z.object({
    id: zod_1.z.string(),
    unitId: zod_1.z.number(),
    slug: UnitSlugKind_js_1.UnitSlugKind,
    name: zod_1.z.string(),
    unitDescription: zod_1.z.string(),
    unitLore: zod_1.z.string(),
    techTier: UnitTechTierSchema,
    manufacturer: UnitManufacturerSchema,
    unitDomain: UnitDomainSchema,
    unitAbility: UnitAbilitySchema,
    unitTraits: zod_1.z.array(UnitTraitSchema),
    unitCounters: zod_1.z.array(UnitCounterSchema),
    unitCounteredby: zod_1.z.array(UnitCounterSchema),
    targetsAir: zod_1.z.boolean(),
    targetsGround: zod_1.z.boolean(),
    statHealth: zod_1.z.number(),
    statDamage: zod_1.z.number(),
    statSpeed: zod_1.z.number(),
    statRange: zod_1.z.number(),
    costMatter: zod_1.z.number(),
    costEnergy: zod_1.z.number(),
    costBandwidth: zod_1.z.number(),
    leaderboardStats: UnitLeaderboardStatsSchema,
});
exports.UnitSchema = zod_1.z.object({
    _id: zod_1.z.string(),
    createdAt: zod_1.z.number(),
    lastUpdatedAt: zod_1.z.number(),
    details: exports.UnitDetailsSchema
});
class Unit {
    constructor(data) {
        Object.defineProperty(this, "data", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: data
        });
    }
    get techTierId() {
        return this.data.details.techTier.techTierId;
    }
    get id() {
        return this.data._id;
    }
    get details() {
        return this.data.details;
    }
}
exports.Unit = Unit;
Object.defineProperty(Unit, "parse", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: (data) => {
        return new Unit(exports.UnitSchema.parse(data));
    }
});
