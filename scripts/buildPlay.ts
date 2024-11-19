import { DenoBuildTooler } from "./buildTooler.ts";
import { DenoMonorepoPublishUtils } from "./DenoMonorepoPublishUtils.ts";



// const publishClient = new DenoMonorepoPublishUtils()

// const allTools = await publishClient.getAllModuleBuildNpmTools()
// const tools = await publishClient.createAggregateBuildNpmTools(allTools)


// const dbModule = tools.findToolByName("db")

// console.log('db version', dbModule.buildOptionsUpdater.getCurrentVersion())

// await dbModule.buildOptionsUpdater.publishModulePublic()


// tools.bumpAllVersions()
// console.log('db version', dbModule.buildOptionsUpdater.getCurrentVersion())

// console.log('currents deps', dbModule.buildOptionsUpdater.getPackageDependencies())


// const withUpdated = await tools.updateNpmPackageDependencies(dbModule)

// console.log(dbModule.buildOptionsUpdater.getPackageDependencies())


// await dbModule.buildOptionsUpdater.saveBuildOptionsToFile()


const tooler = await DenoBuildTooler()

await tooler.updateAll()
await tooler.publishAll()