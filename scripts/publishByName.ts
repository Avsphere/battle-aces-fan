import chalk from "chalk";
import { DenoBuildTooler } from "./lib/DenoBuildTooler.ts";
import { DenoMonorepoPublishUtils } from "./lib/DenoMonorepoPublishUtils.ts";



const publishClient = new DenoMonorepoPublishUtils()

const allTools = await publishClient.getAllModuleBuildNpmTools()
const tools = await publishClient.createAggregateBuildNpmTools(allTools)

// get name from args
const name = Deno.args[0]


const m = tools.findToolByName(name)

console.log(chalk.blueBright('Found module to publish',  m.buildOptionsUpdater.getPackageName(), '. Current version (pre bump):', m.buildOptionsUpdater.getCurrentVersion()))
const fullTooler = await DenoBuildTooler()

await fullTooler.updateByName(name)

console.log(chalk.blueBright("Starting to publish", name))
await fullTooler.publishByName(name)


