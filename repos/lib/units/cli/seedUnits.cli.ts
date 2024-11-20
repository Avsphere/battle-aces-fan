import { parseArgs } from "jsr:@std/cli/parse-args";
import { getUnitSeedData } from "./lib/getUnitSeedData.ts";
import { appContext } from "../../../../app-context/appContext.ts";
import { Repos } from "../../repos.ts";
import chalk from "chalk";
import { ConfigProvider } from "@battle-aces-fan/config-provider";


// const flags = parseArgs(Deno.args, {
//   boolean: ["help"],
//   string: ["version"],
//   default: { color: true },
// });

const unitData = await getUnitSeedData()

const repos = Repos.create()

const found = await repos.units.findAll()


const withoutExistingUnits = unitData.filter( unit => found.find( u => u.details.id === unit.id) === undefined)

const existingUnitDuplicates = unitData.filter( unit => found.find( u => u.details.id === unit.id) !== undefined)

if (existingUnitDuplicates.length > 0) {
  console.log(chalk.yellow(`The following ${existingUnitDuplicates} units already exist in the database:`), existingUnitDuplicates.map(u => u.name))
}



if (withoutExistingUnits.length === 0) {
  console.log(chalk.green("No new units to seed"))
  Deno.exit(0)
}


const createdUnits = await repos.units.createMany(withoutExistingUnits)

console.log(chalk.green(`Created ${createdUnits.length} units`))
Deno.exit(0)