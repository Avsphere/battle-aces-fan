import { build, type BuildOptions, emptyDir } from "@deno/dnt";
import { expandGlob } from "jsr:@std/fs@1/expand-glob";
import { resolve } from "jsr:@std/path@^1.0.7/resolve";

type ModuleBuildTools = Awaited<
    ReturnType<DenoMonorepoPublishUtils["getAllModuleBuildNpmTools"]>
>;
type ModuleBuildTool = ModuleBuildTools["buildTools"][number];

export class DenoMonorepoPublishUtils {
    /**
     * Finds and resolves all the full paths for directories listed in the monorepo deno.json workspace field.
     */
    findModulePaths = async (): Promise<string[]> => {
        const denoJsonPath = resolve("deno.json");
        const denoJsonText = await Deno.readTextFile(denoJsonPath);
        const denoJson = JSON.parse(denoJsonText);
        const workspacePatterns: string[] = denoJson.workspace || [];
        const modulePaths: string[] = [];

        for (const pattern of workspacePatterns) {
            for await (const entry of expandGlob(pattern)) {
                if (entry.isDirectory) {
                    modulePaths.push(entry.path);
                }
            }
        }

        return modulePaths;
    };

    /**
     * Creates build tools and options for a specific module.
     * @param modulePath - The path to the module.
     */
    createModuleBuildNpmTools = async (modulePath: string) => {
        const buildNpmPath = resolve(modulePath, "scripts", "build_npm.ts");
        const buildNpmOptionsPath = resolve(
            modulePath,
            "scripts",
            "buildOptions.ts",
        );

        // Dynamically import the buildOptions
        const buildOptionsModule = await import(
            `file://${buildNpmOptionsPath}`
        );
        const buildNpmOptions: BuildOptions = buildOptionsModule.buildOptions;

        const buildOptionsUpdater = this.createBuildOptionsUpdater(
            buildNpmOptions,
            buildNpmOptionsPath,
        );

        const moduleDenoJsonPath = resolve(modulePath, "deno.json");

        const setModuleDenoJsonVersion = async (version: string) => {
            const denoJsonText = await Deno.readTextFile(moduleDenoJsonPath);
            const denoJson = JSON.parse(denoJsonText);
            denoJson.version = version;
            await Deno.writeTextFile(
                moduleDenoJsonPath,
                JSON.stringify(denoJson, null, 2),
            );
        };

        return {
            moduleDenoJsonPath,
            setModuleDenoJsonVersion,
            modulePath, // Include modulePath for later use
            buildNpmPath,
            buildNpmOptionsPath,
            buildNpmOptions,
            buildOptionsUpdater,
        };
    };

    /**
     * Helper that first uses findModulePaths then gets the tools for each of them.
     */
    getAllModuleBuildNpmTools = async () => {
        const modulePaths = await this.findModulePaths();
        const toolsArray = await Promise.all(
            modulePaths.map((path) => this.createModuleBuildNpmTools(path)),
        );

        // e.g. db
        const findToolByName = (name: string) => {
            const tool = toolsArray.find((tool) => {
                return tool.buildOptionsUpdater.getPackageName() === name;
            });

            if (!tool) {
                const anotherTryToFindTool = toolsArray.find((tool) => {
                    return (
                        tool.buildOptionsUpdater.getPackageName().split("/")
                            .pop() === name
                    );
                });
                if (anotherTryToFindTool) {
                    return anotherTryToFindTool;
                } else {
                    throw new Error(`Tool with name ${name} not found!`);
                }
            }

            return tool;
        };

        return {
            buildTools: toolsArray,
            findToolByName,
        };
    };

    /**
     * Creates an aggregate of build tools with additional utility methods.
     * @param moduleTools - The return value from getAllModuleBuildNpmTools.
     */
    createAggregateBuildNpmTools = (moduleTools: ModuleBuildTools) => {
        const { buildTools, findToolByName } = moduleTools;

        const updateNpmPackageDependencies = async (
            module: ModuleBuildTool,
        ) => {
            // Get the module's deno.json path
            const moduleDenoJsonPath = resolve(module.modulePath, "deno.json");
            // Read deno.json
            const denoJsonText = await Deno.readTextFile(moduleDenoJsonPath);
            const denoJson = JSON.parse(denoJsonText);
            const imports = denoJson.imports || {};

            // Find npm: imports
            const npmDependencies: Record<string, string> = {};
            for (const [importKey, importValue] of Object.entries(imports)) {
                const importValueString = importValue as string;
                if (importValueString.startsWith("npm:")) {
                    const npmPackage = importValueString.substring(
                        "npm:".length,
                    );
                    // Extract package name and version if specified
                    const [packageName, version] = npmPackage.split("@");
                    npmDependencies[packageName] = version || "*";
                }
            }

            const importsThatAreIncludedInOurModuleList = Object.keys(imports)
                .filter((importKey) => {
                    return buildTools.some((tool) => {
                        return tool.buildOptionsUpdater.getPackageName() ===
                            importKey;
                    });
                });

            // Now handle dependencies on other monorepo modules
            const monorepoPackages: Record<string, string> = {};
            for (
                const otherModuleName of importsThatAreIncludedInOurModuleList
            ) {
                const otherModule = findToolByName(otherModuleName);
                if (otherModule === module) continue; // Skip the module itself
                const packageName = otherModule.buildOptionsUpdater
                    .getPackageName();
                const version = otherModule.buildOptionsUpdater
                    .getCurrentVersion();

                monorepoPackages[packageName] = version;
            }

            const allDeps = { ...npmDependencies, ...monorepoPackages };

            module.buildOptionsUpdater.updatePackageDependencies(allDeps);
        };

        const bumpAllVersions = () => {
            for (const module of buildTools) {
                module.buildOptionsUpdater.bumpVersion();
            }
        };

        const saveAllBuildOptions = async () => {
            for (const module of buildTools) {
                await module.buildOptionsUpdater.saveBuildOptionsToFile();
            }
        }

        return {
            saveAllBuildOptions,
            updateNpmPackageDependencies,
            bumpAllVersions,
            buildTools,
            findToolByName,
        };
    };

    /**
     * Creates a build options updater for a module.
     * @param buildNpmOptions - The build options object.
     * @param buildNpmOptionsPath - The path to the build options file.
     */
    createBuildOptionsUpdater = (
        buildNpmOptions: BuildOptions,
        buildNpmOptionsPath: string,
    ) => {
        return {
            getPackageName: () => buildNpmOptions.package?.name || "",
            getPackageDependencies: () =>
                buildNpmOptions.package?.dependencies || {},
            bumpVersion: () => {
                const currentVersion = buildNpmOptions.package?.version ||
                    "0.0.0";

                const bumped = currentVersion.split(".");
                bumped[2] = (parseInt(bumped[2]) + 1).toString();
                buildNpmOptions.package!.version = bumped.join(".");

                // console.log(`Bumping version from ${currentVersion}`, ' to now be ', buildNpmOptions.package!.version);
                return buildNpmOptions.package!.version;
            },
            getCurrentVersion: () => {
                if (!buildNpmOptions.package?.version) {
                    throw new Error("No version found in build options");
                }
                return buildNpmOptions.package.version;
            },
            updatePackageDependencies: (
                dependencies: Record<string, string>,
            ) => {
                buildNpmOptions.package = buildNpmOptions.package || {};
                buildNpmOptions.package.dependencies = {
                    ...(buildNpmOptions.package.dependencies || {}),
                    ...dependencies,
                };
            },
            saveBuildOptionsToFile: async () => {
                // Serialize the build options back to TypeScript code
                const optionsCode = `export const buildOptions = ${
                    JSON.stringify(
                        buildNpmOptions,
                        null,
                        2,
                    )
                };\n`;

                await Deno.writeTextFile(buildNpmOptionsPath, optionsCode);
            },
        };
    };
}
