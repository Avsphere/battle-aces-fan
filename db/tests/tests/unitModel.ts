// tests/unit_model_test.ts


import { Db } from "../../lib/models/Models.ts";
import { UnitDetailsSchema } from "@battle-aces-fan/datacontracts";
import { ObjectId } from "mongodb";
import { assertEquals } from "../lib/testDeps.ts";
import assert from "node:assert";

// Helper function to create unique sample unit details
function createSampleUnitDetails(
  overrides: Partial<UnitDetailsSchema> = {},
): UnitDetailsSchema {
  const id = new ObjectId().toString();
  const a : UnitDetailsSchema = {
    id,
    unitId: Math.floor(Math.random() * 100000),
    slug: `advancedblink`,
    name: `Unit ${id}`,
    unitDescription: "Sample unit description",
    unitLore: "Sample unit lore",
    techTier: {
      slug: `tech-tier-${id}`,
      techTierId: 1,
      name: `Tech Tier ${id}`,
    },
    manufacturer: {
      slug: `manufacturer-${id}`,
      name: `Manufacturer ${id}`,
      description: "Sample manufacturer description",
      primaryColor: {
        hex: "#FFFFFF",
        red: 255,
        green: 255,
        blue: 255,
      },
    },
    unitDomain: {
      slug: `domain-${id}`,
      name: `Domain ${id}`,
    },
    unitAbility: {
      slug: `ability-${id}`,
      name: `Ability ${id}`,
      description: "Sample ability description",
    },
    unitTraits: [
      {
        slug: `trait-${id}`,
        name: `Trait ${id}`,
        color: {
          hex: "#000000",
          red: 0,
          green: 0,
          blue: 0,
        },
      },
    ],
    unitCounters: [
      {
        slug: `counter-${id}`,
        name: `Counter ${id}`,
      },
    ],
    unitCounteredby: [
      {
        slug: `counteredby-${id}`,
        name: `CounteredBy ${id}`,
      },
    ],
    targetsAir: true,
    targetsGround: false,
    statHealth: 100,
    statDamage: 50,
    statSpeed: 10,
    statRange: 5,
    costMatter: 200,
    costEnergy: 100,
    costBandwidth: 50,
    leaderboardStats: {
      "1v1": {
        playrate: 0.5,
        mmrGain: 1000,
        tier: "Gold",
      },
      "2v2": {
        playrate: 0.4,
        mmrGain: null,
        tier: "Silver",
      },
    },
    ...overrides,
  };
  return a;
}

Deno.test("UnitModel methods", async (testCtx) => {
  const db = Db.models();
  const unitModel = db.units; // Assuming Db.models() returns { units: UnitModel, ... }

  await testCtx.step("create and find unit by id", async () => {
    const unitDetails = createSampleUnitDetails();
    const createdUnit = await unitModel.create(unitDetails);

    const foundUnit = await unitModel.findById(createdUnit.id);
    assertEquals(foundUnit.id, createdUnit.id);
    assertEquals(foundUnit.details.name, createdUnit.details.name);
  });

  await testCtx.step("find unit by slug", async () => {
    const unitDetails = createSampleUnitDetails();
    const createdUnit = await unitModel.create(unitDetails);

    const foundUnits = await unitModel.findBySlug(unitDetails.slug);

    const found = foundUnits.find((unit) => unit.id === createdUnit.id);
    assert(found, `Unit with slug ${unitDetails.slug} not found`);
    assertEquals(found.id, createdUnit.id);
    assertEquals(found.details.slug, unitDetails.slug);
  });

  await testCtx.step("update unit by id", async () => {
    const unitDetails = createSampleUnitDetails();
    const createdUnit = await unitModel.create(unitDetails);

    const updatedName = `Updated ${createdUnit.details.name}`;
    const updatedUnit = await unitModel.updateById(createdUnit.id, {
      name: updatedName,
    });

    assertEquals(updatedUnit.details.name, updatedName);
  });

  await testCtx.step("find all units", async () => {
    const unitDetails1 = createSampleUnitDetails();
    const unitDetails2 = createSampleUnitDetails();

    await unitModel.create(unitDetails1);
    await unitModel.create(unitDetails2);

    const allUnits = await unitModel.findAll();
    assertEquals(allUnits.length >= 2, true);
  });

  await testCtx.step("find units by tech tier", async () => {
    const techTierSlug = `tech-tier-${new ObjectId().toString()}`;
    const unitDetails1 = createSampleUnitDetails({
      techTier: { slug: techTierSlug, techTierId: 1, name: "Tech Tier 1" },
    });
    const unitDetails2 = createSampleUnitDetails({
      techTier: { slug: techTierSlug, techTierId: 1, name: "Tech Tier 1" },
    });
    await unitModel.create(unitDetails1);
    await unitModel.create(unitDetails2);

    const units = await unitModel.findByTechTier(techTierSlug);
    assertEquals(units.length >= 2, true);
    units.forEach((unit) => {
      assertEquals(unit.details.techTier.slug, techTierSlug);
    });
  });

  await testCtx.step("delete unit by id", async () => {
    const unitDetails = createSampleUnitDetails();
    const createdUnit = await unitModel.create(unitDetails);

    await unitModel.deleteById(createdUnit.id);
    const maybeUnit = await unitModel.tryFindById(createdUnit.id);

    assertEquals(maybeUnit, null);

  });


  await Db.dispose()
});
