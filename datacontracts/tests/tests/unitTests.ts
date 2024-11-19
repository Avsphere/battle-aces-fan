import { UnitDetailsSchema, UnitSchema } from "../../schemas/UnitSchema.ts";
import { assertEquals } from "../lib/testDeps.ts";
import { unitTestdata } from "../lib/unitTestData.ts";

Deno.test("simple test", () => {
  const x = 1 + 2;
  assertEquals(x, 3);
});

Deno.test("can parse units", () => {
  const data = unitTestdata.data;

  data.forEach((unit) => {
    UnitDetailsSchema.parse(unit);
  });
});
