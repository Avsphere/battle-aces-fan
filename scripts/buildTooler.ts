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

        await modules.saveAllBuildOptions()
        
        for (const module of modules.buildTools) {
            const currentNpmBuildOptionsVersion = module.buildOptionsUpdater.getCurrentVersion()
            await module.setModuleDenoJsonVersion(currentNpmBuildOptionsVersion)
        }

    };

    return {
        updateAll
    }
};
