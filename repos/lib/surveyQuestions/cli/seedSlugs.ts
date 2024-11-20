import chalk from "chalk";
import { getPathOfManuallyCreatedMatchupQuestions, readCurrentManuallyCreatedMatchupQuestions } from "./lib/questionUtils.ts";
import { repos } from "../../../repos.ts";
import { SurveyQuestion } from "@battle-aces-fan/datacontracts";


console.log(chalk.blueBright(`Pulling all units from db`))


const units = await repos.units.findAll()


const slugs = units.map((unit) => unit.details.slug)

console.log(chalk.blueBright(`Finished pulling all ${slugs.length} units`))

const slugStringAsZodEnum = `export const UnitSlugKind = z.enum(${JSON.stringify(slugs)})`

console.log(chalk.blueBright(`Writing slugs to file`), slugStringAsZodEnum)