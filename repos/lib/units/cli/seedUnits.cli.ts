import type { parseArgs } from "jsr:@std/cli/parse-args";
import { getUnitSeedData } from "./lib/getUnitSeedData.ts";
import type { appContext } from "../../../../app-context/appContext.ts";
import { Repos } from "../../Repos.ts";
import chalk from "chalk";
import type { ConfigProvider } from "@battle-aces-fan/config-provider";

// const flags = parseArgs(Deno.args, {
//   boolean: ["help"],
//   string: ["version"],
//   default: { color: true },
// });

const repos = Repos.create();
await repos.units.deleteAll();
console.log(chalk.green("Deleted all current units"));

const unitData = await getUnitSeedData();
console.log(chalk.green(`Seeding ${unitData.length} units`));

if (unitData.length === 0) {
  console.log(chalk.green("No new units to seed"));
  Deno.exit(0);
}

const createdUnits = await repos.units.createMany(unitData);

console.log(chalk.green(`Created ${createdUnits.length} units`));
Deno.exit(0);
