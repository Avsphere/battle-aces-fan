import { z } from "zod";
import { UnitSlugKind } from "./UnitSlugKind.js";
const UnitColorSchema = z.object({
  hex: z.string(),
  red: z.number(),
  green: z.number(),
  blue: z.number(),
});
const UnitManufacturerSchema = z.object({
  slug: z.string(),
  name: z.string(),
  description: z.string(),
  primaryColor: UnitColorSchema,
});
const UnitTechTierSchema = z.object({
  slug: z.string(),
  techTierId: z.number(),
  name: z.string(),
});
const UnitDomainSchema = z.object({
  slug: z.string(),
  name: z.string(),
});
const UnitAbilitySchema = z
  .object({
    slug: z.string(),
    name: z.string(),
    description: z.string(),
  })
  .nullable();
const UnitTraitSchema = z.object({
  slug: z.string(),
  name: z.string(),
  color: UnitColorSchema,
});
const UnitCounterSchema = z.object({
  slug: z.string(),
  name: z.string(),
});
const UnitLeaderboardStatsSchema = z.object({
  "1v1": z.object({
    playrate: z.number(),
    mmrGain: z.number().nullable(),
    tier: z.string(),
  }),
  "2v2": z.object({
    playrate: z.number(),
    mmrGain: z.number().nullable(),
    tier: z.string(),
  }),
});
export const UnitDetailsSchema = z.object({
  id: z.string(),
  unitId: z.number(),
  slug: UnitSlugKind,
  name: z.string(),
  unitDescription: z.string(),
  unitLore: z.string(),
  techTier: UnitTechTierSchema,
  manufacturer: UnitManufacturerSchema,
  unitDomain: UnitDomainSchema,
  unitAbility: UnitAbilitySchema,
  unitTraits: z.array(UnitTraitSchema),
  unitCounters: z.array(UnitCounterSchema),
  unitCounteredby: z.array(UnitCounterSchema),
  targetsAir: z.boolean(),
  targetsGround: z.boolean(),
  statHealth: z.number(),
  statDamage: z.number(),
  statSpeed: z.number(),
  statRange: z.number(),
  costMatter: z.number(),
  costEnergy: z.number(),
  costBandwidth: z.number(),
  leaderboardStats: UnitLeaderboardStatsSchema,
});
export const UnitSchema = z.object({
  _id: z.string(),
  createdAt: z.number(),
  lastUpdatedAt: z.number(),
  details: UnitDetailsSchema,
});
export class Unit {
  constructor(data) {
    Object.defineProperty(this, "data", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: data,
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
Object.defineProperty(Unit, "parse", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: (data) => {
    return new Unit(UnitSchema.parse(data));
  },
});
