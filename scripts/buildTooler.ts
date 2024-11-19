import chalk from "chalk";
import { DenoMonorepoPublishUtils } from "./DenoMonorepoPublishUtils.ts";

export const DenoBuildTooler = async () => {
    const utils = new DenoMonorepoPublishUtils();
    const allTools = await utils.getAllModuleBuildNpmTools();
    const modules = await utils.createAggregateBuildNpmTools(allTools);

    const updateAll = async () => {
        modules.bumpAllVersions()

        for (const module of modules.buildTools) {
            await modules.updateNpmPackageDependencies(module)
        }

        console.log(chalk.blueBright('Updated all module dependencies'))

        await modules.saveAllBuildOptions()

        console.log(chalk.blueBright('Saved all build options'))
        
        for (const module of modules.buildTools) {
            const currentNpmBuildOptionsVersion = module.buildOptionsUpdater.getCurrentVersion()
            await module.setModuleDenoJsonVersion(currentNpmBuildOptionsVersion)
        }

        console.log(chalk.blueBright('Updated all module versions'))
    };

    const delayMs = (ms: number) => new Promise(resolve => setTimeout(resolve, ms))


    const publishAll = async () => {
        await updateAll()

        for (const module of modules.buildTools) {
            const currentNpmBuildOptionsVersion = await module.buildOptionsUpdater.publishModulePublic()
            console.log(chalk.blueBright(`Published ${module.buildOptionsUpdater.getPackageName()} version ${module.buildOptionsUpdater.getCurrentVersion()}`))
            await delayMs(10000)
        }
        
    }



    return {
        updateAll,
        publishAll
    }
};
